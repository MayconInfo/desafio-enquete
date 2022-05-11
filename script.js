let encremento = 0;
let largura = 0;
let mover = 540;
let count = 0;
let rigoni = 0;
let calerri = 5;
let luciano = 5;
function sim1(){
    encremento++;
    largura = largura + 20;
    document.getElementById("sp").innerHTML = encremento;
    document.querySelector("#sp").style.width = largura+"px";
    if (encremento > luciano){
        calerri = encremento;
        mover = mover - 8;
        document.querySelector(".result").style.left = mover+"px";
        document.querySelector("#sp").style.left = mover+"px";
        document.querySelector("#Fc").style.left = mover+"px";
        document.querySelector("#nao").style.left = mover+"px";
        document.querySelector("#sim").style.left = mover+"px";
    } 
    
   
}   

function nao1(){
    count++;
    document.getElementById("fc").innerHTML = count;
    rigoni = rigoni + 20;
    document.querySelector("#fc").style.width = rigoni+"px";
    if (count > calerri){
        luciano = count;
        mover = mover - 8;
        document.querySelector(".result").style.left = mover+"px";
        document.querySelector("#sp").style.left = mover+"px";
        document.querySelector("#fc").style.left = mover+"px";
        document.querySelector("#nao").style.left = mover+"px";
        document.querySelector("#sim").style.left = mover+"px";
    }
}   