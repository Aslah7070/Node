
const fs=require("fs")
fs.writeFile("index.txt","aslah","utf-8",()=>{
    console.log("lettreydhvc");
    
});
fs.readFile("index.txt","utf-8",(err,data)=>{
    if(err)throw err
    else if(data)console.log(data);
    
})
// let data=fs.readFileSync("index1.txt","utf-8");
// console.log("sync",data);

// let data2=fs.writeFileSync("index1.txt","shahadhiya","utf-8")
// console.log("writeSync",data2);



fs.appendFile("index.txt","append contentdsf","utf-8",(err)=>{
    if(err)throw err
    console.log("append completed");
    
})
fs.appendFileSync("index1.txt","  sync appended","utf-8")




