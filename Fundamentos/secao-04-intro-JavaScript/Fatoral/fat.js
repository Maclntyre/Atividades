let fat = 1;

for (let i = 10; i > 0; i -= 1) {
  fat *= i;
}
console.log(fat);

let word = "tryber";
let reverse = "";
for (let i = 0; i < word.length; i += 1) {
  reverse += word[word.length - 1 - i];
}
console.log(reverse);

let array = ["java", "javascript", "python", "html", "css"];

let maior = array[0];
let menor = array[0];

for (let i = 0; i < array.length; i += 1) {
  if (array[i].length > maior.length) {
    maior = array[i];
  }
}

for (let i = 0; i < array.length; i += 1) {
  if (array[i].length < menor.length) {
    menor = array[i];
  }
}

console.log(maior);
console.log(menor);

let primadona = 0;

for (let numero = 2; numero <= 50; numero += 1) {
  let primo = true;
  for (let divisor = 2; divisor < numero; divisor += 1) {
    if (numero % divisor === 0) {
      primo = false;
    }
  }
  if (primo) {
    primadona = numero;
  }
}

console.log(primadona);
