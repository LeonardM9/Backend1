const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // Esto permite conectar con Supabase
    }
  },
  logging: false // Opcional: desactiva logs de SQL en producción
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
