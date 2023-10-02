//Class
class Human {
  constructor() {
    this.gender = "Male";
  }
  printGender() {
    console.log(this.gender);
  }
}
class person extends Human {
  constructor() {
    super();
    this.name = "Thaheer";
    this.age = 24;
  }
  printMyName() {
    console.log(this.name);
  }
  printMyAge() {
    console.log(this.age);
  }
}
const Person = new person();
Person.printMyName();
Person.printGender();
Person.printMyAge();

//Spread operator in Arrays
const arr = [1, 2, 3];
const newarr = [...arr, 4, 5, 6];
console.log(newarr);

//Spread operator in objects
const obj = {
    name: 'Thaheer'
};
const newobj = {
    ...obj,
    gender: 'male',
    age: 24
}
console.log(newobj);

//rest operator
const filter = (...args) => {
    return args.filter(elm => elm === 2);
}
console.log(filter(1,2,3,4,5,6))

//Destructuring
const arrNum = [1, 2, 3];
[num1, , num3] = arrNum;
console.log(num1, num3);
