//these are the card decks
let playerDeck = [];
let wonRounds = [];
let lostRounds = [];
let sum = 0
let aceCard = 0
var totalDecks = {
    deck1: {
        hearts: {
            ace:    1,
            two:    2,
            three:  3,
            four:   4,
            five:   5,
            six:    6,
            seven:  7,
            eight:  8,
            nine:   9,
            ten:    10,
            jack:   10,
            queen:  10,
            king:   10,
        },

        spades: {
            ace:    1,
            two:    2,
            three:  3,
            four:   4,
            five:   5,
            six:    6,
            seven:  7,
            eight:  8,
            nine:   9,
            ten:    10,
            jack:   10,
            queen:  10,
            king:   10,
        },

        diamonds: {
            ace:    1,
            two:    2,
            three:  3,
            four:   4,
            five:   5,
            six:    6,
            seven:  7,
            eight:  8,
            nine:   9,
            ten:    10,
            jack:   10,
            queen:  10,
            king:   10,
        },

        clubs: {
            ace:    1,
            two:    2,
            three:  3,
            four:   4,
            five:   5,
            six:    6,
            seven:  7,
            eight:  8,
            nine:   9,
            ten:    10,
            jack:   10,
            queen:  10,
            king:   10,
        },
    },
    
    deck2: {
        hearts: {
            ace:    1,
            two:    2,
            three:  3,
            four:   4,
            five:   5,
            six:    6,
            seven:  7,
            eight:  8,
            nine:   9,
            ten:    10,
            jack:   10,
            queen:  10,
            king:   10,
        },

        spades: {
            ace:    1,
            two:    2,
            three:  3,
            four:   4,
            five:   5,
            six:    6,
            seven:  7,
            eight:  8,
            nine:   9,
            ten:    10,
            jack:   10,
            queen:  10,
            king:   10,
        },

        diamonds: {
            ace:    1,
            two:    2,
            three:  3,
            four:   4,
            five:   5,
            six:    6,
            seven:  7,
            eight:  8,
            nine:   9,
            ten:    10,
            jack:   10,
            queen:  10,
            king:   10,
        },

        clubs: {
            ace:    1,
            two:    2,
            three:  3,
            four:   4,
            five:   5,
            six:    6,
            seven:  7,
            eight:  8,
            nine:   9,
            ten:    10,
            jack:   10,
            queen:  10,
            king:   10,
        },
    },
    deck3: {
        hearts: {
            ace:    1,
            two:    2,
            three:  3,
            four:   4,
            five:   5,
            six:    6,
            seven:  7,
            eight:  8,
            nine:   9,
            ten:    10,
            jack:   10,
            queen:  10,
            king:   10,
        },

        spades: {
            ace:    1,
            two:    2,
            three:  3,
            four:   4,
            five:   5,
            six:    6,
            seven:  7,
            eight:  8,
            nine:   9,
            ten:    10,
            jack:   10,
            queen:  10,
            king:   10,
        },

        diamonds: {
            ace:    1,
            two:    2,
            three:  3,
            four:   4,
            five:   5,
            six:    6,
            seven:  7,
            eight:  8,
            nine:   9,
            ten:    10,
            jack:   10,
            queen:  10,
            king:   10,
        },

        clubs: {
            ace:    1,
            two:    2,
            three:  3,
            four:   4,
            five:   5,
            six:    6,
            seven:  7,
            eight:  8,
            nine:   9,
            ten:    10,
            jack:   10,
            queen:  10,
            king:   10,
        },
    },

    deck4: {
        hearts: {
            ace:    1,
            two:    2,
            three:  3,
            four:   4,
            five:   5,
            six:    6,
            seven:  7,
            eight:  8,
            nine:   9,
            ten:    10,
            jack:   10,
            queen:  10,
            king:   10,
        },

        spades: {
            ace:    1,
            two:    2,
            three:  3,
            four:   4,
            five:   5,
            six:    6,
            seven:  7,
            eight:  8,
            nine:   9,
            ten:    10,
            jack:   10,
            queen:  10,
            king:   10,
        },

        diamonds: {
            ace:    1,
            two:    2,
            three:  3,
            four:   4,
            five:   5,
            six:    6,
            seven:  7,
            eight:  8,
            nine:   9,
            ten:    10,
            jack:   10,
            queen:  10,
            king:   10,
        },

        clubs: {
            ace:    1,
            two:    2,
            three:  3,
            four:   4,
            five:   5,
            six:    6,
            seven:  7,
            eight:  8,
            nine:   9,
            ten:    10,
            jack:   10,
            queen:  10,
            king:   10,
        },
    },

    deck5: {
        hearts: {
            ace:    1,
            two:    2,
            three:  3,
            four:   4,
            five:   5,
            six:    6,
            seven:  7,
            eight:  8,
            nine:   9,
            ten:    10,
            jack:   10,
            queen:  10,
            king:   10,
        },

        spades: {
            ace:    1,
            two:    2,
            three:  3,
            four:   4,
            five:   5,
            six:    6,
            seven:  7,
            eight:  8,
            nine:   9,
            ten:    10,
            jack:   10,
            queen:  10,
            king:   10,
        },

        diamonds: {
            ace:    1,
            two:    2,
            three:  3,
            four:   4,
            five:   5,
            six:    6,
            seven:  7,
            eight:  8,
            nine:   9,
            ten:    10,
            jack:   10,
            queen:  10,
            king:   10,
        },

        clubs: {
            ace:    1,
            two:    2,
            three:  3,
            four:   4,
            five:   5,
            six:    6,
            seven:  7,
            eight:  8,
            nine:   9,
            ten:    10,
            jack:   10,
            queen:  10,
            king:   10,
        },
    },

    deck6: {
        hearts: {
            ace:    1,
            two:    2,
            three:  3,
            four:   4,
            five:   5,
            six:    6,
            seven:  7,
            eight:  8,
            nine:   9,
            ten:    10,
            jack:   10,
            queen:  10,
            king:   10,
        },

        spades: {
            ace:    1,
            two:    2,
            three:  3,
            four:   4,
            five:   5,
            six:    6,
            seven:  7,
            eight:  8,
            nine:   9,
            ten:    10,
            jack:   10,
            queen:  10,
            king:   10,
        },

        diamonds: {
            ace:    1,
            two:    2,
            three:  3,
            four:   4,
            five:   5,
            six:    6,
            seven:  7,
            eight:  8,
            nine:   9,
            ten:    10,
            jack:   10,
            queen:  10,
            king:   10,
        },

        clubs: {
            ace:    1,
            two:    2,
            three:  3,
            four:   4,
            five:   5,
            six:    6,
            seven:  7,
            eight:  8,
            nine:   9,
            ten:    10,
            jack:   10,
            queen:  10,
            king:   10,
        },
    },
}

//this function runs inside the extractor function, this way the cards % will get constantly updated
function cardsPercentage(){
//template to create the groups of cards to use for the %. IT COUNTS HOW MANY CARDS THERE ARE PER GROUP
acesGroup = ((
    returnZero('deck1', 'hearts', 'ace') + 
    returnZero('deck1', 'spades', 'ace') + 
    returnZero('deck1', 'diamonds', 'ace') + 
    returnZero('deck1', 'clubs', 'ace') + 
    returnZero('deck2', 'hearts', 'ace') + 
    returnZero('deck2', 'spades', 'ace') + 
    returnZero('deck2', 'diamonds', 'ace') + 
    returnZero('deck2', 'clubs', 'ace') +
    returnZero('deck3', 'hearts', 'ace') + 
    returnZero('deck3', 'spades', 'ace') + 
    returnZero('deck3', 'diamonds', 'ace') + 
    returnZero('deck3', 'clubs', 'ace') +
    returnZero('deck4', 'hearts', 'ace') + 
    returnZero('deck4', 'spades', 'ace') + 
    returnZero('deck4', 'diamonds', 'ace') + 
    returnZero('deck4', 'clubs', 'ace') +
    returnZero('deck5', 'hearts', 'ace') + 
    returnZero('deck5', 'spades', 'ace') + 
    returnZero('deck5', 'diamonds', 'ace') + 
    returnZero('deck5', 'clubs', 'ace') + 
    returnZero('deck6', 'hearts', 'ace') + 
    returnZero('deck6', 'spades', 'ace') + 
    returnZero('deck6', 'diamonds', 'ace') + 
    returnZero('deck6', 'clubs', 'ace') 
             ));

twosGroup = ((
    returnZero('deck1', 'hearts', 'two') + 
    returnZero('deck1', 'spades', 'two') + 
    returnZero('deck1', 'diamonds', 'two') + 
    returnZero('deck1', 'clubs', 'two') + 
    returnZero('deck2', 'hearts', 'two') + 
    returnZero('deck2', 'spades', 'two') + 
    returnZero('deck2', 'diamonds', 'two') + 
    returnZero('deck2', 'clubs', 'two') +
    returnZero('deck3', 'hearts', 'two') + 
    returnZero('deck3', 'spades', 'two') + 
    returnZero('deck3', 'diamonds', 'two') + 
    returnZero('deck3', 'clubs', 'two') +
    returnZero('deck4', 'hearts', 'two') + 
    returnZero('deck4', 'spades', 'two') + 
    returnZero('deck4', 'diamonds', 'two') + 
    returnZero('deck4', 'clubs', 'two') +
    returnZero('deck5', 'hearts', 'two') + 
    returnZero('deck5', 'spades', 'two') + 
    returnZero('deck5', 'diamonds', 'two') + 
    returnZero('deck5', 'clubs', 'two') +
    returnZero('deck6', 'hearts', 'two') + 
    returnZero('deck6', 'spades', 'two') + 
    returnZero('deck6', 'diamonds', 'two') + 
    returnZero('deck6', 'clubs', 'two')
            )/2)

threesGroup = ((
    returnZero('deck1', 'hearts', 'three') + 
    returnZero('deck1', 'spades', 'three') + 
    returnZero('deck1', 'diamonds', 'three') + 
    returnZero('deck1', 'clubs', 'three') + 
    returnZero('deck2', 'hearts', 'three') + 
    returnZero('deck2', 'spades', 'three') + 
    returnZero('deck2', 'diamonds', 'three') + 
    returnZero('deck2', 'clubs', 'three') +
    returnZero('deck3', 'hearts', 'three') + 
    returnZero('deck3', 'spades', 'three') + 
    returnZero('deck3', 'diamonds', 'three') + 
    returnZero('deck3', 'clubs', 'three') +
    returnZero('deck4', 'hearts', 'three') + 
    returnZero('deck4', 'spades', 'three') + 
    returnZero('deck4', 'diamonds', 'three') + 
    returnZero('deck4', 'clubs', 'three') +
    returnZero('deck5', 'hearts', 'three') + 
    returnZero('deck5', 'spades', 'three') + 
    returnZero('deck5', 'diamonds', 'three') + 
    returnZero('deck5', 'clubs', 'three') +
    returnZero('deck6', 'hearts', 'three') + 
    returnZero('deck6', 'spades', 'three') + 
    returnZero('deck6', 'diamonds', 'three') + 
    returnZero('deck6', 'clubs', 'three')
            )/3)

 foursGroup = ((
    returnZero('deck1', 'hearts', 'four') + 
    returnZero('deck1', 'spades', 'four') + 
    returnZero('deck1', 'diamonds', 'four') + 
    returnZero('deck1', 'clubs', 'four') + 
    returnZero('deck2', 'hearts', 'four') + 
    returnZero('deck2', 'spades', 'four') + 
    returnZero('deck2', 'diamonds', 'four') + 
    returnZero('deck2', 'clubs', 'four') +
    returnZero('deck3', 'hearts', 'four') + 
    returnZero('deck3', 'spades', 'four') + 
    returnZero('deck3', 'diamonds', 'four') + 
    returnZero('deck3', 'clubs', 'four') +
    returnZero('deck4', 'hearts', 'four') + 
    returnZero('deck4', 'spades', 'four') + 
    returnZero('deck4', 'diamonds', 'four') + 
    returnZero('deck4', 'clubs', 'four') +
    returnZero('deck5', 'hearts', 'four') + 
    returnZero('deck5', 'spades', 'four') + 
    returnZero('deck5', 'diamonds', 'four') + 
    returnZero('deck5', 'clubs', 'four') +
    returnZero('deck6', 'hearts', 'four') + 
    returnZero('deck6', 'spades', 'four') + 
    returnZero('deck6', 'diamonds', 'four') + 
    returnZero('deck6', 'clubs', 'four')
            )/4)   
            
fivesGroup = ((
    returnZero('deck1', 'hearts', 'five') + 
    returnZero('deck1', 'spades', 'five') + 
    returnZero('deck1', 'diamonds', 'five') + 
    returnZero('deck1', 'clubs', 'five') + 
    returnZero('deck2', 'hearts', 'five') + 
    returnZero('deck2', 'spades', 'five') + 
    returnZero('deck2', 'diamonds', 'five') + 
    returnZero('deck2', 'clubs', 'five') +
    returnZero('deck3', 'hearts', 'five') + 
    returnZero('deck3', 'spades', 'five') + 
    returnZero('deck3', 'diamonds', 'five') + 
    returnZero('deck3', 'clubs', 'five') +
    returnZero('deck4', 'hearts', 'five') + 
    returnZero('deck4', 'spades', 'five') + 
    returnZero('deck4', 'diamonds', 'five') + 
    returnZero('deck4', 'clubs', 'five') +
    returnZero('deck5', 'hearts', 'five') + 
    returnZero('deck5', 'spades', 'five') + 
    returnZero('deck5', 'diamonds', 'five') + 
    returnZero('deck5', 'clubs', 'five') +
    returnZero('deck6', 'hearts', 'five') + 
    returnZero('deck6', 'spades', 'five') + 
    returnZero('deck6', 'diamonds', 'five') + 
    returnZero('deck6', 'clubs', 'five')
            )/5)

            sixsGroup = ((
                returnZero('deck1', 'hearts', 'six') + 
                returnZero('deck1', 'spades', 'six') + 
                returnZero('deck1', 'diamonds', 'six') + 
                returnZero('deck1', 'clubs', 'six') + 
                returnZero('deck2', 'hearts', 'six') + 
                returnZero('deck2', 'spades', 'six') + 
                returnZero('deck2', 'diamonds', 'six') + 
                returnZero('deck2', 'clubs', 'six') +
                returnZero('deck3', 'hearts', 'six') + 
                returnZero('deck3', 'spades', 'six') + 
                returnZero('deck3', 'diamonds', 'six') + 
                returnZero('deck3', 'clubs', 'six') +
                returnZero('deck4', 'hearts', 'six') + 
                returnZero('deck4', 'spades', 'six') + 
                returnZero('deck4', 'diamonds', 'six') + 
                returnZero('deck4', 'clubs', 'six') +
                returnZero('deck5', 'hearts', 'six') + 
                returnZero('deck5', 'spades', 'six') + 
                returnZero('deck5', 'diamonds', 'six') + 
                returnZero('deck5', 'clubs', 'six') +
                returnZero('deck6', 'hearts', 'six') + 
                returnZero('deck6', 'spades', 'six') + 
                returnZero('deck6', 'diamonds', 'six') + 
                returnZero('deck6', 'clubs', 'six')
                        )/6)

            sevensGroup = ((
                returnZero('deck1', 'hearts', 'seven') + 
                returnZero('deck1', 'spades', 'seven') + 
                returnZero('deck1', 'diamonds', 'seven') + 
                returnZero('deck1', 'clubs', 'seven') + 
                returnZero('deck2', 'hearts', 'seven') + 
                returnZero('deck2', 'spades', 'seven') + 
                returnZero('deck2', 'diamonds', 'seven') + 
                returnZero('deck2', 'clubs', 'seven') +
                returnZero('deck3', 'hearts', 'seven') + 
                returnZero('deck3', 'spades', 'seven') + 
                returnZero('deck3', 'diamonds', 'seven') + 
                returnZero('deck3', 'clubs', 'seven') +
                returnZero('deck4', 'hearts', 'seven') + 
                returnZero('deck4', 'spades', 'seven') + 
                returnZero('deck4', 'diamonds', 'seven') + 
                returnZero('deck4', 'clubs', 'seven') +
                returnZero('deck5', 'hearts', 'seven') + 
                returnZero('deck5', 'spades', 'seven') + 
                returnZero('deck5', 'diamonds', 'seven') + 
                returnZero('deck5', 'clubs', 'seven') +
                returnZero('deck6', 'hearts', 'seven') + 
                returnZero('deck6', 'spades', 'seven') + 
                returnZero('deck6', 'diamonds', 'seven') + 
                returnZero('deck6', 'clubs', 'seven')
                        )/7)

eightsGroup = ((
        returnZero('deck1', 'hearts', 'eight') + 
        returnZero('deck1', 'spades', 'eight') + 
        returnZero('deck1', 'diamonds', 'eight') + 
        returnZero('deck1', 'clubs', 'eight') + 
        returnZero('deck2', 'hearts', 'eight') + 
        returnZero('deck2', 'spades', 'eight') + 
        returnZero('deck2', 'diamonds', 'eight') + 
        returnZero('deck2', 'clubs', 'eight') +
        returnZero('deck3', 'hearts', 'eight') + 
        returnZero('deck3', 'spades', 'eight') + 
        returnZero('deck3', 'diamonds', 'eight') + 
        returnZero('deck3', 'clubs', 'eight') +
        returnZero('deck4', 'hearts', 'eight') + 
        returnZero('deck4', 'spades', 'eight') + 
        returnZero('deck4', 'diamonds', 'eight') + 
        returnZero('deck4', 'clubs', 'eight') +
        returnZero('deck5', 'hearts', 'eight') + 
        returnZero('deck5', 'spades', 'eight') + 
        returnZero('deck5', 'diamonds', 'eight') + 
        returnZero('deck5', 'clubs', 'eight') +
        returnZero('deck6', 'hearts', 'eight') + 
        returnZero('deck6', 'spades', 'eight') + 
        returnZero('deck6', 'diamonds', 'eight') + 
        returnZero('deck6', 'clubs', 'eight')
                                    )/8)

ninesGroup = ((
    returnZero('deck1', 'hearts', 'nine') + 
    returnZero('deck1', 'spades', 'nine') + 
    returnZero('deck1', 'diamonds', 'nine') + 
    returnZero('deck1', 'clubs', 'nine') + 
    returnZero('deck2', 'hearts', 'nine') + 
    returnZero('deck2', 'spades', 'nine') + 
    returnZero('deck2', 'diamonds', 'nine') + 
    returnZero('deck2', 'clubs', 'nine') +
    returnZero('deck3', 'hearts', 'nine') + 
    returnZero('deck3', 'spades', 'nine') + 
    returnZero('deck3', 'diamonds', 'nine') + 
    returnZero('deck3', 'clubs', 'nine') +
    returnZero('deck4', 'hearts', 'nine') + 
    returnZero('deck4', 'spades', 'nine') + 
    returnZero('deck4', 'diamonds', 'nine') + 
    returnZero('deck4', 'clubs', 'nine') +
    returnZero('deck5', 'hearts', 'nine') + 
    returnZero('deck5', 'spades', 'nine') + 
    returnZero('deck5', 'diamonds', 'nine') + 
    returnZero('deck5', 'clubs', 'nine') +
    returnZero('deck6', 'hearts', 'nine') + 
    returnZero('deck6', 'spades', 'nine') + 
    returnZero('deck6', 'diamonds', 'nine') + 
    returnZero('deck6', 'clubs', 'nine')
            )/9)

tensGroup = ((
    returnZero('deck1', 'hearts', 'ten') + 
    returnZero('deck1', 'spades', 'ten') + 
    returnZero('deck1', 'diamonds', 'ten') + 
    returnZero('deck1', 'clubs', 'ten') + 
    returnZero('deck2', 'hearts', 'ten') + 
    returnZero('deck2', 'spades', 'ten') + 
    returnZero('deck2', 'diamonds', 'ten') + 
    returnZero('deck2', 'clubs', 'ten') +
    returnZero('deck3', 'hearts', 'ten') + 
    returnZero('deck3', 'spades', 'ten') + 
    returnZero('deck3', 'diamonds', 'ten') + 
    returnZero('deck3', 'clubs', 'ten') +
    returnZero('deck4', 'hearts', 'ten') + 
    returnZero('deck4', 'spades', 'ten') + 
    returnZero('deck4', 'diamonds', 'ten') + 
    returnZero('deck4', 'clubs', 'ten') +
    returnZero('deck5', 'hearts', 'ten') + 
    returnZero('deck5', 'spades', 'ten') + 
    returnZero('deck5', 'diamonds', 'ten') + 
    returnZero('deck5', 'clubs', 'ten') +
    returnZero('deck6', 'hearts', 'ten') + 
    returnZero('deck6', 'spades', 'ten') + 
    returnZero('deck6', 'diamonds', 'ten') + 
    returnZero('deck6', 'clubs', 'ten')
            )/10)

            jacksGroup = ((
    returnZero('deck1', 'hearts', 'jack') + 
    returnZero('deck1', 'spades', 'jack') + 
    returnZero('deck1', 'diamonds', 'jack') + 
    returnZero('deck1', 'clubs', 'jack') + 
    returnZero('deck2', 'hearts', 'jack') + 
    returnZero('deck2', 'spades', 'jack') + 
    returnZero('deck2', 'diamonds', 'jack') + 
    returnZero('deck2', 'clubs', 'jack') +
    returnZero('deck3', 'hearts', 'jack') + 
    returnZero('deck3', 'spades', 'jack') + 
    returnZero('deck3', 'diamonds', 'jack') + 
    returnZero('deck3', 'clubs', 'jack') +
    returnZero('deck4', 'hearts', 'jack') + 
    returnZero('deck4', 'spades', 'jack') + 
    returnZero('deck4', 'diamonds', 'jack') + 
    returnZero('deck4', 'clubs', 'jack') +
    returnZero('deck5', 'hearts', 'jack') + 
    returnZero('deck5', 'spades', 'jack') + 
    returnZero('deck5', 'diamonds', 'jack') + 
    returnZero('deck5', 'clubs', 'jack') +
    returnZero('deck6', 'hearts', 'jack') + 
    returnZero('deck6', 'spades', 'jack') + 
    returnZero('deck6', 'diamonds', 'jack') + 
    returnZero('deck6', 'clubs', 'jack')
            )/10)

            queensGroup = ((
    returnZero('deck1', 'hearts', 'queen') + 
    returnZero('deck1', 'spades', 'queen') + 
    returnZero('deck1', 'diamonds', 'queen') + 
    returnZero('deck1', 'clubs', 'queen') + 
    returnZero('deck2', 'hearts', 'queen') + 
    returnZero('deck2', 'spades', 'queen') + 
    returnZero('deck2', 'diamonds', 'queen') + 
    returnZero('deck2', 'clubs', 'queen') +
    returnZero('deck3', 'hearts', 'queen') + 
    returnZero('deck3', 'spades', 'queen') + 
    returnZero('deck3', 'diamonds', 'queen') + 
    returnZero('deck3', 'clubs', 'queen') +
    returnZero('deck4', 'hearts', 'queen') + 
    returnZero('deck4', 'spades', 'queen') + 
    returnZero('deck4', 'diamonds', 'queen') + 
    returnZero('deck4', 'clubs', 'queen') +
    returnZero('deck5', 'hearts', 'queen') + 
    returnZero('deck5', 'spades', 'queen') + 
    returnZero('deck5', 'diamonds', 'queen') + 
    returnZero('deck5', 'clubs', 'queen') +
    returnZero('deck6', 'hearts', 'queen') + 
    returnZero('deck6', 'spades', 'queen') + 
    returnZero('deck6', 'diamonds', 'queen') + 
    returnZero('deck6', 'clubs', 'queen')
            )/10)

            kingsGroup = ((
    returnZero('deck1', 'hearts', 'king') + 
    returnZero('deck1', 'spades', 'king') + 
    returnZero('deck1', 'diamonds', 'king') + 
    returnZero('deck1', 'clubs', 'king') + 
    returnZero('deck2', 'hearts', 'king') + 
    returnZero('deck2', 'spades', 'king') + 
    returnZero('deck2', 'diamonds', 'king') + 
    returnZero('deck2', 'clubs', 'king') +
    returnZero('deck3', 'hearts', 'king') + 
    returnZero('deck3', 'spades', 'king') + 
    returnZero('deck3', 'diamonds', 'king') + 
    returnZero('deck3', 'clubs', 'king') +
    returnZero('deck4', 'hearts', 'king') + 
    returnZero('deck4', 'spades', 'king') + 
    returnZero('deck4', 'diamonds', 'king') + 
    returnZero('deck4', 'clubs', 'king') +
    returnZero('deck5', 'hearts', 'king') + 
    returnZero('deck5', 'spades', 'king') + 
    returnZero('deck5', 'diamonds', 'king') + 
    returnZero('deck5', 'clubs', 'king') +
    returnZero('deck6', 'hearts', 'king') + 
    returnZero('deck6', 'spades', 'king') + 
    returnZero('deck6', 'diamonds', 'king') + 
    returnZero('deck6', 'clubs', 'king')
            )/10)

//this function calculates the % each card has to be picked. (it runs inside the same function with groups, which runs into the extractor function so the values gets updated everytime)
acePercentage = (acesGroup / 312)*100 
twoPercentage = (twosGroup / 312)*100
threePercentage = (threesGroup / 312)*100
fourPercentage = (foursGroup / 312)*100
fivePercentage = (fivesGroup / 312)*100
sixPercentage = (sixsGroup / 312)*100
sevenPercentage = (sevensGroup / 312)*100
eightPercentage = (eightsGroup / 312)*100
ninePercentage = (ninesGroup / 312)*100
tenPercentage = (tensGroup / 312)*100
jackPercentage = (jacksGroup / 312)*100
queenPercentage = (queensGroup / 312)*100
kingPercentage = (kingsGroup / 312)*100

//this updates the percentages of the groups
lowGroup = ((twosGroup + threesGroup + foursGroup + fivesGroup + sixsGroup)/312)*100;
neutralGroup = ((sevensGroup + eightsGroup + ninesGroup)/312)*100;
highGroup = ((tensGroup + jacksGroup + queensGroup + kingsGroup + acesGroup)/312)*100;
}


//adjustingxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

function returnZero(a, b, c) { 
    if (totalDecks == undefined) {return 0}
    else if (totalDecks[a] == undefined) {return 0}
    else if (totalDecks[a][b] == undefined) {return 0}
    else if (totalDecks[a][b][c] == undefined) {return 0}
    else {return totalDecks[a][b][c]} 
}
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

//this function returns 0 for the deleted valuesfunction OLD RETURN ZERO FUNCTION
/*
function returnZero(a) {
    if (a === undefined) {
        return a = 0} else { return a }
}
*/

/*
while (true) {
    // ...
    if (breakCondition) {            
        break;
    } 
}*/
//these are the functions the EXTRACTOR relies on
function randomDeck() {
    randomDeckVariable = (Object.keys(totalDecks)[Math.floor(Math.random()*Object.keys(totalDecks).length)])
    boolValue = isEmpty(totalDecks[randomDeckVariable])
    while (boolValue == true) {
        delete totalDecks[randomDeckVariable]
        randomDeckVariable = (Object.keys(totalDecks)[Math.floor(Math.random()*Object.keys(totalDecks).length)])
        boolValue = isEmpty(totalDecks[randomDeckVariable])
        if (boolValue == false || isEmpty(totalDecks) == true) {
            break;
        }
    }
 }
 function randomSuit() {
    randomSuitVariable = (Object.keys(totalDecks[randomDeckVariable])[Math.floor(Math.random()*Object.keys(totalDecks[randomDeckVariable]).length)])
    boolValue = isEmpty(totalDecks[randomDeckVariable][randomSuitVariable])
    while (boolValue == true) {
        delete totalDecks[randomDeckVariable][randomSuitVariable]
        randomDeck()
        randomSuitVariable = (Object.keys(totalDecks[randomDeckVariable])[Math.floor(Math.random()*Object.keys(totalDecks[randomDeckVariable]).length)])
        boolValue = isEmpty(totalDecks[randomDeckVariable][randomSuitVariable])
        if (boolValue == false) {
            break;
        }
    }
 }
 function randomCard() {
    randomCardVariable = (Object.keys(totalDecks[randomDeckVariable][randomSuitVariable])[Math.floor(Math.random()*Object.keys(totalDecks[randomDeckVariable][randomSuitVariable]).length)])
boolValue = isEmpty(totalDecks[randomDeckVariable][randomSuitVariable][randomCardVariable]);
    while (boolValue == false) {
        delete totalDecks[randomDeckVariable][randomSuitVariable][randomCardVariable];
randomCardVariable = (Object.keys(totalDecks[randomDeckVariable][randomSuitVariable])[Math.floor(Math.random()*Object.keys(totalDecks[randomDeckVariable][randomSuitVariable]).length)])
boolValue = isEmpty(totalDecks[randomDeckVariable][randomSuitVariable][randomCardVariable]);
    if (boolValue == true) {break;}}
}
   
 /*function randomCard() {
    randomCardVariable =  (Object.keys(totalDecks[randomDeckVariable][randomSuitVariable])[Math.floor(Math.random()*Object.keys(totalDecks[randomDeckVariable][randomSuitVariable]).length)])
    return randomCardVariable
}*/
//THIS FUNCTION EXTRACTS A RANDOM CARD FROM A RANDOM SUIT AND DISPLAYS IT WITH CONSOLE LOG
function extractor() {

    
     randomDeck();
 
 
     randomSuit()
     
 
     randomCard()  

     
    
}
//it makes the function run again so you get new values every time
   // extractor();
   function loopfuck() {
    for(i=0;i<312;i++){
        extractor()
        console.log(randomDeckVariable, randomSuitVariable, randomCardVariable, totalDecks[randomDeckVariable])
delete totalDecks[randomDeckVariable][randomSuitVariable][randomCardVariable]

console.log(i)
        }};
   
  
   


    
//this function makes sure that the extractor doesnt extract a card that was deleted
function startExtractor() {
    extractor();
    
    while (randomCardVariable === undefined) {
        extractor()
    }
}

//the part above this comment is the extractor, the updates of percentages and other statistics




//the function deletes keys from the objects
//delete totalDecks[randomDeckVariable][randomSuitVariable][randomCardVariable]

//this console log tells you which variables the extractor has chosen
console.log(randomDeckVariable, randomSuitVariable, randomCardVariable)

//this function checks if an object is empty
function isEmpty(obj) {

    // null and undefined are "empty"
    if (obj == null) return true;

    // Assume if it has a length property with a non-zero value
    // that that property is correct.
    if (obj.length > 0)    return false;
    if (obj.length === 0)  return true;

    // If it isn't an object at this point
    // it is empty, but it can't be anything *but* empty
    // Is it empty?  Depends on your application.
    if (typeof obj !== "object") return true;

    // Otherwise, does it have any properties of its own?
    // Note that this doesn't handle
    // toString and valueOf enumeration bugs in IE < 9
    for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) return false;
    }

    return true;
}
/*
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}
*/





//sandbox
//returns the name of the highest percent group
function highestPercentGroupFunction() {if (Math.max(lowGroup, neutralGroup, highGroup) == lowGroup){return highestPercentGroup = 'lowGroup'} 
                    else if (Math.max(lowGroup, neutralGroup, highGroup) == neutralGroup) {return highestPercentGroup = 'neutralGroup'}
                    else if (Math.max(lowGroup, neutralGroup, highGroup) == highGroup) {return highestPercentGroup = 'highGroup'}
                };

function highestPercentCardFunction(){
    if (highestPercentGroup = 'lowGroup') {
        if (Math.max(twoPercentage, threePercentage, fourPercentage, fivePercentage, sixPercentage) === twoPercentage) {return highestPercentCard = 2
    } else if (Math.max(twoPercentage, threePercentage, fourPercentage, fivePercentage, sixPercentage) === threePercentage) {return highestPercentCard = 3
    } else if (Math.max(twoPercentage, threePercentage, fourPercentage, fivePercentage, sixPercentage) === fourPercentage) {return highestPercentCard = 4
    } else if (Math.max(twoPercentage, threePercentage, fourPercentage, fivePercentage, sixPercentage) === fivePercentage) {return highestPercentCard = 5
    } else if (Math.max(twoPercentage, threePercentage, fourPercentage, fivePercentage, sixPercentage) === sixPercentage) {return highestPercentCard = 6
    }}
    if (highestPercentGroup = 'neutralGroup') {
        if (Math.max(sevenPercentage, eightPercentage, ninePercentage) === sevenPercentage) {return highestPercentCard = 7
    } else if (Math.max(sevenPercentage, eightPercentage, ninePercentage) === eightPercentage) {return highestPercentCard = 8
    } else if (Math.max(sevenPercentage, eightPercentage, ninePercentage) === ninePercentage) {return highestPercentCard = 9
    }}
    if (highestPercentGroup = 'highGroup') {
        if (Math.max(tenPercentage, queenPercentage, jackPercentage, kingPercentage, acePercentage) === tenPercentage) {return highestPercentCard = 10
    } else if (Math.max(tenPercentage, queenPercentage, jackPercentage, kingPercentage, acePercentage) === queenPercentage) {return highestPercentCard = 10
    } else if (Math.max(tenPercentage, queenPercentage, jackPercentage, kingPercentage, acePercentage) === jackPercentage) {return highestPercentCard = 10
    } else if (Math.max(tenPercentage, queenPercentage, jackPercentage, kingPercentage, acePercentage) === kingPercentage) {return highestPercentCard = 10
    } else if (Math.max(tenPercentage, queenPercentage, jackPercentage, kingPercentage, acePercentage) === acePercentage) {return highestPercentCard = aceCard
};
}
    }

function playerAction() {
if (highestPercentGroup = 'lowGroup') {
    if (sum > 21) {return action = 'busted'}
   else if (sum == 21) {return action = 'blackjack'}
   else if (highestPercentCard + sum > 21) {return action ='stand'}
   else if (highestPercentCard + sum < 21){return action ='hit'} 
}
             if (highestPercentGroup = 'neutralGroup') {
                if (sum > 21) {return action = 'busted'}
               else if (sum == 21) {return action = 'blackjack'}
               else if (highestPercentCard + sum > 21) {return action ='stand'}
               else if (highestPercentCard + sum < 21){return action ='hit'} 
       }
             if (highestPercentGroup = 'highGroup') {
                 if (sum > 21) {return action = 'busted'}
                else if (sum == 21) {return action = 'blackjack'}
                else if (highestPercentCard + sum > 21) {return action ='stand'}
                else if (highestPercentCard + sum < 21){return action ='hit'} 
        }
};
 

//sums all the elements of an array

  function sumCards() {  
    // Getting sum of numbers
    sum = playerDeck.reduce(function(a, b){
        return a + b;
    }, 0);
    
    
  }

  //function that reduces the value of ace
function aceCardFunction(){
    if (sum > 21) 
    {return aceCard = 1
    } else {return aceCard = 11}
}




//play, when you execute this function you play the game
function play(){
    extractor();
    console.log(totalDecks[randomDeckVariable][randomSuitVariable][randomCardVariable]);
    playerDeck.push(totalDecks[randomDeckVariable][randomSuitVariable][randomCardVariable])
    console.log('Player Cards', playerDeck)
    sumCards()
    delete totalDecks[randomDeckVariable][randomSuitVariable][randomCardVariable];
    cardsPercentage();
    highestPercentGroupFunction();
    aceCardFunction()
    highestPercentCardFunction()
    console.log('Next Card', highestPercentCard )
    playerAction()
    console.log(action)
    counterFunction()
    sumResults()
}

//this makes an array and adds a value for every won and every lost.
function loop() {
    for(i=0;i<280;i++){
        play()
        }};

//the COUNTER function counts the times you won and lost, and resets the player deck everytime you stand, bust or do blackjack
       function counterFunction(){
            if (action == 'stand') {
                reset()
                wonRounds.push(1)
            } else if (action == 'blackjack') {
                reset()
                wonRounds.push(1)
            } else if (action == 'busted') {
                reset()
                lostRounds.push(1)
            }
        }
//this algo sums the vlues of the won and lost arrays so you get the counter of the lost and won hands
function sumResults(){
    sumWonResults();
    sumLostResults();
    console.log('you won ', wonRoundsResults, ' and lost ',lostRoundsResults )
}

function sumWonResults() {  
    // Getting sum of numbers
    wonRoundsResults = wonRounds.reduce(function(a, b){
        return a + b;
    }, 0);}
    function sumLostResults() {  
        // Getting sum of numbers
        lostRoundsResults = lostRounds.reduce(function(a, b){
            return a + b;
        }, 0);
    }

function reset() {
    for(i=0;i<15;i++){
        playerDeck.pop();
        }
}
