using Instagram.WebAPI.Models;
using Instagram.WebAPI.ViewModels.Users;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Instagram.WebAPI.Controllers
{
    [ApiController]
    [Route("/api/Users/[action]")]
    public class UsersController : ControllerBase
    {
        private readonly UserManager<User> userManager;
        private readonly SignInManager<User> signInManager;
        private readonly IConfiguration configuration;

        public UsersController(UserManager<User> userManager, SignInManager<User> signInManager, IConfiguration configuration)
        {
            this.userManager = userManager;
            this.signInManager = signInManager;
            this.configuration = configuration;
        }

        [HttpGet]
        public List<int> Home()
        {
            int[] numbers = new[] { 1, 2, 3 };

            return numbers.ToList();
        }

        [HttpPost]
        public async Task<IActionResult> Register([FromBody] RegisterInputModel inputModel)
        {
            if (!ModelState.IsValid)
            {
                return this.BadRequest(this.ModelState);
            }

            var user = new User
            {
                UserName = inputModel.Username,
                Email = inputModel.Email,
            };

            var result = await this.userManager.CreateAsync(user, inputModel.Password);

            if (!result.Succeeded)
            {
                return this.BadRequest();
            }

            return Ok("Register new user");
        }

        [HttpPost]
        public async Task<IActionResult> Login([FromBody] LoginInputModel loginInput)
        {
            var result = await this.signInManager.PasswordSignInAsync(loginInput.Username, loginInput.Password, true, true);

            if (!result.Succeeded)
            {
                return this.BadRequest();
            }

            var user = this.userManager.Users.FirstOrDefault(x => x.UserName == loginInput.Username);

            return this.Ok(this.GenerateJwtToken(loginInput.Username, user));
        }

        private object GenerateJwtToken(string email, IdentityUser user)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, email),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.NameIdentifier, user.Id)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["JwtKey"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var expires = DateTime.Now.AddDays(Convert.ToDouble(configuration["JwtExpireDays"]));

            var token = new JwtSecurityToken(
                configuration["JwtIssuer"],
                configuration["JwtIssuer"],
                claims,
                expires: expires,
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
