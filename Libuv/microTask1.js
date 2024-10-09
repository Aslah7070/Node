process.nextTick(()=>console.log("nextTick one"))
process.nextTick(()=>{
    console.log("nextTick two")
    process.nextTick(()=>{
    console.log("this is inner nextTick in nextTck");
    
    })
})
process.nextTick(()=>console.log("nextTick three"))

Promise.resolve().then(()=>console.log("promise 1"))
Promise.resolve().then(()=>{
    console.log("promise-2");
    
    process.nextTick(()=>{

        console.log("this is inner nextTick in promise");
        
    })
})
