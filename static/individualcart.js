
var datatogiveinitial=window.data;
var datajsoninitial=JSON.parse(datatogiveinitial);
window.identityinitial=datajsoninitial["identity"];
window.restaurantinitial=datajsoninitial["restaurant"];
window.tablenoinitial=datajsoninitial["tableno"];
window.dataToUpdate={"restaurant":window.restaurantinitial,"tableno":window.tablenoinitial,"identity":window.identityinitial}
window.time=0; 

setInterval(function() {



   fetch('/updatecart/'+JSON.stringify(window.dataToUpdate)) // Call the fetch function passing the url of the API as a parameter
   .then(response => response.json())
   .then(data =>  populateBody(JSON.stringify(data)))



   
.catch(function() {


fetch('/checkforcheckins/'+JSON.stringify(window.dataToUpdate)) // Call the fetch function passing the url of the API as a parameter

   .then(response => response.json())
   .then(data =>  populateCheckin(JSON.stringify(data)))






});

}, 3* 1000); 







var elem = document.getElementById("cartbody");
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}



function populateCheckin(arrayOfCustomers){
   clear("cartbody");
   
   var arrayOfCustomersJson=JSON.parse(arrayOfCustomers);
   arrayOfCustomersJson=arrayOfCustomersJson["consumers"];
   if(arrayOfCustomersJson.length===0){
      if(window.identityinitial==="waiter"){
      document.getElementById("cartbody").innerHTML="The table is vacant";}
      else{
         document.getElementById("cartbody").innerHTML="You have been checked out!";
      }    
        
      
   }
   else{
   window.time=window.time+10;  
   for(var customerIndex=0;customerIndex<arrayOfCustomersJson.length;customerIndex++){
     
      document.getElementById("cartbody").innerHTML+=arrayOfCustomersJson[customerIndex]+" Has joined the Table!</br>";    
     
      
      
            
   }
   
   if(window.time<60){
      document.getElementById("cartbody").innerHTML+="The Customers are sitting for "+window.time+" seconds";
   }
   if(window.time<3600 ){
     if(window.time>60){ 
      document.getElementById("cartbody").innerHTML+="The Customers are sitting for "+Math.floor(window.time/60)+" mins"+(window.time%60) + " seconds";
   }}
   if(window.time>3600){
      document.getElementById("cartbody").innerHTML+="The Customers are sitting for "+Math.floor(window.time/3600)+" hours"+Math.floor((window.time%3600)/60)+" mins";
   }
  
   
   
   

   if(window.identity==="waiter" || window.identity==="manager"){
      var checkout=document.createElement('div');
      checkout.className="checkout";
      checkout.innerHTML='CHECKOUT';
      checkout.onclick=function(atableno,arestaurant,id){
        
        return function(){ 
         window.time=0;
         var check=confirm('do you really want to check users out?')
         if(check===true){
         var http = new XMLHttpRequest();
         var url = 'https://studmenu.herokuapp.com/checkout/'+JSON.stringify({"tableno":atableno,"restaurant":arestaurant,"id":id});
         http.open("POST", url, false); 
         http.setRequestHeader("Content-Type", "application/json");
         http.send();
         document.getElementById("cartbody").style.borderTop="3px solid #fff";
         alert('checked out!');}
      }}(window.tablenoinitial,window.restaurantinitial,window.identityinitial);

      document.getElementById("cartbody").appendChild(checkout);

   }}
  
}



window.onload = function() {
var datatogive=window.data;   
populateBody(datatogive);
}

function populateBody(datatogive){
   
   
   var datajson=JSON.parse(datatogive);
   window.identity=datajson["identity"];
   
   var restaurant=datajson["restaurant"];
   var tableno=datajson["tableno"];
   document.title = 'Table number'+tableno;
   datajson=datajson["tableinfo"];
   var whoLastOrdered=datajson["whoLastOrdered"];
   datajson=datajson["cart"];
   var bucketlist=Object.keys(datajson);

   var total=document.createElement('div');
   total.className="total";
    

   var index = bucketlist.indexOf(whoLastOrdered);
    if (index !== -1){ bucketlist.splice(index, 1);}
    bucketlist.unshift(whoLastOrdered);
   


    var dummy= datajson[bucketlist[0]]["mycart"];
   
    clear("cartbody");
    var totalPrice=0;
    var noOfPendingOrders=0;
   for(var bucketitem=0;bucketitem < bucketlist.length;bucketitem++)
   {   
     var individualid=bucketlist[bucketitem];
     window.indiid=individualid;
     var singlepersonorderlistjson=datajson[individualid];
     singlepersonorderlistjson=singlepersonorderlistjson["mycart"];
     var firstnamejson=datajson[individualid]["firstname"];
     var firstname=document.createElement('div');
     firstname.className="firstname";
     firstname.innerHTML=JSON.stringify(firstnamejson);
     var bucket=document.createElement('div');
     bucket.className="bucket";
     var status=document.createElement('div');
     window.statusjson=datajson[individualid]["status"];
     status.className="status";
     status.innerHTML=window.statusjson;
    
        
     if(JSON.stringify(window.statusjson)===JSON.stringify("pending")){
      
       noOfPendingOrders=noOfPendingOrders+1; 
      
     }
     bucket.appendChild(status);
  
     for(var orderindex=singlepersonorderlistjson.length-1;orderindex>-1;orderindex--)
     {
      
      var atomicorderjson=singlepersonorderlistjson[orderindex];
      
      var itemjson=atomicorderjson["item"];
      var statusindividual=atomicorderjson["status"];
      var customizationjson=atomicorderjson["customization"];
      var pricejson=atomicorderjson["price"];
      if(statusindividual!=="denied"){
          totalPrice=totalPrice+pricejson;}
      var quantityjson=atomicorderjson["quantity"];

      var atomicorder=document.createElement('div');
      
      var item=document.createElement('div');
      var customization=document.createElement('div');
      var price=document.createElement('div');
      var quantity=document.createElement('div');

      atomicorder.className="atomicorder";
      
      firstname.className="firstname";
      item.className="item";
      customization.className="customization";
      price.className="price";
      quantity.className="quantity";

      var customizationstring="";
      var queries=Object.keys(customizationjson);
      for(var querynumber=0;querynumber<queries.length;querynumber++){
         customizationstring=customizationstring+JSON.stringify(queries[querynumber]);
         customizationstring=customizationstring+":";
         var answer=(customizationjson[queries[querynumber]][0]);
         
         if(answer!==undefined){
         answer=JSON.stringify(answer).split(",")[0];   
         customizationstring=customizationstring+answer;
         customizationstring=customizationstring+", ";}
         else{
            customizationstring=customizationstring+" No Option Choosen! ";
         }
      }
      customizationstring=customizationstring.replace(/\"/g, "");

      



      
      firstname.innerHTML=firstnamejson;
      item.innerHTML=itemjson;
      customization.innerHTML=customizationstring;
      price.innerHTML="Rs"+JSON.stringify(pricejson);
      quantity.innerHTML=quantityjson;
      
      
      atomicorder.appendChild(item);atomicorder.appendChild(price);atomicorder.appendChild(quantity);atomicorder.appendChild(customization);
      bucket.appendChild(atomicorder); 
      if(statusindividual==="pending"){
         quantity.style.color="	#000000";
      }
      if(statusindividual==="accepted"){
         quantity.style.color="#00FF00";
      }
      if(statusindividual==="denied"){
         quantity.style.color="#FF0000";
      }
     }
   
   if(window.identity==="waiter" || window.identity==="manager"){
      bucket.onclick=function(atableno,arestaurant,id){
      return function(){executeWaitersCode(atableno,arestaurant,id); }  
   
   }(tableno,restaurant,individualid);

}
   document.getElementById("cartbody").appendChild(firstname);
   document.getElementById("cartbody").appendChild(bucket);
   }
   total.innerHTML='Rs'+totalPrice;
   document.getElementById("cartbody").appendChild(total);
   if(window.identity==="waiter" || window.identity==="manager"){
      var checkout=document.createElement('div');
      checkout.className="checkout";
      checkout.innerHTML='CHECKOUT';
      checkout.onclick=function(atableno,arestaurant,id){
        return function(){ 
         var check=confirm('do you really want to check users out?')
         if(check===true){
         var http = new XMLHttpRequest();
         var url = 'https://studmenu.herokuapp.com/checkout/'+JSON.stringify({"tableno":atableno,"restaurant":arestaurant,"id":id});
         http.open("POST", url, false); 
         http.setRequestHeader("Content-Type", "application/json");
         http.send();
         alert('checked out!');}
      }}(tableno,restaurant,individualid);

      document.getElementById("cartbody").appendChild(checkout);
      
         
      if(noOfPendingOrders>0){
         var redness=200+noOfPendingOrders*10;
         var greenness=100-noOfPendingOrders*10;
         var blueness=100-noOfPendingOrders*10;
         if((redness<255) && (blueness>0) && (greenness)>0){

         document.getElementById("cartbody").style.borderTop="3px solid rgb("+redness.toString(10)+","+greenness.toString(10)+","+blueness.toString(10)+")";}
       else{
         
         document.getElementById("cartbody").style.borderTop="3px solid rgb(255,0,0)";
       } 
      }
      else{
         document.getElementById("cartbody").style.borderTop="3px solid #41376b";
      }   

   }

 
}
function executeWaitersCode(tableno,restaurant,id){
    
    var acceptOrder=document.createElement('div');
    var acceptOrderContent=document.createElement('div');

    acceptOrder.className="acceptOrder";
    acceptOrder.id="acceptOrder";
    acceptOrderContent.className="acceptOrderContent";

    
    var accept=document.createElement('div');
    accept.className="accept";
    accept.innerHTML="accept order!";
    accept.onclick=function(argtableno,argrestaurant,argid,argacceptdeny){
       return function(){
         
         window.statusjson="accepted";
         status.innerHTML=window.statusjson;
         postAcceptOrder(argtableno,argrestaurant,argid,argacceptdeny);
         

        
       }
    }(tableno,restaurant,id,"accepted");

    if(window.identity==="manager"){

      var deny=document.createElement('div');
      deny.className="accept";
      deny.innerHTML="deny order!";
      deny.onclick=function(argtableno,argrestaurant,argid,argacceptdeny){
         return function(){
           
           window.statusjson="denied";
           status.innerHTML=window.statusjson;
           postAcceptOrder(argtableno,argrestaurant,argid,argacceptdeny);
           
  
          
         }
      }(tableno,restaurant,id,"denied");


    }




    var cancel=document.createElement('div');
    cancel.className="accept";
    cancel.innerHTML="cancel";
    cancel.onclick=function(){
       return function(){
         //openFullscreen();
         document.getElementById('acceptOrder').remove();
       }
    }(id);
     
   

    acceptOrderContent.innerHTML="Are you sure you want to accept the order?";
    acceptOrderContent.appendChild(accept);
    if(window.identity==="manager"){
    acceptOrderContent.appendChild(deny);}
    acceptOrderContent.appendChild(cancel);
    acceptOrder.appendChild(acceptOrderContent);
    document.getElementById("cartbody").appendChild(acceptOrder);

} 
function postAcceptOrder(tableno,restaurant,id,acceptdeny){
    
    var http = new XMLHttpRequest();
    var url = 'https://studmenu.herokuapp.com/acceptdeny/'+JSON.stringify({"tableno":tableno,"restaurant":restaurant,"id":id,"acceptdeny":acceptdeny});
    http.open("POST", url, false); 
    http.setRequestHeader("Content-Type", "application/json");
    http.send();
    

    




     
    
    
   
    document.getElementById('acceptOrder').remove();
     return false;
}





function compare(a, b) {
   // Use toUpperCase() to ignore character casing
   const genreA = a.status.toUpperCase();
   const genreB = b.status.toUpperCase();
 
   let comparison = 0;
   if (genreA > genreB) {
     comparison = -1;
   } else if (genreA < genreB) {
     comparison = 1;
   }
   return comparison;
 }



function clear(elementID)
{document.getElementById(elementID).innerHTML = "";


}
 
