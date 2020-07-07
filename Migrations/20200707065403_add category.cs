using Microsoft.EntityFrameworkCore.Migrations;

namespace Green.Migrations
{
    public partial class addcategory : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Products_Categories_categoryid",
                table: "Products");

            migrationBuilder.RenameColumn(
                name: "categoryid",
                table: "Products",
                newName: "Categoryid");

            migrationBuilder.RenameIndex(
                name: "IX_Products_categoryid",
                table: "Products",
                newName: "IX_Products_Categoryid");

            migrationBuilder.AddColumn<string>(
                name: "category",
                table: "Products",
                nullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Products_Categories_Categoryid",
                table: "Products",
                column: "Categoryid",
                principalTable: "Categories",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Products_Categories_Categoryid",
                table: "Products");

            migrationBuilder.DropColumn(
                name: "category",
                table: "Products");

            migrationBuilder.RenameColumn(
                name: "Categoryid",
                table: "Products",
                newName: "categoryid");

            migrationBuilder.RenameIndex(
                name: "IX_Products_Categoryid",
                table: "Products",
                newName: "IX_Products_categoryid");

            migrationBuilder.AddForeignKey(
                name: "FK_Products_Categories_categoryid",
                table: "Products",
                column: "categoryid",
                principalTable: "Categories",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
