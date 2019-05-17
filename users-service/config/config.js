//  config.js
//
//  Simple application configuration. Extend as needed.
module.exports = {
	port: process.env.PORT || 8123,
  db: {
    host: process.env.DATABASE_HOST || '127.0.0.1',
    database: 'users_db',
    user: 'users_service',
    password: '123',
    port: 3307,
    connectionLimit: 50,
    queueLimit: 0,
    waitForConnection: true
  }
};
