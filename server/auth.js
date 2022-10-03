const auth = require('basic-auth');
const compare = require('tsscmp');
const USERS = require('../util/db').USERS;

const check = (name, pass) => {
  for (const user of USERS) {
    let valid = true;
    valid = compare(name, user.username) && valid;
    valid = compare(pass, user.password) && valid;
    if (valid) return user;
  }

  return null;
}

const basicAuth = (request, response, next) => {
  const credentials = auth(request);
  if (credentials) {
    const user = check(credentials.name, credentials.pass);
    if (user) {
      if (request.url.indexOf('/admin/') >= 0) {
        if (user.role !== 'admin') {
          response.set('WWW-Authenticate', 'Basic realm="Demo Pet Store"');
          return response.status(403).send('Not authorized')
        }
      }

      return next();
    }
  }

  response.set('WWW-Authenticate', 'Basic realm="Demo Pet Store"');
  return response.status(401).send('Incorrect credentials provided');
};

module.exports = {
  basicAuth: basicAuth,
  USERS: USERS
};
