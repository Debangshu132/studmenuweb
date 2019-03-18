window.onload = function() {
   
   //window.cartitemjson=JSON.parse(window.data);
   populateBody();
}

function populateBody(){
   //document.getElementById("cartbody").innerHTML+= window.data;
   //var datajson=JSON.parse(window.data);
   //document.getElementById("cartbody").innerHTML+= window.data;
   //document.getElementById("cartbody").innerHTML+= window.data;
   //document.getElementById("cartbody").innerHTML+="1324";
   //var bucketlist=datajson["cart"];

   var datajson=JSON.parse(window.data);
   datajson=datajson["cart"];
   var bucketlist=Object.keys(datajson);
   //document.getElementById("cartbody").innerHTML+= JSON.stringify(datajson);
   //document.getElementById("cartbody").innerHTML+= JSON.stringify(bucketlist);
   
   for(var bucketitem=0;bucketitem < bucketlist.length;bucketitem++)
   {   
     var individualid=bucketlist[bucketitem];
     document.getElementById("cartbody").innerHTML+=JSON.stringify(individualid)+"<br/>";
     var singleorder=JSON.stringify(datajson[individualid]);
     //document.getElementById("cartbody").innerHTML+=singleorder+"<br/>";
     singleorder=singleorder.replace(/'/g, '"');
     document.getElementById("cartbody").innerHTML+=singleorder+"<br/>";
     singleorder=JSON.parse(singleorder);
     singleorder-singleorder[0];
     document.getElementById("cartbody").innerHTML+=JSON.stringify(singleorder)+"<br/>";

  
   }
} 
