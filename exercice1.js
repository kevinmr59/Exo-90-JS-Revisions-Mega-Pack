//exo1
let nomVoiture = 'peugeot';

//exo 2
let x = 50;

//exo 4
let z = 5;
let w = 10;
let demo =document.getElementById('demo');
demo.innerHTML = "z vaux " + z + ", w vaux " + w  + ", le résultat est : " + ( z + w );

//exo 5
let d = z+w ;
alert (d);

//exo 6
let prenom = "john", nom = "doe", age = 35 ;

//exo 7
alert (10*5);

//exo 8
alert (10/2);
alert (15%9);

//exo 9
let l = 10;
let k = 5;
l = l+k;

// exo 10
function maFonction (){
    alert ("salut tout le monde ! ");}
maFonction();

//exo 11
function maFunctionDeRetour (){
    alert ("bonjour");}
window.maFunctionDeRetour();

//exo 13
let monBoutton = document.getElementById('monBoutton');
monBoutton.addEventListener('click' , function (){
    alert("alert");
});
//exo 14
let changeSurOver = document.getElementById('changeSurOver');
changeSurOver.addEventListener('mouseover', function (){
    changeSurOver.style.backgroundColor = 'red';
});

//exo 15
let txt = "une longue phrase ";
let longueur = txt.length;
alert (longueur);

//exo 16
let str1 = "bonjour";
let str2 = "le monde";
alert (str1 + str2);

//exo 17
let listeVoitures = ["Renault","Volvo","Citroen"];
let maVoiture = listeVoitures[1];

//exo 18
listeVoitures[0] = "ford";

//exo19
alert(listeVoitures.length);

// exo 20
listeVoitures.pop();

//exo 21
listeVoitures.push ("ferrari");

//exo 22
let rNumber = Math.random();

//exo 23
let fNumber = 15.7;
Math.floor (fNumber);

//exo 24
let nombreUn = 10 ;
let nombreDeux = 5 ;
alert (nombreUn !== nombreDeux);

//exo 25
let nombreTrois = 10;
let nombreQuatre = 10;
alert (nombreTrois === nombreQuatre);

//exo 26
for (let i = 0; i < 9; i++) {
    console.log(i);
}

//exo 27
let tableau = ["pomme","banane","poire"];
for (let i = 0; i < tableau.length; i++ ){
    console.log(tableau[i]);
}

//exo 28
let p = 0;
while ( p < 10 ) {
    p++;
}

//exo 29
let b = 0;
while ( p < 10 ) {
    b+=2;
}

// exo 30
for (let i = 0; i < 10; i++ ){
    if ( i === 5 ){
        console.log("enfin fini ");
    }
}









