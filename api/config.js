const env = process.env;

const config = {
  db: { /* don't expose password or any sensitive info, done only for demo */
    host: env.DB_HOST || 'dbserver',
    user: env.DB_USER || 'sqluser',
    password: env.DB_PASSWORD || 'password',
    // database: env.DB_NAME || 'mysql',
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};


module.exports = config;
