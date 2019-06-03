// ask put ithome head in first tr so we don't have to set the width? 
// 
var txt;
const header_1 = '<table width="';
const header_2 = '" border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#2286c2"><tr><td height="30" colspan="3" align="center" valign="middle" bgcolor="#2286c2"></td> <!-- TAG : TRACER --> <td height="30" colspan="3" align="center" valign="middle" bgcolor="#2286c2" style="font-family: '微軟正黑體', '新細明體', Helvetica, Arial, sans-serif;font-size:12px; color:#ffffff;">如果郵件無法顯示完全，請點選<a target="_blank" href="https://www.microsoftevents.com/profile/form/index.cfm?PKformID=0x7013699abcd" style="color:#ffffff">這裡</a>查看</td> <td align="center" valign="middle" bgcolor="#2286c2"></td> </tr> <tr> <td width="36" align="center" valign="middle" bgcolor="#2286c2"></td> <td width="220" align="center" valign="middle"><img src="itedm_head.gif" width="220" height="40" border="0" align="top" /></td> <td width="232" height="40" align="center" valign="middle" bgcolor="#2286c2">&nbsp;</td> <td width="73" height="40" align="center" valign="middle"><a href="https://www.facebook.com/sharer/sharer.php?u=https://www.microsoftevents.com/profile/form/index.cfm?PKformID=0x7013699abcd"><img src="itedm_fb_head.gif" width="73" height="40" border="0" align="top" /></a></td> <td width="74" height="40" align="center" valign="middle"><a href="https://twitter.com/home?status=https://www.microsoftevents.com/profile/form/index.cfm?PKformID=0x7013699abcd"><img src="itedm_twitter_head.gif" width="74" height="40" border="0" align="top" /></a></td> <td width="70" height="40" align="center" valign="middle"><a href="http://line.naver.jp/R/msg/text/https://www.microsoftevents.com/profile/form/index.cfm?PKformID=0x7013699abcd"><img src="itedm_line_head.gif" width="70" height="40" border="0" align="top" /></a></td> <td align="center" valign="middle" bgcolor="#2286c2"></td> </tr> <tr> <td height="3" colspan="7"> </td> </tr> </table> ';
const footer_1 = '';
const footer_2 = '';
function setHeader(wid){
	return ""+ wid +""
}

// get input from text area
function insertEdmCode() {
    txt = document.getElementById('txt').value;
    console.log(txt);
    var hi = /%$/.test('width="35%"');
    console.log(hi);
}

// auto detect width 
function findWidth() {
    // find all width="______ "
    var allWidths = txt.match(/\width="(.*?)\"/g);

    // save all int into a array 
    allWidthsNum = [];
    allWidths.forEach(function(item, index, array) {
        
        var eachItemLength = item.length;
        if (!item.match(/[|\\/~^:,;?!&%$@*+]/)) {
            allWidthsNum.push(item.slice(7, item.length - 1));
        }
    })
    console.log(allWidthsNum);

    // find biggest int => table width
    var largest = Math.max.apply(Math, allWidthsNum);
    console.log(largest);
}

// find first table in txt (place)
function findFirstTable() {
    var firstTable = txt.indexOf("<table");
    console.log(firstTable);
    return firstTable;
}
// insert sth to the input(var width) at (var place)  
function insertBeforeIndex(content, index, textToAdd) {
    var before = content.slice(0, index);
    var after = content.slice(index);

    return before + textToAdd + after;

}
// input edm template
// set width of edm template




// preview 
function createPreview(content) {

	// var html = document.getElementById("html");
	// var css = document.getElementById("css");
	// var js = document.getElementById("js");
	var preview = document.getElementById("preview").contentWindow.document;
	 preview.open();
		preview.writeln(content);
		preview.close();
	
	
    };



// set width manually

// copy code (copy button) or download html  file
	// also run preview()