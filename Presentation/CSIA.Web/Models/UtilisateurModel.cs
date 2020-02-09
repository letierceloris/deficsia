using System.Collections.Generic;

namespace CSIA.Web.Models
{
    public class UtilisateurModel
    {
        public int IdUtilisateur {get;set;}
        public string Pseudo {get;set;}
        public string Email {get;set;}
        public string AuthCode {get;set;}
        //public List<ModuleModel> Modules {get;set;}

    }
}