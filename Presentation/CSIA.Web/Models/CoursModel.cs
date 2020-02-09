using System.Collections.Generic;

namespace CSIA.Web.Models
{
    public class CoursModel
    {
        public int IdCours {get;set;}
        public string Nom {get;set;}
        public string Description {get;set;}
        public string Difficulte {get;set;}
        public int Duree {get;set;}
        public List<ModuleModel> Modules {get;set;}

    }
}
