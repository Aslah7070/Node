const fs=require("fs");


fs.writeFile("text.txt","hello world","utf-8",(err)=>{
    if(err){
        console.log("something wrong",err)
        return
    }
      console.log("write success")
})

fs.readFile("text.txt","utf-8",(err,data)=>{
    if(err){
        console.log("error in reading file",err);
        
    }else{
        console.log("file content",data);
        
    }
})


fs.appendFile("text.txt","\n added new cintent","utf-8",(err)=>{
    if(err){
        console.log("error is occure");
        return
        
    }
    console.log("added successfully");
    
})
fs.mkdir("MyFolder",(err)=>{
    if(err){
        console.log(err)
        return 
    }
    console.log("create directory successfully")
})


fs.mkdir("MyWORK",(err)=>{
    if(err&&err.code==="EEXIST"){
        console.log("already existed this folder",err.code);
    }else if(err){
        console.log("erro ");
        
    }else{
        console.log("created folder successfully");
        
    }
})


//delete file asycronously
// fs.unlink("text.txt",(errr)=>{
//     if(errr){
//         console.log(errr);
//         return 
//     }
//     console.log("delete successfully");
    
    
// })