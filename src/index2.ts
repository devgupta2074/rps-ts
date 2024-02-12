// function ConverttoAlphabeticalOrder(str: string) {
//   return str.split("").sort().join("");
// }

// console.log(ConverttoAlphabeticalOrder("exsquared"));

// type Wrapped<T> = T[];
// function sortinascendingorder(array: number[] | string[]) {
//   console.log(typeof array[0]);
//   if (typeof array[0] === "string") {
//     return array.sort();
//   } else if (typeof array[0] === "number") {
//     let squaredArray: Wrapped<number> = array.map(
//       (element: number | string) => {
//         if (typeof element == "number") {
//           return element * element;
//         }
//       }
//     );
//     return squaredArray.sort((a, b) => a - b);
//   }
// }

// const x: Wrapped<string> = ["banana", "orange", "apple", "dam"];
// const y: Wrapped<number> = [4, -5, 6, 1, 8, 2, 444, -44, 3434];
// console.log(sortinascendingorder(x));
// console.log(sortinascendingorder(y));

interface Adress {
  homeaddress: string;
  officeaddress: string;
}

let addressbook: {
  [k: string]: Adress;
};

addressbook = {
  john: {
    homeaddress: "0001xx",
    officeaddress: "321",
  },
  jane: {
    homeaddress: "0001",
    officeaddress: "321",
  },
};

console.log(addressbook["john"].homeaddress);
