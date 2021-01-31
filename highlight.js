// grab span tag - tag should wrap all of the words
const wordsElt = document.querySelector(".highlighted");

// grab all the text inside the spans, split it into an array of individual words
const words = wordsElt.innerHTML.split(/(\S+\s+)/).filter(n => n)


wordsElt.innerHTML = "";
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
words.forEach((w, i) => {
  let word = document.createElement("span");
  word.innerHTML = w;
  word.style.position = "relative";
  word.style.zIndex = 1
  let highlight = document.createElement("div");
  highlight.style.width = i===words.length-1 ? "100%" : "130%"
  highlight.style.height = "100%";
  highlight.style.top = "0";
  highlight.style.left = i===words.length-1 
  ? "0" : String(random(-5, 5)) + "px";
   
  highlight.style.position = "absolute";
  highlight.style.background = "yellow";
  highlight.style.zIndex = "0";
  highlight.style.mixBlendMode = 'darken'
  highlight.style.opacity = 1
  word.appendChild(highlight);
  wordsElt.appendChild(word);
});

// grab span tag - tag should wrap all of the words
const wordsEltTwo = document.querySelector(".highlighted-2");

// grab all the text inside the spans, split it into an array of individual words
const wordsTwo = wordsEltTwo.innerHTML.split(/(\S+\s+)/).filter(n => n)


wordsEltTwo.innerHTML = "";
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
wordsTwo.forEach((w, i) => {
  let word = document.createElement("span");
  word.innerHTML = w;
  word.style.position = "relative";
  word.style.zIndex = 1
  let highlight = document.createElement("div");
  highlight.style.width = i===words.length-1 ? "100%" : "130%"
  highlight.style.height = "100%";
  highlight.style.top = "0";
  highlight.style.left = i===words.length-1 
  ? "0" : String(random(-5, 5)) + "px";
   
  highlight.style.position = "absolute";
  highlight.style.background = "yellow";
  highlight.style.zIndex = "-1";
  // highlight.style.mixBlendMode = 'darken'
  highlight.style.opacity = 1
  word.appendChild(highlight);
  wordsEltTwo.appendChild(word);
});


// grab span tag - tag should wrap all of the words
const wordsEltThree = document.querySelector(".highlighted-3");

// grab all the text inside the spans, split it into an array of individual words
const wordsThree = wordsEltThree.innerHTML.split(/(\S+\s+)/).filter(n => n)


wordsEltThree.innerHTML = "";
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
wordsThree.forEach((w, i) => {
  let word = document.createElement("span");
  word.innerHTML = w;
  word.style.position = "relative";
  word.style.zIndex = 1
  word.style.color = "var(--dark-gray)"
  let highlight = document.createElement("div");
  highlight.style.width = i===words.length-1 ? "100%" : "130%"
  highlight.style.height = "100%";
  highlight.style.top = "0";
  highlight.style.left = i===words.length-1 
  ? "0" : String(random(-5, 5)) + "px";
   
  highlight.style.position = "absolute";
  highlight.style.background = "yellow";
  highlight.style.zIndex = "-1";
  highlight.style.mixBlendMode = 'darken'
  highlight.style.opacity = 1
  word.appendChild(highlight);
  wordsEltThree.appendChild(word);
});