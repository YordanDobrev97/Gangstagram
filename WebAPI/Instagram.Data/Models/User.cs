namespace Instagram.Models
{
    using Microsoft.AspNetCore.Identity;
    using System;
    using System.Collections.Generic;

    public class User : IdentityUser
    {
        private const string DefaultProfileImage = "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg";

        public User()
        {
            this.Id = Guid.NewGuid().ToString();
            this.Image = DefaultProfileImage;
            this.Posts = new HashSet<Post>();
            this.Followers = new HashSet<Follower>();
        }

        public string Image { get; set; }

        public virtual ICollection<Post> Posts { get; set; }

        public virtual ICollection<Follower> Followers { get; set; }
    }
}
