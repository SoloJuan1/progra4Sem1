// Ejercicio 1 nums= [1,2,3,4]
// Ejercicio 2 nums= [1,1,1,1,1]  
// Ejercicio 3 nums= [3,1,2,10,1]
let nums= [1,2,3,4]
let numsResult=[]
numsResult[0]=nums[0]
for(let cont=1; cont<nums.length; cont++){
    //console.log("Posicion" +cont+ ":"+nums[cont])
    let valorAcum = numsResult[cont-1]
    numsResult[cont]= valorAcum + nums[cont];

}
// concatenar con +
console.log("Input: "+nums)
//backtick se usa con la tecla abajo de esc ` la ' no 
console.log(`Output: ${numsResult}`)

// ++ --
//=+ +=  -=  =-

