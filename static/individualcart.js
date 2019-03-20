window.onload = function() {
  
   //window.cartitemjson=JSON.parse(window.data);
   populateBody();
   //const io = require('socket.io-client');
   var socket = io.connect('/' );
  
  
   socket.on('okrefreshpage', function(msg) {
      alert('yup refresh');
      //location.reload();

  });
}

function populateBody(){
   

   var datajson=JSON.parse(window.data);
   window.identity=datajson["identity"];
   var restaurant=datajson["restaurant"];
   var tableno=datajson["tableno"];
   datajson=datajson["tableinfo"];
   
   datajson=datajson["cart"];
   var bucketlist=Object.keys(datajson);
   //bucketlist=bucketlist.sort(compare);
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
      price.classname="price";
      quantity.className="quantity";

      
      firstname.innerHTML=firstnamejson;
      item.innerHTML=itemjson;
      customization.innerHTML=JSON.stringify(customizationjson);
      price.innerHTML=pricejson;
      quantity.innerHTML=quantityjson;
      if(statusindividual==="pending"){
         atomicorder.style.background="#ff00ff";
      }
      
      atomicorder.appendChild(item);atomicorder.appendChild(price);atomicorder.appendChild(quantity);atomicorder.appendChild(customization);
      bucket.appendChild(atomicorder); 
     
   }
   
   if(window.identity==="waiter"){
      bucket.onclick=function(atableno,arestaurant,id){
      return function(){executeWaitersCode(atableno,arestaurant,id); }  
   
   }(tableno,restaurant,individualid);

}
   document.getElementById("cartbody").appendChild(firstname);
   document.getElementById("cartbody").appendChild(bucket);
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
    socket.emit('canirefresh',{data:"testsend"});
    var http = new XMLHttpRequest();
    var url = 'https://studmenu.herokuapp.com/acceptdeny/'+JSON.stringify({"tableno":tableno,"restaurant":restaurant,"id":id,"acceptdeny":acceptdeny});
    http.open("POST", url, false); 
    http.setRequestHeader("Content-Type", "application/json");
    http.send();
    socket.emit('connected',{data:"testsend"});
   
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
 
