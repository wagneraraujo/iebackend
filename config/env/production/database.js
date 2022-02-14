const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
  const { host, port, database, user, password } = parse(env("DATABASE_URL"));

  return {
    defaultConnection: "default",
    connections: {
      default: {
        connector: "strapi-c2mz",
        settings: {
          client: "postgres",
          host,
          port,
          database,
          username: user,
          password,
        },
      },
    },
  };
};