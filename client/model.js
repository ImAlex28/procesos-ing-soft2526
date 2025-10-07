function System() {
  this.users = {};
  this.addUser = function (nick) {
    this.users[nick] = new User(nick);
  };
  this.getUsers = function () {
    return this.users;
  };
}

function User(nick) {
  this.nick = nick;
}
