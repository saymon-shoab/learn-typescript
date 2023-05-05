// const newData = {...myInfo, crush}

type MandatoryTypes = {
    name: string
    age: number,
    salary: number
}

interface IMandatory {
    name: string
    age: number,
    salary: number
}

const addMeInMyCrushMind = <T extends IMandatory>(myInfo:T) => {
    const crush = 'kate winslet';
    const newData = {...myInfo,crush};
    return newData;
}

type MyInfoType = {
    name: string;
    age: number;
    salary: number;
    other: boolean;
}

const myInfo : MyInfoType = {
   name: 'saymon',
   age: 23,
   salary: 34523,
   other: false,

}

const result = addMeInMyCrushMind(myInfo)
// const result = addMeInMyCrushMind({monerKhushi:'hasi khusi'})
result

// {
//     name: 'mr kashim',
//     age: 102,
//     salary:0348,
//     other: laskf
// }