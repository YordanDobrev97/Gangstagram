namespace Instagram.WebAPI.Services
{
    using Instagram.WebAPI.Models;
    using Instagram.WebAPI.ViewModels.Users;

    public interface IUsersService
    {
        void Register(User user);

        UserViewModel Search(string username);
    }
}
