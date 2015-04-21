var ExitPopURL = 'http://chanakaeng.github.io/background-redirect/Sexy%20Pink.html'; //This is the URL where your 'exit page' is located.
/* NOTE: If you experience an error it is most likely due to the strict AJAX security, make sure that you are accessing the correct URL, for example, if you have http://domain.com in your browser, and http://www.domain.com in the 'ExitPopURL' then there will be a conflict. they must both match. .htaccess to ensure that your visitors are visiting www. is good practice here.*/
var AlertBox = "*****************************************************\n\nWait! Stop! Don't Go!\n\nBefore leaving, we have a special offer for you\n\nClick Sty On Page Now\n\n*****************************************************"; // This is what the alert() pop up verbage says.

//DO NOT EDIT BELOW This LINE (Unless of course your Savvy!) ------------------------------



window.onload = function(){
	// this is where we start our journey...
	createExitPop();
}// end function onunload

function getChildren(n, skipMe){
    var r = [];
    var elem = null;
    for ( ; n; n = n.nextSibling ) 
       if ( n.nodeType == 1 && n != skipMe)
          r.push( n );        
    return r;
};

function getSiblings(n) {
    return getChildren(n.parentNode.firstChild, n);
}


function ajaxGET(divId, page, effect) 
{ 
     var xmlHttp; 
     try 
    { 
         // Firefox, Opera 8.0+, Safari 
         xmlHttp=new XMLHttpRequest(); 
    } 
     catch(e)   
    { 
         // Internet Explorer 
         try 
         { 
              xmlHttp=new ActiveXObject("Msxml2.XMLHTTP"); 
         } 
         catch(e)   
          { 
               try 
               { 
                    xmlHttp=new ActiveXObject("Microsoft.XMLHTTP"); 
               } 
               catch(e)   
             {      
                    alert("Your browser does not support AJAX!"); 
                  return false; 
             } 
         } 
     } 
      
    xmlHttp.onreadystatechange=function() 
     { 
         if(xmlHttp.readyState==4) 
          { 
               if(effect == 'collapse') { document.getElementById(divId).style.display='none'; } 
               else                     { document.getElementById(divId).innerHTML=xmlHttp.responseText; } 
         } 
    } 
     xmlHttp.open("GET",page,true); 
    xmlHttp.send(null); 
}

function createExitPop()
{
	var theBody = document.getElementsByTagName('body')[0]; 
	var newdiv = document.createElement('div');
	newdiv.setAttribute('id','ExitDiv');
	theBody.setAttribute('id','body');
	newdiv.setAttribute('style', 'width: 100%; height: 100%;');
	
		// put div on page
		theBody.appendChild(newdiv);
	
		//add exit pop to page (contents are from your exit.php(or whatever you named it) page)
		document.getElementById('ExitDiv').value = ajaxGET('ExitDiv', ExitPopURL);
	
	// style exit pop to resemble its own page
	document.getElementById('ExitDiv').style.display = "none"; 
	document.getElementById('ExitDiv').style.top = '0px'; 
	document.getElementById('ExitDiv').style.left = '0px'; 
	document.getElementById('ExitDiv').style.position = 'relative'; 
	//document.getElementById('ExitDiv').style.backgroundColor = '#FFFFFF';
	document.getElementById('ExitDiv').style.zIndex = 9999;
	
}// end createExitPop

isExit = true;

function ExitPop(isExit) {
		if(isExit != false)	{
			isExit=false;
			isPop = true;
			
			var bodyTag = document.getElementById? document.getElementsByTagName("BODY")[0] : document.body;
			
			// add id="body" so that it can be referenced.
			bodyTag.setAttribute("id", "body");
			
			
			
			//replace body text with exit pop
			//bodyTag.innerHTML = document.getElementById('ExitDiv').innerHTML;
			document.getElementById('ExitDiv').style.display = "block"; 
			
			var oldContent = getSiblings(document.getElementById('ExitDiv'));
			for(i in oldContent ){
				 oldContent[i].style.display = "none";
			}
			
			return AlertBox;
		} // end if
	}// end function

window.onbeforeunload = function(){

		// Lay down an exit pop!!
		return ExitPop(isExit);
	
}// end function onunload