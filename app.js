let container = document.querySelector(".container");
let quotes = document.querySelector("#quotes");
let author = document.querySelector("#author");

let apiUrl = "https://type.fit/api/quotes";

/*There are two types to display an api

using promise => then and catch

using await =>try and catch*/

// 2nd Type
//using await =>try and catch

/*
async function allQuotes() {
  const response = await fetch(apiUrl);
  try {
    if (response.ok) {
      let data = await response.json();
      //   console.log(data);
      randomQuotes(data);
    } else {
      throw new Error("Falied to Fetch It");
    }
  } catch (err) {
    console.log(err.message);
  }
}
allQuotes();

*/

//common thing of two types
function randomQuotes(data) {
  // for (let i = 0; i < 20; i++) {
  // console.log(data[i]);
  let random = Math.floor(Math.random() * 20);
  let randomText = data[random];
  quotes.innerHTML = randomText.text;
  author.innerHTML = randomText.author;
}
// console.dir(data);
// }

//1st Methode
//using promise => then and catch

fetch(apiUrl)
  .then((value) => {
    console.log(value);
    if (value.ok) {
      return value.json();
    } else {
      throw new Error("failed to connect");
    }
  })
  .then((data) => {
    console.log(data);
    randomQuotes(data);
  })
  .catch((err) => {
    console.log(err.message);
  });
