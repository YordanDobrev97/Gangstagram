using Microsoft.AspNetCore.Http;

namespace Instagram.WebAPI.ViewModels.Posts
{
    public class AllPostsViewModel
    {
        public string Username { get; set; }

        public string Content { get; set; }

        public string Image { get; set; }
    }
}
