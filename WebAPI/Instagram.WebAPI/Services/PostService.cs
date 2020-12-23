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

        public IEnumerable<AllPostsViewModel> All()
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
                    Username = item.User.UserName,
                    Content = item.Body,
                    Image = images[index],
                };
                posts.Add(post);
                index++;
            }

            return posts;
        }

        public bool Create(string userId, string content, IFormFile image)
        {
            if (!this.db.Users.Any(x => x.Id == userId))
            {
                return false;
            }

            this.db.Posts.Add(new Post
            {
                UserId = userId,
                CreatedOn = DateTime.UtcNow,
                Body = content,
            });

            db.SaveChanges();

            byte[] imageBytes;

            using var stream = new MemoryStream();
            image.CopyTo(stream);
            imageBytes = stream.ToArray();

            var destination = new MemoryStream(imageBytes);
            var uploadParams = new ImageUploadParams()
            {
                File = new FileDescription(Guid.NewGuid().ToString(), destination),
            };
            var result = this.cloudinary.Upload(uploadParams);

            return true;
        }
    }
}
