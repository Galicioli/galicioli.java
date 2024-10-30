///////////Média Complexidade
//ex.1 Crie uma função que receba três números e retorne o maior deles. Utilize condicionais if-else.

let a = 11;
let b = 32;
let c = 19;

if ( a > b && a > c) {
    console.log(`${a} é o maior número `);
}
else if ( b > a && b > c){
    console.log(`${b} é o maior número`)
}
else {
 console.log(`${c}é o maior número`)
}

//ex.2 Escreva uma função que receba uma string e retorne se o primeiro caractere é uma letra maiúscula ou minúscula.

 let texto = "string"

 if ( "string" === texto ){
    console.log( " A palavra começa com  a letra maiuscula")
 }
 else if("string"=== texto ) {
console. log(" A palavra começa com a letra  minuscula")}

//ex.3 Crie um código que, com base na temperatura fornecida, retorne se está frio (< 15ºC), moderado (entre 15ºC e 30ºC), ou quente (> 30ºC).


 let temperatura = 12
  
 if ( temperatura < 15 ){ 
    console.log("moderado")
 }
else {
    console.log(" Quente ")
}


///ex.4 Desenvolva uma função que receba o ano e retorne se é bissexto ou não
 
let ano = 2023;
let bissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);

console.log(bissexto);

///ex.5 Escreva uma função que receba dois números e verifique se ambos são divisíveis por 5.

let num = 27

if (num % 5 === 0 ){
    console.log(`o numero ${num} é divisivel por 5`)
}

else {
    console.log(`o numero ${num}é divisivel por 5`)
}


//ex.6 Crie um código que simule um semáforo: ao receber a cor (verde, amarelo, vermelho), retorne uma ação (parar, esperar, seguir).

let semáforo = "vermelho"
 
if (semáforo === 'verde') {
console.log ('Pode seguir seu caminho')    
}

else if ( semáforo === ' amarelo'){
    console.log( 'Tirar o pé do acelerador ')
}

else (semáforo === 'vermelho')
{
    console.log('permanece obrigatória a parada do veículo quando o sinal está vermelho')
}