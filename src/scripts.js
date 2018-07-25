//const moviesTab = [];

const moviesTab = [
    {
        title : "Jurassic Park",
        poster : "JurassicPark.jpg",
        alt : "Jurassic Park",
        link : "http://www.allocine.fr/film/fichefilm_gen_cfilm=8488.html",
        synopsis : 'Ne pas réveiller le chat qui dort... C\'est ce que le milliardaire John Hammond aurait dû se rappeler avant de se lancer dans le "clonage" de dinosaures. C\'est à partir d\'une goutte de sang absorbée par un moustique fossilisé que John Hammond et son équipe ont réussi à faire renaître une dizaine d\'espèces de dinosaures. Il s\'apprête maintenant avec la complicité du docteur Alan Grant, paléontologue de renom, et de son amie Ellie, à ouvrir le plus grand parc à thème du monde. Mais c\'était sans compter la cupidité et la malveillance de l\'informaticien Dennis Nedry, et éventuellement des dinosaures, seuls maîtres sur l\'île...'
    },
    {
        title : "Matrix",
        poster : "Matrix.jpg",
        alt : "Matrix",
        link : "http://www.allocine.fr/film/fichefilm_gen_cfilm=19776.html",
        synopsis : 'Programmeur anonyme dans un service administratif le jour, Thomas Anderson devient Neo la nuit venue. Sous ce pseudonyme, il est l\'un des pirates les plus recherchés du cyber-espace. A cheval entre deux mondes, Neo est assailli par d\'étranges songes et des messages cryptés provenant d\'un certain Morpheus. Celui-ci l\'exhorte à aller au-delà des apparences et à trouver la réponse à la question qui hante constamment ses pensées : qu\'est-ce que la Matrice ? Nul ne le sait, et aucun homme n\'est encore parvenu à en percer les defenses. Mais Morpheus est persuadé que Neo est l\'Elu, le libérateur mythique de l\'humanité annoncé selon la prophétie. Ensemble, ils se lancent dans une lutte sans retour contre la Matrice et ses terribles agents... '
    },
    {
        title : "Toy Story",
        poster : "ToyStory.jpg",
        alt : "Toy Story",
        link : "ToyStory.html",
        synopsis : 'Quand le jeune Andy quitte sa chambre, ses jouets se mettent à mener leur propre vie sous la houlette de son pantin préféré, Woody le cow-boy. Andy ignore également que chaque anniversaire est une source d\'angoisse pour ses jouets qui paniquent à l\'idée d\'être supplantés par un nouveau venu. Ce qui arrive quand Buzz l\'éclair est offert à Andy. Cet intrépide aventurier de l\'espace, venu d\'une lointaine galaxie, va semer la zizanie dans ce petit monde et vivre avec Woody d\'innombrables aventures aussi dangereuses que palpitantes.'
    },
    {
        title : "Jurassic Paaaaaaaaaaaaaaaaaaaaaaaaaark",
        poster : "JurassicPark.jpg",
        alt : "Jurassic Park",
        link : "http://www.allocine.fr/film/fichefilm_gen_cfilm=8488.html",
        synopsis : 'Ne pas réveiller le chat qui dort... C\'est ce que le milliardaire John Hammond aurait dû se rappeler avant de se lancer dans le "clonage" de dinosaures. C\'est à partir d\'une goutte de sang absorbée par un moustique fossilisé que John Hammond et son équipe ont réussi à faire renaître une dizaine d\'espèces de dinosaures. Il s\'apprête maintenant avec la complicité du docteur Alan Grant, paléontologue de renom, et de son amie Ellie, à ouvrir le plus grand parc à thème du monde. Mais c\'était sans compter la cupidité et la malveillance de l\'informaticien Dennis Nedry, et éventuellement des dinosaures, seuls maîtres sur l\'île...'
    },
    {
        title : "Matrix",
        poster : "Matrix.jpg",
        alt : "Matrix",
        link : "http://www.allocine.fr/film/fichefilm_gen_cfilm=19776.html",
        synopsis : 'Programmeur anonyme dans un service administratif le jour, Thomas Anderson devient Neo la nuit venue. Sous ce pseudonyme, il est l\'un des pirates les plus recherchés du cyber-espace. A cheval entre deux mondes, Neo est assailli par d\'étranges songes et des messages cryptés provenant d\'un certain Morpheus. Celui-ci l\'exhorte à aller au-delà des apparences et à trouver la réponse à la question qui hante constamment ses pensées : qu\'est-ce que la Matrice ? Nul ne le sait, et aucun homme n\'est encore parvenu à en percer les defenses. Mais Morpheus est persuadé que Neo est l\'Elu, le libérateur mythique de l\'humanité annoncé selon la prophétie. Ensemble, ils se lancent dans une lutte sans retour contre la Matrice et ses terribles agents... '
    },
    {
        title : "Toy Story",
        poster : "ToyStory.jpg",
        alt : "Toy Story",
        link : "ToyStory.html",
        synopsis : 'Quand le jeune Andy quitte sa chambre, ses jouets se mettent à mener leur propre vie sous la houlette de son pantin préféré, Woody le cow-boy. Andy ignore également que chaque anniversaire est une source d\'angoisse pour ses jouets qui paniquent à l\'idée d\'être supplantés par un nouveau venu. Ce qui arrive quand Buzz l\'éclair est offert à Andy. Cet intrépide aventurier de l\'espace, venu d\'une lointaine galaxie, va semer la zizanie dans ce petit monde et vivre avec Woody d\'innombrables aventures aussi dangereuses que palpitantes.'
    }
];

const mainElt = document.getElementsByTagName("main")[0];
//console.log(mainElt);


moviesTab.forEach(movie => {   //function(movie)
    //console.log(movie);
    //console.log(movie.alt)
    const mDiv = document.createElement("div");
    //const mLink = document.createElement("a");
    //mLink.setAttribute ('href', movie.link);
    //mLink.setAttribute('title', movie.title);
    const mImg = document.createElement('img');
    mImg.setAttribute('alt', movie.alt);
    mImg.setAttribute('src', movie.poster);
    const mPar = document.createElement('p');
    mPar.innerText = movie.title;
    //mLink.appendChild(mImg);
    //mLink.appendChild(mPar);
    //mDiv.appendChild(mLink);
    mDiv.appendChild(mImg);
    mDiv.appendChild(mPar)
    mainElt.appendChild(mDiv);

    mImg.addEventListener('click',createDescription.bind(mImg, movie));
    //mImg.addEventListener('click',mDivMod.appendChild(mDivMod2));
});

function createDescription(movie) {
    //Modal Div creation
    const mDivMod = document.createElement('div');
    mDivMod.setAttribute('id','myModal')
    mDivMod.setAttribute('class','modal')
    const mDivMod2 = document.createElement('div');
    mDivMod2.setAttribute('class', 'modal-content');
    const mSpanMod = document.createElement('span')
    mSpanMod.setAttribute('class', 'close')
    mSpanMod.innerHTML='&times;'
    const mH6Mod = document.createElement('h6')
    mH6Mod.innerText=movie.synopsis
    const mImgMod = document.createElement('img');
    mImgMod.setAttribute('alt', movie.alt);
    mImgMod.setAttribute('src', movie.poster);

    mainElt.appendChild(mDivMod);
    mDivMod.appendChild(mDivMod2);
    mDivMod2.appendChild(mSpanMod);
    mDivMod2.appendChild(mH6Mod);
    mDivMod2.appendChild(mImgMod);
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == mDivMod) {
        //mDivMod.style.display = 'none';
        closePopup();
        }
    }
    // When the user clicks on <span> (x), close the modal
    mSpanMod.onclick = function() {
        closePopup();
        }
}

// When the user clicks Escape, close the modal
document.addEventListener('keypress', detectEscapeKey);

//Function to detect the Escape key and close the popup
function detectEscapeKey (event) {
    console.log(`input event. you have just inputed "${event.keyCode}"`);
    if( 27 === event.keyCode) {
        closePopup();
    }
}

//Function to close the popoup
function closePopup(){
    const eltToClose = document.getElementsByClassName('modal')[0]
    mainElt.removeChild(eltToClose);
    document.removeEventListener('keypress', detectEscapeKey)
}