//https://stackoverflow.com/questions/3612956/how-can-i-do-jquerys-get-in-pure-javascript-without-wanting-to-return-anyth
function getItems(url, successCB, failCB) {
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

export {getItems}; // a list of exported variables