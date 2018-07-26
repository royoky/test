const mainElt = document.getElementsByTagName("main")[0];
//console.log(mainElt);

fetch('moviesTab.json')
  .then(function(response) {
    //throw 'error'; //pour éviter d'avoir l'erreur sur le foreach
    return response.json();
  })
  .then(function(movies) {
    movies.forEach(movie => {   //function(movie)
        const mDiv = document.createElement("div");
        const mImg = document.createElement('img');
        mImg.setAttribute('alt', movie.alt);
        mImg.setAttribute('src', movie.poster);
        const mPar = document.createElement('p');
        mPar.innerText = movie.title;
        mDiv.appendChild(mImg);
        mDiv.appendChild(mPar)
        mainElt.appendChild(mDiv);    
        mImg.addEventListener('click',createDescription.bind(mImg, movie));
    });
  })
  .catch(error => {
      console.error(error);
      console.log(error);
  })


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