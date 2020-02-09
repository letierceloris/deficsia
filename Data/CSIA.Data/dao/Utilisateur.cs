using System;
using Dapper.Contrib.Extensions;

namespace CSIA.Data.dao
{
    [Table("Utilisateur")]
    public class Utilisateur
    {
        
        [Key]
        public long IdUtilisateur {get;set;}
        public string Pseudo {get;set;}
        public string Email {get;set;}
        public string AuthCode {get;set;}
        public DateTime LastModif {get;set;}
        public DateTime DateCrea {get;set;}
    }
}