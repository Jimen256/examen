function cuentaRegresiva(numeroInicial){
    const cuentaRegre = []
    for(let i = numeroInicial; i>=0; i--){
        cuentaRegre.push(i)
    }
    return cuentaRegre
}
console.log(cuentaRegresiva(5))