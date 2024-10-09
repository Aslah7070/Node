
console.log("helo")


Promise.resolve().then(()=>console.log("this promise"))
console.log("helo 2")
process.nextTick(()=>console.log("nextTick"))
console.log("helo 3")