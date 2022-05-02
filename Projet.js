/*Ouverture et fermeture des différentes fenêtre popup*/
/*Bouton connectez-vous et sa fenêtre popup*/
function openForm() {
    document.getElementById("popupForm").style.display = "block";
}

function closeForm() {
    document.getElementById("popupForm").style.display = "none";
}

function valideForm() {
    document.getElementById("popupForm").style.display = "none";
}
/*Bouton et fenêtre popup des épisodes pour les séries, ouverture et fermeture*/
function EpBBad() {
    document.getElementById("S1Ep1BBad").style.display = "block";
}

function CloseEpB() {
    document.getElementById("S1Ep1BBad").style.display = "none";
}

function EpGOT() {
    document.getElementById("S1Ep1GOT").style.display = "block";
}

function CloseEpG() {
    document.getElementById("S1Ep1GOT").style.display = "none";
}

function EpFriends() {
    document.getElementById("S1Ep1Friends").style.display = "block";
}

function CloseEpF() {
    document.getElementById("S1Ep1Friends").style.display = "none";
}

function EpPB() {
    document.getElementById("S1Ep1PB").style.display = "block";
}

function CloseEpPB() {
    document.getElementById("S1Ep1PB").style.display = "none";
}

function EpSopra() {
    document.getElementById("S1Ep1Sopra").style.display = "block";
}

function CloseEpS() {
    document.getElementById("S1Ep1Sopra").style.display = "none";
}

function EpBDL() {
    document.getElementById("S1Ep1BDL").style.display = "block";
}

function CloseEpBDL() {
    document.getElementById("S1Ep1BDL").style.display = "none";
}

function EpV() {
    document.getElementById("S1Ep1V").style.display = "block";
}

function CloseEpV() {
    document.getElementById("S1Ep1V").style.display = "none";
}

function EpPkB() {
    document.getElementById("S1Ep1PkB").style.display = "block";
}

function CloseEpPkB() {
    document.getElementById("S1Ep1PkB").style.display = "none";
}

/*Vérification du remplissage pour l'inscription*/
function validerInsc() {
    var nom = document.getElementById("nom").value
    prenom = document.getElementById("prenom").value
    mail = document.getElementById("mail").value
    ville = document.getElementById("ville").value
    pseudo = document.getElementById("pseudo").value
    mdp = document.getElementById("mdp").value
    mdpc = document.getElementById("cmdp").value

    if (nom === '') {
        window.alert('Veuillez entrer votre nom !');
    } else if (prenom === '') {
        alert('Veuillez entrer votre prénom !');
    } else if (mail === '') {
        alert('Veuillez entrer votre adresse Email !');
    } else if (ville === '') {
        alert('Veuillez indiquer votre adresse !');
    } else if (pseudo === '') {
        alert('Veuillez indiquer un pseudo !');
    } else if (mdp === '') {
        alert('Veuillez saisir un mot de passe !');
    } else if (cmdp === '') {
        alert('Veuillez confirmer votre mot de passe !');
    } else {
        window.location.href = 'Netflux_fr.html';
    }
}

/*Envoi d'un email à une adresse précise, fonction qui ne fonctionne pas comme on le voudrait car nous n'avons pas encore programmer l'adresse main de réception*/
function contact() {
    var dialog = document.getElementById("dialog").value

    if (dialog === '') {
        window.alert("Nous n'avons pas la nature de votre requête !");
    } else {

        alert('Bien reçu !');
    }
}



// Ajouter un i pour faire joindre le style +i et le select(i), sélection des différents bouton de l'inscription//
function select() {
    id = document.getElementById("style");
    if (id.style.backgroundColor == "black") {
        id.style.backgroundColor = "transparent";
    } else {
        id.style.backgroundColor = "black";
    }
};

function select1() {
    id = document.getElementById("style1");
    if (id.style.backgroundColor == "black") {
        id.style.backgroundColor = "transparent";
    } else {
        id.style.backgroundColor = "black";
    }
};

function select2() {
    id = document.getElementById("style2");
    if (id.style.backgroundColor == "black") {
        id.style.backgroundColor = "transparent";
    } else {
        id.style.backgroundColor = "black";
    }
};

function select3() {
    id = document.getElementById("style3");
    if (id.style.backgroundColor == "black") {
        id.style.backgroundColor = "transparent";
    } else {
        id.style.backgroundColor = "black";
    }
};

function select4() {
    id = document.getElementById("style4");
    if (id.style.backgroundColor == "black") {
        id.style.backgroundColor = "transparent";
    } else {
        id.style.backgroundColor = "black";
    }
};

function select5() {
    id = document.getElementById("style5");
    if (id.style.backgroundColor == "black") {
        id.style.backgroundColor = "transparent";
    } else {
        id.style.backgroundColor = "black";
    }
};

function select6() {
    id = document.getElementById("style6");
    if (id.style.backgroundColor == "black") {
        id.style.backgroundColor = "transparent";
    } else {
        id.style.backgroundColor = "black";
    }
};

function select7() {
    id = document.getElementById("style7");
    if (id.style.backgroundColor == "black") {
        id.style.backgroundColor = "transparent";
    } else {
        id.style.backgroundColor = "black";
    }
};

function select8() {
    id = document.getElementById("style8");
    if (id.style.backgroundColor == "black") {
        id.style.backgroundColor = "transparent";
    } else {
        id.style.backgroundColor = "black";
    }
};

function select9() {
    id = document.getElementById("style9");
    if (id.style.backgroundColor == "black") {
        id.style.backgroundColor = "transparent";
    } else {
        id.style.backgroundColor = "black";
    }
};

function select10() {
    id = document.getElementById("style10");
    if (id.style.backgroundColor == "black") {
        id.style.backgroundColor = "transparent";
    } else {
        id.style.backgroundColor = "black";
    }
};

function select11() {
    id = document.getElementById("style11");
    if (id.style.backgroundColor == "black") {
        id.style.backgroundColor = "transparent";
    } else {
        id.style.backgroundColor = "black";
    }
};

function select12() {
    id = document.getElementById("style12");
    if (id.style.backgroundColor == "black") {
        id.style.backgroundColor = "transparent";
    } else {
        id.style.backgroundColor = "black";
    }
};

function select13() {
    id = document.getElementById("style13");
    if (id.style.backgroundColor == "black") {
        id.style.backgroundColor = "transparent";
    } else {
        id.style.backgroundColor = "black";
    }
};

function select14() {
    id = document.getElementById("style14");
    if (id.style.backgroundColor == "black") {
        id.style.backgroundColor = "transparent";
    } else {
        id.style.backgroundColor = "black";
    }
};

function select15() {
    id = document.getElementById("style15");
    if (id.style.backgroundColor == "black") {
        id.style.backgroundColor = "transparent";
    } else {
        id.style.backgroundColor = "black";
    }
};

function select16() {
    id = document.getElementById("style16");
    if (id.style.backgroundColor == "black") {
        id.style.backgroundColor = "transparent";
    } else {
        id.style.backgroundColor = "black";
    }
};

function select17() {
    id = document.getElementById("style17");
    if (id.style.backgroundColor == "black") {
        id.style.backgroundColor = "transparent";
    } else {
        id.style.backgroundColor = "black";
    }
};

function selectA() {
    id = document.getElementById("styleA");
    if (id.style.backgroundColor == "black") {
        id.style.backgroundColor = "transparent";
    } else {
        id.style.backgroundColor = "black";
    }
};

function selectB() {
    id = document.getElementById("styleB");
    if (id.style.backgroundColor == "black") {
        id.style.backgroundColor = "transparent";
    } else {
        id.style.backgroundColor = "black";
    }
};

function selectC() {
    id = document.getElementById("styleC");
    if (id.style.backgroundColor == "black") {
        id.style.backgroundColor = "transparent";
    } else {
        id.style.backgroundColor = "black";
    }
};

function selectD() {
    id = document.getElementById("styleD");
    if (id.style.backgroundColor == "black") {
        id.style.backgroundColor = "transparent";
    } else {
        id.style.backgroundColor = "black";
    }
};

function selectE() {
    id = document.getElementById("styleE");
    if (id.style.backgroundColor == "black") {
        id.style.backgroundColor = "transparent";
    } else {
        id.style.backgroundColor = "black";
    }
};

function selectF() {
    id = document.getElementById("styleF");
    if (id.style.backgroundColor == "black") {
        id.style.backgroundColor = "transparent";
    } else {
        id.style.backgroundColor = "black";
    }
};

function selectG() {
    id = document.getElementById("styleG");
    if (id.style.backgroundColor == "black") {
        id.style.backgroundColor = "transparent";
    } else {
        id.style.backgroundColor = "black";
    }
};

function selectH() {
    id = document.getElementById("styleH");
    if (id.style.backgroundColor == "black") {
        id.style.backgroundColor = "transparent";
    } else {
        id.style.backgroundColor = "black";
    }
};

function selectI() {
    id = document.getElementById("styleI");
    if (id.style.backgroundColor == "black") {
        id.style.backgroundColor = "transparent";
    } else {
        id.style.backgroundColor = "black";
    }
};