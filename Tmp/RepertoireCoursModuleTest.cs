using System;
using Xunit;
using CSIA.Data;
using CSIA.Data.Implementation;
using CSIA.Data.dao;

namespace CSIA.Data.Test
{
    public class RepertoireCoursModuleTest
    {
        private readonly Repertoire<CoursModule> _repertoireCoursModule;
        public RepertoireCoursModuleTest(){
            _repertoireCoursModule = new Repertoire<CoursModule>();
        }
        
        [Fact]
        public void TestLireCoursModule()
        {
            var attendu = new CoursModule {
                IdCours = 1,
                IdModule = 1
            };
            var recuperer = _repertoireCoursModule.Lire(1);

            Assert.Equal(recuperer.IdCours, attendu.IdCours);
            Assert.Equal(recuperer.IdModule, attendu.IdModule);

        }

        [Fact]
        public void TestModifierCoursModule()
        {
            var attendu = true;
            var coursmodule = new CoursModule {
                IdCours = 2,
                IdModule = 2,
            };
            
            var modifier = _repertoireCoursModule.Modifier(coursmodule);

            Assert.Equal(modifier, attendu);
        }

        [Fact]
        public void TestSupprimerCoursModule(){
            var attendu = true;

            var supprimer = _repertoireCoursModule.Supprimer(2);

            Assert.Equal(supprimer, attendu);
        }

        [Fact]
        public void TestInsererCoursModule() {
            var attendu = true;
            var coursmodule = new CoursModule {
                IdCours = 2,
                IdModule = 2,
            };

            var inserer = _repertoireCoursModule.Inserer(coursmodule);

            Assert.Equal(inserer, attendu);
        }
    }
}
