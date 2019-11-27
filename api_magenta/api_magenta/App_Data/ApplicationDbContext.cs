using System;
using System.Data.Entity;
using api_magenta.Models;

namespace api_magenta.App_Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext() : base("magenta_db")
        {
        }

        public static ApplicationDbContext Create()
        {
            return new ApplicationDbContext();
        }

        public DbSet<Client> Clients { get; set; }
    }
}
