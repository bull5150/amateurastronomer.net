using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Options;
using Microsoft.OpenApi.Models;
using RestAPICore.Models;
using RestAPICore.Services;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace RestAPICore
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            //setup collections
            services.Configure<BlogDBSettingsModel>(
                Configuration.GetSection(nameof(BlogDBSettingsModel)));

            services.AddSingleton<IBlogDBSettingsModel>(sp =>
                sp.GetRequiredService<IOptions<BlogDBSettingsModel>>().Value);

            services.AddSingleton<BlogService>();

            services.Configure<BlogSubscribeListModel>(
                Configuration.GetSection(nameof(BlogSubscribeListModel)));

            services.AddSingleton<IBlogSubscribeListModel>(sp =>
                sp.GetRequiredService<IOptions<BlogSubscribeListModel>>().Value);

            services.AddSingleton<BlogSubscriptionService>();

            services.AddControllers()
                .AddNewtonsoftJson(options => options.UseMemberCasing());

            //add swagger
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo
                {
                    Title = "RestAPIcore for Amateur Astronomer.Net",
                    Version = "v1",
                    Description = ".Net5.0 API for Amateur Astronomer.Net",
                    Contact = new OpenApiContact
                    {
                        Name = "Jeff Heldridge",
                        Email = string.Empty,
                        Url = new Uri("http://amateurastronomer.net/"),
                    },
                });

                // Set the comments path for the Swagger JSON and UI.
                var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
                var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
                c.IncludeXmlComments(xmlPath);
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                //Load Swagger
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "RestAPIcore v1"));
            }

            //Use Default Pages ie index.html
            app.UseDefaultFiles();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
