let env = process.env.NODE_ENV;

if (["development", "test"].includes(env)) {
  require("dotenv").config();
  env = env.toUpperCase();
};

const dbOption = {
  username: process.env.DB_USERNAME || "postgres",
  password: process.env.DB_PASSWORD || null,
  database: process.env[`DB_DATABSE_${env}`] || "flex",
  host: process.env.DB_HOST || "127.0.0.1",
  dialect: process.env.DB_DIALECT || "postgres",
};

module.exports = {
  development: {
    ...dbOption,
    "dialectOptions": {
      "multipleStatements": true
    }
  },
  test: {
    ...dbOption,
  },
  production: {
    use_env_variable: "DATABASE_URL",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
};