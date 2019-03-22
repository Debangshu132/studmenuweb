
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

}, 10 * 1000); 



function populateCheckin(arrayOfCustomers){
   clear("cartbody");
   
   var arrayOfCustomersJson=JSON.parse(arrayOfCustomers);
   arrayOfCustomersJson=arrayOfCustomersJson["consumers"];
   if(arrayOfCustomersJson.length===0){
      document.getElementById("cartbody").innerHTML="The table is vacant";    
        
      
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
  
   
   
   

   if(window.identity==="waiter"){
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
    

   var index = bucketlist.indexOf(whoLastOrdered);
    if (index !== -1){ bucketlist.splice(index, 1);}
    bucketlist.unshift(whoLastOrdered);
   


    var dummy= datajson[bucketlist[0]]["mycart"];

    clear("cartbody");
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
     bucket.appendChild(status);
  
     for(var orderindex=singlepersonorderlistjson.length-1;orderindex>-1;orderindex--)
     {
      
      var atomicorderjson=singlepersonorderlistjson[orderindex];
      
      var itemjson=atomicorderjson["item"];
      var statusindividual=atomicorderjson["status"];
      var customizationjson=atomicorderjson["customization"];
      var pricejson=atomicorderjson["price"];
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
         customizationstring=customizationstring+" : ";
         var answer=(customizationjson[queries[querynumber]][0]);
         answer=JSON.stringify(answer).split(",")[0];
         if(answer!==undefined){
         customizationstring=customizationstring+JSON.stringify(answer);
         customizationstring=customizationstring+" , ";}
         else{
            customizationstring=customizationstring+" No Option Choosen! ";
         }
      }

      



      
      firstname.innerHTML=firstnamejson;
      item.innerHTML=itemjson;
      customization.innerHTML=customizationstring;
      price.innerHTML=JSON.stringify(pricejson);
      quantity.innerHTML=quantityjson;
      
      
      atomicorder.appendChild(item);atomicorder.appendChild(price);atomicorder.appendChild(quantity);atomicorder.appendChild(customization);
      bucket.appendChild(atomicorder); 
      if(statusindividual==="pending"){
         quantity.style.color="#ff00ff";
      }
     }
   
   if(window.identity==="waiter"){
      bucket.onclick=function(atableno,arestaurant,id){
      return function(){executeWaitersCode(atableno,arestaurant,id); }  
   
   }(tableno,restaurant,individualid);

}
   document.getElementById("cartbody").appendChild(firstname);
   document.getElementById("cartbody").appendChild(bucket);
   }
   if(window.identity==="waiter"){
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
    var cancel=document.createElement('div');
    cancel.className="accept";
    cancel.innerHTML="cancel";
    cancel.onclick=function(){
       return function(){
  
         document.getElementById('acceptOrder').remove();
       }
    }(id);
     
   

    acceptOrderContent.innerHTML="Are you sure you want to accept the order?";
    acceptOrderContent.appendChild(accept);
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
 
