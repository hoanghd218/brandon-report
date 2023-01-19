using Be.Domain.AuthEntities;
using Be.Infrustructure.Constants;
using Microsoft.EntityFrameworkCore;
using System;

namespace Be.Infrustructure.Data
{
    public class AppDbContext : DbContext
    {
        public DbSet<Permission> Permissions { get; set; }
        public DbSet<UserPermission> UserPermissions { get; set; }
        public DbSet<RolePermission> RolePermissions { get; set; }
        public AppDbContext(DbContextOptions options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<User>().ToTable("Users");
            builder.Entity<Role>().ToTable("Roles");
            builder.Entity<UserRole>().ToTable("UserRoles");
            builder.Entity<UserPermission>().ToTable("UserPermissions");
            builder.Entity<RolePermission>().ToTable("RolePermissions");
            base.OnModelCreating(builder);
        }
    }
}
