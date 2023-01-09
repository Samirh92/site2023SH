function calcul_moyenne()
{
var note1=prompt("Donner une premiere note svp:");
var note2=prompt("Donner une deuxieme note svp:");
var note3=prompt("Donner une troisieme note svp:");
var somme= Number  (note1) +Number (note2) + Number (note3) ;
var moyenne = somme / 3 ;
document.write ("voici la somme:" +somme);
}