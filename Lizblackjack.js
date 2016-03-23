
function runGame() {

    var display = document.querySelector('figure');
    var cards = ['2','3','4','5','6','7','8', '9', '10', 'J', 'Q', 'K', 'A'];

    function checkResult(standing, hitting) {
        var hand = display.innerHTML.split(' ');
        // console.log(hand);  // gives you an array of strings
        var cardValue = 0; // start at 0 then will be the sum of the users cards as hit happens

        // we want "cards" here to be the string from the array
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

        }); console.log(cardValue);

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

      // display.innerHTML = '';
      // card = (Math.floor(Math.random() * cards.length));
      // display.innerHTML = cards[card];
    }

    document.getElementById('stand').addEventListener('click', function () {
      checkResult(true,false);
      console.log("stand");
    });

    card = (Math.floor(Math.random() * cards.length));
    display.innerHTML = cards[card]; // this adds one card in runGame
    card = (Math.floor(Math.random() * cards.length));
    display.innerHTML = display.innerHTML + ' ' + cards[card]; // this takes the new random number to add a second card

    console.log(display.innerHTML);

    document.getElementById('hit').addEventListener('click', function() {
          var card = (Math.floor(Math.random() * cards.length));
          display.innerHTML = display.innerHTML + " " + cards[card]; // fine up to here ?//
          checkResult(false,true); // if its
      // console.log("hit");
    });

}

runGame();
