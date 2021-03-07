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

            //byte[] imageBytes;

            //using var stream = new MemoryStream();
            //image.CopyTo(stream);
            //imageBytes = stream.ToArray();

            //var destination = new MemoryStream(imageBytes);
            //var imageName = $"{Guid.NewGuid()}{userId}";
            //var uploadParams = new ImageUploadParams()
            //{
            //    File = new FileDescription(imageName, destination),
            //};
            //var result = this.cloudinary.Upload(uploadParams);

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

        public IEnumerable<AllPostsViewModel> All()
        {
            var posts = new List<AllPostsViewModel>();

            foreach (var item in this.db.Posts
                .Include(x => x.Image)
                .Include(x => x.User))
            {
                var post = new AllPostsViewModel
                {
                    Id = item.Id,
                    Username = item.User.UserName,
                    Title = item.Title,
                    Content = item.Body,
                    Image = item.Image.Imageurl,
                };
                posts.Add(post);
            }

            return posts;
        }

        public IEnumerable<AllPostsViewModel> GetUserPosts(string userId)
        {
            if (!this.db.Posts.Any(x => x.UserId == userId))
            {
                return new AllPostsViewModel[0];
            }

            var posts = new List<AllPostsViewModel>();
            foreach (var item in this.db.Posts
                .Include(x => x.User)
                .Include(x => x.Image)
                .Where(x => x.UserId == userId))
            {
                var post = new AllPostsViewModel
                {
                    Content = item.Body,
                    Image = item.Image.Imageurl,
                };
                posts.Add(post);
            }

            return posts;
        }

        public IEnumerable<UsersLikePostViewModel> GetLikeUsersPost(string postId)
        {
            return this.db.PostLikes.Where(x => x.PostId == postId)
                .Select(x => new UsersLikePostViewModel
                {
                    Username = x.User.UserName,
                }).ToList();
        }

        public string GetUsername(string userId)
        {
            return this.db.Users.Where(x => x.Id == userId)
                .Select(x => x.UserName)
                .FirstOrDefault();

        }

        public IEnumerable<AllPostsViewModel> GetByUsername(string username)
        {
            var posts = this.db.Posts
                .Where(x => x.User.UserName == username)
                .Select(x => new AllPostsViewModel
                {
                    Id = x.Id,
                    Content = x.Body,
                    Image = x.Image.Imageurl,
                    Username = x.User.UserName,
                }).ToList();

            return posts;
        }
    }
}
