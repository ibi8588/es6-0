//create new array containing only #'s more than 50.'

const numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];



let filteredNumbers = numbers.filter(number => number > 50);

filteredNumbers;

var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];

var account = accounts.find(account => account.balance === 12);
