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
  this.deleteUser = function (nick) {
    if (this.activeUser(nick)) {
      delete this.users[nick];
      return true; // Eliminación exitosa
    }
    return false; // Usuario no encontrado
  };
}

function User(nick) {
  this.nick = nick;
}
