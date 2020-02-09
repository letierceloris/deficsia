using System;
using Dapper.Contrib.Extensions;

namespace CSIA.Data.dao
{
    [Table("Difficulte")]
    public class Difficulte
    {
        
        [Key]
        public long IdDifficulte {get;set;}
        public string Nom {get;set;}
        public DateTime LastModif {get;set;}
    }
}