namespace Instagram.WebAPI.Data
{
    using Instagram.WebAPI.Models;
    using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore;

    public class ApplicationDbContext : IdentityDbContext<User>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Post> Posts { get; set; }

        public DbSet<PostComment> PostComments { get; set; }

        public DbSet<Image> Images { get; set; }
    }
}
