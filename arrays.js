// Array 1

let contagem =0
let numero=[]

while(contagem<=20){
    let numeroRecebido= parseInt(prompt("Digite um número"));
    numero.push(numeroRecebido)
    contagem++
}
document.write(numero);

// Array 2

let maior=[]
let menor=[]
let contador = 0 ;

while(contador<12){
    let Recebido= parseInt(prompt("Digite um número"))
    contador++;

    if(Recebido>50){
        maior.push(Recebido)

    }else if(Recebido<50){
        
        menor.push(Recebido)
    }
}
document.write("Os número maiores que 50 foram: "+ maior + "<br/>"+"<br/>");
document.write("Os número menores que 50 foram:" + menor )

// Array 3

let = InventarioDrofo = ["Anel da invisibilidade"," par de botas mágicas"," par de botas mágicas"," porção do sono"," porção da inocência"," porção da inocência"];

let = InventarioTorper = ["Capa de  invisibilidade"," pedra do despertar"," varinha das varinhas"," porção da inocência"," porção da mentira"," porção da mentira"," porção ant-inteligência"];


delete InventarioTorper [5,1];
InventarioTorper.push("Um par de botas mágica");

delete InventarioDrofo[2]
InventarioDrofo.push("Escudo mágico","Espada mágica");

document.write ("<br><br><br>" + "Inventario do Topper: "+"</strong>"+InventarioTorper +"<br><br>");

document.write ("Inventario do Drofo: "+"</strong>"+InventarioDrofo +"<br>");
