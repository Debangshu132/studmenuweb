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
   document.getElementById("cartbody").innerHTML+= JSON.stringify(datajson);
   
   for(var bucketitem=0;bucketitem < bucketlist.length;bucketitem++)
   {   
     var cartdata=datajson[bucketitem];
     document.getElementById("cartbody").innerHTML+=JSON.stringify(cartdata);

  
   }
} 
