var computers = [
  { name: 'Apple', ram: 20 },
  { name: 'Compaq', ram: 4 },
  { name: 'Acer', ram: 32 }
]

computers.every(function(computer){
  return computer.ram > 16;
});
