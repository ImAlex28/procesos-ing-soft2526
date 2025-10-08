const model = require("./model.js");

describe('El sistema', function () {
  let system;
  beforeEach(function () {
    system = new model.System()
  }); 
  it('inicialmente no hay usuarios', function () {
    expect(system.usersNumber()).toEqual(0);
  });
  it('agrega usuario', function() {
    system.addUser("Iker");
    expect(system.getUsers().hasOwnProperty('Iker')).toBe(true);
  });
  it('obtiene usuarios', function() {
    system.addUser("Iker");
    system.addUser("Izan");
    expect(system.getUsers().hasOwnProperty('Iker')).toBe(true);
    expect(system.getUsers().hasOwnProperty('Izan')).toBe(true);
  });
  it('devuelve si existe el usuario', function() {
    system.addUser("Iker");
    expect(system.activeUser("Iker")).toBe(true);
    expect(system.activeUser("Ana")).toBe(false);
  });
  it('borra al usuario', function() {
    system.addUser("Iker");
    expect(system.activeUser("Iker")).toBe(true);
    system.deleteUser("Iker");
    expect(system.activeUser("Iker")).toBe(false);
  });
}) 