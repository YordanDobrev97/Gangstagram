namespace Instagram.ViewModels.Posts
{
    using Microsoft.AspNetCore.Http;
    using System.ComponentModel.DataAnnotations;

    public class PostInputModel
    {
        [Required]
        public string Content { get; set; }

        [Required]
        public IFormFile Image { get; set; }
    }
}
