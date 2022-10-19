// 1 Write out the syntax for each of the below core ES6 elements
// A Spread operator

// Arrays

const arr1 = [`David`, `Michael`, `Jordan`, `Derrick`, `Lee`]
const arr2 = [`Christian`, `Luis`, `Andy`, `Adrian`, `Tom`, `Floren`]

const arr3 = [...arr1, ...arr2];
console.log (`Full team =`, arr3)

const arr4 = [...arr1, ...arr2, `Kofe`, `John`, `Barry`];
console.log (`Full team inc. subs =`, arr4)

// Objects

const playerDetails = {
    name: `Michael`,
    age: `36`,
    position: `Defender`,
}

const descriptiveDetails = {
    height: `6"6`,
    fitness: `Fit`,
    communication: `Okay`
}

var player = {
    ...playerDetails,
    ...descriptiveDetails,
    fitness: `Peak-Fitness`
}
console.log (`Player`, player)

// B. Rest operator

// Arrays

const footballTeam = [`David`, `Michael`, `Jordan`, `Derrick`, `Lee`]
const [GK, ...outfield] = footballTeam;

console.log (`GK`, GK);
console.log (`Outfield`, outfield);

// Objects

const myDets = {
    name: `David`,
    age: 32,
    hobbie: {
        sport: `football`,
        position: `GoalKeeper`,
        team: `N/A`,
    }
}

const {name, age, ...hobbie} = myDets;
console.log (`rest`, hobbie)


// C.  Object shorthand

function getDates(date1, date2){
    return {
        date1,
        date2,
    };
}

// D. Dynamic keys (place 3 items in an object using dynamic keys)

let beverage = `Drink`
let item = `Tool`;
let shop = `Food`;

const yourBag = {
    [item]: 'Spade',
    [beverage]: 'Coca Cola',
    [shop]: 'Sausage Roll'
}

console.log(yourBag);

// Alternate

const itemsInBag = ["Spade", "Book", "Fanta", "Football"]

const yourItemsInBag = {};

for (let i = 0; i < itemsInBag.length; i++) {
    yourItemsInBag[`Item ${i + 1}`] = itemsInBag[i];
    }

console.log(yourItemsInBag);

// E. Sets, convert an array with duplicates to an array without (using a set)

const items = ["Book", "Cup", "Cup", "Banana", "Wallet", "Book", "Spade"];
const individualItems = new Set (items);

console.log(individualItems)

// Create a promise around setTimeout



const p = new Promise((resolve, reject) => {
    let a = 1 + 1
    if (a == 2) {
        setTimeout(() => {
            resolve ("Data received");
    }, 3000);
    } else {
        setTimeout(() => {
            reject ("not received");
    }, 3000);
    }
});


// Consume the promise using ES6 .then

p.then ((message) => {
    console.log(message + ` after 3 seconds`);
})
.catch((message) => {
    console.log(`The Data was ` + message + ` after 3 seconds`);
});

// Consume the promise using ES7 async/await

const consumePromise = async () => {
    const result = await p;
    console.log(result,", Consumed using await");
}
consumePromise()

// 2. Complete the survey if you have not:






