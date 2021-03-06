﻿namespace Instagram.Models
{
    using System;

    public class Post
    {
        public Post()
        {
            this.Id = Guid.NewGuid().ToString();
        }

        public string Id { get; set; }

        public string UserId { get; set; }

        public User User { get; set; }

        public string Title { get; set; }

        public string Body { get; set; }

        public DateTime CreatedOn { get; set; }

        public Image Image { get; set; }

        public bool IsDeleted { get; set; }
    }
}
