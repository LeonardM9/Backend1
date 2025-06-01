const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

let database = process.env.PG_DATABASE ?? '';
let username = process.env.PG_USER ?? '';
let password = process.env.PG_PASSWORD ?? '';
let host = process.env.PG_HOST ?? '';
let port = process.env.PG_PORT ?? 5432;

const sequelize = new Sequelize(database, username, password, {
  host: host,
  port: port,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // Esto permite conectar con Supabase
    }
  }
});

console.log("Credenciales cargadas:", {
  database,
  username,
  password,
  host,
  port
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexión a Supabase establecida correctamente.');
  } catch (error) {
    console.error('❌ Error al conectar con Supabase:', error);
  }
})();

module.exports = sequelize;
