const promise=new Promise((resolve,reject)=>{
    resolve("aslah")
})

const promise1=new Promise((resolve,reject)=>{
    resolve("moosu")
})
const promise2=new Promise((resolve,reject)=>{
    resolve("shahu")
})

promise.then((recive)=>{
    console.log(recive);
    return promise1
}).then((recive)=>{
    console.log(recive);
    return promise2
}).then((recive)=>{
    console.log(recive);
    
})