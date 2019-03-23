 window.onload = function() {
    var datatogive={"restaurant":"Taj","noOfTables":8};   
    populateBodyWaiter(datatogive);
    }



function populateBodyWaiter(datatogive){
     var noOfTables=datatogive["noOfTables"];
     for(var tableNo=0;tableNo<noOfTables;tableNo++){
        var tablesOuter=document.createElement('div');
        tablesOuter.className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12";
       var tablesInner=document.createElement('div');
       tablesInner.className="card border-3 border-top border-top-primary";
       var card=document.createElement('div');
       card.className="card";
       card.innerHTML='<div class="card-header d-flex"><h4 class="mb-0" >Table number '+tableNo+'</h4><div class="dropdown ml-auto"><a class="toolbar" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="mdi mdi-dots-vertical"></i>  </a> <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink"><a class="dropdown-item" href="#">Checkout</a><a class="dropdown-item" href="#">Reserve</a><a class="dropdown-item" href="#">Logout Waiter</a></div></div></div>';
       card.innerHTML+='<iframe frameBorder="0" src="http://studmenuweb.herokuapp.com/groupcart/%7B%22restaurant%22:%22Taj%22,%22tableno%22:%22'+tableNo+'%22,%22identity%22:%22waiter%22%7D"></iframe>';


       tablesInner.appendChild(card);
       tablesOuter.appendChild(card);
       document.getElementById('tableContainer').appendChild(tablesOuter);


     }
 }   
