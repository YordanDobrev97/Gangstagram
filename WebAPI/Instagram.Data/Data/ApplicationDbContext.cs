namespace Instagram.WebAPI.Data
{
    using Instagram.Models;
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

        public DbSet<PostLike> PostLikes { get; set; }

        public DbSet<Image> Images { get; set; }

        public DbSet<Follower> Followers { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<Follower>()
                .HasOne(e => e.Sender)
                .WithMany(e => e.Followers);
        }
    }
}
