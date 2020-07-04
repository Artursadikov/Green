using Green.Models;
using Microsoft.EntityFrameworkCore;

namespace Green.Context
{
    public class Greencontext: DbContext
    {
        public Greencontext(DbContextOptions<Greencontext> options) :base(options)
        {
            
        }

         public DbSet<Product> Products { get; set; }
          public DbSet<Category> Categories { get; set; }
    }
}