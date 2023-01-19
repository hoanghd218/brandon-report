using Be.Application;
using Be.Application.ActionFilter;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);
string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
// Add services to the container.
var services = builder.Services;
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(option =>
{
    option.SwaggerDoc("v1", new OpenApiInfo { Title = "Demo API", Version = "v1" });
    option.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        In = ParameterLocation.Header,
        Description = "Please enter a valid token",
        Name = "Authorization",
        Type = SecuritySchemeType.Http,
        BearerFormat = "JWT",
        Scheme = "Bearer"
    });
    option.AddSecurityRequirement(new OpenApiSecurityRequirement
   {
      {
         new OpenApiSecurityScheme
         {
            Reference = new OpenApiReference
            {
               Type=ReferenceType.SecurityScheme,
               Id="Bearer"
            }
         },
         new string[]{}
      }
   });
});

services.TryAddSingleton<IHttpContextAccessor, HttpContextAccessor>();

services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
       builder =>
       {
           builder.AllowAnyOrigin();
       });
});

services.RegisterServices();

var options = builder.Configuration.GetSection("AppSettings");
services.Configure<AppSetting>(options);

builder.Services.AddCognitoIdentity();

services.AddControllers(options =>
   {
       options.Filters.Add<HttpStatusCodeFilter>();
       options.Filters.Add<ModelStateValidatorFilter>();
   })
   .ConfigureApiBehaviorOptions(options => options.SuppressModelStateInvalidFilter = true)
   .AddJsonOptions(o => o.JsonSerializerOptions.IgnoreNullValues = false);

var app = builder.Build();
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment() || true)
{
    app.UseSwagger(c =>
    {
        c.RouteTemplate = "main/swagger/{documentname}/swagger.json";
    });
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/main/swagger/v1/swagger.json", "My Cool API V1");
        c.RoutePrefix = "main/swagger";
    });
}

app.UseHttpsRedirection();


app.MapControllers();

app.UseAuthentication();
app.UseAuthorization();


app.UseCors(x => x
   .SetIsOriginAllowed(origin => true)
   .AllowAnyMethod()
   .AllowAnyHeader()
   .AllowCredentials()
   .WithExposedHeaders("Content-Disposition"));

app.UseCors(MyAllowSpecificOrigins);

app.UseForwardedHeaders(new ForwardedHeadersOptions
{
    ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto
});

app.Run();

