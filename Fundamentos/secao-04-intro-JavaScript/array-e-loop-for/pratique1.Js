let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

console.log(tasksList.length);
// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let searchForFirstTask = tasksList[0];
//onsole.log(searchForFirstTask);
// Tomar café

let searchForLastTask = tasksList[tasksList.length - 1];
//console.log(searchForLastTask);
// Brincar com o cachorro

//tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa
//console.log(tasksList);

// ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']

tasksList.unshift('acordar')
//console.log(tasksList);
//let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

//tasksList.pop('fazer exercícios da Trybe');  // remove a última tarefa
//console.log(tasksList)

//let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

//tasksList.shift();  // remove a primeira tarefa
//console.log(tasksList);

//let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let indexOfTask = tasksList.indexOf('Reunião');
console.log(indexOfTask);

// 1