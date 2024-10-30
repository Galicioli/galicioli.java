///////////Baixa Complexidade////////////////////////////////////////////////////////////////////////////////// 
///ex.1  Crie uma função que receba um número e retorne se ele é par ou ímpar usando o operador %.

let number = 8
let number0 = 6

if ( number % 2 === 0 && number0 % 2 === 1){
    console.log (` só ${number} é par`)
}

else if ( number % 2 === 0 && number0 % 2 === 0){
    console.log ( 'os dois numeros são pares')
}

else if ( number % 2 === 1 && number0 % 2 === 1){
    console.log (' os dois são números impares')
}

else (
    console.log (` só o ${number0} é par`)
)

///ex.2 Faça uma função que verifique se uma pessoa é maior de idade (18 anos) com base no ano de nascimento fornecido.
 

 let anodenascimento = 2001

 if (anodenascimento <= 2006){

    console.log  (`Voce é maior de idade`) ;
 }

 else {
console.log (`Voce é menor de idade`);
 }


 ///ex.3 Desenvolva uma função que receba duas notas e, se a média for maior ou igual a 7, retorne "Aprovado", senão, retorne "Reprovado"

 let nota1 = 5;
 let nota2 = 8;

 if (( nota1 + nota2 )  / 2 >= 7 )  {


console.log(`Voce foi aprovado` );
 }
 else { 

    console.log(`Voce foi Reprovado` );
 }

///ex.4   Escreva uma função que receba a idade de uma pessoa e retorne se ela pode votar (idade ≥ 16).
  
let idade = 12
  if( idade >= 16 ) { 

console.log(`Pode votar`);   
}

else { console.log(`Não pode votar`);
}

//ex.5 Crie uma função que receba dois números e retorne o maior deles. Utilize o operador ternário.

let numero = 16
let numeros = 3
  
if ( numero > numeros) {
    console.log(` O ${numero} é o maior numero`);
  
}

else{ console.log(` O ${numeros} é o  maoir numero`);
}

//ex.6 Escreva uma função que, com base na quantidade de horas trabalhadas, calcule se a pessoa fez hora extra (mais de 40 horas).

let segunda = 9 
let  terça  = 8
let quarta = 8
let quinta = 8
let sexta = 8

if((segunda+ terça+ quarta+ quinta+ sexta) === 40 ) { 

console.log(Parabéns);
}
 else {
console.log( 'Parabéns, vc fez extra' )
 }

 ///ex.7 Crie um código que receba um número e verifique se ele está dentro do intervalo entre 10 e 50.
  
  let nume = 5

if(nume >= 10 && nume <= 50 ){
    console.log(`O número ${nume} está entre 10 e 50`)
}
else{ 
    console.log(`O número ${nume} não está entre 10 e 50`)
}

///ex.8 Desenvolva um script que determine se uma letra é uma vogal ou consoante

function verificaLetra(letra) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    letra = letra.toLowerCase(); 

    return vogais.includes(letra) ? "Vogal" : "Consoante";
}


const resultado = verificaLetra('m'); 
console.log(resultado); 

 //ex.9  Faça uma função que receba o nome de um mês e verifique se é um mês de férias (dezembro, janeiro ou julho).

let mes = "maio"
 
if ('JaneiroDezembroJulho' . includes(mes)){ 
    console.log (`${mes} é um mes de ferias`)
    
}
else { 
    console.log(`Nao é mes de ferias`);
    
}


//ex.10   Crie uma função que receba a nota de um aluno e retorne "A", "B", "C", "D" ou "F", baseado em critérios de faixa de notas

let notaaluno = 10

 if (notaaluno >= 8 && notaaluno <= 9){
    notaaluno = "A";
   }
   else if (notaaluno >= 6 && notaaluno <= 7){
    notaaluno = "B";
   }
   else if (notaaluno >= 4 && notaaluno <= 5){
    notaaluno = "C";
   }
  
   else if (notaaluno >= 0 && notaaluno <= 3){
    notaaluno = "E";
   }
   else if (notaaluno = 10){
    notaaluno = "A+";
   }
console.log(notaaluno)


/////////Exercícios com Arrays///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ex.1 Crie uma função que receba um array de números e retorne o maior valor. Utilize o método Math.max().
  
console.log(Math.max("390" , "208", "364" ,"500"   ))

//ex.2  Faça uma função que receba um array e verifique se um determinado valor está presente nele. Use o método includes()


const liste = [

     'maça',
     'melão',
     'amora',
     'açai'
] 

if ( liste.includes('banana')) {
 console.log(" Essa lista contém a fruta  ");
 
}
 else {

    console.log('Essa lista não contém a fruta ');
    
 }
    
///ex.3