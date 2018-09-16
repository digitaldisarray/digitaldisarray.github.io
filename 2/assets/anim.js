//more stolen shit

if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		loaded();
	});
} else if(document.attachEvent){
	document.attachEvent("onreadystatechange", function(){
		loaded();
	});
}

function loaded(){
	setInterval(loop, 350);
}

var x = 0;

var titleText = ["M","Mi","Min","Mine","MineS","MineSe","MineSen","MineSens","MineSense","MineSense.","MineSense.p","MineSense.pu","MineSense.pub","MineSense.pub $$$","MineSense.pub","MineSense.pub $$$",
				"MineSense.pub","MineSense.pu","MineSense.p","MineSense.","MineSense","MineSens","MineSen","MineSe","MineS","Mine","Min","Mi","M","؜"];

function loop(){
	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];
}
