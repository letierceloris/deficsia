using System;
using Xunit;
using CSIA.Data;
using CSIA.Data.Implementation;
using CSIA.Data.dao;
using System.Linq;

namespace CSIA.Data.Test
{
    public class RepertoireUtilisateurTest
    {
        private readonly Repertoire<Utilisateur> _repertoireUtilisateur;    
        private readonly Utilisateur usr;
        public RepertoireUtilisateurTest(){
            _repertoireUtilisateur = new Repertoire<Utilisateur>();
            
            usr =  new Utilisateur {
                Pseudo = "TEST",
                Email = "test@gmail.com",
                AuthCode = "TESTTESTTEST",
                LastModif = DateTime.Now,                
                DateCrea = DateTime.Now
            };
        }
        
        [Fact]
        public void Test() {
            TestInsererUtilisateur();
            TestLireUtilisateur();
            TestModifierUtilisateur();
            TestSupprimerUtilisateur();
        }
        
        private void TestInsererUtilisateur() {
            var inserer = _repertoireUtilisateur.Inserer(usr);
            Assert.Equal(inserer, true);
        }

        private void TestLireUtilisateur()
        {
            var recuperer = _repertoireUtilisateur.Lire()
                .Where(u => u.Pseudo == usr.Pseudo).SingleOrDefault();

            Assert.Equal(recuperer.Pseudo, usr.Pseudo);
            Assert.Equal(recuperer.Email, usr.Email);
            Assert.Equal(recuperer.AuthCode, usr.AuthCode);

            usr.IdUtilisateur = recuperer.IdUtilisateur;
        }

        private void TestModifierUtilisateur()
        {
            usr.LastModif = DateTime.Now;
            
            var modifier = _repertoireUtilisateur.Modifier(usr);

            Assert.Equal(modifier, true);
        }
      
        public void TestSupprimerUtilisateur(){
            var supprimer = _repertoireUtilisateur.Supprimer(usr.IdUtilisateur);
            Assert.Equal(supprimer, true);
        }
    }
}
