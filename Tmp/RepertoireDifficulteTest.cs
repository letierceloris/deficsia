using System;
using Xunit;
using CSIA.Data;
using CSIA.Data.Implementation;
using CSIA.Data.dao;

namespace CSIA.Data.Test
{
    public class RepertoireDifficulteTest
    {
        private readonly Repertoire<Cours> _repertoireCours;
        public RepertoireCoursTest(){
            _repertoireCours = new Repertoire<Cours>();
        }
        
        [Fact]
        public void TestLireCours()
        {
            var attendu = new Cours {
                IdCours = 1,
                Nom = "Apprendre à faire une API de genie",
                Descpt = "Ceci est une incroyable description",
                IdDifficulte = 1,
                Duree = 20,                
                LastModif = Convert.ToDateTime("2020-02-06 10:44:44")

            };

            var recuperer = _repertoireCours.Lire(1);

            Assert.Equal(recuperer.IdCours, attendu.IdCours);
            Assert.Equal(recuperer.Nom, attendu.Nom);
            Assert.Equal(recuperer.Descpt, attendu.Descpt);
            Assert.Equal(recuperer.IdDifficulte, attendu.IdDifficulte);
            Assert.Equal(recuperer.Duree, attendu.Duree);
            Assert.Equal(recuperer.LastModif, attendu.LastModif);

        }

        [Fact]
        public void TestModifierCours()
        {
            var attendu = true;
            var lesson = new Cours {
                IdCours = 2,
                Nom = "Apprendre à faire une API de nullos",
                Descpt = "Ceci est une description DEGUELASSE",
                IdDifficulte = 3,
                Duree = 42,                
                LastModif = Convert.ToDateTime("2020-02-12 10:44:44")
            };
            
            var modifier = _repertoireCours.Modifier(lesson);

            Assert.Equal(modifier, attendu);
        }

        [Fact]
        public void TestSupprimerCours(){
            var attendu = true;

            var supprimer = _repertoireCours.Supprimer(2);

            Assert.Equal(supprimer, attendu);
        }

        [Fact]
        public void TestInsererCours() {
            var attendu = true;
            var lesson = new Cours {
                IdCours = 2,
                Nom = "Apprendre à faire une API de nullos",
                Descpt = "Ceci est une description DEGUELASSE",
                IdDifficulte = 3,
                Duree = 42,                
                LastModif = Convert.ToDateTime("2020-02-12 10:44:44")
            };

            var inserer = _repertoireCours.Inserer(lesson);

            Assert.Equal(inserer, attendu);
        }
    }
}
