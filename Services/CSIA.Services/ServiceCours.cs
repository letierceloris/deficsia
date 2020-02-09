using CSIA.Data.dao;
using CSIA.Data.Interfaces;
using CSIA.Services.Interfaces;

namespace CSIA.Services
{
    public class ServiceCours : IServiceCours
    {
        private readonly IRepertoire<Cours> _repertoireCours;
        public ServiceCours(IRepertoire<Cours> repertoireCours) {
            _repertoireCours = repertoireCours;
        }
    }
}