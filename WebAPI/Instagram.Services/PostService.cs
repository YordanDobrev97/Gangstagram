namespace Instagram.WebAPI.Services
{
    using CloudinaryDotNet;
    using CloudinaryDotNet.Actions;
    using Instagram.WebAPI.Data;
    using Instagram.Models;
    using Instagram.ViewModels.Posts;
    using Microsoft.AspNetCore.Http;
    using Microsoft.EntityFrameworkCore;
    using System;
    using System.Collections.Generic;
    using System.IO;
    using System.Linq;
    using Instagram.Services;

    public class PostService : IPostService
    {
        private readonly ApplicationDbContext db;
        private readonly Cloudinary cloudinary;

        public PostService(ApplicationDbContext db, Cloudinary cloudinary)
        {
            this.db = db;
            this.cloudinary = cloudinary;
        }

        public IEnumerable<AllPostsViewModel> All(string userId)
        {
            var posts = new List<AllPostsViewModel>();

            foreach (var item in this.db.Posts
                .Where(x => !x.IsDeleted && x.UserId != userId)
                .Include(x => x.Image)
                .Include(x => x.User))
            {
                var postLikes = this.db.PostLikes
                    .Count(x => x.PostId == item.Id);

                var post = new AllPostsViewModel
                {
                    Id = item.Id,
                    Username = item.User.UserName,
                    UserId = item.User.Id,
                    Title = item.Title,
                    Content = item.Body,
                    Image = item.Image.Imageurl,
                    ProfileUserImage = item.User.Image,
                    Likes = postLikes,
                };
                posts.Add(post);
            }

            return posts;
        }

        public bool AddComment(string postId, string text, string userId)
        {
            if (!this.db.Posts.Any(x => x.Id == postId) || 
                !this.db.Users.Any(x => x.Id == userId))
            {
                return false;
            }

            this.db.PostComments.Add(new PostComment
            {
                PostId = postId,
                UserId = userId,
                Text = text,
            });
            this.db.SaveChanges();
            return true;
        }

        public bool LikePost(string userId, string postId)
        {
            if (!this.db.Posts.Any(x =>x.Id == postId) || !this.db.Users.Any( x=>x.Id == userId))
            {
                return false;
            }

            if (this.db.PostLikes.Any(x => x.PostId == postId) && this.db.PostLikes.Any(x => x.UserId == userId))
            {
                return false;
            }

            this.db.PostLikes.Add(new PostLike
            {
                PostId = postId,
                UserId = userId,
            });

            this.db.SaveChanges();
            return true;
        }

        public bool Create(string userId, string title, string content, string image)
        {
            if (!this.db.Users.Any(x => x.Id == userId))
            {
                return false;
            }

            var newImage = new Image
            {
                Imageurl = image,
                UserId = userId,
            };

            this.db.Images.Add(newImage);

            this.db.Posts.Add(new Post
            {
                UserId = userId,
                CreatedOn = DateTime.UtcNow,
                Title = title,
                Body = content,
                Image = newImage,
            });

            db.SaveChanges();
            return true;
        }

        public IEnumerable<ProfileViewModel> GetUserPosts(string userId)
        {
            var posts = this.db.Posts
                .Where(x => x.User.Id == userId)
                .Where(x => !x.IsDeleted)
                .Select(x => new ProfileViewModel
                {
                    Id = x.Id,
                    Image = x.Image.Imageurl,
                }).ToList();

            return posts;
        }

        public GetByIdViewModel GetById(string postId)
        {
            var image = this.db.Posts
                .Where(x => x.Id == postId)
                .Select(x => x.Image.Imageurl)
                .FirstOrDefault();

            var comments = this.db.PostComments
                .Where(x => x.PostId == postId)
                .Select(x => new GetByIdPostViewModel
                {
                    Username = x.User.UserName,
                    Content = x.Text
                }).ToArray();

            return new GetByIdViewModel
            {
                Image = image,
                GetByIdPosts = comments,
            };
        }

        public bool DeleteById(string postId)
        {
            var post = this.db.Posts.FirstOrDefault(x => x.Id == postId);

            if (post == null)
            {
                return false;
            }
            
            post.IsDeleted = true;
            this.db.SaveChanges();
            return true;
        }

        public string GetUsername(string userId)
        {
            return this.db.Users.Where(x => x.Id == userId)
                .Select(x => x.UserName)
                .FirstOrDefault();

        }
    }
}
