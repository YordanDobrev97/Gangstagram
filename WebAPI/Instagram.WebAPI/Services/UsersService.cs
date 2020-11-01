namespace Instagram.WebAPI.Services
{
    using Instagram.WebAPI.Data;
    using Instagram.WebAPI.Models;

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
    }
}
