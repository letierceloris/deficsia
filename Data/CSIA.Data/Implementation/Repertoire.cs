using System.Collections.Generic;
using CSIA.Data.Interfaces;
using Dapper;
using Dapper.Contrib.Extensions;

namespace CSIA.Data.Implementation
{
    public class Repertoire<T> : Connection, IRepertoire<T> where T : class
    {
        public Repertoire() {

        }
        public bool Inserer(T dao)
        {
            using(var c = _connection){
                c.Open();

                return c.Insert(dao) > 0;
            }
        }

        public IEnumerable<T> Lire()
        {
            using(var c = _connection){
                c.Open();

                return c.GetAll<T>();
            }
        }

        public T Lire(long id)
        {
            using(var c = _connection){
                c.Open();

                return c.Get<T>(id);
            }
        }

        public T Lire(string str)
        {
            using(var c = _connection){
                c.Open();

                return c.Get<T>(str);
            }
        }

        public bool Modifier(T dao)
        {
            using(var c = _connection){
                c.Open();

                return c.Update<T>(dao);
            }
        }

        public bool Supprimer(long id)
        {
            using(var c = _connection){
                var dao = Lire(id);
                if(dao != null) {
                    return c.Delete(dao);
                }           
                return true;
            }
        }
    }
}