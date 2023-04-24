//Don't forget to like, subscribe and share

const greet = (greeting, title, name) => {
  const result = `${greeting} ${title} ${name}`;
  console.log(result);
  return result;
}

greet("Morning", "Mr", "Arnold");
greet("Morning", "Mr", "John");

greet("Morning", "Mrs", "Jane");
greet("Morning", "Mrs", "Jasmine");


greet("Namaste", "Mr", "Jaideep");
greet("Namaste", "Mr", "Seu");
greet("Namaste", "Mr", "Ajay");

greet("Namaste", "Mrs", "Rana");
greet("Namaste", "Mrs", "Malik");

console.log("---------------------")

const greetCurried = (greeting) => (title) => (name) => {
  const result = `${greeting} ${title} ${name}`;
  console.log(result);
  return result;
}

const morning = greetCurried("Morning");
const morningMr = morning("Mr");
const morningMrs = morning("Mrs");

morningMr("Arnold");
morningMr("John");

morningMrs("Jane");
morningMrs("Jasmine");

const namaste = greetCurried("Namaste");
const namasteMr = namaste("Mr");
const namasteMrs = namaste("Mrs");

namasteMr("Jaideep")
namasteMr("Seu")
namasteMr("Ajay")

namasteMrs("Rana")
namasteMrs("Malik")
