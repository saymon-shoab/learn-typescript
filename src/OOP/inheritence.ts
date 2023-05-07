class Parent {
    name: string;
    age: number;
    address: string;
    constructor(name: string, age: number, address: string){
        this.name = name;
        this.age = age;
        this.address = address;
     }
     sleepingHour(hours:number):string{
        return `${this.name} will sleep for ${hours} a day`;
    }
}

class Student extends Parent {

    constructor(name: string, age: number, address: string){
        super(name,age,address)
    }
}

const student1 = new Student('mr saymon', 15 , 'uttara')
// student1.
class Teacher extends Parent {
    designation: string; // designation is defference....
    constructor(name: string, age: number, address: string, designation: string) {
        super(name,age,address)
        
        this.designation = designation;
    }
    takeClasses(NumberOfClass:number):string{ // difference....
        return `he will take ${NumberOfClass}`
    }
}
const teacher1 = new Teacher('mr moinul', 60, 'usa', 'accounting sir');

// teacher1.sleepingHour