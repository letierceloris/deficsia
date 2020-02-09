using System;
using Dapper.Contrib.Extensions;

namespace CSIA.Data.dao
{
    [Table("cours_module")]
    public class CoursModule
    {   
        [Key]
        public long Id {get;set;}
        public long IdCours {get;set;}
        public long IdModule {get;set;}
    }
}