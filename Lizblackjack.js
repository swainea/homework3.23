
function runGame() {


    var display = document.querySelector('figure');
    var cards = ['2','3','4','5','6','7','8', '9', '10', 'J', 'Q', 'K', 'A'];

    display.innerHTML = cards[drawCard()];
    display.innerHTML = display.innerHTML + ' ' + cards[drawCard()];

    function checkResult(standing, hitting) {
        var hand = display.innerHTML.split(' ');
        var cardValue = 0;

        hand.forEach(function determineValue(card, i) {
            if (Number(card)) {
                cardValue = cardValue + Number(card);
            }

            if (card === 'J' || card == 'Q' || card === 'K'){
              cardValue = cardValue + 10;
            }

            if (card === 'A') {
              cardValue = cardValue + 11;
            }

        });

            if (cardValue < 16 && standing) {
                alert('Dealer wins.');
            }
            if (cardValue === 16 || cardValue === 17 || cardValue === 18) {
                alert('Push!');
            }
            if (cardValue === 19 || cardValue === 20 || cardValue === 21) {
                alert('You win!');
            }
            if (cardValue > 21) {
                alert('You Bust.');
            }

    }

    document.getElementById('stand').addEventListener('click', function () {
      checkResult(true,false);
    });


    function drawCard(){
       return (Math.floor(Math.random() * cards.length));
    }
    console.log(drawCard());


    document.getElementById('hit').addEventListener('click', function() {
          display.innerHTML = display.innerHTML + ' ' + cards[drawCard()];
          checkResult(false,true);
    });

}

runGame();
