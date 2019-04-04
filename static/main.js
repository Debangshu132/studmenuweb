window.cart=[];

window.swiper = new Swiper('.swiper-container', {
  slidesPerView:5,
  simulateTouch:true,
  initialSlide:0,
  lazy: {loadPrevNext: true,loadPrevNextAmount: 2,},
  spaceBetween: 30,

  breakpoints: {
      1300: {
          slidesPerView: 11,
          spaceBetween: 40,
        },
      900: {
          slidesPerView: 9,
          spaceBetween: 40,
        },
      710: {
        slidesPerView: 8,
        spaceBetween: 40,
      },
      560: {
        slidesPerView: 7,
        spaceBetween: 15,
      },
      450: {
        slidesPerView: 6,
        spaceBetween: 10,
      },
      370: {
        slidesPerView: 5,
        spaceBetween: 10,
      }
    }

});
window.menuitemjson=JSON.parse(menuitem);
var foodlist=Object.keys(window.menuitemjson["Food"]);

food=foodlist;

var drinklist=Object.keys(window.menuitemjson["Drinks"]);
drink=drinklist;

generalIcons={
"veg":"https://s3.ap-south-1.amazonaws.com/studmenu/General+Icons/Veg.png",
"nonveg":"https://s3.ap-south-1.amazonaws.com/studmenu/General+Icons/Non+Veg.png"

}

picCategoryArrayFood=[
  "https://s3.ap-south-1.amazonaws.com/studmenu/Restaurants/CAD+Tech+Bar/Food/Category+1+icons/Uncolored/Attributes.png",  
  "https://s3.ap-south-1.amazonaws.com/studmenu/Restaurants/CAD+Tech+Bar/Food/Category+1+icons/Uncolored/Bread+Drive.png",
  "https://s3.ap-south-1.amazonaws.com/studmenu/Restaurants/CAD+Tech+Bar/Food/Category+1+icons/Uncolored/Bytes.png",  
  "https://s3.ap-south-1.amazonaws.com/studmenu/Restaurants/CAD+Tech+Bar/Food/Category+1+icons/Uncolored/Floppy.png",
  "https://s3.ap-south-1.amazonaws.com/studmenu/Restaurants/CAD+Tech+Bar/Food/Category+1+icons/Uncolored/Hardware.png",  
  "https://s3.ap-south-1.amazonaws.com/studmenu/Restaurants/CAD+Tech+Bar/Food/Category+1+icons/Uncolored/Programmer.png",
  "https://s3.ap-south-1.amazonaws.com/studmenu/Restaurants/CAD+Tech+Bar/Food/Category+1+icons/Uncolored/Software.png",
  "https://s3.ap-south-1.amazonaws.com/studmenu/Restaurants/CAD+Tech+Bar/Food/Category+1+icons/Uncolored/Software.png"
]
picCategoryArrayFoodColored=[
  "https://s3.ap-south-1.amazonaws.com/studmenu/Restaurants/CAD+Tech+Bar/Food/Category+1+icons/Colored/Attributes.png",  
  "https://s3.ap-south-1.amazonaws.com/studmenu/Restaurants/CAD+Tech+Bar/Food/Category+1+icons/Colored/Bread+Drive.png",
  "https://s3.ap-south-1.amazonaws.com/studmenu/Restaurants/CAD+Tech+Bar/Food/Category+1+icons/Colored/Bytes.png",  
  "https://s3.ap-south-1.amazonaws.com/studmenu/Restaurants/CAD+Tech+Bar/Food/Category+1+icons/Colored/Floppy.png",
  "https://s3.ap-south-1.amazonaws.com/studmenu/Restaurants/CAD+Tech+Bar/Food/Category+1+icons/Colored/Hardware.png",  
  "https://s3.ap-south-1.amazonaws.com/studmenu/Restaurants/CAD+Tech+Bar/Food/Category+1+icons/Colored/Programmer.png",
  "https://s3.ap-south-1.amazonaws.com/studmenu/Restaurants/CAD+Tech+Bar/Food/Category+1+icons/Colored/Software.png",
  "https://s3.ap-south-1.amazonaws.com/studmenu/Restaurants/CAD+Tech+Bar/Food/Category+1+icons/Colored/Software.png"
  ]
  picCategoryArrayDrink=[
    "https://s3.ap-south-1.amazonaws.com/studmenu/Restaurants/CAD+Tech+Bar/Food/Category+1+icons/Uncolored/Attributes.png",  
    "https://s3.ap-south-1.amazonaws.com/studmenu/Restaurants/CAD+Tech+Bar/Food/Category+1+icons/Uncolored/Bread+Drive.png",
    "https://s3.ap-south-1.amazonaws.com/studmenu/Restaurants/CAD+Tech+Bar/Food/Category+1+icons/Uncolored/Bytes.png",  
    "https://s3.ap-south-1.amazonaws.com/studmenu/Restaurants/CAD+Tech+Bar/Food/Category+1+icons/Uncolored/Floppy.png",
    "https://s3.ap-south-1.amazonaws.com/studmenu/Restaurants/CAD+Tech+Bar/Food/Category+1+icons/Uncolored/Hardware.png",  
    "https://s3.ap-south-1.amazonaws.com/studmenu/Restaurants/CAD+Tech+Bar/Food/Category+1+icons/Uncolored/Programmer.png",
    "https://s3.ap-south-1.amazonaws.com/studmenu/Restaurants/CAD+Tech+Bar/Food/Category+1+icons/Uncolored/Software.png",
    "https://s3.ap-south-1.amazonaws.com/studmenu/Restaurants/CAD+Tech+Bar/Food/Category+1+icons/Uncolored/Software.png"
    ]
    picCategoryArrayDrinkColored=[
      "https://s3.ap-south-1.amazonaws.com/studmenu/Restaurants/CAD+Tech+Bar/Food/Category+1+icons/Colored/Attributes.png",  
      "https://s3.ap-south-1.amazonaws.com/studmenu/Restaurants/CAD+Tech+Bar/Food/Category+1+icons/Colored/Bread+Drive.png",
      "https://s3.ap-south-1.amazonaws.com/studmenu/Restaurants/CAD+Tech+Bar/Food/Category+1+icons/Colored/Bytes.png",  
      "https://s3.ap-south-1.amazonaws.com/studmenu/Restaurants/CAD+Tech+Bar/Food/Category+1+icons/Colored/Floppy.png",
      "https://s3.ap-south-1.amazonaws.com/studmenu/Restaurants/CAD+Tech+Bar/Food/Category+1+icons/Colored/Hardware.png",  
      "https://s3.ap-south-1.amazonaws.com/studmenu/Restaurants/CAD+Tech+Bar/Food/Category+1+icons/Colored/Programmer.png",
      "https://s3.ap-south-1.amazonaws.com/studmenu/Restaurants/CAD+Tech+Bar/Food/Category+1+icons/Colored/Software.png",
      "https://s3.ap-south-1.amazonaws.com/studmenu/Restaurants/CAD+Tech+Bar/Food/Category+1+icons/Colored/Software.png"
      ]


window.menuPicArray=[
  "url('https://storage.googleapis.com/meallionpics/download.jpeg')"

 
 

  ] 
  function deletecartquantityzeroitems(){
    for(var i=window.cart.length-1;i>-1;i--){
      if(window.cart[i]["quantity"]===0){
        window.cart.splice(i,1);
        console.log(i);
      }
    }
  }

document.getElementById("cartcontainer").onclick=function(menuPicArray){
 deletecartquantityzeroitems(); 
 var cart=document.createElement('div');
 cart.className="cart";
 cart.id="cart";
 //cart.innerHTML=JSON.stringify(window.cart);
 var cartheader=document.createElement('div');
 var cartorderbutton=document.createElement('div');
 var cartheaderback=document.createElement('div'); 
 var cartheadername=document.createElement('div');
 cartheader.className="cartheader";
 cartheaderback.className="cartheaderback";
 cartheadername.className="cartheadername";
 cartorderbutton.className="cartorderbutton";
 cartheaderback.innerHTML="&#8592;";
 cartheadername.innerHTML="cart"
 cartheader.appendChild(cartheaderback);
 cartheader.appendChild(cartheadername);
 cartheaderback.onclick=function(){
  document.getElementById("cart").remove();
 }
 cart.appendChild(cartheader);
 for(var i=0;i<window.cart.length;i++){
  var cartitem=document.createElement('div');
  var cartitemname=document.createElement('div');
  var cartcustomizationname=document.createElement('div');
  var cartitempricename=document.createElement('div');
  var cartitemquantityname=document.createElement('div');
  var minusbutton=document.createElement('div');
  var plusbutton=document.createElement('div');
  var changecartitem=document.createElement('div');
  var cartitempic=document.createElement('IMG');

  cartitemname.className="cartitemname";
  cartcustomizationname.className="cartcustomizationname";
  cartitempricename.className="cartitempricename";
  cartitemquantityname.className="cartitemquantityname";
  cartitem.className="cartitem";
  changecartitem.className="changecartitem";
  minusbutton.className="cartminusbutton";
  plusbutton.className="cartplusbutton";
  cartitempic.className="cartitempic";

  plusbutton.innerHTML="+";
  minusbutton.innerHTML="-";
  cartitempic.src=window.cart[i]['image'];


  var cartitemnamestring=JSON.stringify(window.cart[i]["item"]).substring(1,JSON.stringify(window.cart[i]["item"]).length-1);
  cartcustomizationnamestring=JSON.stringify(window.cart[i]["customization"]).replace('{"','');
  cartcustomizationnamestring=cartcustomizationnamestring.replace('":["',' : ');
  cartcustomizationnamestring=cartcustomizationnamestring.replace('"',' ');
  cartcustomizationnamestring=cartcustomizationnamestring.replace('"],"',' ; ');
  cartcustomizationnamestring=cartcustomizationnamestring.replace('":["',' : ');
  cartcustomizationnamestring=cartcustomizationnamestring.replace('"],"',' ; ');
  cartcustomizationnamestring=cartcustomizationnamestring.replace(']}','');
  cartcustomizationnamestring=cartcustomizationnamestring.replace('[','');
  cartcustomizationnamestring=cartcustomizationnamestring.replace('":[','');
  cartcustomizationnamestring=cartcustomizationnamestring.replace('":],"',' ; ');
  cartcustomizationnamestring=cartcustomizationnamestring.replace(',',' , &#x20b9; ');
  cartitemname.innerHTML=cartitemnamestring;
  cartcustomizationname.innerHTML=cartcustomizationnamestring;
  cartitempricename.innerHTML="&#x20b9; "+JSON.stringify(window.cart[i]["price"]);
  cartitemquantityname.innerHTML=JSON.stringify(window.cart[i]["quantity"]);
  cartorderbutton.innerHTML="ORDER";

  cartorderbutton.onclick=function(arg){
    window.ordergif.style.visibility="visible";
    //cart.innerHTML="<img src='https://storage.googleapis.com/meallionpics/General/Icons/Order.gif'>";
  MessengerExtensions.getUserID(function success(uids) {
    
        var psid = uids.psid;
        var http = new XMLHttpRequest();
     
        for(var j=0;j<window.cart.length;j++){
          delete window.cart[j].image;
        }
        
    var url = 'https://studmenu.herokuapp.com/cart/'+JSON.stringify({"id":psid,"cart":(window.cart)});
    http.open("POST", url, false); 
    http.setRequestHeader("Content-Type", "application/json");
    http.send(window.cart);

    var http2 = new XMLHttpRequest();
    var url2 = 'https://studmenuweb.herokuapp.com/ordered/';
    http2.open("POST", url2, false); 
    http2.setRequestHeader("Content-Type", "application/json");
    http2.send();

    MessengerExtensions.requestCloseBrowser();
        
    }, function error(err) {
        alert("Messenger Extension Error: " + err);
    });
}
  plusbutton.onclick=function(arg,arg2,arg3){
    return function(){
     var priceperitem=  parseInt(window.cart[arg]["price"])/ window.cart[arg]["quantity"];
    window.cart[arg]["quantity"]=window.cart[arg]["quantity"]+1; 
    window.cart[arg]["price"]=window.cart[arg]["price"]+priceperitem;   
    arg2.innerHTML=JSON.stringify(window.cart[arg]["quantity"]);
    arg3.innerHTML="&#x20b9; "+JSON.stringify(window.cart[arg]["price"]);
  }

  }(i,cartitemquantityname,cartitempricename);
  minusbutton.onclick=function(arg,arg2,arg3,arg4){
    return function(){
    console.log(window.cart);
    //console.log(arg);
    if(window.cart[arg]["quantity"]>0){
      var priceperitem=  parseInt(window.cart[arg]["price"])/ window.cart[arg]["quantity"];   
    window.cart[arg]["quantity"]=window.cart[arg]["quantity"]-1;
    window.cart[arg]["price"]=window.cart[arg]["price"]-priceperitem;   
    arg2.innerHTML=JSON.stringify(window.cart[arg]["quantity"]);
    arg3.innerHTML="&#x20b9; "+JSON.stringify(window.cart[arg]["price"]);
  } 
    if(window.cart[arg]["quantity"]===0){
     arg4.remove();
     }}
}(i,cartitemquantityname,cartitempricename,cartitem);
  cartitem.appendChild(cartitempic);
  changecartitem.appendChild(plusbutton);
  changecartitem.appendChild(cartitemquantityname);
  changecartitem.appendChild(minusbutton);
  cartitem.appendChild(cartitemname);
  cartitem.appendChild(cartcustomizationname);
  cartitem.appendChild(cartitempricename);
  cartitem.appendChild(changecartitem);
  cart.appendChild(cartitem);
 
 }
 cart.appendChild( cartorderbutton);
 document.getElementById("menuitbody").appendChild(cart);
}

document.getElementById("food").onclick=function()
{
  window.foodDrinksChecked="Food";
  document.getElementById("drink").style.background="#efefef";
  document.getElementById("food").style.background="#fff";
  clearFooter("menuite");
  populateFooter("Taj",food,"Food",picCategoryArrayFood,picCategoryArrayFoodColored);
} 

document.getElementById("drink").onclick=function()
{  window.foodDrinksChecked="Drinks";
  document.getElementById("food").style.background="#efefef";
document.getElementById("drink").style.background="#fff";
clearFooter("menuite");

populateFooter("Taj",drink,"Drinks",picCategoryArrayDrink,picCategoryArrayDrinkColored);
}  




window.onload = function() {
  window.itemsOrdered=0;
  window.foodDrinksChecked="Food";
  window.footerItemClicked="Bytes";
  document.getElementById("drink").style.background="#efefef";
  document.getElementById("carticonnumber").style.visibility="hidden";
  window.menuitemjson=JSON.parse(menuitem);
  clearFooter("menuitbody");
  populateBody("restaurantName",menuitemjson["Food"]["Bestseller"],menuPicArray,document.getElementById("vegnonveg").checked);

  populateFooter("Taj",food,"Food",picCategoryArrayFood,picCategoryArrayFoodColored);
  };
function refreshPopulateBody(){
  //alert(JSON.stringify(window.footerItemClicked));
  window.menuitemjson=JSON.parse(menuitem);
  clearFooter("menuitbody");
  populateBody("restaurantName",menuitemjson["Food"][window.footerItemClicked],menuPicArray,document.getElementById("vegnonveg").checked);
  
}  
 

function clearFooter(elementID)
{document.getElementById(elementID).innerHTML = "";}
function populateFooter(restaurantName,foodOrDrink,foodDrink,arraypic,arraypiccolored){
  
  for(i=0;i<foodOrDrink.length;i++){
  var div = document.createElement("div");
  div.className="swiper-slide";
  var img = document.createElement("img");
  img.src = "https://storage.googleapis.com/meallionpics/Restaurants/CAD/"+foodDrink+"/Category%201/Colored/"+foodOrDrink[i]+".png";
  img.className="menuitemspic"
  var divChild = document.createElement("div");
  divChild.className="menuitemsdescription";
  divChild.innerHTML+=foodOrDrink[i];
  var menuitemjson=JSON.parse(menuitem);
  var item=menuitemjson[foodDrink][foodOrDrink[i]];
  if(item==='undefined'){
  item="Its not available";}
  img.onclick= function(arg,arg2,arg3,index,itemname,fd) {
      return function() {
          window.footerItemClicked=itemname;
          clearFooter("menuitbody");
          clearAllBorders();
         //var a=document.getElementsByClassName("menuitemspic");
        //for (var i=0; i < a.length; i++) {
        //a[i].src = "https://storage.googleapis.com/meallionpics/Restaurants/CAD/"+fd+"/Category%201/Uncolored/"+itemname+".png";
         // }
           
          arg2.src = "https://storage.googleapis.com/meallionpics/Restaurants/CAD/"+fd+"/Category%201/Colored/"+itemname+".png";
           

          populateBody("restaurantName",arg,menuPicArray,document.getElementById("vegnonveg").checked);
         
          
         
         
          
      }
  }(item,img,arraypiccolored,i,foodOrDrink[i],foodDrink);
  div.appendChild(img);
  div.appendChild(divChild);


  var currentDiv = document.getElementById("div1"); 
  document.getElementById("menuite").insertBefore(div,currentDiv);}
  window.swiper.updateSize(); 
  window.swiper.updateSlides();
 
}


function populateBody(restaurantName,jsonofitems,menuPicArray,vegtrue){
 
var itemnamearray=Object.keys(jsonofitems); 
var itemActiveOrNot=JSON.stringify(jsonofitems[itemnamearray[0]]["active"]);

if(itemActiveOrNot==undefined){
  var categoryNameArray=Object.keys(jsonofitems);
  for (var categoryIndex=0;categoryIndex<categoryNameArray.length;categoryIndex++){
    var categoryName=categoryNameArray[categoryIndex];
    var categoryJson=jsonofitems[categoryName];
    var category2header=document.createElement('div');
    category2header.className="category2header";
    var category2name=JSON.stringify(categoryName);
    category2name = category2name.substring(1, category2name.length-1);
    category2header.innerHTML=category2name;
    document.getElementById("menuitbody").appendChild(category2header);
    populateBodyItems(categoryJson,vegtrue);
  }
}
else{
populateBodyItems(jsonofitems,vegtrue);}
}







function populateBodyItems(jsonofitems,vegtrue){
  var itemnamearray=Object.keys(jsonofitems); 
  for(i=0;i<itemnamearray.length;i++){
    var div = document.createElement("div");
    div.className="slidebody";
    div.style.height='2.2cm';
    var divChild = document.createElement("div");
    divChild.className="menuitemsnamebody";
    var tempname=JSON.stringify(itemnamearray[i]);
    var itemActiveOrNot=JSON.stringify(jsonofitems[itemnamearray[i]]["active"]);
    if(vegtrue===true){
    
      if(jsonofitems[itemnamearray[i]]["vegnonveg"]!=="veg"){
      
        itemActiveOrNot="False";
      }
    }
    
    if(itemActiveOrNot===JSON.stringify("True")){
    
    tempname = tempname.substring(1, tempname.length-1);
    divChild.innerHTML += tempname; 
    
    
    var divChildPic = document.createElement("div");
    var divChildBasePrice = document.createElement("div");
    var divChildPicVegNonveg=document.createElement("IMG");
    var divChildPlusMinus = document.createElement("div");  
    var divChildDescriptionOfFood = document.createElement("div");
    var divChildServes=document.createElement("div");
    var divChildRating=document.createElement("div");
    divChildServes.className='menuitemsbodyserves';
    divChildRating.className='menuitemsbodyrating'
    divChildDescriptionOfFood.className="menuitemsbodydescription";
    divChildDescriptionOfFood.style.visibility="hidden";
    divChildPic.className="menuitemsbodypic";
    divChildPicVegNonveg.className="divChildPicVegNonveg";
    divChildPlusMinus.className="menuitemsbodyplusminus";
    divChildBasePrice.className="menuitemsbodybaseprice";
    divChildBasePrice.innerHTML="&#x20b9; "+JSON.stringify(jsonofitems[itemnamearray[i]]["price"]);
    divChildServes.innerHTML='<img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTQ4OS4zNzQsMzUyLjQ5Yy0wLjgxNC02MS4xNDktMjUuMDEtMTE4LjUxNy02OC4zMzktMTYxLjg0N0MzODUuNjg5LDE1NS4yOTgsMzQxLDEzMi43LDI5Mi41NCwxMjUuMTI2ICAgIGMwLjk0OS0zLjMxOCwxLjQ2OC02LjgxNSwxLjQ2OC0xMC40MzNjMC0yMC45NTctMTcuMDUtMzguMDA4LTM4LjAwOC0zOC4wMDhzLTM4LjAwOCwxNy4wNS0zOC4wMDgsMzguMDA4ICAgIGMwLDMuNjE4LDAuNTE5LDcuMTE2LDEuNDY4LDEwLjQzM0MxNzEsMTMyLjcsMTI2LjMxMSwxNTUuMjk4LDkwLjk2NiwxOTAuNjQ0QzQ3LjYzNiwyMzMuOTcyLDIzLjQ0MSwyOTEuMzQyLDIyLjYyNywzNTIuNDlIMCAgICB2ODIuODI2aDUxMlYzNTIuNDlINDg5LjM3NHogTTI1NS45OTksMTA3LjEwMWM0LjE4NSwwLDcuNTkxLDMuNDA1LDcuNTkxLDcuNTkxYzAsNC4xODYtMy40MDUsNy41OTEtNy41OTEsNy41OTEgICAgYy00LjE4NiwwLTcuNTkxLTMuNDA1LTcuNTkxLTcuNTkxQzI0OC40MDgsMTEwLjUwNywyNTEuODE0LDEwNy4xMDEsMjU1Ljk5OSwxMDcuMTAxeiBNMjU2LDE1Mi43MDEgICAgYzExMC44NTYsMCwyMDEuMjI2LDg5LjMzMiwyMDIuOTM3LDE5OS43ODlINTMuMDYzQzU0Ljc3NCwyNDIuMDM0LDE0NS4xNDQsMTUyLjcwMSwyNTYsMTUyLjcwMXogTTQ4MS41ODMsNDA0Ljg5OUgzMC40MTd2LTIxLjk5MiAgICBoNy4zOTZoMTUuMjA5aDQwNS45NTZoMTguMzkxaDQuMjE0VjQwNC44OTl6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" ALIGN=”middle”/>'+" Serves "+jsonofitems[itemnamearray[i]]["serves"];
    divChildRating.innerHTML='&#9733; '+JSON.stringify(jsonofitems[tempname]["rating"]);
    
    divChildPicVegNonveg.src=generalIcons[jsonofitems[tempname]["vegnonveg"]];
    
    
    divChildPlusMinus.addEventListener('click', function(pEvent) {
      pEvent.stopPropagation();
    })
    
    var menuitemsbodyplus=document.createElement("div");
    menuitemsbodyplus.className="menuitemsbodyplus";
    menuitemsbodyplus.innerHTML="+";
    var menuitemsbodyquantity=document.createElement("div");
    menuitemsbodyquantity.className="menuitemsbodyquantity";
    menuitemsbodyquantity.innerHTML="0";     


    for(var singleitems=0;singleitems < window.cart.length;singleitems++){
     if(window.cart[singleitems]["item"]===tempname){
      menuitemsbodyquantity.innerHTML=window.cart[singleitems]["quantity"];
      }    
    }



   
    var menuitemsbodyminus=document.createElement("div");
    menuitemsbodyminus.className="menuitemsbodyminus";
    menuitemsbodyminus.innerHTML="_";
   


    var tempcount=0;
    for(var index=0;index<window.cart.length;index++){
     if(window.cart[index]["item"]===tempname){ 
       tempcount=tempcount+1;
    }}
    if(tempcount===0){
    divChildPlusMinus.style.height="0.7cm";
    //divChildPlusMinus.style.color="#fff";
    //divChildPlusMinus.style.background="#01b460";
    divChildPlusMinus.style.borderRadius = "50%";
    menuitemsbodyquantity.style.visibility="hidden";
    menuitemsbodyminus.style.visibility="hidden";
    }
   
    
    menuitemsbodyplus.onclick=function(arg,arg2,arg3,arg4,arg5,arg6,arg7){
    
      return function() {
       
        createCustomizationTab(arg,arg2,arg3,arg4);
       
        var singleitemcount=0;
        for(var singleitems=0;singleitems < window.cart.length;singleitems++){
        
             if(window.cart[singleitems]["item"]===arg){
                 singleitemcount=window.cart[singleitems]["quantity"];
                 arg5.style.visibility="visible";
                 arg6.style.visibility="visible";
                 arg7.style.height='1.6cm';
                 arg7.style.borderRadius = "5px";
                 
             }    
               }
         if(singleitemcount===0){
          singleitemcount=1;
         }      
             
             
             
             arg5.innerHTML=JSON.stringify(singleitemcount);    
        document.getElementById("carticonnumber").style.visibility="visible";
        document.getElementById("carticonnumber").innerHTML=window.cart.length;
      }}(tempname,jsonofitems[tempname],jsonofitems[itemnamearray[i]]["price"],jsonofitems[itemnamearray[i]]["image"],menuitemsbodyquantity,menuitemsbodyminus,divChildPlusMinus);
    menuitemsbodyminus.onclick=function(arg,arg2,arg5,arg6,arg7){
     

        return function() {
          
          checkandminus(arg,arg2);
         
          var singleitemcount=0;
          for(var singleitems=0;singleitems < window.cart.length;singleitems++){
          if(window.cart[singleitems]["item"]===arg){
                 singleitemcount=window.cart[singleitems]["quantity"];}    
               }
         if(singleitemcount===0){
          singleitemcount=0;
          arg5.style.visibility="hidden";
          arg6.style.visibility="hidden";
          arg7.style.height='0.7cm';
          arg7.style.borderRadius = "50%";
        
         }     
         arg5.innerHTML=JSON.stringify(singleitemcount);  


    
          if(window.cart.length===0){
          document.getElementById("carticonnumber").style.visibility="hidden";}

          
          
          document.getElementById("carticonnumber").innerHTML=window.cart.length;
        }}(tempname,jsonofitems[tempname],menuitemsbodyquantity,menuitemsbodyminus,divChildPlusMinus);  
    
    
    
    
    
      divChildPlusMinus.appendChild(menuitemsbodyplus);
      divChildPlusMinus.appendChild(menuitemsbodyquantity);
      divChildPlusMinus.appendChild(menuitemsbodyminus);
    
      
    var temp=JSON.stringify(jsonofitems[itemnamearray[i]]);
    div.onclick=  function(arg,arg2) {
      return function() {
         
          if( arg.style.height==='2.2cm'){
           
            resetAllHeights();
            arg2.style.visibility="visible";
            arg.style.height='5cm';}
            else{
              arg2.style.visibility="hidden"; 
            arg.style.height='2.2cm';
          } 
      }
    }(div,divChildDescriptionOfFood);
    var descriptionOfFoodItems=JSON.stringify(jsonofitems[itemnamearray[i]]["description"]);
    descriptionOfFoodItems = descriptionOfFoodItems.substring(1, descriptionOfFoodItems.length-1);

    divChildDescriptionOfFood.innerHTML= descriptionOfFoodItems;
    divChildDescriptionOfFood.innerHTML+='</br>'+'</br>'+'</br>'+'&#8987;  '+jsonofitems[itemnamearray[i]]['preptime']+' mins';
    divChildDescriptionOfFood.innerHTML+=' &nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; &nbsp; '+" Serves "+jsonofitems[itemnamearray[i]]["serves"];

    divChildPic.style.backgroundImage="url("+JSON.stringify(jsonofitems[itemnamearray[i]]['image'])+")";  
     
    //divChildPic.innerHTML = '<img class="menuitemsbodyactualpic" src="../static/1.jpg">'; 
    divChildPic.appendChild(divChildPicVegNonveg);
    
    div.appendChild(divChildPic);
    div.appendChild(divChild);
    div.appendChild(divChildPlusMinus);  
    //div.appendChild(divChildServes);
   
    div.appendChild(divChildDescriptionOfFood);   
    div.appendChild(divChildBasePrice); 
    div.appendChild(divChildRating);
    document.getElementById("menuitbody").appendChild(div);}}
}






function resetAllHeights(){
  var items=document.getElementsByClassName("slidebody");
  for (var i=0; i < items.length; i++) {
    items[i].style.height='2.2cm' ;
  }
  var description=document.getElementsByClassName("menuitemsbodydescription");
  for (var i=0; i < description.length; i++) {
    description[i].style.visibility="hidden" ;
  }



}






function fadeOutEffect() {
  var fadeTarget = document.getElementById('load');
  var fadeEffect = setInterval(function () {
      if (!fadeTarget.style.opacity) {
          fadeTarget.style.opacity = 1;
      }
     
      if (fadeTarget.style.opacity > 0) {
          fadeTarget.style.opacity -= 0.1;
      } else {
          clearInterval(fadeEffect);
      }
  }, 50);
}


function  checkandminus(item,text){
   var countfitemareadypresentincart=0;
   for(var i=0;i<window.cart.length;i++){
     if(JSON.stringify(window.cart[i]["item"]) === JSON.stringify(item) ){
       countfitemareadypresentincart= countfitemareadypresentincart+1;}}
      // alert(countfitemareadypresentincart);
     if(countfitemareadypresentincart>1){
       alert("you have multiple variations.please go to cart to remove");
     }
     if(countfitemareadypresentincart===0){
       alert("you dont have this item in cart yet");
     }  
     if(countfitemareadypresentincart===1){
         for(var j=0;j<window.cart.length;j++){
           if(JSON.stringify(window.cart[j]["item"])===JSON.stringify(item)){
            
            if(parseInt(window.cart[j]["quantity"])===1){
              window.cart.splice(j,1);
              console.log(window.cart);
             }
             else if(parseInt(window.cart[j]["quantity"])>1){
              var priceofsingleitem=parseInt(window.cart[j]["price"])/parseInt(window.cart[j]["quantity"]);
              window.cart[j]["quantity"]=window.cart[j]["quantity"]-1;
              window.cart[j]["price"]=window.cart[j]["price"]-priceofsingleitem;
              console.log(window.cart);
            } 
                 
                  
           }
         }





     } 
}


function createCustomizationTab(item,text,baseprice,image){
    
    if(text["customization"]===true){
          var addtocart=document.createElement('div'); 
          var totalcart=0;
          var customization={};
          var singlechoicejson=text["customizationdata"]['singlechoice'];
          var singlechoicearr=Object.keys(singlechoicejson);
          
          var multiplechoicejson=text["customizationdata"]['multiplechoice'];
          var multiplechoicearr=Object.keys(multiplechoicejson);
          var customizationtab=document.createElement('div');
          customizationtab.id="customizationtab";
          var customizationtabcontent=document.createElement('div');
          customizationtab.className='customizationtab';
          customizationtabcontent.className='customizationtabcontent';
          customizationtabcontent.id='customizationtabcontent';
          var singlechoice=Object.keys(singlechoicejson);
          var multiplechoice=Object.keys(multiplechoicejson);
          for(section in singlechoice){
            var singlesectionquery=JSON.stringify(singlechoice[section]);
            var singlesectionoptions=singlechoicejson[singlechoice[section]];
            singlesectionquery = JSON.stringify(singlesectionquery).substring(3, singlesectionquery.length+1); 
            customizationtabcontent.innerHTML+=singlesectionquery + '<br></br>';
            for(option in singlesectionoptions){
            option = JSON.stringify(option).substring(1, option.length+1);  
            var nameofoption=document.createElement('div');
            nameofoption.className='customizationnameofoption';

            var priceofoption=document.createElement('div');  
            priceofoption.className='customizationpriceofoption';
                  



            var checkbox = document.createElement("input"); 
            checkbox.setAttribute("type", "radio");
            checkbox.setAttribute("name", singlesectionquery);
            checkbox.setAttribute("value", [option,singlesectionoptions[option]]);
            checkbox.setAttribute("checked", true);
           
           
            var label= document.createElement("label"); 
            //label.setAttribute("for", singlesectionquery);
            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(option));
            //nameofoption.appendChild(checkbox); 
            nameofoption.appendChild(label);
            //nameofoption.innerHTML='<input type="radio"  name="'+singlesectionquery+'" value="Bike"> ' + option ;
            priceofoption.innerHTML= JSON.stringify(singlesectionoptions[option]) + '<br></br>';
            customizationtabcontent.appendChild(nameofoption);
            customizationtabcontent.appendChild(priceofoption);
          }}

         for(section in multiplechoice){
          var multiplesectionquery=JSON.stringify(multiplechoice[section]);
          var multiplesectionoptions=multiplechoicejson[multiplechoice[section]];
          multiplesectionquery = JSON.stringify(multiplesectionquery).substring(3, multiplesectionquery.length+1); 
          customizationtabcontent.innerHTML+=multiplesectionquery + '<br></br>';
          for(option in multiplesectionoptions){
          option = JSON.stringify(option).substring(1, option.length+1);  
          var nameofoption=document.createElement('div');
          nameofoption.className='customizationnameofoption';

          var priceofoption=document.createElement('div');  
          priceofoption.className='customizationpriceofoption';
                



          var checkbox = document.createElement("input"); 
          checkbox.setAttribute("type", "checkbox");
          checkbox.setAttribute("name", multiplesectionquery);
          checkbox.setAttribute("value", [option,multiplesectionoptions[option]]);



          var label= document.createElement("label"); 
          label.setAttribute("for", multiplesectionquery);
          label.innerHTML=option;
          nameofoption.appendChild(checkbox); 
          nameofoption.appendChild(label);
         
          //nameofoption.innerHTML='<input type="radio"  name="'+singlesectionquery+'" value="Bike"> ' + option ;
          priceofoption.innerHTML= JSON.stringify(multiplesectionoptions[option]) + '<br></br>';
          customizationtabcontent.appendChild(nameofoption);
          customizationtabcontent.appendChild(priceofoption);
        }}
          
            
            window.quantityvalue=1;      
            var quantity = document.createElement("div");
            quantity.className="quantitycustomizationinput";
            quantity.id="quantityid";
            quantity.innerHTML=JSON.stringify(window.quantityvalue);
            var quantityplus=document.createElement("div");
            var quantityminus=document.createElement("div");
            quantityplus.className="customizationquantityplus";
            quantityminus.className="customizationquantityminus";
            quantityplus.innerHTML="+";
            quantityminus.innerHTML="-";
            quantityplus.onclick=function(arg,arg2){
              return function(){
            window.quantityvalue=window.quantityvalue+1;
                arg=arg+1;
                arg2.innerHTML=JSON.stringify(window.quantityvalue);
              }
            }(window.quantityvalue,quantity);
            quantityminus.onclick=function(arg,arg2){
              return function(){
                if( window.quantityvalue>0){
                  window.quantityvalue=window.quantityvalue-1;
              }
                arg2.innerHTML=JSON.stringify(window.quantityvalue);
              
              }
            }(window.quantityvalue,quantity);
            addtocart.className='customizetabaddtocart';
            addtocart.id="customizetabaddtocart";
            addtocart.innerHTML='ADD TO CART';
           



            addtocart.onclick=function(){
               


              for(var i=0;i < singlechoicearr.length;i++){
            customization[singlechoicearr[i]]=updatecustomization(singlechoicearr[i]);}
            for(var i=0;i < multiplechoicearr.length;i++){
              customization[multiplechoicearr[i]]=updatecustomization(multiplechoicearr[i]);}
              var quantityofitems=quantityvalue;
            updatecart(item,customization,quantityofitems,true,image);
          }

          var quantitywrapper = document.createElement("div");
          quantitywrapper.className="quantitycustomizationwrapper";

          
          quantitywrapper.appendChild(quantityminus);
          quantitywrapper.appendChild(quantity);
          quantitywrapper.appendChild(quantityplus);
          
          customizationtabcontent.appendChild(quantitywrapper);
            
            
            customizationtabcontent.appendChild(addtocart);
            customizationtabcontent.appendChild(addtocart);
            document.getElementById("menu").appendChild(customizationtabcontent);}
        else{
          //alert("updating");
          updatecart(item,baseprice,1,false,image);
          
          
        }   
           

    
}
function updatecart(item,customization,quantity,customizationOrNot,image){
  if(customizationOrNot==true){
  var priceofindividualitem=calculatepriceofindividualitem(customization)*parseInt(quantity);
  var newitem={"item":item,"customization":customization,"quantity":parseInt(quantity),"price":priceofindividualitem,"status":"pending","image":image};
  }
  if(customizationOrNot==false){
    var priceofindividualitem=customization;
    var newitem={"item":item,"customization":"","quantity":parseInt(quantity),"price":priceofindividualitem,"status":"pending","image":image};
    }
  
  if(window.cart.length>0){
  var ispresentalready=checkforsameitemandcustomizationincart(newitem);

  if(ispresentalready===false){
    window.cart.push(newitem);}}
  else{
  window.cart.push(newitem);}
  try{
  document.getElementById("customizationtabcontent").remove();}
  catch{
    //alert("updated!");
  }
  console.log(JSON.stringify(window.cart));
}
function checkforsameitemandcustomizationincart(newitem){
   for(var i=0;i<window.cart.length;i++){
        //alert(JSON.stringify(window.cart[i]));
        if(newitem["item"]===window.cart[i]["item"] && JSON.stringify(newitem["customization"])===JSON.stringify(window.cart[i]["customization"])){
          window.cart[i]["quantity"]=window.cart[i]["quantity"]+newitem["quantity"];
          window.cart[i]["price"]=window.cart[i]["price"]+newitem["price"];
          return true;
        }}
      return false;
}
function calculatepriceofindividualitem(customization){
   var price=0;
   var sections=Object.keys(customization);
   for(var i=0;i<sections.length;i++){
    var arrayofitemsselected=customization[sections[i]];
    //price=price+arrayofitemsselected ;
   for(var j=0;j<arrayofitemsselected.length;j++){
      var itempricearray=arrayofitemsselected[j].split(',');
      price=price+parseInt(itempricearray[1]);
   }}
   return price; 
}
function updatecustomization(checkboxName) {
  var checkboxes = document.querySelectorAll('input[name="' + checkboxName + '"]:checked'), values = [];
  Array.prototype.forEach.call(checkboxes, function(el) {
      values.push(el.value);});
 return values;
}













function clearAllBorders(fd,itemname){
  var a=document.getElementsByClassName("menuitemspic");
  for (var i=0; i < a.length; i++) {
    if(window.foodDrinksChecked==="Food"){
    a[i].src = "https://storage.googleapis.com/meallionpics/Restaurants/CAD/"+window.foodDrinksChecked+"/Category%201/Uncolored/"+food[i]+".png";
    } 
    else{
      a[i].src = "https://storage.googleapis.com/meallionpics/Restaurants/CAD/"+window.foodDrinksChecked+"/Category%201/Uncolored/"+drink[i]+".png";
      }  
  }
}






function searchitem(){
var text= document.getElementById("textsearch");  
//var men=document.getElementById('menu');
var textvalue=text.value;
var jsonofitems={};
clearFooter("menuitbody");
//men.innerHTML="";
//var data=JSON.stringify(menuitemjson);
var fooddrink;
for (fooddrink in menuitemjson) { 
  
  var category;
  for(category in menuitemjson[fooddrink]){
    var fooditem;
    for(fooditem in menuitemjson[fooddrink][category]){
      if( menuitemjson[fooddrink][category][fooditem]["price"]===undefined){
          var realfooditem;
          for(realfooditem in menuitemjson[fooddrink][category][fooditem]){
            var stringrealfooditem=JSON.stringify(realfooditem);
            if( (stringrealfooditem.toLowerCase()).includes(textvalue.toLowerCase())){

           var price=menuitemjson[fooddrink][category][fooditem][realfooditem];
           jsonofitems[stringrealfooditem]=price;
            }
          
          
          
          }}
          else{
                    var stringfooditem=JSON.stringify(fooditem);
                    if( (stringfooditem.toLowerCase()).includes(textvalue.toLowerCase())){

                   var price=menuitemjson[fooddrink][category][fooditem];
                   jsonofitems[stringfooditem]=price;
                    }}
    }
  }
}
var stringresult=JSON.stringify(jsonofitems);
var finalData = stringresult.replace(/\\/g, "");
var finallymadedata=finalData.replace('""','"');
var thisoneisfinal = finallymadedata.replace(/""/g, '"');
var nopethisone=JSON.parse(thisoneisfinal);
var a=JSON.stringify(nopethisone);
//men.innerHTML+=a;

populateBody("restaurantName",nopethisone,menuPicArray,document.getElementById("vegnonveg").checked);  
document.getElementById("textsearch").value = "";
document.getElementById("textsearch").blur();

}


 
document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'interactive') {
       document.getElementById('menu').style.visibility="hidden";
  } else if (state == 'complete') {
      setTimeout(function(){
         document.getElementById('interactive');
         fadeOutEffect();
          document.getElementById('load').style.visibility="hidden";
          document.getElementById('menu').style.visibility="visible";
      },1000);
  }
}

