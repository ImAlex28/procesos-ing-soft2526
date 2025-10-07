function System() {
  this.users = {};
  this.addUser = function (nick) {
    this.users[nick] = new User(nick);
  };
  this.getUsers = function () {
    return this.users;
  };
  this.activeUser = function (nick) {
    return this.users.hasOwnProperty(nick);
    //hasOwnProperty(nick) comprueba si el objeto users tiene una propiedad con ese nombre.
  };
}

function User(nick) {
  this.nick = nick;
}
