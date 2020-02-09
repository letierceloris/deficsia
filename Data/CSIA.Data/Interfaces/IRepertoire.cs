using System.Collections.Generic;

namespace CSIA.Data.Interfaces
{
    public interface IRepertoire<T> where T : class
    {
         IEnumerable<T> Lire();
         T Lire(long id);
         T Lire(string str);
         bool Modifier (T dao);
         bool Supprimer (long id);
         bool Inserer (T dao);
    }
}