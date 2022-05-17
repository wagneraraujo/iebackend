const { parse } = require("pg-connection-string");

// module.exports = ({ env }) => {
//   const { host, port, database, user, password } = parse(env("DATABASE_URL"));

//   return {
//     defaultConnection: "default",
//     connections: {
//       default: {
//         connector: "default",
//         settings: {
//           client: "postgres",
//           host,
//           port,
//           database,
//           username: user,
//           password,
//           ssl: {
//             rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false),
//           },
//         },
//         debug: false,
//       },
//     },
//   };
// };

module.exports = ({ env }) => {
  if (env("NODE_ENV") === "production") {
    return {
      connection: {
        client: "postgres",
        connection: {
          host: env("DATABASE_HOST", "127.0.0.1"),
          port: env.int("DATABASE_PORT", 5432),
          database: env("DATABASE_NAME", "strapi"),
          user: env("DATABASE_USERNAME", "strapi"),
          password: env("DATABASE_PASSWORD", "strapi"),

          ssl: {
            rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false),
            ca: env(DATABASE_CA),
          },
        },
        debug: false,
      },
    };
  }
};
