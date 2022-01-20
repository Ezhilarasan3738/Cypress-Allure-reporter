export const dateTime = {
    
    firstName:"John",
    lastName:"Doe",
    age:50, 
    eyeColor:"blue",
    time: getDateTime()

    
};

function getDateTime(){
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    const ms = date.getMilliseconds()
    console.log(`milli seconds ${ms}`)
    const finalValues = hours+" "+minutes+" "+seconds+" "+ms
    return finalValues
}


export const finalTime = dateTime.time