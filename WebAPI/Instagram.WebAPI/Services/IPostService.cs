namespace Instagram.WebAPI.Services
{
    using Instagram.WebAPI.ViewModels.Posts;
    using Microsoft.AspNetCore.Http;
    using System.Collections.Generic;

    public interface IPostService
    {
        IEnumerable<AllPostsViewModel> All();

        IEnumerable<AllPostsViewModel> GetUserPosts(string userId);

        IEnumerable<AllPostsViewModel> GetByUsername(string username);

       IEnumerable<UsersLikePostViewModel> GetLikeUsersPost(string postId);

        bool Create(string userId, string content, IFormFile image);

        bool AddComment(string postId, string text, string userId);

        bool LikePost(string userId, string postId);

        string GetUsername(string userId);
    }
}
