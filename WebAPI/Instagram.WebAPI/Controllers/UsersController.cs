namespace Instagram.WebAPI.Controllers
{
    using Instagram.ViewModels.Users;
    using Instagram.Models;
    using Instagram.WebAPI.Services;
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

    [ApiController]
    [Route("/api/Users/[action]")]
    public class UsersController : BaseController
    {
        private readonly UserManager<User> userManager;
        private readonly SignInManager<User> signInManager;
        private readonly IConfiguration configuration;
        private readonly IUsersService usersService;

        public UsersController(
            UserManager<User> userManager,
            SignInManager<User> signInManager,
            IConfiguration configuration,
            IUsersService usersService)
        {
            this.userManager = userManager;
            this.signInManager = signInManager;
            this.configuration = configuration;
            this.usersService = usersService;
        }

        [HttpPost()]
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
            if (!this.ModelState.IsValid)
            {
                return this.BadRequest(new
                {
                    code = 400,
                    message = "Not valid data"
                });
            }

            var result = await this.signInManager.PasswordSignInAsync(loginInput.Email, loginInput.Password, true, false);
            if (!result.Succeeded)
            {
                return this.NotFound();
            }

            var user = this.userManager.Users.FirstOrDefault(x => x.UserName == loginInput.Email);

            var token = GenerateJwtToken(loginInput.Email, user);
            return new JsonResult(token);
        }

        [HttpPost]
        public async Task<JsonResult> Follow([FromBody] string followerId)
        {
            var token = this.HttpContext.Request.Headers["X-User-Token"].ToString();
            var userId = this.GetUserId(token);

            var result = await this.usersService.AddFollowAsync(followerId, userId);
            return new JsonResult(result);
        }

        [HttpGet]
        public IEnumerable<UserViewModel> GetFollowers()
        {
            var userId = this.HttpContext.Request.Headers["X-User-Token"].ToString();

            var result = usersService.GetFollowers(userId);
            return result;
        }

        [HttpGet]
        public IEnumerable<UserViewModel> GetFollowing()
        {
            var userId = this.HttpContext.Request.Headers["X-User-Token"].ToString();

            var result = usersService.GetFollowing(userId);
            return result;
        }

        [HttpPost]
        public JsonResult IsFollow([FromBody] string followerId)
        {
            var token = this.HttpContext.Request.Headers["X-User-Token"].ToString();
            var userId = this.GetUserId(token);

            var result = this.usersService.IsFollow(followerId, userId);
            return new JsonResult(result);
        }

        [HttpPost]
        public JsonResult Search([FromBody] SearchUserViewModel search)
        {
            var result = this.usersService.Search(search.Username);
            return new JsonResult(result);
        }

        private object GenerateJwtToken(string email, IdentityUser user)
        {
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id),
                new Claim("username", user.UserName),
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
