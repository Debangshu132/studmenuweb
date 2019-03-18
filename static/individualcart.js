window.onload = function() {
   
   //window.cartitemjson=JSON.parse(window.data);
   populateBody();
}

function populateBody(){
   document.getElementById("cartbody").innerHTML+= window.data;
   var bucketlist=Object.keys(jsoon.parse(window.data["cart"]));
   for(var bucketitem=0;bucketitem<bucketlist.length;bucketitem++)
   {   
       var individualid=bucketlist[bucketitem];
       document.getElementById("cartbody").innerHTML+=json.stringify(individualid);
       document.getElementById("cartbody").innerHTML+= window.data["cart"][individualid];
     /*     var bucket=document.createElement('bucket');
          for(var indexoforder=0;indexoforder<bucketitem['cart'].length;indexoforder++)
          {
                    var individualitemjson=bucketitem["cart"][indexoforder];
                    var individualitem=document.createElement('individualitem');
                    individualitem.innerHTML=individualitemjson;
                    individualitem.innerHTML+="its done";
                    bucket.appendChild(individualitem);
          }     
   
         document.getElementById("cartbody").appendChild(bucket);*/

   }
   
  
   }
   
