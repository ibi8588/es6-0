var computers = [
  { name: 'Apple', ram: 20 },
  { name: 'Compaq', ram: 4 },
  { name: 'Acer', ram: 32 }
]

computers.every(function(computer){
  return computer.ram > 16;
});


var users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true }
];

var hasSubmitted = users.every(user => user.hasSubmitted === true);
