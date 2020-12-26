namespace Instagram.WebAPI.Services
{
    using Instagram.WebAPI.ViewModels.Posts;
    using Microsoft.AspNetCore.Http;
    using System.Collections.Generic;

    public interface IPostService
    {
        IEnumerable<AllPostsViewModel> All(string userId);

        bool Create(string userId, string content, IFormFile image);

        bool AddComment(string postId, string text, string userId);

        IEnumerable<AllPostsViewModel> GetUserPosts(string userId);

    }
}
