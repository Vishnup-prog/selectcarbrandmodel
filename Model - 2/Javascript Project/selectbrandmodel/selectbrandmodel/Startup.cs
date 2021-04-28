using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(selectbrandmodel.Startup))]
namespace selectbrandmodel
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
