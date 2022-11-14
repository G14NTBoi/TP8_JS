// JavaScript Code for TP8

window.onload = function (){
 cardList = document.getElementsByClassName ("card");
  cardCount = cardList.length; // number of cards on table.
  
  for (c = 0; c < cardCount; c++){
    cardList[c].onclick = function(){
      this.classList.toggle("clicked");
    }  
  }
  
}