window.cartjson=JSON.parse(data);
window.onload = function() {
   clearFooter("menuitbody");
   populateBody(cartjson);};
function populateBody(cartjson){
alert(cartjson)
}   