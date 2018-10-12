// C is for Cookie

const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]


for (let x = 0; x < cookies.length; x++) {
    const currentCookie = cookies[x]
    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
}


// conjunction function------------------------------------------

// const conjunction = function (firstWord, secondWord) {
//   const conjoinedWord = (`${firstWord} ${secondWord}`);
// };

// conjunction("Master", "Card");
// console.log(conjoinedWord)


// Mod Squad-----------------------------------------------------

//   const modSquad = {
//       members: ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
//       series: {
//           start: "1968",
//           end: "1973"
//       }
//     }

//   const HTMLRepresentation = '<h1>The Mod Squad</h1>'

// //   modSquad.members.forEach(function(member) {
// //       let HTMLRepresentation = `<div>${member}</div>`
// //   })


// // document.querySelector(".show-info").innerHTML = HTMLRepresentation

// console.log(HTMLRepresentation);

// Simon Says----------------------------------------------------
const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]

for (let k = 0; k < locations.length; k++) {
    const currentLocation = locations[k]

    if (currentLocation[0] > 2) {
        const invalidLocation = true
    }

    if (invalidLocation) {
        console.log("This location is invalid")
    }
}

/*
    Since k is used as the loop counter, it will be the
    total number of locations, not the invalid ones. You
    need to fix this somehow.
*/
console.log(`There were ${k} invalid locations`)

