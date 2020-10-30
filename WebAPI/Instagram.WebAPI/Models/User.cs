using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;

namespace Instagram.WebAPI.Models
{
    public class User : IdentityUser
    {
        public User()
        {
            this.Id = Guid.NewGuid().ToString();
            this.Posts = new HashSet<Post>();
        }

        public virtual ICollection<Post> Posts { get; set; }
    }
}
