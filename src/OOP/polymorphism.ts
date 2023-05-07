class Person {
    takeNap(){
        console.log('I am sleeping 8hour per day...')
    }
}

class Students extends Person {
    takeNap(): void {
        console.log('I am sleeeping 10:hour per day...')
    }
}

class Developer extends Person {
    takeNap(): void {
        console.log('I am sleeeping 5:hour per day...')
    }
}
function getNap(param:Person) {
    param.takeNap();
}
const person1 = new Person();
const person2 = new Students();
const person3 = new Developer();
getNap(person1);
getNap(person2);
getNap(person3);

class Shap {
    getArea():number{
       return 0;
    }
}

class Circle extends Shap {
    radius: number
    constructor(radius:number){
       super()
       this.radius = radius;
    }
    getArea():number{
       return Math.PI*this.radius* this.radius
    }
}

class Rectangle extends Shap {
    height: number;
    width: number;
    constructor(    height: number, width: number){
        super()
        this.height =height;
        this.width = width;
    }
    getArea(): number {
        return this.width*this.height
    }
}

function getArea(params:Shap) {
    console.log(
        params.getArea()
    )
}

getArea(new Circle(10))
getArea(new Rectangle(10,20))