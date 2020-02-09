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
    public class UtilisateurController : ControllerBase
    {
        private readonly ILogger<WeatherForecastController> _logger;
        private readonly IRepertoire<Utilisateur> _repertoireUtilisateur;
        private readonly IRepertoire<Inscription> _repertoireInscription;
        
        public UtilisateurController(ILogger<WeatherForecastController> logger, 
        IRepertoire<Utilisateur> repertoireUtilisateur,
        IRepertoire<Inscription> repertoireInscription){
            _logger = logger;
            _repertoireUtilisateur = repertoireUtilisateur;
            _repertoireInscription = repertoireInscription;
        }

        [HttpGet]
        public IActionResult  RecupererUtilisateurs() 
        {        
            var utilisateurs = new List<UtilisateurModel>();
  
            var dao = _repertoireUtilisateur.Lire();

            if(dao.Any()) {
                foreach(var u in dao) {
                    utilisateurs.Add(new UtilisateurModel {
                        IdUtilisateur = (int)u.IdUtilisateur,
                        Pseudo = u.Pseudo,
                        Email = u.Email,
                        AuthCode = u.AuthCode,
                    });
                }
            }

            return Ok(utilisateurs);

        }

        [HttpGet]
        [Route("{id}")]
        public IActionResult RecupererUtilisateur(int id) {
        
            
            var dao = _repertoireUtilisateur.Lire((long)id);


            if(dao != null) {
                var u = new UtilisateurModel {
                        IdUtilisateur = (int)dao.IdUtilisateur,
                        Pseudo = dao.Pseudo,
                        Email = dao.Email,
                        AuthCode = dao.AuthCode,
                    };
                
                return Ok(u);
            }

            return NotFound();
        }

        /*
        [HttpGet]
        [Route("{pseudo}")]
        public IActionResult RecupererUtilisateurFromPseudo(String str) {
        
            
            var dao = _repertoireUtilisateur.Lire(str);


            if(dao != null) {
                var u = new UtilisateurModel {
                        IdUtilisateur = (int)dao.IdUtilisateur,
                        Pseudo = dao.Pseudo,
                        Email = dao.Email,
                        AuthCode = dao.AuthCode,
                    };
                
                return Ok(u);
            }

            return NotFound();
        }*/
    }
}