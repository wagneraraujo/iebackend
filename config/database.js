const { parse } = require("pg-connection-string");

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "oregon-postgres.render.com"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "strapi_c2mz"),
      user: env("DATABASE_USERNAME", "strapi_c2mz_user"),
      password: env("DATABASE_PASSWORD", "hIE1G8GX8TnoRmomBxxloJx6OyRgYSjB"),
      schema: env("DATABASE_SCHEMA", "public"), // Not required
      ssl: {
        ssl: env("DATABASE_SSL", true),
        rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false), // For self-signed certificates
        contentSecurityPolicy: false,
      },
    },
    debug: false,
  },
});
