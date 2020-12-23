namespace Instagram.WebAPI.Controllers
{
    using Instagram.WebAPI.Services;
    using Instagram.WebAPI.ViewModels.Posts;
    using Microsoft.AspNetCore.Mvc;

    using Microsoft.AspNetCore.Identity;
    using Instagram.WebAPI.Models;
    using System.Security.Claims;
    using System;
    using static IdentityModel.ClaimComparer;
    using System.Text;
    using Microsoft.AspNetCore.Authentication;
    using System.IdentityModel.Tokens.Jwt;
    using System.Linq;
    using System.Collections.Generic;

    [ApiController]
    [Route("/api/[controller]/[action]")]
    public class PostsController : ControllerBase
    {
        private readonly IPostService postService;
        private readonly UserManager<User> userManager;

        public PostsController(
            IPostService postService,
            UserManager<User> userManager)
        {
            this.postService = postService;
            this.userManager = userManager;
        }

        [HttpGet]
        public JsonResult All()
        {
            var posts = this.postService.All();
            return new JsonResult(posts);
        }

        [HttpPost]
        public IActionResult Create([FromForm] PostInputModel postInputModel)
        {
            if (!this.ModelState.IsValid)
            {
                return this.BadRequest();
            }

            var cookie = this.HttpContext.Request.Headers["X-User-Token"];

            string userId = this.GetUserId(cookie);

            this.postService.Create(userId, postInputModel.Content, postInputModel.Image);
            return this.Ok();
        }

        private string GetUserId(Microsoft.Extensions.Primitives.StringValues cookie)
        {
            var handler = new JwtSecurityTokenHandler();
            var jsonToken = handler.ReadToken(cookie);
            var tokenS = handler.ReadToken(cookie) as JwtSecurityToken;
            var id = tokenS.Claims.ToList()[2].Value;

            return id;
        }

    }
}
