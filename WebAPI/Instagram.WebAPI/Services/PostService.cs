﻿namespace Instagram.WebAPI.Services
{
    using CloudinaryDotNet;
    using CloudinaryDotNet.Actions;
    using Instagram.WebAPI.Data;
    using Instagram.WebAPI.Models;
    using Instagram.WebAPI.ViewModels.Posts;
    using Microsoft.AspNetCore.Http;
    using Microsoft.EntityFrameworkCore;
    using System;
    using System.Collections.Generic;
    using System.IO;
    using System.Linq;

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

        public bool Create(string userId, string content, IFormFile image)
        {
            if (!this.db.Users.Any(x => x.Id == userId))
            {
                return false;
            }

            byte[] imageBytes;

            using var stream = new MemoryStream();
            image.CopyTo(stream);
            imageBytes = stream.ToArray();

            var destination = new MemoryStream(imageBytes);
            var imageName = $"{Guid.NewGuid()}{userId}";
            var uploadParams = new ImageUploadParams()
            {
                File = new FileDescription(imageName, destination),
            };
            var result = this.cloudinary.Upload(uploadParams);

            var newImage = new Image
            {
                Imageurl = result.Url.OriginalString,
                UserId = userId,
            };

            this.db.Images.Add(newImage);

            this.db.Posts.Add(new Post
            {
                UserId = userId,
                CreatedOn = DateTime.UtcNow,
                Body = content,
                Image = newImage,
            });

            db.SaveChanges();
            return true;
        }

        public IEnumerable<AllPostsViewModel> All(string userId)
        {
            var images = this.cloudinary
              .ListResources().Resources
              .Select(x => x.Uri.OriginalString)
              .ToList();

            var posts = new List<AllPostsViewModel>();
            int index = 0;
            foreach (var item in this.db.Posts.Include(x => x.User))
            {
                var post = new AllPostsViewModel
                {
                    Id = item.Id,
                    Username = item.User.UserName,
                    Content = item.Body,
                    Image = images[index],
                };
                posts.Add(post);
                index++;
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
                    Username = item.User.UserName,
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
    }
}
