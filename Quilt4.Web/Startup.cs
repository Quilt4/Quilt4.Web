using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Quilt4.Web.Startup))]
namespace Quilt4.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
