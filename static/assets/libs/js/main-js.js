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
    //document.getElementById('wrapper').innerHTML='<iframe style="padding:30px;float:right; height: 530px; border: none" frameBorder="0" src="http://studmenuweb.herokuapp.com/menu/Taj"></iframe>';  
    var formdiv=document.createElement('div');
    formdiv.className='formdiv';
    //formdiv.innerHTML=data;
    formdiv.style.padding="30px";
    var cateory0=document.createElement('div');
    cateory0.className='category0';

    var datajson=JSON.parse(data);
    var category0list=Object.keys(datajson);

    var htmlstring='<div class="col-lg-12"><div class="card"><div class="campaign-table table-responsive"><table class="table"><thead><tr class="border-0"><th class="border-0">Pic</th><th class="border-0">Name</th><th class="border-0">Price</th><th class="border-0">Veg/NonVeg</th><th class="border-0">Status</th><th class="border-0">Action</th></tr></thead><tbody><br>';
    
    
    
    
    
    
    for(var category0index=0;category0index<category0list.length;category0index++){
     var category0item=category0list[ category0index];
     var category0datajson=datajson[category0item];   
     var category1list=Object.keys(category0datajson);
    for(var category1index=0;category1index<category1list.length;category1index++){ 
        var category1item=category1list[ category1index];
        var category1datajson=category0datajson[category1item];
        var category2list=Object.keys(category1datajson);
    for(var category2index=0;category2index<category2list.length;category2index++){   
        var category2item=category2list[ category2index];    
        var category2datajson=category1datajson[category2item];
        var price=category2datajson["price"];
        if(JSON.stringify(category2datajson["vegnonveg"])===JSON.stringify("veg")){
        var vegnonvegpic="badge badge-success";
        }
        else{
            var vegnonvegpic="badge badge-danger"
        }
     category2item=JSON.stringify(category2item);
     category2item=category2item.replace(" ","_");
     category2item=JSON.parse(category2item); 
     valuetosend=JSON.stringify([category0item,category1item,category2item]) ;   
    htmlstring=htmlstring+'<tr><td><div class="m-r-10"><img src="assets/images/github.png" alt="user" width="35"></div></td><td>'+JSON.stringify(category2item)+' </td><td>Rs. '+JSON.stringify(price)+'</td><td><span class="'+vegnonvegpic+'">'+category2datajson["vegnonveg"]+'</span></td><td><div class="switch-button switch-button-danger"><input type="checkbox" checked="" name="switch12" onclick="updateCheckboxesMenu(this)" value='+valuetosend+' id='+JSON.stringify(category2item)+'><span><label for='+JSON.stringify(category2item)+'></label></span></div></td><td><div class="input-group-append be-addon"><button type="button" data-toggle="dropdown" class="btn btn-outline-secondary dropdown-toggle">Edit</button><div class="dropdown-menu"><a href="#" class="dropdown-item">Edit</a><a href="#" class="dropdown-item">Another action</a><a href="#" class="dropdown-item">Something else here</a><div class="dropdown-divider"></div><a href="#" class="dropdown-item">Settings</a></div></div></div></td></tr>';
    }}}
    formdiv.innerHTML=htmlstring+'</tbody></table></div></div></div>';
        document.getElementById('wrapper').appendChild(formdiv);

        var submitbutton=document.createElement('div');
        submitbutton.className='submitbutton';
        submitbutton.innerHTML='SUBMIT';
        document.getElementById('wrapper').appendChild(submitbutton); 
        submitbutton.onclick=function(){
         return function(data){
            var http = new XMLHttpRequest();
            var url = 'https://studmenuweb.herokuapp.com/dashboardactivatedeactivatemenu/'+data;
            http.open("POST", url, false); 
            http.setRequestHeader("Content-Type", "application/json");
            http.send();


         }

        }( updateCheckboxesMenu('switch12'));

        updateCheckboxesMenu('switch12');
    
} 
function updateCheckboxesMenu(checkboxElem) {
    if (checkboxElem.checked) {
        var datatosend=[checkboxElem.value,"True"]
        var http = new XMLHttpRequest();
        var url = '/dashboardactivatedeactivatemenu/'+JSON.stringify(datatosend);
        http.open("POST", url, false); 
        http.setRequestHeader("Content-Type", "application/json");
        http.send();
        alert (datatosend);
      } 
      else{
        var datatosend=[checkboxElem.value,"False"]
        var http = new XMLHttpRequest();
        var url = '/dashboardactivatedeactivatemenu/'+JSON.stringify(datatosend);
        http.open("POST", url, false); 
        http.setRequestHeader("Content-Type", "application/json");
        http.send();
        alert (datatosend);

      }
    
  
  }
