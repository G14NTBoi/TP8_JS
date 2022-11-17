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
  } else if (clickedCards[0].classList.contains("pic3") && clickedCards[1].classList.contains("pic3")){
     matched = true;
  }  else if (clickedCards[0].classList.contains("pic4") && clickedCards[1].classList.contains("pic4")){
     matched = true;
  }
   
  // advanced version
// match =  (clickedCards[0].classList.contains("pic1") && clickedCards[0].classList.contains("pic1") ) || (clickedCards[0].classList.contains("pic2") && clickedCards[0].classList.contains("pic2"))
  if (matched){
    removeCards(clickedCards[0], clickedCards[1]);
    
  } else{
    unflipCards(clickedCards[0], clickedCards[1]);
  }



  
}
function removeCards(cardA, cardB) {
  pause = setTimeout(function() {
   cardA.classList.remove("clicked");
  cardB.classList.remove("clicked");
  
  cardA.classList.add("matched");
   cardB.classList.add("matched");
  
  cardsClicked = 0;
    checkWinning();
  }, 1000);
}
function unflipCards(cardA, cardB){
  pause = setTimeout(function() {
  cardA.classList.remove("clicked");
  cardB.classList.remove("clicked");
  cardsClicked = 0;
  }, 1000);
}
function checkWinning() {
   remainingCards = cardList = document.querySelectorAll (".card");
  countCards = remainingCards.length;
  
  for(c = 0; c < remainingCards.length; c++)
    {
       if (!remainingCards[c].classList.contains("matched"))
         {
           return;
         }
    }
   document.getElementById("mainTable").innerHTML = "You Matched All of The Cards!"
}
function shuffleCards() {
 table = document.querySelector("#mainTable");
  cardCount = table.children.length;
  
  for (c = 0; c < cardCount; c++){
    randomCard = Math.floor( Math.random() * cardCount);
    cardToMove = table.children[randomCard];
    table.appendChild(cardToMove);
  }
}

window.onload = function (){
  shuffleCards();
 cardList = document.querySelectorAll (".card");
  cardCount = cardList.length; // number of cards on table.
  
  for (c = 0; c < cardCount; c++){
    cardList[c].onclick = function(){
      cardClicked(this);
    }  
  }
  
}