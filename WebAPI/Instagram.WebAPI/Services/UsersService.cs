namespace Instagram.WebAPI.Services
{
    using Instagram.WebAPI.Data;
    using Instagram.WebAPI.Models;
    using Instagram.WebAPI.ViewModels.Users;
    using System.Linq;

    public class UsersService : IUsersService
    {
        private readonly ApplicationDbContext db;
        
        public UsersService(ApplicationDbContext db)
        {
            this.db = db;
        }

        public void Register(User user)
        {
            this.db.Users.Add(user);
            this.db.SaveChanges();
        }

        public UserViewModel Search(string username)
        {
            var user = this.db.Users
                .Where(x => x.UserName.ToLower() == username.ToLower())
                .Select(x => new UserViewModel
                {
                    Username = x.UserName,
                }).FirstOrDefault();

            return user;
        }
    }
}
