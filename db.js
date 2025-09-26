const { Pool } = require("pg");

const pool = new Pool({
  user: "sales_db_d5y8_user",       // user PostgreSQL
  host: "dpg-d3bc8bffte5s739kshg0-a.oregon-postgres.render.com",      // chạy local
  database: "sales_db_d5y8",   // tên database
  password: "dPcXrK2CdxVGZors9q9w73S97liqPOTI",     // password PostgreSQL
  port: 5432,         // port mặc định
  ssl: { rejectUnauthorized: false }
});

module.exports = pool;