
using Microsoft.EntityFrameworkCore;

namespace ZooVrt.Models
{
    public class ContextKlasa : DbContext
    {
        public ContextKlasa(DbContextOptions options) : base(options)
        {

        }
        public DbSet<Zivotinja> Zivotinje {get; set;}
        public DbSet<Direktor> Direktori {get; set;} 
        public DbSet<ZooloskiVrt> ZooloskiVrtovi {get; set;}

        // protected override void OnModelCreating(ModelBuilder modelBuilder)
        // {
        //     modelBuilder.Entity<Direktor>().HasOne(t => t.ZooloskiVrt)
        //              .WithOne(t => t.Direktor)
        //               .HasForeignKey<ZooloskiVrt>(t => t.ZooloskiVrtId);

        //     modelBuilder.Entity<ZooloskiVrt>().HasOne(t => t.Direktor)
        //              .WithOne(t => t.ZooloskiVrt)
        //              .HasForeignKey<Direktor>(t => t.DirektorId);
        //     base.OnModelCreating(modelBuilder);
        // }
    }
    
}