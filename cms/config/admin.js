module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2eda2e86c352563d6cb1f7bf2d328579'),
  },
});
