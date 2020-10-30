using Instagram.WebAPI.Data;
using Instagram.WebAPI.Models;
using Instagram.WebAPI.ViewModels.Users;
using Microsoft.AspNetCore.Identity;
using System.Runtime.InteropServices;
using System.Threading.Tasks;

namespace Instagram.WebAPI.Services
{
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
