//                              Regras

/*Carne - 400g por pessoa + de 6 horas - 650 gr
  Cerveja - 1200ml por pessoa + 6 horas - 2000ml
  Refrigerante/agua - 1000ml por pessoa + 6horas 1500ml
  
  Crianças valem por 0,5 */

  let inputAdultos = document.getElementById("adultos");
  let inputCriancas = document.getElementById("criancas");
  let inputDuracao = document.getElementById("duracao");

 let resultado = document.getElementById("resultado");

 function calcular(){
     console.log("Calculando ...")

     let adultos = inputAdultos.value;
     let criancas = inputCriancas.value;
     let duracao = inputDuracao.value;

     let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) /2 * criancas);
     let qdtTotalCerveja = cervejaPP(duracao) * adultos;
     let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) /2 * criancas);

     resultado.innerHTML = `<p>${qdtTotalCarne /1000}Kg de Carne</p>`
     resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja / 355)} latas de Cerveja</p>`
     resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebidas / 2000)} Garrafas de 2L de Bebidas</p>`
}

 function carnePP(duracao){
     if(duracao >=6){
        return 750;
     }else {
         return 500;
     }
    }

function cervejaPP(duracao){
     if(duracao >=6){
        return 2000;
     }else {
         return 1200;
     }
    }

function bebidasPP(duracao){
    if(duracao >=6){
        return 1500;
    }else {
        return 1000;
    }

 }