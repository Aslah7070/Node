setTimeout(()=>console.log("1"))
setTimeout(()=>{
    process.nextTick(()=>console.log("inner nextTick in setTime out-1"))
    console.log("2")
    process.nextTick(()=>console.log("inner nextTick in setTime out-2"))
})
setTimeout(()=>console.log("3"))


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