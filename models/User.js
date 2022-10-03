class User {
  id;
  username;
  password;
  role;

  constructor(id, username, password, role='default') {
    this.id = id;
    this.username = username;
    this.password = password;
    this.role = role;
  }
}

module.exports = User
