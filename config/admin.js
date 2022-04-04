const forgotPasswordTemplate = require('./email-templates/reset-password');

module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a339e806ca877c2eaba2161e4dfc2693'),
  },
  forgotPassword: {
    from: 'clubeiestrada@gmail.com',
    replyTo: 'clubeiestrada@gmail.com',
    emailTemplate: forgotPasswordTemplate,
  },
  resetPassword: {
    from: 'clubeiestrada@gmail.com',
    replyTo: 'clubeiestrada@gmail.com',
    emailTemplate: forgotPasswordTemplate,
  },
});
