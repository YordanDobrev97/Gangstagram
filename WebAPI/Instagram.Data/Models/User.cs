namespace Instagram.Models
{
    using Microsoft.AspNetCore.Identity;
    using System;
    using System.Collections.Generic;

    public class User : IdentityUser
    {
        public User()
        {
            this.Id = Guid.NewGuid().ToString();
            this.Posts = new HashSet<Post>();
            this.Followers = new HashSet<Follower>();
        }

        public virtual ICollection<Post> Posts { get; set; }

        public virtual ICollection<Follower> Followers { get; set; }
    }
}
