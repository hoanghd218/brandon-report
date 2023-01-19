using System;
using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace Be.Infrustructure.Data
{
    public class DesignTimeDbContextFactory : IDesignTimeDbContextFactory<AppDbContext>
    {
        public AppDbContext CreateDbContext(string[] args)
        {
            return Create(Directory.GetCurrentDirectory(), Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT"));
        }

        public AppDbContext Create()
        {
            var environmentName = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");
            var basePath = AppContext.BaseDirectory;
            return Create(basePath, environmentName);
        }

        private AppDbContext Create(string basePath, string environmentName)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(basePath)
                .AddJsonFile("appsettings.json")
                .AddJsonFile($"appsettings.{environmentName}.json", true)
                .AddEnvironmentVariables();

            var config = builder.Build();

            var connectionString = config.GetConnectionString("Default");

            if (string.IsNullOrWhiteSpace(connectionString))
            {
                throw new InvalidOperationException("Could not find a connection string named Default.");
            }
            return Create(connectionString);
        }

        private AppDbContext Create(string connectionString)
        {
            if (string.IsNullOrEmpty(connectionString))
            {
                throw new ArgumentNullException(connectionString);
            }

            var optionsBuilder = new DbContextOptionsBuilder<AppDbContext>();

            optionsBuilder.UseNpgsql(connectionString);

            var options = optionsBuilder.Options;
            return new AppDbContext(options);
        }
    }
}
