
function mayorNumero(matriz){
    let numeroMayor = matriz[0][0]
    for(let i = 0; i<matriz.length; i++){
    for(let j = 0; j<matriz[i].length; j++){
        if(matriz[i][j]>numeroMayor){
            numeroMayor = matriz[i][j]
        }
    }
    return numeroMayor;
}}

const matriz = [
    [1,0,17,6],
    [9,5,3,10],
    [4,23,3,8],
    [16,7,5,2],
]

const resultado = mayorNumero(matriz)

console.log(resultado);