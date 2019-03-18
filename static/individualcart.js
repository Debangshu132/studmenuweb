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
   document.getElementById("cartbody").innerHTML+=window.data;
   document.getElementById("cartbody").innerHTML+=window.data;
   window.peace=JSON.parse(window.data)
   document.getElementById("cartbody").innerHTML+=JSON.stringify(window.peace);
   for(var bucketitem=0;bucketitem<bucketlist.length;bucketitem++)
   {   
       var individualid=bucketlist[bucketitem];
       document.getElementById("cartbody").innerHTML+=JSON.stringify(individualid);
       //document.getElementById("cartbody").innerHTML+= window.data["cart"][individualid];
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
   
