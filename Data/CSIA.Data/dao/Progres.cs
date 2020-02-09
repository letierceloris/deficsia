using System;
using Dapper.Contrib.Extensions;

namespace CSIA.Data.dao
{
    [Table("Progres")]
    public class Progres
    {
        
        [Key]
        public long IdUtilisateur {get;set;}        public long IdCour {get;set;}
        public long IdModule {get;set;}
        public int Status {get;set;}
        public DateTime LastModif {get;set;}
    }
}