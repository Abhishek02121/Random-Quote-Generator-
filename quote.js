let quote = document.getElementById("quote");
let button = document.getElementById("button");
let author = document.getElementById("author");

const url = "https://api.quotable.io/random";

let getQuote = () => {
	fetch(url)
	.then((data) => data.json())
	.then((item) => {
		quote.innerText = item.content;
		author.innerText = item.author;
	});
};

window.addEventListener("load",getQuote);
btn.addEventListener("click",getQuote);

