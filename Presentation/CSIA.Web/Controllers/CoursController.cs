using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Linq;
using CSIA.Data.Interfaces;
using CSIA.Data.dao;
using CSIA.Web.Models;

namespace CSIA.Web.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CoursController : ControllerBase
    {
        private readonly ILogger<WeatherForecastController> _logger;
        private readonly IRepertoire<Cours> _repertoireCours;
        private readonly IRepertoire<Difficulte> _repertoireDifficulte;
        private readonly IRepertoire<Module> _repertoireModule;
        private readonly IRepertoire<CoursModule> _repertoireCoursModule;
        
        public CoursController(ILogger<WeatherForecastController> logger, 
            IRepertoire<Cours> repertoireCours, 
            IRepertoire<Difficulte> repertoireDifficulte,
            IRepertoire<Module> repertoireModule,
            IRepertoire<CoursModule> repertoireCoursModule){
            _logger = logger;
            _repertoireCours = repertoireCours;
            _repertoireDifficulte = repertoireDifficulte;
            _repertoireModule = repertoireModule;
            _repertoireCoursModule = repertoireCoursModule;
        }

        [HttpGet]
        public IActionResult  RecupererCours() 
        {        
            var cours = new List<CoursModel>();
          
            var dao = _repertoireCours.Lire();

            var difficultes = _repertoireDifficulte.Lire();

            if(dao.Any()) {
                foreach(var cour in dao) {
                    cours.Add(new CoursModel {
                        IdCours = (int)cour.IdCours,
                        Nom = cour.Nom,
                        Description = cour.Descpt,
                        Duree = (int)cour.Duree,
                        Difficulte = difficultes.Where(d => d.IdDifficulte == cour.IdDifficulte)
                                        .Select(d => d.Nom).SingleOrDefault()
                    });
                }
            }

            return Ok(cours);

        }

        [HttpGet]
        [Route("{id}")]
        public IActionResult RecupererLeCours(int id) {
        
            
            var dao = _repertoireCours.Lire((long)id);

            var difficultes = _repertoireDifficulte.Lire();

            if(dao != null) {
                var cour = new CoursModel {
                        IdCours = (int)dao.IdCours,
                        Nom = dao.Nom,
                        Description = dao.Descpt,
                        Duree = (int)dao.Duree,
                        Difficulte = difficultes.Where(d => d.IdDifficulte == dao.IdDifficulte)
                                        .Select(d => d.Nom).SingleOrDefault(),
                        Modules = RecupererModulesPourCour((int)dao.IdCours)
                    };
                
                return Ok(cour);
            }

            return NotFound();
        }

        private List<ModuleModel> RecupererModulesPourCour(int coursId) {
        
        var modules = new List<ModuleModel>();
        
        var moduleIds = _repertoireCoursModule.Lire()
                                                .Where(m => m.IdCours == coursId)
                                                .Select(m => m.IdModule);
        if(moduleIds.Any()){
            var dao = _repertoireModule.Lire()
                .Where(m => moduleIds.Contains(m.IdModule));

            if(dao.Any()) {
                foreach(var m in dao) {
                    modules.Add(new ModuleModel {
                        IdModule = (int)m.IdModule,
                        Nom = m.Nom,
                        Description = m.Descpt,
                        Duree = m.Duree,
                    });
                }      
            }
        }

        return modules;
    }

    }


}