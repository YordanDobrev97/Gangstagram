namespace Instagram.WebAPI.Controllers
{
    using Instagram.ViewModels.Posts;
    using Microsoft.AspNetCore.Mvc;

    using Microsoft.AspNetCore.Identity;
    using Instagram.Models;
    using System.Security.Claims;
    using System.IdentityModel.Tokens.Jwt;
    using System.Linq;
    using Instagram.Services;
    using System.Collections.Generic;
    using Instagram.ViewModels.Users;

    [ApiController]
    [Route("/api/posts/[action]")]
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
            var token = this.HttpContext.Request.Headers["X-User-Token"].ToString();
            var userId = this.GetUserId(token);

            var posts = this.postService.All(userId);
            return new JsonResult(posts);
        }

        [HttpPost]
        public IActionResult Create([FromBody] PostInputModel postInputModel)
        {
            if (!this.ModelState.IsValid)
            {
                return this.BadRequest();
            }

            var cookie = this.HttpContext.Request.Headers["X-User-Token"];

            string userId = this.GetUserId(cookie);
  
            var result = this.postService.Create(userId, postInputModel.Title, postInputModel.Description, postInputModel.Image);
            if (result)
            {
                return Ok("Sucessfully created post");
            }

            return BadRequest("Not successfully created on post");
        }

        [HttpGet]
        public JsonResult GetUserPosts()
        {
            var token = this.HttpContext.Request.Headers["X-User-Token"].ToString();
            var isReadToken = bool.Parse(this.HttpContext.Request.Headers["X-Is-Read-Token"].ToString());

            if (isReadToken)
            {
                token = this.GetUserId(token);
            }

            var posts = this.postService.GetUserPosts(token).ToList();
            var username = this.postService.GetUsername(token);

            var result = new
            {
                posts,
                username,
            };

            return new JsonResult(result);
        }

        [HttpPost]
        public IActionResult AddComment([FromBody] PostCommentInputModel input)
        {
            var cookie = this.HttpContext.Request.Headers["X-User-Token"];
            var userId = this.GetUserId(cookie);

            var result = this.postService.AddComment(input.PostId, input.Comment, userId);

            if (!result)
            {
                return BadRequest();
            }

            return Ok("Successfully added comment");
        }

        [HttpPost]
        public JsonResult LikePost([FromBody] PostViewModel viewModel)
        {
            var cookie = this.HttpContext.Request.Headers["X-User-Token"];
            var userId = this.GetUserId(cookie);

            var result = this.postService.LikePost(userId, viewModel.PostId);

            if (!result)
            {
                return new JsonResult(false);
            }

            return new JsonResult(true);
        }

        [HttpPost]
        public JsonResult GetById([FromBody] PostViewModel viewModel)
        {
            var data = this.postService.GetById(viewModel.PostId);
            return new JsonResult(data);
        }

        [HttpPost]
        public JsonResult DeleteById([FromBody] PostViewModel viewModel)
        {
            var data = this.postService.DeleteById(viewModel.PostId);
            return new JsonResult(data);
        }

        private string GetUserId(Microsoft.Extensions.Primitives.StringValues cookie)
        {
            var handler = new JwtSecurityTokenHandler();
            var jsonToken = handler.ReadToken(cookie);
            var tokenS = handler.ReadToken(cookie) as JwtSecurityToken;
            var id = tokenS.Claims.Where(x => x.Type == ClaimTypes.NameIdentifier)
                .FirstOrDefault().Value;

            return id;
        }

    }
}
