using Microsoft.EntityFrameworkCore.Migrations;

namespace Instagram.WebAPI.Migrations
{
    public partial class AddTextPostComment : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Text",
                table: "PostComments",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Text",
                table: "PostComments");
        }
    }
}
