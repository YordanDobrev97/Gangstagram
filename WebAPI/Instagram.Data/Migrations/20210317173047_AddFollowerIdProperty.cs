using Microsoft.EntityFrameworkCore.Migrations;

namespace Instagram.WebAPI.Migrations
{
    public partial class AddFollowerIdProperty : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Followers_AspNetUsers_UserId",
                table: "Followers");

            migrationBuilder.DropIndex(
                name: "IX_Followers_UserId",
                table: "Followers");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Followers");

            migrationBuilder.AddColumn<string>(
                name: "ReceiverId",
                table: "Followers",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "SenderId",
                table: "Followers",
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateIndex(
                name: "IX_Followers_ReceiverId",
                table: "Followers",
                column: "ReceiverId");

            migrationBuilder.CreateIndex(
                name: "IX_Followers_SenderId",
                table: "Followers",
                column: "SenderId");

            migrationBuilder.AddForeignKey(
                name: "FK_Followers_AspNetUsers_ReceiverId",
                table: "Followers",
                column: "ReceiverId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Followers_AspNetUsers_SenderId",
                table: "Followers",
                column: "SenderId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Followers_AspNetUsers_ReceiverId",
                table: "Followers");

            migrationBuilder.DropForeignKey(
                name: "FK_Followers_AspNetUsers_SenderId",
                table: "Followers");

            migrationBuilder.DropIndex(
                name: "IX_Followers_ReceiverId",
                table: "Followers");

            migrationBuilder.DropIndex(
                name: "IX_Followers_SenderId",
                table: "Followers");

            migrationBuilder.DropColumn(
                name: "ReceiverId",
                table: "Followers");

            migrationBuilder.DropColumn(
                name: "SenderId",
                table: "Followers");

            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "Followers",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Followers_UserId",
                table: "Followers",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Followers_AspNetUsers_UserId",
                table: "Followers",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
