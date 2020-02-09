using System;
using Dapper.Contrib.Extensions;

namespace CSIA.Data.dao
{
    [Table("Cours")]
    public class Cours
    {
        
        [Key]
        public long IdCours {get;set;}
        public string Nom {get;set;}
        public string Descpt {get;set;}
        public long IdDifficulte {get;set;}
        public long  Duree {get;set;}
        public DateTime LastModif {get;set;}
    }
}