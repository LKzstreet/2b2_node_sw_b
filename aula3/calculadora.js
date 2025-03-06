module.exports = {

    calcula (a, b, op){
        if(op === "+"){
            console.log("passei")
            return(a+b)
        }else if(op === "-"){
            return(a-b)
        }else if(op === "*"){
            return(a*b)
        }else if(op === "/"){
            return(a/b)
        }else{
            return(`${op} não existe.`)
        }
     }

}
 