// const http=require("http");
// const data=require("./controller")
// const {getReqData}=require("./utils")
// const prot= process.env.PORT||3004;
// const server=http.createServer(async(req,res)=>{
//     if(req.url==="/api/datas"&&req.method==="GET"){
//         let datas=await new data().getDatas()
//         res.writeHead(200,{"Content-Type":"application.json"});
//         res.write("Hello from vannilla Node.js api")
//         res.end(JSON.stringify(datas))
                          
//     }
//     //Get -/api/datas/:id
//     else if(req.url.match(/\/api\/datas\/([0-9]+)/)&&req.method==="GET"){
//         try {
//             const id=req.url.split("/")[3]
//             const data=await new data().getData(id)
//             res.writeHead(200,{"Content-Type":"application.json"});
//         res.end(JSON.stringify(data))
//         } catch (error) {
//             res.writeHead(404,{"Content-Type":"application.json"});
//             res.end(JSON.stringify({message:error}))
//         }
        
//     }
// //Delete-api/datas/:id
//     else if(req.url.match(/\/api\/datas\/([0-9]+)/)&&req.method==="DELETE"){
//         try {
//             const id=req.url.split("/")[3]
//             const message=await new data().deleteDta(id)
//             res.writeHead(200,{"Content-Type":"application.json"});
//         res.end(JSON.stringify(message))
//         } catch (error) {
//             res.writeHead(404,{"Content-Type":"application.json"});
//             res.end(JSON.stringify({message:error}))
//         }
        
//     }

//     //update-api/datas/:id
//     else if(req.url.match(/\/api\/datas\/([0-9]+)/)&&req.method==="PATCH"){
//         try {
//             const id=req.url.split("/")[3]
//             const updated=await new data().updateData(id)
//             res.writeHead(200,{"Content-Type":"application.json"});
//         res.end(JSON.stringify(updated))
//         } catch (error) {
//             res.writeHead(404,{"Content-Type":"application.json"});
//             res.end(JSON.stringify({message:error}))
//         }
        
//     }

//     //post-api/datas/
//     else if(req.url==="/api/datas"&&req.method==="POST"){
//         try {
//             const id=req.url.split("/")[3]
//             const postData=await new data().getReqData(req)
//             let data=await new data().createData(JSON.parse(postData))
//             res.writeHead(200,{"Content-Type":"application.json"});
//         res.end(JSON.stringify(data))
//         } catch (error) {
//             res.writeHead(404,{"Content-Type":"application.json"});
//             res.end(JSON.stringify({message:error}))
//         }
        
//     }else{
//         res.writeHead(404,{"Content-Type":"application/json"})
//         res.end(JSON.stringify({message:"Route note found"}))
//     }
// })
// server.listen(prot,()=>console.log(`server started on port ${prot}`))




const http = require("http");
const Controller = require("./controller");
const { getReqData } = require("./utils");

const port = process.env.PORT || 3004;
const server = http.createServer(async (req, res) => {
    if (req.url === "/api/datas" && req.method === "GET") {
        let datas = await new Controller().getDatas();
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(datas));
    }
    // GET - /api/datas/:id
    else if (req.url.match(/\/api\/datas\/([0-9]+)/) && req.method === "GET") {
        try {
            const id = req.url.split("/")[3];
            const data = await new Controller().getData(id);
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(data));
        } catch (error) {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: error }));
        }
    }
    // DELETE - /api/datas/:id
    else if (req.url.match(/\/api\/datas\/([0-9]+)/) && req.method === "DELETE") {
        try {
            const id = req.url.split("/")[3];
            const message = await new Controller().deleteData(id);
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message }));
        } catch (error) {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: error }));
        }
    }
    // PATCH - /api/datas/:id
    else if (req.url.match(/\/api\/datas\/([0-9]+)/) && req.method === "PATCH") {
        try {
            const id = req.url.split("/")[3];
            const updated = await new Controller().updateData(id);
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(updated));
        } catch (error) {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: error }));
        }
    }
    // POST - /api/datas
    else if (req.url === "/api/datas" && req.method === "POST") {   
        try {
            const postData = await getReqData(req);
            let data = await new Controller().createData(JSON.parse(postData));
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(data));
        } catch (error) {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: error }));
        }
    } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Route not found" }));
    }
});

server.listen(port, () => console.log(`Server started on port ${port}`));
//dkfjk