﻿namespace Instagram.WebAPI.Controllers
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

        [HttpPost]
        public JsonResult GetUserPosts()
        {
            var username = this.HttpContext.Request.Headers["X-Username"].ToString();

            var viewModel = new ProfileViewModel();

            if (!string.IsNullOrEmpty(username))
            {
                viewModel.Posts = this.postService.GetByUsername(username).ToList();
                viewModel.Username = username;
            }
            else
            {
                var cookie = this.HttpContext.Request.Headers["X-User-Token"];
                var userId = this.GetUserId(cookie);
                viewModel.Posts = this.postService.GetUserPosts(userId).ToList();
                viewModel.Username = this.postService.GetUsername(userId);
            }

            return new JsonResult(viewModel);
        }

        [HttpPost]
        public JsonResult AddComment([FromBody] PostCommentInputModel input)
        {
            var cookie = this.HttpContext.Request.Headers["X-User-Token"];
            var userId = this.GetUserId(cookie);

            var result = this.postService.AddComment(input.PostId, input.Comment, userId);

            if (!result)
            {
                return new JsonResult("Not success");
            }

            return new JsonResult("Successfully added comment");
        }

        [HttpPost]
        public JsonResult LikePost([FromBody] PostLikeViewModel viewModel)
        {
            var cookie = this.HttpContext.Request.Headers["X-User-Token"];
            var userId = this.GetUserId(cookie);

            var result = this.postService.LikePost(userId, viewModel.PostId);

            if (!result)
            {
                return new JsonResult("This post not liked successfully");
            }

            return new JsonResult("This post Liked successfully");
        }

        [HttpPost]
        public JsonResult GetLikeUsersPost([FromBody] PostLikeViewModel viewModel)
        {
            var users = this.postService.GetLikeUsersPost(viewModel.PostId);
            return new JsonResult(users);
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
