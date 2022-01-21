using Microsoft.EntityFrameworkCore.Migrations;

namespace ZooVrt.Migrations
{
    public partial class V1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ZooloskiVrtovi",
                columns: table => new
                {
                    ZooloskiVrtId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Naziv = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Ulica = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Kapacitet = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ZooloskiVrtovi", x => x.ZooloskiVrtId);
                });

            migrationBuilder.CreateTable(
                name: "Direktori",
                columns: table => new
                {
                    DirektorId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DirektorIme = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DirektorPrezime = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ZooloskiVrtId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Direktori", x => x.DirektorId);
                    table.ForeignKey(
                        name: "FK_Direktori_ZooloskiVrtovi_ZooloskiVrtId",
                        column: x => x.ZooloskiVrtId,
                        principalTable: "ZooloskiVrtovi",
                        principalColumn: "ZooloskiVrtId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Zivotinje",
                columns: table => new
                {
                    ZivotinjaId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ImeVrste = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TrenutnaKolicina = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ZooloskiVrtId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Zivotinje", x => x.ZivotinjaId);
                    table.ForeignKey(
                        name: "FK_Zivotinje_ZooloskiVrtovi_ZooloskiVrtId",
                        column: x => x.ZooloskiVrtId,
                        principalTable: "ZooloskiVrtovi",
                        principalColumn: "ZooloskiVrtId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Direktori_ZooloskiVrtId",
                table: "Direktori",
                column: "ZooloskiVrtId");

            migrationBuilder.CreateIndex(
                name: "IX_Zivotinje_ZooloskiVrtId",
                table: "Zivotinje",
                column: "ZooloskiVrtId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Direktori");

            migrationBuilder.DropTable(
                name: "Zivotinje");

            migrationBuilder.DropTable(
                name: "ZooloskiVrtovi");
        }
    }
}
