namespace Instagram.WebAPI.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using System.IdentityModel.Tokens.Jwt;
    using System.Linq;
    using System.Security.Claims;

    public class BaseController : ControllerBase
    {
        protected string GetUserId(Microsoft.Extensions.Primitives.StringValues cookie)
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
