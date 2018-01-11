var computers = [
  { name: 'Apple', ram: 20 },
  { name: 'Compaq', ram: 4 },
  { name: 'Acer', ram: 32 }
]

computers.some(function(computer){
  return computer.ram > 16;
});

//Given an array of network objects representing network requests, assign the boolean 'true' to the variable 'inProgress' if any network request has a 'status' of 'pending'.

var requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' }
];

var inProgress = requests.some( request => request.status === 'pending');
