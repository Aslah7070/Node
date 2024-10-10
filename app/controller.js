// const data=require("./data");
// class Controller{
//     //getting all dataas
//     async getDatas(){
//         return new Promise((resolve,_)=>resolve(data))
//     }

//     //geting a single data
//     async getData(id){
//         return new Promise((resolve,reject)=>{
//             let data=data.find((dat)=>dat.id===parseInt(id))
//             if(data){
//                 resolve(data)
//             }else{
//                 reject(`data with ${id} not found`)
//             }
//         })
//     }
//     //creating datas......
// async createData(){
//     return new Promise((resolve,_)=>{
//         let newData={
//             id:Math.floor(4+Math.random()*10),
//             ...todo
//         }

//         resolve(newData)
//     })
// }

// //updating a data
// async updateData(id){
//     return new Promise((resolve,reject)=>{
//         let data=data.find((dat)=>dat.id===parseInt(oif))
//         if(!data){
//             reject(`No data with id  ${id} found`)
//         }
//         data["completed"]=true
//         resolve(data)
//     })
// }

// async deleteData(id){
//     return new Promise((resolve,reject)=>{
//         let data=data.find((dat)=>dat.id===parseInt(oif))
//         if(!data){
//             reject(`No data with id  ${id} found`)
//         }
        
//         resolve("data deleted successfully")
//     })
// }

// }
// module.export=Controller



const data = require("./data");

class Controller {
    // Getting all datas
    async getDatas() {
        return new Promise((resolve, _) => resolve(data));
    }

    // Getting a single data by id
    async getData(id) {
        return new Promise((resolve, reject) => {
            let result = data.find((dat) => dat.id === parseInt(id));
            if (result) {
                resolve(result);
            } else {
                reject(`Data with id ${id} not found`);
            }
        });
    }

    // Creating new data
    async createData(todo) {
        return new Promise((resolve, _) => {
            let newData = {
                id: Math.floor(6 + Math.random() * 1000),
                ...todo,
            };
            data.push(newData);
            resolve(newData);
        });
    }

    // Updating data by id
    async updateData(id) {
        return new Promise((resolve, reject) => {
            let result = data.find((dat) => dat.id === parseInt(id));
            if (!result) {
                reject(`No data with id ${id} found`);
            } else {
                result.completed = true;
                resolve(result);
            }
        });
    }

    // Deleting data by id
    async deleteData(id) {
        return new Promise((resolve, reject) => {
            let index = data.findIndex((dat) => dat.id === parseInt(id));
            if (index === -1) {
                reject(`No data with id ${id} found`);
            } else {
                data.splice(index, 1);
                resolve("Data deleted successfully");
            }
        });
    }
}

module.exports = Controller;

