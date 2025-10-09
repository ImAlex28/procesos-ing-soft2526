function System() {
  this.users = {};
  this.addUser = function (nick) {
      let res = {"nick":- 1};
      if (!this.users[nick]) {
        this.users[nick] = new User(nick);
        res.nick = nick;
      }
      else {
        console.log("el nick " + nick + " está en uso");
      }
      return res;
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

  this.usersNumber = function () {
    let res = {"num":- 1};
    number = Object.keys(this.users).length
    res.num = number
    return res
  }
}

module.exports.System = System;

function User(nick) {
  this.nick = nick;
}



