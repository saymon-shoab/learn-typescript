// // Generic interface

// interface CrushInterface<T> {
//     name: string;
//     husband: T
// }

// const crush_1 : CrushInterface<boolean> = {name:'bal sal',husband:true};

// interface HusbandInterface {
//     name: string;
//     salary: number;
// }

// const crush_2 : CrushInterface<HusbandInterface> = {
//     name:'bal sal',
//     hubband: {
//         name: 'person',
//         salary: 0.01,
//     }

// type GeneracTuple<X,Y> = [X,Y];

// const relation:GeneracTuple<string,string>  = ['saymon', 'odhri sushmita']

// interface RelationWithSalaryInterface {
//     name: string;
//     salary: number;
// }

// const relationWithSalary: GeneracTuple<RelationWithSalaryInterface,string > = [{
//     name: 'saymon shoab',
//     salary: 30000,
// },
//     'odhri SUshmita'
// ]

// type GenericArray<T>= Array<T>;


// const rollNumbers: GenericArray<number> = [22,44,55,2];
// const rollNumbers2: GenericArray<string> = ['22','44','55'];
// const isStudent: GenericArray<boolean> = [true, false];
// type NameRollType = {  name: string; roll: number  }
// const userNameRollNumbers: GenericArray<NameRollType> = [
//     {
//         name: 'mr saymon',
//         roll: 32,
//     },
//     {
//         name:'odhri sushmita',
//         roll: 20,
//     }
// ]

// // add(x,y,c);
// // add(2,4,3);