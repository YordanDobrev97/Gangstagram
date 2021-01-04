namespace Instagram.WebAPI.Services
{
    using Instagram.ViewModels.Users;
    using Instagram.WebAPI.Models;

    public interface IUsersService
    {
        void Register(User user);

        UserViewModel Search(string username);
    }
}
