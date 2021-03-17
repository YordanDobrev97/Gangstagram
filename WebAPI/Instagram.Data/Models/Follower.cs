using System.ComponentModel.DataAnnotations;

namespace Instagram.Models
{
    public class Follower
    {
        public int Id { get; set; }

        [Required]
        public string SenderId { get; set; }

        public User Sender { get; set; }

        [Required]
        public string ReceiverId { get; set; }

        public User Receiver { get; set; }
    }
}
