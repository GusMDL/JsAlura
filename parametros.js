// parâmetros de função



// console.log(soma(2,2)); 
// console.log(soma(245,20)); 
// console.log(soma(-500,60)); 

// parâmetros x argumentos

// ordem dos parâmetros

function nomeIdade(nome,idade){
    return `Eae ${nome}, minha idade é ${idade}`;
};

// console.log(nomeIdade(21,"Gustavo"))

function soma (numero1, numero2){
    return numero1 + numero2;
}

function multiplica (numero1 = 1, numero2 = 1){
    return numero1 * numero2;
}
                            //5      //6  = 30
console.log(multiplica(soma(2,3)));