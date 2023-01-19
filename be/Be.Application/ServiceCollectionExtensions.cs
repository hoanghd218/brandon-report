using Be.Infrustructure.Data;
using Be.Infrustructure.Repository;

namespace Be.Application
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection RegisterServices(this IServiceCollection services)
        {

            services.AddSingleton<DapperContext>();

            services.AddDistributedMemoryCache();

            services.AddScoped<IRepository, Repository<AppDbContext>>(); 
            return services;

        }
    }
}
