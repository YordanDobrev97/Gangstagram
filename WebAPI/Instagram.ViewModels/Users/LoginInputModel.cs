﻿namespace Instagram.ViewModels.Users
{
    using System.ComponentModel.DataAnnotations;

    public class LoginInputModel
    {
        [Required]
        [MinLength(4)]
        public string Email { get; set; }

        [Required]
        [MinLength(5)]
        public string Password { get; set; }
    }
}
