var numbers = [ 10, 20, 30];

var sum = 0;

numbers.reduce(function(sum, number){
  return sum + number;
}, 0);

var primaryColors = [
  { color: 'red' },
  { color: 'blue' },
  { color: 'yellow' }
];

primaryColors.reduce(function(previous, primaryColor){
  previous.push(primaryColor.color);
  return previous
}, []);
