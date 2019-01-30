// Object Destructuring

// const book = {
//   title: "Ego is the Ememy",
//   author: "Ryan Holiday",
//   Publisher: {
//     name: "Penguin"
//   }
// };
//
// const { name : publisherName = "Self-published" } = book.Publisher;
//
// console.log(publisherName);


// Array Destructuring

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];

const [hotCoffe, , mediumPrice] = item;

console.log(`A meduim ${hotCoffe} costs ${mediumPrice}.`);
