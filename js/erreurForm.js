setTimeout("formulaire()", 100);
function formulaire(){
    let nom = document.getElementById("nom");
    let prenom = document.getElementById("prenom");
    let poste = document.getElementById("poste");
    let bureau = document.getElementById("bureau");
    let portable = document.getElementById("portable");
    let modele = document.getElementById("modele");
    let windows10 = document.getElementById("windows10");
    let windows11 = document.getElementById("windows11");
    let proc = document.getElementById("proc");
    let ram = document.getElementById("ram");
    let dd = document.getElementById("dd");
    let ecran = document.getElementById("ecran");
    let cg = document.getElementById("cg");
    let erreurNom = document.getElementById("erreurNom");
    let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"," ","", "-","ë","ü","ö"];
    nom.addEventListener("input", function(){
        let nbJinK = 0;
        for(let j = 0; j < nom.value.length; j++){
            for(let k = 0; k < alphabet.length; k++){
                if(nom.value[j].toLowerCase() == alphabet[k].toLowerCase()){
                    nbJinK++;
                }
            }
        }
        let numberNom = Number(nom.value);
        if(!nom.value && numberNom == 0){
            erreurNom.textContent = "Veuillez renseigner votre nom ! ";
            nom.style = "border: 1px solid red";
        }else{
            if((nom.value.length < 3 || nom.value.length > 16) && numberNom != 0){
                erreurNom.textContent = "Veuillez renseigner un nom compris entre 3 et 16 caractères !";
                nom.style = "border: 1px solid red";
            }else{
                if((!isNaN(numberNom) || nbJinK != nom.value.length)){
                    erreurNom.textContent = "Votre nom ne doit pas comporter de nombre ou de caractère spécial !";
                    nom.style = "border: 1px solid red";
                }else{
                    erreurNom.textContent = "";
                    nom.style = "border: 1px solid green";
                }
            }
        }
    });
    nom.addEventListener("blur", function(){
        if(!nom.value || !isNaN(numberNom) || nbJinK != nom.value.length){
            erreurNom.textContent = "Veuillez renseigner votre nom !";
            nom.style = "border: 1px solid red";
        }else{
            nom.style = "border: 1px solid green";
        }
    });

    
    let erreurPrenom = document.getElementById("erreurPrenom");
    prenom.addEventListener("input", function(){
        let nbJinK = 0;
        for(let j = 0; j < prenom.value.length; j++){
            for(let k = 0; k < alphabet.length; k++){
                if(prenom.value[j].toLowerCase() == alphabet[k].toLowerCase()){
                    nbJinK++;
                }
            }
        }
        let numberPrenom = Number(prenom.value);
        if(!prenom.value && numberPrenom == 0){
            erreurPrenom.textContent = "Veuillez renseigner votre prénom ! ";
            prenom.style = "border: 1px solid red";
        }else{
            if((prenom.value.length < 3 || prenom.value.length > 16) && numberPrenom != 0){
                erreurPrenom.textContent = "Veuillez renseigner un prénom compris entre 3 et 16 caractères !";
                prenom.style = "border: 1px solid red";
            }else{
                if((!isNaN(numberPrenom) || nbJinK != prenom.value.length)){
                    erreurPrenom.textContent = "Votre nom ne doit pas comporter de nombre ou de caractère spécial !";
                    prenom.style = "border: 1px solid red";
                }else{
                    erreurPrenom.textContent = "";
                    prenom.style = "border: 1px solid green";
                }
            }
        }
    });
    prenom.addEventListener("blur", function(){
        if(!prenom.value || !isNaN(numberPrenom) || nbJinK != prenom.value.length){
            erreurPrenom.textContent = "Veuillez renseigner votre prénom !";
            prenom.style = "border: 1px solid red";
        }else{
            prenom.style = "border: 1px solid green";
        }
    });

    let erreurPoste = document.getElementById("erreurPoste");
    poste.addEventListener("input", function(){
        if(!poste.value){
            erreurPoste.textContent = "Veuillez sélectionner un poste !";
            poste.style = "border: 1px solid red";
        }else{
            erreurPoste.textContent = "";
            poste.style = "border: 1px solid green";
        }
    });
    poste.addEventListener("blur", function(){
        if(!poste.value){
            erreurPoste.textContent = "Veuillez sélectionner un poste !";
            poste.style = "border: 1px solid red";
        }else{
            poste.style = "border: 1px solid green";
        }
    });

    let erreurType = document.getElementById("erreurType");
    bureau.addEventListener("click", function(){
        if(!bureau.checked && !portable.checked){
            erreurType.textContent = "Veuillez sélectionner un type !";
        }else{
            erreurType.textContent = "";
        }
    });
    portable.addEventListener("click", function(){
        if(!bureau.checked && !portable.checked){
            erreurType.textContent = "Veuillez sélectionner un type !";
        }else{
            erreurType.textContent = "";
        }
    });
    modele.addEventListener("input", function(){
        if(!modele.value){
            erreurModele.textContent = "Veuillez renseigner votre modèle ! ";
            modele.style = "border: 1px solid red";
        }
        else{
            erreurModele.textContent = "";
            modele.style = "border: 1px solid green";
        }
    });
    modele.addEventListener("blur", function(){
        if(!modele.value){
            erreurModele.textContent = "Veuillez renseigner votre modèle !";
            modele.style = "border: 1px solid red";
        }else{
            modele.style = "border: 1px solid green";
        }
    });
    let erreurSe = document.getElementById("erreurSe");
    windows10.addEventListener("click", function(){
        if(!windows10.checked && !windows11.checked){
            erreurSe.textContent = "Veuillez sélectionner un type !";
        }else{
            erreurSe.textContent = "";
        }
    });
    windows11.addEventListener("click", function(){
        if(!windows10.checked && !windows11.checked){
            erreurSe.textContent = "Veuillez sélectionner un type !";
        }else{
            erreurSe.textContent = "";
        }
    });
    let erreurProc = document.getElementById("erreurProc");
    proc.addEventListener("input", function(){
        if(!proc.value){
            erreurProc.textContent = "Veuillez sélectionner un processeur !";
            proc.style = "border: 1px solid red";
        }else{
            erreurProc.textContent = "";
            proc.style = "border: 1px solid green";
        }
    });
    proc.addEventListener("blur", function(){
        if(!proc.value){
            erreurProc.textContent = "Veuillez sélectionner un processeur !";
            proc.style = "border: 1px solid red";
        }else{
            proc.style = "border: 1px solid green";
        }
    });
    let erreurRam = document.getElementById("erreurRam");
    ram.addEventListener("input", function(){
        if(!ram.value){
            erreurRam.textContent = "Veuillez sélectionner une RAM !";
            ram.style = "border: 1px solid red";
        }else{
            erreurRam.textContent = "";
            ram.style = "border: 1px solid green";
        }
    });
    ram.addEventListener("blur", function(){
        if(!ram.value){
            erreurRam.textContent = "Veuillez sélectionner une RAM !";
            ram.style = "border: 1px solid red";
        }else{
            ram.style = "border: 1px solid green";
        }
    });
    let erreurDd = document.getElementById("erreurDd");
    dd.addEventListener("input", function(){
        if(!dd.value){
            erreurDd.textContent = "Veuillez sélectionner un disque de stockage !";
            dd.style = "border: 1px solid red";
        }else{
            erreurDd.textContent = "";
            dd.style = "border: 1px solid green";
        }
    });
    dd.addEventListener("blur", function(){
        if(!dd.value){
            erreurDd.textContent = "Veuillez sélectionner un disque de stockage !";
            dd.style = "border: 1px solid red";
        }else{
            dd.style = "border: 1px solid green";
        }
    });
    let erreurEcran = document.getElementById("erreurEcran");
    ecran.addEventListener("input", function(){
        if(!ecran.value){
            erreurEcran.textContent = "Veuillez sélectionner un écran !";
            ecran.style = "border: 1px solid red";
        }else{
            erreurEcran.textContent = "";
            ecran.style = "border: 1px solid green";
        }
    });
    ecran.addEventListener("blur", function(){
        if(!ecran.value){
            erreurEcran.textContent = "Veuillez sélectionner un écran !";
            ecran.style = "border: 1px solid red";
        }else{
            ecran.style = "border: 1px solid green";
        }
    });
    let erreurCg = document.getElementById("erreurCg");
    cg.addEventListener("input", function(){
        if(!cg.value){
            erreurCg.textContent = "Veuillez sélectionner une carte graphique !";
            cg.style = "border: 1px solid red";
        }else{
            erreurCg.textContent = "";
            cg.style = "border: 1px solid green";
        }
    });
    cg.addEventListener("blur", function(){
        if(!cg.value){
            erreurCg.textContent = "Veuillez sélectionner une carte graphique !";
            cg.style = "border: 1px solid red";
        }else{
            cg.style = "border: 1px solid green";
        }
    });
    let recapNom = document.getElementById("recapNom");
    nom.addEventListener("input",function(){
        recapNom.textContent = nom.value;
    });
    let recapPrenom = document.getElementById("recapPrenom");
    prenom.addEventListener("input",function(){
        recapPrenom.textContent = prenom.value;
    });
    let recapPoste = document.getElementById("recapPoste");
    poste.addEventListener("input", function(){
        recapPoste.textContent = " - " + poste.value;
    });
    let recapMat = document.getElementById("recapMat");
    bureau.addEventListener("input", function(){
        recapMat.textContent = bureau.value;
    });
    portable.addEventListener("input", function(){
        recapMat.textContent = portable.value;
    });
    let recapModele = document.getElementById("recapModele");
    modele.addEventListener("input", function(){
        recapModele.textContent = modele.value;
    });
    let recapSe = document.getElementById("recapSe");
    windows10.addEventListener("input", function(){
        recapSe.textContent = windows10.value;
    });
    windows11.addEventListener("input", function(){
        recapSe.textContent = windows11.value;
    });
    let recapProc = document.getElementById("recapProc");
    proc.addEventListener("input", function(){
        recapProc.textContent = proc.value;
    });
    let recapRam = document.getElementById("recapRam");
    ram.addEventListener("input", function(){
        recapRam.textContent = ram.value;
    });
    let recapDd = document.getElementById("recapDd");
    dd.addEventListener("input", function(){
        recapDd.textContent = dd.value;
    });
    let recapEcran = document.getElementById("recapEcran");
    ecran.addEventListener("input", function(){
        recapEcran.textContent = ecran.value;
    });
    let recapCg = document.getElementById("recapCg");
    cg.addEventListener("input", function(){
        recapCg.textContent = cg.value;
    });

    let bouton = document.getElementById("submit");
    let erreurSubmit = document.getElementById("erreurSubmit");
    let inputs = document.getElementsByTagName("input");
    let selects = document.getElementsByTagName("select");
    let nbErreur = 0;
    bouton.addEventListener("click", function(){
        let tabMinErreur = [];
        for(let i = 0; i < inputs.length; i++){
            let nbJinK = 0;
            for(let j = 0; j < inputs[i].value.length; j++){
                for(let k = 0; k < alphabet.length; k++){
                    if(inputs[i].value[j].toLowerCase() == alphabet[k].toLowerCase()){
                        nbJinK++;
                    }
                }
            }
            if((inputs[i].name != "modele") && (!inputs[i].value || !isNaN(inputs[i].value) || nbJinK != inputs[i].value.length || (inputs[i].value.length < 3 || inputs[i].value.length > 16)) ){
                nbErreur = 1;
                if(inputs[i].name != "submit"){
                    inputs[i].style = "border: 1px solid red";
                }
                switch(inputs[i].name){
                    case "nom":
                        let numberNom = Number(nom.value);
                        if(!nom.value && numberNom == 0){
                            erreurNom.textContent = "Veuillez renseigner votre nom ! ";
                            nom.style = "border: 1px solid red";
                        }else{
                            if((nom.value.length < 3 || nom.value.length > 16) && numberNom != 0){
                                erreurNom.textContent = "Veuillez renseigner un nom compris entre 3 et 16 caractères !";
                                nom.style = "border: 1px solid red";
                            }else{
                                if((!isNaN(numberNom) || nbJinK != nom.value.length)){
                                    erreurNom.textContent = "Votre nom ne doit pas comporter de nombre ou de caractère spécial !";
                                    nom.style = "border: 1px solid red";
                                }else{
                                    erreurNom.textContent = "";
                                    nom.style = "border: 1px solid green";
                                }
                            }
                        }
                        tabMinErreur.push(inputs[i].name);
                    break;
                    case "prenom":
                        let numberPrenom = Number(prenom.value);
                        if(!prenom.value && numberPrenom == 0){
                            erreurPrenom.textContent = "Veuillez renseigner votre prénom ! ";
                            prenom.style = "border: 1px solid red";
                        }else{
                            if((prenom.value.length < 3 || prenom.value.length > 16) && numberPrenom != 0){
                                erreurPrenom.textContent = "Veuillez renseigner un prénom compris entre 3 et 16 caractères !";
                                prenom.style = "border: 1px solid red";
                            }else{
                                if((!isNaN(numberPrenom) || nbJinK != prenom.value.length)){
                                    erreurPrenom.textContent = "Votre nom ne doit pas comporter de nombre ou de caractère spécial !";
                                    prenom.style = "border: 1px solid red";
                                }else{
                                    erreurPrenom.textContent = "";
                                    prenom.style = "border: 1px solid green";
                                }
                            }
                        }
                        tabMinErreur.push(inputs[i].name);
                    break;
                }
                window.location.href = "index.html#" + tabMinErreur[0];
            }else{
                nbErreur = 0;
            }
        }
        for(let a = 0; a < selects.length; a++){
            if(!selects[a].value){
                nbErreur = 1;
                selects[a].style = "border: 1px solid red";
                switch(selects[a].name){
                    case "poste":
                        if(!selects[a].value){
                            erreurPoste.textContent = "Veuillez sélectionner un poste !";
                        }
                        tabMinErreur.push(selects[a].name);
                    break;
                }
                window.location.href = "index.html#" + tabMinErreur[0];
            }else{
                nbErreur = 0;
            }
        }
        if((!bureau.checked && !portable.checked)){
            nbErreur = 1;
            erreurType.textContent = "Veuillez sélectionner un type !";   
            tabMinErreur.push("typeMat");
            window.location.href = "index.html#" + tabMinErreur[0];
        }else{
            nbErreur = 0;
        }
        for(let i = 0; i < inputs.length; i++){
            if(!inputs[i].value){
                nbErreur = 1;
                if(inputs[i].name != "submit"){
                    inputs[i].style = "border: 1px solid red";
                }
                switch(inputs[i].name){
                    case "modele":
                        if(!modele.value){
                            erreurModele.textContent = "Veuillez renseigner votre modèle !";
                        }
                        tabMinErreur.push("modele");
                    break;
                }
                window.location.href = "index.html#" + tabMinErreur[0];
            }else{
                nbErreur = 0;
            }
        }
        if((!windows10.checked && !windows11.checked)){
            nbErreur = 1;
            erreurSe.textContent = "Veuillez sélectionner un SE !";   
            tabMinErreur.push("se");
            window.location.href = "index.html#" + tabMinErreur[0];
        }else{
            nbErreur = 0;
        }
        for(let d = 0; d < selects.length; d++){
            if(!selects[d].value){
                nbErreur = 1;
                selects[d].style = "border: 1px solid red";
                switch(selects[d].name){
                    case "proc":
                        if(!selects[d].value){
                            erreurProc.textContent = "Veuillez sélectionner un processeur !";
                        }
                        tabMinErreur.push(selects[d].name);
                    break;
                    case "ram":
                        if(!selects[d].value){
                            erreurRam.textContent = "Veuillez sélectionner une RAM !";
                        }
                        tabMinErreur.push(selects[d].name);
                    break;
                    case "dd":
                        if(!selects[d].value){
                            erreurDd.textContent = "Veuillez sélectionner un disque de stockage !";
                        }
                        tabMinErreur.push(selects[d].name);
                    break;
                    case "ecran":
                        if(!selects[d].value){
                            erreurEcran.textContent = "Veuillez sélectionner un écran !";
                        }
                        tabMinErreur.push(selects[d].name);
                    break;
                    case "cg":
                        if(!selects[d].value){
                            erreurCg.textContent = "Veuillez sélectionner une carte graphique !";
                        }
                        tabMinErreur.push(selects[d].name);
                    break;
                }
                window.location.href = "index.html#" + tabMinErreur[0];
            }else{
                nbErreur = 0;
            }
        }
        if(nbErreur == 1){
            erreurSubmit.textContent = "Veuillez remplir tous les champs !";
            document.getElementById("submit2").style.border = "1px solid rgba(0,0,0,0)";
        }else{
            erreurSubmit.textContent = "";
            window.location.href = "index.html?nom="+nom.value+"&prenom="+prenom.value+"&poste="+poste.value+"&modele="+modele.value+"&proc="+proc.value+"&ram="+ram.value+"&dd="+dd.value+"&ecran="+ecran.value+"&cg="+cg.value+"&submit=Envoyer+les+données";
        }   
    });
}
function download(filename, textInput){
    let element = document.createElement('a');
    element.setAttribute('href','data:text/plain;charset=utf-8, ' + encodeURIComponent(textInput));
    element.setAttribute('download', filename);
    document.body.appendChild(element);
    element.click();
};
document.getElementById("submit2").addEventListener("click", function () {
    let type = "";
    if(bureau.checked){
        type = "bureau";
    }else{
        type = "portable";
    }
    let se = "";
    if(windows10.checked){
        se = "windows 10";
    }else{
        se = "windows 11";
    }
    let text = "Identité : " + nom.value + prenom.value + "-" + poste.value + 
            "\n Matériel : " + type + 
            "\n Modèle : " + modele.value +
            "\n Système d'exploitation : " + se +
            "\n Processeur : " + proc.value + 
            "\n RAM : " + ram.value +
            "\n Disque de stockage : " + dd.value +
            "\n Ecran : " + ecran.value + 
            "\n Carte Graphique : " + cg.value; 
    ;
    let filename = nom.value + prenom.value;
    download(filename, text);
}, false);
