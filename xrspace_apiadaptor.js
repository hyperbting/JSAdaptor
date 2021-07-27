//https://stackoverflow.com/questions/3612956/how-can-i-do-jquerys-get-in-pure-javascript-without-wanting-to-return-anyth
function getItems(spaceName, itemLimit, successCB, failCB) {
	var xhr;
     try {   
      xhr = new XMLHttpRequest();  
     } catch(e){   
       try {     
         xhr = new ActiveXObject("Msxml2.XMLHTTP");     
       } catch(e) {     
         try { 
           xhr = new ActiveXObject("Microsoft.XMLHTTP");       
         } catch(e) {       
           alert("Your browser does not support Ajax.");       
		   console.log( "Your browser does not support Ajax." );
           return false;       
         }     
       }   
     }
	 
	let url = buildUrl(spaceName, itemLimit);
    xhr.open("GET", url, true);
    xhr.onload = function (e) {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				successCB(xhr.responseText);
			} else {
				failCB();
			}
		}
	};
	
	xhr.onerror = failCB;

	xhr.send(null);
	 
    return xhr; 
}

function buildUrl(spaceName, itemLimit)
{
	switch(spaceName) {
		case "normal":
			return "https://mocki.io/v1/699e1707-e60e-4028-88dd-bbdd831f2b09";
		break;
		case "empty":
			return "https://mocki.io/v1/3b29cb85-eb52-4b27-9645-d964c869354c";
		break;
		default:
		break;
	}
	
	return "https://mocki.io/v1/notexist";
}

export {getItems}; // a list of exported variables