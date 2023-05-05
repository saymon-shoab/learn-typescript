type user = {
    name: string;
    age: number;
};

type extendedUser = user & {
    role: string,
}

interface Iuser {
    name: string;
    age: number;
}

const userWithTypeAlias : user = {
    name: 'odhri sushmita',
    age: 22,
}

const userWithInterface: Iuser = {
    name: 'surovi',
    age: 18,
}

interface IExtendedUser extends Iuser{
    role: string,
}

const user : extendedUser = {
    name: 'subria bente surovi',
    age: 20,
    role: 'girl friend'
}

// object , function, array....
 
type rollNumbersType = number[];
interface IRollNumbers{
    [index:number]:string 
} 
const rollNumber: IRollNumbers = ['1','2','3','5']; //[index]


// alias type
type addNumbersType = (num1:number, num2:number) => number;
// interface type
interface IAddNumbers {
    (num1:number,num2:number):number;
}
const addNumbers: IAddNumbers = (num1,number2) => num1+number2;