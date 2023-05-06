// // json please holder....
// interface ITodo {
//     userId: number,
//     id: number,
//     title: string,
//     completed: boolean,
// }
// const getTodo = async (): Promise<ITodo> => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos');
//     return await response.json();
// }

// const getTodoData = async () : Promise<void>=> {
//     const result = await getTodo();
//     console.log(result)
// }
// getTodoData();



// const makePromise = (): Promise<string> =>  {
//     return new Promise<string>((resolve, reject)=>{
//         const data: string = 'data is fetched';
//         if (data) {
//             resolve(data)
//         }else{
//             reject('Failed to feted data!')
//         }
//     })
// }
// interface IDataType {
//     data:string
// }
// const makePromiseObject = (): Promise<IDataType> =>  {
//     return new Promise<IDataType>((resolve, reject)=>{
//         const data: IDataType = {data:'data is fetched'};
//         if (data) {
//             resolve(data)
//         }else{
//             reject('Failed to feted data!')
//         }
//     })
// }


// const makePromiseBoolean = (): Promise<boolean> => {
//     return new Promise<boolean>((resolve, reject)=>{
//         const data: boolean = false;
//         if (data) {
//             resolve(data)
//         }else{
//             reject('Failed to feted data!')
//         }
//     })
// }


// const getPromiseData =async (): Promise<string> => {
//     const data = await makePromise();
//     console.log(data);
//     return data;
// }
// const getPromiseDataObject =async (): Promise<object> => {
//     const data = await makePromiseObject();
//     console.log(data);
//     return data;
// }
// const getPromiseDataBoolean =async (): Promise<boolean> => {
//     const data = await makePromiseBoolean();
//     console.log(data);
//     return data;
// }
// // promise<string> promise<boolean> </boolean></string>