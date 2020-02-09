using System;
using Dapper.Contrib.Extensions;

namespace CSIA.Data.dao
{
    [Table("Inscription")]
    public class Inscription
    {
        
        [Key]
        public long IdUtilisateur {get;set;}
        public long IdCours {get;set;}
        public DateTime DateInscription {get;set;}
        public DateTime LastModif {get;set;}

    }
}