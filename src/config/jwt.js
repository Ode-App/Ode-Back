const expressJwt = require('express-jwt');


async function isRevoked(req, payload, done) {
  req.payload = payload;

  done();
}

function jwt() {
  const secret = process.env.SECRET;// config.secret;
  return expressJwt({ secret, isRevoked }).unless({
    path: [
      // public routes that don't require authentication
      '/v1/user/authenticate',
      '/v1/user/register',
      '/.well-known/**',
      /^\/api-docs\/.*/,
    ],
  });
}


module.exports = jwt;
