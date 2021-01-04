namespace Instagram.WebAPI.Models
{
    using System.ComponentModel.DataAnnotations;

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
