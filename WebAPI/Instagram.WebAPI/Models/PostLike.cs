namespace Instagram.WebAPI.Models
{
    public class PostLike
    {
        public int Id { get; set; }

        public string PostId { get; set; }

        public Post Post { get; set; }

        public string UserId { get; set; }

        public User User { get; set; }
    }
}
