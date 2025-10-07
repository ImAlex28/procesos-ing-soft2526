function System() {
  this.users = {};
  this.addUser = function (nick) {
    this.users[nick] = new User(nick);
  };
}
function User(nick) {
  this.nick = nick;
}
