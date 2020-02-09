using System;
using Dapper.Contrib.Extensions;

namespace CSIA.Data.dao
{
    [Table("Module")]
    public class Module
    {
        [Key]
        public long IdModule {get;set;}
    
        public string Nom {get;set;}
        public string Descpt {get;set;}
        public long Duree {get;set;}
        public DateTime LastModif {get;set;}
    }
}