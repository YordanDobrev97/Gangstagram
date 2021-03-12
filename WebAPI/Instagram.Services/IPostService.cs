namespace Instagram.Services
{
    using Instagram.ViewModels.Posts;
    using System.Collections.Generic;

    public interface IPostService
    {
        IEnumerable<AllPostsViewModel> All();

        IEnumerable<AllPostsViewModel> GetUserPosts(string userId);

        IEnumerable<AllPostsViewModel> GetByUsername(string username);

       GetByIdViewModel GetById(string postId);

        bool Create(string userId, string title, string content, string image);

        bool AddComment(string postId, string text, string userId);

        bool LikePost(string userId, string postId);

        string GetUsername(string userId);
    }
}
