// JavaScript Code for TP8


//set up card tracker
cardsClicked = 0;

function cardClicked(what) {
  if (!what.classList.contains("matched")){
    
  
  
    if (what.classList.contains("clicked")){
      // already clicked, act appropriately
      what.classList.remove("clicked");
      cardsClicked--;
    } else {
      // not clicked already
      what.classList.add("clicked");
      cardsClicked++;
      if(cardsClicked == 2){
        cardCompare();
      }
    } 
  }
}
function cardCompare (){
  
   clickedCards = document.querySelectorAll (".clicked");
  
 //first clicked element is clickedCards[0]
  // second clicked element is clickedCards[1]
  matched = false;
  if (clickedCards[0].classList.contains("pic1") && clickedCards[1].classList.contains("pic1") ){
    matched = true; //matched pic1
  } else if (clickedCards[0].classList.contains("pic2") && clickedCards[1].classList.contains("pic2")) {
    matched = true; //matched pic2         
  }
  // advanced version
// match =  (clickedCards[0].classList.contains("pic1") && clickedCards[0].classList.contains("pic1") ) || (clickedCards[0].classList.contains("pic2") && clickedCards[0].classList.contains("pic2"))
  if (matched){
    removeCards(clickedCards[0], clickedCards[1]);
    
  } else{
    unflipCards(clickedCards[0], clickedCards[1]);
  }

function removeCards(cardA, cardB) {
   cardA.classList.remove("clicked");
  cardB.classList.remove("clicked");
  
  cardA.classList.add("matched");
   cardB.classList.add("matched");
  
  cardsClicked = 0;
}
function unflipCards(cardA, cardB){
  cardA.classList.remove("clicked");
  cardB.classList.remove("clicked");
  cardsClicked = 0;
}
}


window.onload = function (){
 cardList = document.querySelectorAll (".card");
  cardCount = cardList.length; // number of cards on table.
  
  for (c = 0; c < cardCount; c++){
    cardList[c].onclick = function(){
      cardClicked(this);
    }  
  }
  
}