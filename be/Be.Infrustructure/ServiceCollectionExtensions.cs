using Be.Domain.Entities;
using Be.Infrustructure.Repository;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace Be.Infrustructure
{
   public static class ServiceCollectionExtensions
   {
      public static IServiceCollection AddRepository<TDbContext, TCurrentUser>(this IServiceCollection services)
          where TDbContext : DbContext
          where TCurrentUser : ICurrentUser
      {
         services.AddScoped(typeof(ICurrentUser), typeof(TCurrentUser));
         services.AddScoped<IRepository, Repository<TDbContext>>();

         return services;
      }
   }
}
