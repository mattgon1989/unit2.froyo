//promt the user froyo flavors
//sum up the orders by flavor - return object of flavor names & counts
//print the count as table in web console


const userInput = prompt("enter your froyo flavors");

const userInputArray = userInput.split(",");

/* countByFlavor(['vanilla','vanilla','vanilla','strawberry','coffee','coffee']) =>

    flavorCounts = {
        'vanilla': 3,
        'coffee': 2,
        'strawberry': 1,
    }

*/
function countByFlavor(flavors) {
    const flavorCounts = {};
    for (let i = 0;  i < flavors.length; i++){
        const currentFlavor = flavors[i];
        if (currentFlavor in flavorCounts) {
            const oldFlavorCount = flavorCounts[currentFlavor];
            flavorCounts[currentFlavor] = oldFlavorCount + 1;
        } else {
            flavorCounts[currentFlavor] = 1;
        }
    }
    return flavorCounts;
}

console.table(countByFlavor(userInputArray));