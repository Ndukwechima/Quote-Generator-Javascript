
const quote = document.getElementById("quote");
const author = document.getElementById("author")
const api_url = "https://api.quotable.io/random"

async function getquote(url){
    const res = await fetch(url);
    let data = await res.json();
    quote.innerHTML = data.content
    author.innerHTML = data.author
}
getquote(api_url);

const handleClick = function(){
    getquote(api_url);

}
const repeate = document.getElementById("help");
repeate.addEventListener("click", handleClick);


handleClick();

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=Hello%20world>")
}
const is = document.getElementById("twit")
  is.addEventListener('click', tweet);
