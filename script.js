//your code here
let bandList=document.getElementById("band");
let bandName=["The Beatles","Led Zeppelin","Pink Floyd","The Who","The Rolling Stones","Queen","The Doors"];
let sortedBandNames=bandNames.sort((a,b)=>){
let articles=["the","a","an"];
	let aWithoutArticle=a.toLowerCase().split(" ").filter(word=>!articles.includes(word))[0];
	let bWithoutArticle=b.toLowerCase().split(" ").filter(word=>!articles.includes(word))[0];
	return aWithoutArticle.localeCompare(bWithoutArticle);
})
sortedBandNames.forEach(name=>{
	let listItem=document.createElement("li");
	listItem.textContent=name;
	bandList.appendChild(listItem);
});
