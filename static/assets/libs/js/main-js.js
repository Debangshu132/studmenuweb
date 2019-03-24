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
    fetch('/populatedashboardmenuitems/Taj') // Call the fetch function passing the url of the API as a parameter
    .then(response => response.json())
    .then(data =>  populateBodyMenuForm(JSON.stringify(data)))
    }
function populateBodyMenuForm(data){
    clear("wrapper");
    document.getElementById('wrapper').innerHTML='<iframe style="padding:30px;float:right; height: 530px; border: none" frameBorder="0" src="http://studmenuweb.herokuapp.com/menu/Taj"></iframe>';  
    var formdiv=document.createElement('div');
    formdiv.className='formdiv';
    //formdiv.innerHTML=data;
    formdiv.style.padding="30px";
    var cateory0=document.createElement('div');
    cateory0.className='category0';

    var datajson=JSON.parse(data);
    var category0list=Object.keys(datajson);
    for(var category0listindex=0;category0listindex<category0list.length;category0listindex++){
formdiv.innerHTML='<div class="col-lg-7"><div class="section-block"><h3 class="section-title">Category 2</h3></div><div class="card"><div class="campaign-table table-responsive"><table class="table"><thead><tr class="border-0"><th class="border-0">Pic</th><th class="border-0">Name</th> <th class="border-0">Price</th><th class="border-0">Veg/NonVeg</th><th class="border-0">Status</th><th class="border-0">Action</th></tr></thead><tbody><tr><td><div class="m-r-10"><img src="assets/images/dribbble.png" alt="user" width="35"></div></td><td>Veg Pulao </td><td>Rs.250</td><td><span class="badge badge-success">Veg</span></td><td><div class="switch-button switch-button-danger"><input type="checkbox" checked="" name="switch18" id="switch18"><span><label for="switch18"></label></span></div></td></tr></tbody></table></div></div></div>';
}
        document.getElementById('wrapper').appendChild(formdiv);
    
}
