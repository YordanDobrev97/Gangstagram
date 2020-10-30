using Instagram.WebAPI.Models;
using Instagram.WebAPI.Services;
using Instagram.WebAPI.ViewModels.Users;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Instagram.WebAPI.Controllers
{
    [ApiController]
    [Route("/api/Users/[action]")]
    public class UsersController : ControllerBase
    {
        private readonly UserManager<User> userManager;

        public UsersController(UserManager<User> userManager)
        {
            this.userManager = userManager;
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
        public IActionResult Login(string username, string password)
        {


            return Ok();
        }
    }
}
