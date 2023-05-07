// // keyof gurd...

// type Alphaneumeric = string | number

// function add(param1:Alphaneumeric, param2:Alphaneumeric):Alphaneumeric {
//     if (typeof param1 == 'number' && typeof param1 == 'number') {
//         return param1 + param1;
//     }else{
//         return param1.toString() + param1.toString()
//     }
// }

// add('2','4');
// add(3,5);

// // in guard

// type NormalUserType = {
//     name: string
// }

// type AdminUserType = {
//     name: string,
//     role: 'admin'
// }
// function getUser(user:NormalUserType | AdminUserType) {
//     if ('role' in user) {
//         return `I am an admin an my role is ${user.role}`
//     }else{
//         return `I am a normal user...`
//     }
// }
// const normalUser1 : NormalUserType = {name:'mr kallu'}
// const adminUser1 : AdminUserType = {name: 'mr gallu', role: 'admin'}

// // console.log(getUser(normalUser1))
// // console.log(getUser(adminUser1))

// // instanceof guard...

// class Animal {
// //   public  anyname: string;
// //   public  specieses: string;
// //   public  anysound: string;
// //   pleasee use parameter propertise to make it simple
//     constructor(public name:string, public species:string, public sound: string){
//         // super(name,species,sound)
//         // this.anyname = anyname;
//         // this.specieses = specieses;
//         // this.anysound = anysound;
//     }
//     makeSound(){
//         console.log(`the ${this.name} says ${this.sound}`) //germen sheper says ghew ghew....
//     }
// }

// class Dog extends Animal {
//     constructor(name:string,species:string,sound:string) {
//         super(name,species,sound);
//     }
//     makeBark(){
//         console.log('I am barking')
//     }
// }

// class Cat extends Animal {
//     constructor(name:string,species:string,sound:string) {
//         super(name,species,sound);
//     }
//     makeMeu(){
//         console.log('pussy meu meu...')
//     }
// }
// function isDog(animal:Animal):animal is Dog {
//     return animal instanceof Dog;
// }
// function isCat(animal:Animal):animal is Cat {
//     return animal instanceof Cat;
// }
// function getAnimal(animal:Animal) {
//     if (isDog(animal)) {
//         animal.makeBark()
//     }else if (isCat(animal)) {
//         animal.makeMeu();
//     }else {
//         animal.makeSound()
//     } 
// }

// const animal1 = new Dog('germen bhai ', 'dog', 'ghew ghew....');
// const animal2 = new Cat('pussy bhai ', 'Cat', 'mew meew....');

// getAnimal(animal2)