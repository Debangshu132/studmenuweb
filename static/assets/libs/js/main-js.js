 window.onload = function() {
    var datatogive={"restaurant":"Taj","noOfTables":8};   
    populateBodyTables(datatogive);
    }
function populateBodyTables(datatogive){
     clear("tableContainer");
     var noOfTables=datatogive["noOfTables"];
     for(var tableNo=0;tableNo<noOfTables;tableNo++){
        var tablesOuter=document.createElement('div');
        tablesOuter.className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12";
       var tablesInner=document.createElement('div');
       tablesInner.className="card border-3 border-top border-top-primary";
       var card=document.createElement('div');
       card.className="card";
       card.innerHTML='<div class="card-header d-flex"><h4 class="mb-0" >Table number '+tableNo+'</h4><div class="dropdown ml-auto"><a class="toolbar" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="mdi mdi-dots-vertical"></i>  </a> <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink"><a class="dropdown-item" href="#">Checkout</a><a class="dropdown-item" href="#">Reserve</a><a class="dropdown-item" href="#" onclick="return logoutWaiter('+tableNo.toString()+');">Logout Waiter</a></div></div></div>';
       card.innerHTML+='<iframe frameBorder="0" src="http://studmenuweb.herokuapp.com/groupcart/%7B%22restaurant%22:%22Taj%22,%22tableno%22:%22'+tableNo+'%22,%22identity%22:%22manager%22%7D"></iframe>';
       tablesInner.appendChild(card);
       tablesOuter.appendChild(card);
       document.getElementById('tableContainer').appendChild(tablesOuter);}} 
 
 function logoutWaiter(tableno){
    var check=confirm('do you really want to logout the waiter?')
    if(check===true){
        var http = new XMLHttpRequest();
        var url = '/logoutwaiter/'+JSON.stringify({"tableno":tableno});
        http.open("POST", url, false); 
        http.setRequestHeader("Content-Type", "application/json");
        http.send();
        alert('logged out')}}

function clear(element){document.getElementById(element).innerHTML="";}       

function populateBodyMenu(){
    alert("done bro");
    clear("wrapper");
    document.getElementById('wrapper').innerHTML='<iframe style="position: absolute; height: 600px; border: none" frameBorder="0" src="http://studmenuweb.herokuapp.com/menu/Taj"></iframe>';  
}
