namespace Instagram.WebAPI.Services
{
    using Instagram.ViewModels.Users;
    using Instagram.Models;
    using System.Threading.Tasks;
    using System.Collections.Generic;

    public interface IUsersService
    {
        IEnumerable<UserViewModel> GetFollowers(string userId);

        void Register(User user);

        Task<bool> AddFollowAsync(string followerId, string userId);

        bool IsFollow(string followerId, string userId);

        UserViewModel Search(string username);
    }
}
