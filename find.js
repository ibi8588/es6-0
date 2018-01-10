var users = [
  { name: 'Sam', id: 1 },
  { name: 'Jill', id: 2 },
  { name: 'Jack', id: 3 }
];

users.find(function(user){
  return user.name === 'Jack';
});


function Car(model) {
  this.model = model;
}

var cars =[
  new Car('Buick'),
  new Car('Camery'),
  new Car('Focus')
];

cars.find(function(car){
  return car.model === 'Focus';
});
