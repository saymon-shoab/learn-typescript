const arrayOfNumbers = [1,4,3];// convert it in string array

const arrayOfString = arrayOfNumbers.map((number)=> number.toString())

console.log(arrayOfString);

type valume = {
    height: number;
    width: number;
    depth: number;
}

type Area = {
    [key in keyof valume] : boolean
}

type AreaNumber = {
    height: number,
    width: number,
};

type AreaString = {
    height: string,
    width: string,
}

const rectAngularArea: AreaReadonly = {
    height: 10,
    width: 12,
}

type AreaReadonly = {
   readonly height: number,
   readonly width: number,
}
// rectAngularArea.height=12;
type U = AreaNumber['height'] // look up types

