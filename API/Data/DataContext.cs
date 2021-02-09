using System.Diagnostics.CodeAnalysis;
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : DbContext
    {
        public DbSet<AppUser> Users { get; set; }
        public DataContext([NotNullAttribute] DbContextOptions options) : base(options)
        {
        }
        
        protected DataContext()
        {
        }
    }
}