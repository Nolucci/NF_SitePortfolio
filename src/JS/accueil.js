let oeil = document.getElementsByClassName("oeil-pupille");
//let suivreSouris = true;

document.onmousemove = function (e) {
    //if (!suivreSouris) return; // Si suivreSouris est false, ne fait rien

    let x = e.clientX * 70 / window.innerWidth + "%";
    let y = e.clientY * 70 / window.innerHeight + "%";

    for (let i = 0; i < oeil.length; i++) {
        oeil[i].style.left = x;
        oeil[i].style.top = y;
        oeil[i].style.transform = "translate(-" + x + ",-" + y + ")";
    }
};

/* Définir un délai après lequel l'œil cessera de suivre la souris
setTimeout(function() {
    suivreSouris = false;
}, 1000); // Remplacez 10000 par le nombre de millisecondes souhaité
*/