module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a339e806ca877c2eaba2161e4dfc2693'),
  },
});
