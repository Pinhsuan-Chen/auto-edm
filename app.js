var txt;

// get input from text area
function insertEdmCode(){
	txt = document.getElementById('txt').value;

	console.log(txt);
}

// auto detect width 
	// find all width="______ "
	
	// find biggest int => table width

	function findWidth(){
		var allWidths = txt.match(/\width="(.*?)\"/g);
		
		console.log(allWidths[1]);
		
		// save all int into a array 
		allWidthsNum = [];
		allWidths.forEach(function(it, index, array){
			var eachItemLength = it.length;
			allWidthsNum.push(it.slice(7, it.length-1));
		})
		console.log(allWidthsNum);

	}

// find sth in input (place)


// insert sth to the input(var width) at (var place)  

// preview 

// preview with ability to change different

// copy code (copy button) or download html  file