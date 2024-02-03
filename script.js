function flipCard() {
    var card = document.querySelector('.card');
    card.style.transform = 'rotateY(180deg)';
  }
  
  function closeCard() {
    var card = document.querySelector('.card');
    card.style.transform = 'rotateY(0deg)';
  }
  