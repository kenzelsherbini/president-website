//array for all the quotes
let quotesArray = [
    "A government for the people must depend for its success on the intelligence, the morality, the justice, and the interest of the people themselves.",
    "The ship of democracy, which has weathered all storms, may sink through the mutiny of those on board.",
    "Officeholders are the agents of the people, not their masters.",
    "No man has ever yet been hanged for breaking the spirit of a law.",
    "It is a condition which confronts us—not a theory.",
    "Public officers are the servants and agents of the people, to execute the laws which the people have made.",
    "Sensible and responsible women do not want to vote.",
    "A truly American sentiment recognizes the dignity of labor and the fact that honor lies in honest toil."
];

//random number generator for quote from array
let randomNumber = Math.floor(Math.random() * quotesArray.length);
//documents the quote 
document.getElementById('press-quote').textContent = "“ " + quotesArray[randomNumber] + " ” - Grover Cleveland";