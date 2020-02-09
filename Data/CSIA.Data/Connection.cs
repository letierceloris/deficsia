using MySql.Data.MySqlClient;

namespace CSIA.Data
{
    public class Connection
    {
        protected readonly MySqlConnection _connection;

        public Connection(){
            if(_connection is null) {
                _connection = new MySqlConnection("Server=localhost;Database=deficsia;Uid=root;");
            }
        }
    }
}