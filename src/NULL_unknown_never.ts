const searchName=(value:string|null)=>{
    if (value===null) {
        console.log('ther is nothing to search..')
    }else{
        console.log('searching...')
    }
}
searchName(null)

const getMycurSpeed=(speed:unknown)=>{
   if (typeof speed === 'number') {
      const speedConverter = (speed *1000)/3600;
      console.log(`my speed is ${speedConverter}`)
   }
   if (typeof speed === 'string') {
       const [value, unit] = speed.split(' ');
       const speedConverter = (parseFloat(value)*1000)/3600;
       console.log(`my speed is ${speedConverter}`)
   }else{
    console.log("there is wrong type");
   }
}

getMycurSpeed(10);
getMycurSpeed('12kilo per hour');
getMycurSpeed(true);


function throwError(message:string): never {
   throw new Error(message);    
}
throwError("error khaise");