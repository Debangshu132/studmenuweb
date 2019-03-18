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
   var datajsoncart=datajson["cart"];
   var bucketlist=Object.keys(datajsoncart);
  
   
   for(var bucketitem=0;bucketitem < bucketlist.length;bucketitem++)
   {   
       var individualid=bucketlist[bucketitem];
       var cartitemlist=datajsoncart[individualid];
       var bucket=document.createElement('bucket');
       cartitemlist=JSON.stringify(cartitemlist);
       cartitemlist=cartitemlist.replace(/'/g, '"');
       //cartitemlist=cartitemlist.replace('\"', '"');
       var processedcartitemlistjson=JSON.parse(JSON.stringify(cartitemlist));
        
       document.getElementById("cartbody").innerHTML+= JSON.stringify(processedcartitemlistjson.length);
        
          for(var indexoforder=0;indexoforder<cartitemlist.length;indexoforder++)
          {
                    var individualitemjson=cartitemlist[indexoforder];
                    var individualitem=document.createElement('individualitem');
                    individualitem.innerHTML=individualitemjson;
                    individualitem.innerHTML+="its done individual level";
                    bucket.appendChild(individualitem);
          }     
   
         document.getElementById("cartbody").appendChild(bucket);

   }
   
  
   }
   
