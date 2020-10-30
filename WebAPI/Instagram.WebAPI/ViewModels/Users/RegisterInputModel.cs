using System.ComponentModel.DataAnnotations;

namespace Instagram.WebAPI.ViewModels.Users
{
    public class RegisterInputModel
    {
        public string Email { get; set; }

        public string Username { get; set; }

        public string Password { get; set; }

        public string ConfirmPassword { get; set; }
    }
}
