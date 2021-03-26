namespace Instagram.WebAPI.Services
{
    using Instagram.ViewModels.Users;
    using Instagram.WebAPI.Data;
    using Instagram.Models;
    using System.Linq;
    using System.Threading.Tasks;
    using System.Collections.Generic;

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

        public async Task<bool> AddFollowAsync(string followerId, string userId)
        {
            if (!this.db.Users.Any(x => x.Id == followerId) 
                || !this.db.Users.Any(x => x.Id == userId))
            {
                return false;
            }

            if (IsFollow(followerId, userId))
            {
                return false;
            }

            await this.db.Followers.AddAsync(new Follower
            {
                SenderId = followerId,
                ReceiverId = userId,
            });

            await this.db.SaveChangesAsync();
            return true;
        }

        public bool IsFollow(string followerId, string userId)
        {
            return this.db.Followers.Any(x => x.SenderId == followerId)
                && this.db.Followers.Any(x => x.ReceiverId == userId);
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

        public IEnumerable<UserViewModel> GetFollowers(string userId)
        {
            var followers = this.db.Followers
                .Where(x => x.SenderId == userId)
                .Select(x => new UserViewModel
                {
                    Id = x.ReceiverId,
                    Username = x.Receiver.UserName,
                    Image = x.Receiver.Image,
                }).ToList();

            return followers;
        }
    }
}
