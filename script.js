//your code here
let bandNames=['The Beatles','Led Zeppelin','Pink Floyd','The Who','Aerosmith'];
const articles=['a','an','the'];
bandNames=bandNames.map(name=>{
	let newName=name;
	articles.forEach(article=>{
		if(newName.toLowerCase().startsWith(article+' ')){
			newName=newName.slice(article.length+1);
		}
	});
	return newName;
});
bandName.sort((a,b)=>a.localCompare(b));
const bandElement=document.getElementById('band');
bandName.forEach(name=>{
	const liElement=document.createElement('li');
	liElement.appendChild(liElement);
});