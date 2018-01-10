var names = [
  "Alexandria",
  "Matthew",
  "Joe"
];

names.some(function(name){
  return name.length > 4;
});


names.every(function(name){
  return name.length > 4;
});
