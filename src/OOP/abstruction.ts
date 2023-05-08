// interface use kore abstruction bujha jah....

// interface Ivehicle {
//     name: string, // aita akta property.....
//     model: string, // aita akta property....
// }

// const vehicle : Ivehicle = {
//     name: 'car',
//     model: 'toyota 2000'
// }

// interface Ivehicle{
//     startEngine():void; // aita akta method...
//     stopEngine():void;  // aita akta method......
//     move():void; // method...
// }

// class Vehicle implements Ivehicle{
//     constructor(
//         public name: string,
//         public brand: string,
//         public model: number,
//     ){
         
//     }
//     startEngine(): void {
//         console.log('I am starting the engine...')
//     }
//     stopEngine(): void {
//         console.log('I am stoping the engine....')
//     }
//     move(): void {
//         console.log('I am moveing the car...')
//     }
//     test(){
//         console.log('I am from testing purpose...')
//     }
// }
// const vehicle1 = new Vehicle('corolla' , 'Tyota', 2015);
// abstruct class use kore abstruction bujha jay...

abstract class Vehicle {
    constructor(
        public name: string,
        public brand: string,
        public model: number,
    ){
         
    }
    abstract startEngine(): void;
    abstract stopEngine(): void ;
    abstract move(): void ;
    test(){
        console.log('I am from testing purpose...')
    }
}

class Car extends Vehicle {
    startEngine(): void {
        console.log('lsflsj')
    }
    stopEngine(): void {
        console.log('alsjdflslsd')
    }
    move(): void {
        console.log('lsajfljsal')
    }
}

// const car1 = new Vehicle('car', 'honda', 233); // abstruct class a instence create kora jay na

