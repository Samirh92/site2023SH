function affichageTab()
{
    document.write('<table border=2px width=30%');
    for(let i = 0 ; i <= 5 ; i++){
        document.write('<tr><td>*</td><td>*</td><tr>');
    }
    document.write('</table>');
}
function affichageTab2(){
    var count = prompt("Combien de Lignes souhaitez vous?");
    document.write('<table border=2px width=30%');
    for(let i = 1;i<=count;i++){
        document.write("<tr><td>"+i+"</td><td>*</td><td>*</td><td>");
    }
    document.write('</table>');
}
function seconnecter(){
    var identifiant =prompt ("entrer votre identifiant")
    var mdp =prompt("entrer votre MDP")
    if(identifiant == "admin"&& mdp == "admin"){
        document.write("Bienvenue : "+identifiant);
    }
    else 
    alert("Accés Refusé")
}
function seconnecter2(){
    var i = 0;
    do {
        var id=prompt("Donnez votre nom d'utilisateur");
        var mdp=prompt("Entrez votre mot de passe");
        if (id == "admin"&& mdp ==" admin")
    { 
        document.write("Bienvenue :   "+id);
        break;
    }
    else
    alert("Accés refusé");
    i+=1 ;
    }while (i<3);
    if (i==3)
    alert("Délai dépassé"); }
   
    function cdc(){
        var chaine=prompt("Donnez un mot");
        document.write(chaine.toUpperCase()+"<br>");
        document.write(chaine.toLowerCase()+"<br>");
        document.write("la chaine contient     "+ chaine.length+" caractères   "+"<br>");
        document.write("la première lettre est   "+chaine.substr(0,1)+"<br>");
    }
function swich(){
    var color = prompt ("Entrez une couleur");
    switch(color){
    
        case "rouge":document.body.style.background= "red"
        break;
        case "ROUGE":document.body.style.background= "red"
        break;
        case "bleu" :document.body.style.background= "blue"
        break;
        case "BLEU" :document.body.style.background= "blue"
        break;
 
        default:alert("couleur non définie");}
    
}
