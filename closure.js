
// const c=80
// const outet=()=>{
//     let a=10
//     var b=20
//     return  inner=()=>{
//         console.log(a);
//         console.log(b);
//         console.log(c)
        
//     }
    
// }
// let fun=outet();


// fun() 
// fun() 



const outer=()=>{
    let a=38
    return inner=()=>{
        console.log(a);
        
    }
}

const s=outer();

console.log(s());
