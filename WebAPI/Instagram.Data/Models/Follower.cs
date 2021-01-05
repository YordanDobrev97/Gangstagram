namespace Instagram.Models
{
    public class Follower
    {
        public int Id { get; set; }

        public string UserId { get; set; }

        public User User { get; set; }
    }
}
