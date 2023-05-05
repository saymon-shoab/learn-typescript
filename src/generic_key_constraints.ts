type PersonType = {
    name: string,
    age: number,
    address: string,
}

type newType = 'name' | 'age' | 'address' ; // manually korsi..

type newTypeUsingKeyOf = keyof PersonType

// const a: newType = '';
// const b: newTypeUsingKeyOf = 'address';

function getProperty<X,Y extends keyof X>(obj:X, key:Y) {
    obj[key]
}
const property = getProperty({name:'mr,x', age:100},'age');
// keyof X
const a = {
    name: 'Mr,x',
    age: 100,
}