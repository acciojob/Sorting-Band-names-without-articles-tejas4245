//your code here
let bandNames=["The Beatles","Rolling Stones","Led Zeppelin","Pink Floyd","The Who","The Doors"];
const articles=['a','an','the'];

let articles=["a","an","the"];
let words=bandNames.split(" ");
if(articles.includes(word[0].toLowerCase())){
	words.shift();
}
return words.join(" ");
}
bandNames.sort(function(a,b){
	return removeArticle(a).localeCompare(removeArticle(b));
});
let ulElement=document.getElementById("band");
for(let i=0;i<bandNames.length;i++){
	let liElement=document.createElement("li");
	liElement.appendChild(liElement);
}