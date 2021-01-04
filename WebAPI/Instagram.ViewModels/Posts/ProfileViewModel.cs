namespace Instagram.ViewModels.Posts
{
    using System.Collections.Generic;

    public class ProfileViewModel
    {
        public ICollection<AllPostsViewModel> Posts { get; set; }

        public string Username { get; set; } 
    }
}
