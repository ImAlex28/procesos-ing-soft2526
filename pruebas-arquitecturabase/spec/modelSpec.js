describe('El sistema', function () {
  let system;
  beforeEach(function () {
    system = new System()
  }); 
  it('inicialmente no hay usuarios', function () {
    expect(system.usersNumber()).toEqual(0);
  });
  it('agrega usuario', function() {
    system.addUser("Iker");
    expect(system.getUsers().hasOwnProperty('Iker')).toBeTrue();
  });
  it('obtiene usuarios', function() {
    system.addUser("Iker");
    system.addUser("Izan");
    expect(system.getUsers().hasOwnProperty('Iker')).toBeTrue();
    expect(system.getUsers().hasOwnProperty('Izan')).toBeTrue();
  });
  it('devuelve si existe el usuario', function() {
    system.addUser("Iker");
    expect(system.activeUser("Iker")).toBeTrue();
    expect(system.activeUser("Ana")).toBeFalse();
  });
  it('borra al usuario', function() {
    system.addUser("Iker");
    expect(system.activeUser("Iker")).toBeTrue();
    system.deleteUser("Iker");
    expect(system.activeUser("Iker")).toBeFalse();
  });
}) 