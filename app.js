var txt;

// get input from text area
function insertEdmCode(){
	txt = document.getElementById('txt').value;
	console.log(txt);
}

// auto detect width 
function findWidth(){
		// find all width="______ "
		var allWidths = txt.match(/\width="(.*?)\"/g);
		
		// save all int into a array 
		allWidthsNum = [];
		allWidths.forEach(function(it, index, array){
			var eachItemLength = it.length;
			allWidthsNum.push(it.slice(7, it.length-1));
		})
		console.log(allWidthsNum);
		
		// find biggest int => table width
		var largest = Math.max.apply(Math, allWidthsNum);
		console.log(largest);
	}

// find first table in txt (place)
function findFirstTable(){
	var firstTable = txt.indexOf("<table");
	console.log(firstTable);
	return firstTable;
}
// insert sth to the input(var width) at (var place)  
function insertBeforeIndex(content, index, textToAdd){
	var before = content.slice(0, index);
	var after = content.slice(index); 
	console.log(after);
	console.log(before + textToAdd + after);
	return before + textToAdd + after;

}

//show the result htm code
function showResult(content){
	document.getElementById('showResult').innerHTML = content;
}

// preview 

// preview with ability to change different

// copy code (copy button) or download html  file