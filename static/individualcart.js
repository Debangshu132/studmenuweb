window.onload = function() {
   
   //window.cartitemjson=JSON.parse(window.data);
   populateBody();
}

function populateBody(){
   document.getElementById("cartbody").innerHTML= window.data;
   
   for(bucketitem in window.data["cart"])
   {
       document.getElementById("cartbody").innerHTML+= bucketitem;
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
   
