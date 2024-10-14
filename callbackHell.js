const one=(callback)=>{
    setTimeout(()=>{
        callback()
    },1000)
}

const one2=(callback)=>{
    setTimeout(()=>{
        callback()
    },1000)
}

const one3=(callback)=>{
    setTimeout(()=>{
        callback()
    },1000)
}

const one4=(callback)=>{
    setTimeout(()=>{
        callback()
    },1000)
}

one(()=>{
    one2(()=>{
        one3(()=>{
            one4(()=>{
                console.log("alla dadfadkjfad");
                
            })
        })
    })
})