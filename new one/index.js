const promise=new Promise((resolve,reject)=>{
    resolve("success")
})
const promise1=new Promise((resolve,reject)=>{
    resolve("success-1")
})


const a=Promise.all([promise,promise1])
a.then((recive)=>{
    console.log(recive);
    
})