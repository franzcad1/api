module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 8082),
  app: {
    keys: env.array('APP_KEYS'),
  },
  url:"http://82.180.163.243"
});
