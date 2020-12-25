using System.ComponentModel.DataAnnotations;

namespace Instagram.WebAPI.Models
{
    public class Image
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Imageurl { get; set; }

        public string UserId { get; set; }

        public User User { get; set; }
    }
}
