//Creating a class for players that has a constructor that takes a name. 
//It creates an empty array to store the players hand of cards. And tallys points. IT has a method to play a card from the players hand, the top card, 
//which would be the last card in the array. The pop method removed the last element of an array and returns it. 

class Player {
    constructor(name) {
      this.name = name; 
      this.hand = []; 
      this.points = 0; 
    }
  
    
    playCard() {
      return this.hand.pop(); 
    }
  }

// Createing a class for the Deck of cards. It will have an array to store the cards in, and two srting variables of suit and rank.
//It has a method for creating a new deck of cards and  It has a method called shuffle that will shuffle the deck. 

class Deck {
    constructor() {
      this.cards = []; 
      let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
      let suits = ['hearts', 'diamonds', 'clubs', 'spades'];
  
    // This for loop creates a deck by combining the two string variables, ranks and suits.
      for (const suit of suits) {
        for (const rank of ranks) {
          this.cards.push(new Card(rank, suit));
        }
      }
  
      this.shuffle(); 
    }

    shuffle() {
      for (let i = this.cards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
      }
    }
  }

// Creating the Card class that will take in the rank and suit arguments from the Deck class to define an individual card
class Card {
    constructor(rank, suit) {
      this.rank = rank; 
      this.suit = suit; 
    }
  }

// Creating the class for the game War. It's constructor creates a new deck, from the class Deck, and new players from the Player class.
// It has a method called dealCards that deals 26 cards from the deck to each player, by pushing the last card for the deck array to the hand array in the Player class. 
// It also has a method that plays a round of the game, called playRound. It invokes the playCard method from the Player class for each player. It then has a method called compareCards that will compare the two rand order of the two cards. The if statement in the playRound method invokes that 
//method to determine which player wins the round and assign points to the  array 'points'. 
//

class WarGame {
    constructor() {
      this.deck = new Deck(); 
      this.player1 = new Player('P 1'); 
      this.player2 = new Player('P 2'); 
    }
  
    
    dealCards() {
      for (let i = 0; i < 26; i++) {
        this.player1.hand.push(this.deck.cards.pop()); 
        this.player2.hand.push(this.deck.cards.pop()); 
      }
    }


   
    playRound() {
        let card1 = this.player1.playCard(); 
        let card2 = this.player2.playCard(); 
    
       
        if (this.compareCards(card1, card2) > 0) {
          this.player1.points++; 
        } else if (this.compareCards(card1, card2) < 0) {
          this.player2.points++; 
        }
      }
    
    compareCards(card1, card2) {
      let rankOrder = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
      let rank1 = rankOrder.indexOf(card1.rank);
      let rank2 = rankOrder.indexOf(card2.rank);
  
      return rank1 - rank2; 
    }
  
    

    // with the War game class made, I made a class to play through 26 rounds of the game. The meothod is called playWar, and invokes the dealCards method first. The for loop then iterates through 26 rounds of the game, then invokes the method diplayResults
    // with logs to the console the winner of the game of if there is a tie. The if/else statement takes the two arrays of the players points and compares them. If one is not larger than the other, the else statement of "It's a tie" returns.  
  

    // Method to play the entire game
    playWar() {
      this.dealCards(); // Deal cards to both players
  
      // Play 26 rounds (one for each card in the deck)
      for (let i = 0; i < 26; i++) {
        this.playRound(); // Play a round of the game
      }
  
      this.displayResults(); // Display the final results of the game
    }
  
    // Method to display the final results of the game
    displayResults() {
      console.log(`${this.player1.name} points: ${this.player1.points}`);
      console.log(`${this.player2.name} points: ${this.player2.points}`);
  
      // Determine and display the winner or declare a tie
      if (this.player1.points > this.player2.points) {
        console.log(`${this.player1.name} wins!`);
      } else if (this.player1.points < this.player2.points) {
        console.log(`${this.player2.name} wins!`);
      } else {
        console.log('It\'s a tie!');
      }
    }
  }


let warGame = new WarGame();
warGame.playWar();