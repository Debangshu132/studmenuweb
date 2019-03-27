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
var foodlist=Object.keys(window.menuitemjson["Foods"]);

food=foodlist;

var drinklist=Object.keys(window.menuitemjson["Drinks"]);
drink=drinklist;

generalIcons={
"veg":"https://s3.ap-south-1.amazonaws.com/studmenu/General+Icons/Veg.png",
"nonveg":"https://s3.ap-south-1.amazonaws.com/studmenu/General+Icons/Non+Veg.png"

}

picCategoryArrayFood=[
"https://storage.googleapis.com/meallionpics/download.jpeg",  
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
  "url('https://s3.ap-south-1.amazonaws.com/studmenu/Test/Pics/DUO+OF+FLOREST+TIKKA+(1)-min.jpg')",
  "url('https://s3.ap-south-1.amazonaws.com/studmenu/Test/Pics/DUO+OF+FLOREST+TIKKA+(1)-min.jpg')",
  "url('https://s3.ap-south-1.amazonaws.com/studmenu/Test/Pics/DUO+OF+FLOREST+TIKKA+(1)-min.jpg')",
  "url('https://s3.ap-south-1.amazonaws.com/studmenu/Test/Pics/DUO+OF+FLOREST+TIKKA+(1)-min.jpg')",
  "url('https://s3.ap-south-1.amazonaws.com/studmenu/Test/Pics/DUO+OF+FLOREST+TIKKA+(1)-min.jpg')",
  "url('https://s3.ap-south-1.amazonaws.com/studmenu/Test/Pics/DUO+OF+FLOREST+TIKKA+(1)-min.jpg')",
  "url('https://s3.ap-south-1.amazonaws.com/studmenu/Test/Pics/DUO+OF+FLOREST+TIKKA+(1)-min.jpg')",
  "url('https://s3.ap-south-1.amazonaws.com/studmenu/Test/Pics/DUO+OF+FLOREST+TIKKA+(1)-min.jpg')",
  "url('https://s3.ap-south-1.amazonaws.com/studmenu/Test/Pics/DUO+OF+FLOREST+TIKKA+(1)-min.jpg')",
  "url('https://s3.ap-south-1.amazonaws.com/studmenu/Test/Pics/DUO+OF+FLOREST+TIKKA+(1)-min.jpg')",
  "url('https://s3.ap-south-1.amazonaws.com/studmenu/Test/Pics/DUO+OF+FLOREST+TIKKA+(1)-min.jpg')"
 
 

  ] 
  function deletecartquantityzeroitems(){
    for(var i=window.cart.length-1;i>-1;i--){
      if(window.cart[i]["quantity"]===0){
        window.cart.splice(i,1);
        console.log(i);
      }
    }
  }

document.getElementById("carticon").onclick=function(menuPicArray){
 deletecartquantityzeroitems(); 
 var cart=document.createElement('div');
 cart.className="cart";
 cart.id="cart";
 //cart.innerHTML=JSON.stringify(window.cart);
 var cartheader=document.createElement('div');
 var cartorderbutton=document.createElement('div');
 var cartheaderback=document.createElement('IMG'); 
 var cartheadername=document.createElement('div');
 cartheader.className="cartheader";
 cartheaderback.className="cartheaderback";
 cartheadername.className="cartheadername";
 cartorderbutton.className="cartorderbutton";
 cartheaderback.setAttribute("src","https://img.icons8.com/windows/32/000000/left.png");
 cartheadername.innerHTML="cart"
 cartheader.appendChild(cartheaderback);
 cartheader.appendChild(cartheadername);
 cartheaderback.onclick=function(){
  document.getElementById("cart").remove();
 }
 //cartheader.innerHTML="cart";
 //document.getElementById("customizationtab").remove();
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
  cartitempic.src='../static/'+[Math.floor(1+Math.random() * 10)]+'.jpg' ;




  var cartitemnamestring=JSON.stringify(window.cart[i]["item"]).substring(1,JSON.stringify(window.cart[i]["item"]).length-1);
  var cartcustomizationnamestring=JSON.stringify(window.cart[i]["customization"]).replace('{"','');
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
  cartitempricename.innerHTML="Price:Rs "+JSON.stringify(window.cart[i]["price"]);
  cartitemquantityname.innerHTML=JSON.stringify(window.cart[i]["quantity"]);
  cartorderbutton.innerHTML="ORDER";
  cartorderbutton.onclick=function(){

      // the Messenger Extensions JS SDK is done loading
       MessengerExtensions.getUserID(function success(uids) {
        var psid = uids.psid;//This is your page scoped sender_id
        var http = new XMLHttpRequest();
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
    arg3.innerHTML="Price:Rs"+JSON.stringify(window.cart[arg]["price"]);
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
    arg3.innerHTML="Price:Rs"+JSON.stringify(window.cart[arg]["price"]);
  } 
    if(window.cart[arg]["quantity"]===0){
     
      arg4.remove();
      //window.cart.splice(arg,1);
      // 
    
    }}
}(i,cartitemquantityname,cartitempricename,cartitem);



  changecartitem.appendChild(plusbutton);
  changecartitem.appendChild(cartitemquantityname);
  changecartitem.appendChild(minusbutton);
  cartitem.appendChild(cartitemname);
  cartitem.appendChild(cartcustomizationname);
  cartitem.appendChild(cartitempricename);
  cartitem.appendChild(changecartitem);
  cartitem.appendChild(cartitempic);
  cart.appendChild(cartitem);
 
 }


 cart.appendChild( cartorderbutton);
 document.getElementById("menuitbody").appendChild(cart);
}



document.getElementById("food").onclick=function()
{
  document.getElementById("drink").style.background="#ddd";
  document.getElementById("food").style.background="#fff";
  clearFooter("menuite");
  populateFooter("Taj",food,"Foods",picCategoryArrayFood,picCategoryArrayFoodColored);
} 



document.getElementById("drink").onclick=function()
{document.getElementById("food").style.background="#ddd";
document.getElementById("drink").style.background="#fff";
clearFooter("menuite");

populateFooter("Taj",drink,"Drinks",picCategoryArrayDrink,picCategoryArrayDrinkColored);
}  




window.onload = function() {
  document.getElementById("drink").style.background="#ddd";
  populateFooter("Taj",food,"Foods",picCategoryArrayFood,picCategoryArrayFoodColored);
  window.menuitemjson=JSON.parse(menuitem);
  clearFooter("menuitbody");
  populateBody("restaurantName",menuitemjson["Foods"]["Bytes"],menuPicArray);
  };
 

  


function clearFooter(elementID)
{document.getElementById(elementID).innerHTML = "";


}
function populateFooter(restaurantName,foodOrDrink,foodDrink,arraypic,arraypiccolored){
  
  for(i=0;i<foodOrDrink.length;i++){
  var div = document.createElement("div");
 
  div.className="swiper-slide";
  var img = document.createElement("img");
  img.src = arraypic[i];
  img.className="menuitemspic"
  var divChild = document.createElement("div");
  divChild.className="menuitemsdescription";
  divChild.innerHTML+=foodOrDrink[i];
  var menuitemjson=JSON.parse(menuitem);
  var item=menuitemjson[foodDrink][foodOrDrink[i]];
  if(item==='undefined'){
  item="Its not available";}
  img.onclick= function(arg,arg2,arg3,index) {
      return function() {
          
          clearFooter("menuitbody");
          clearAllBorders();
          arg2.src=arg3[index];
          populateBody("restaurantName",arg,menuPicArray);
         
          
         
         
          
      }
  }(item,img,arraypiccolored,i);
  div.appendChild(img);
  div.appendChild(divChild);
  var currentDiv = document.getElementById("div1"); 
  document.getElementById("menuite").insertBefore(div,currentDiv);}
  window.swiper.updateSize(); 
  window.swiper.updateSlides();
 
}


function populateBody(restaurantName,jsonofitems,menuPicArray){
  
var itemnamearray=Object.keys(jsonofitems); 
for(i=0;i<itemnamearray.length;i++){
var div = document.createElement("div");
div.className="slidebody";

var divChild = document.createElement("div");
divChild.className="menuitemsnamebody";
var tempname=JSON.stringify(itemnamearray[i]);

if(JSON.stringify(jsonofitems[itemnamearray[i]]["active"])===JSON.stringify("True")){

tempname = tempname.substring(1, tempname.length-1);
divChild.innerHTML += tempname; 


var divChildPic = document.createElement("div");
var divChildBasePrice = document.createElement("div");
var divChildPicVegNonveg=document.createElement("IMG");
var divChildPlusMinus = document.createElement("div");  
var divChildDescriptionOfFood = document.createElement("div");
divChildDescriptionOfFood.className="menuitemsbodydescription";
divChildDescriptionOfFood.style.visibility="hidden";
  
divChildPic.className="menuitemsbodypic";
divChildPicVegNonveg.className="divChildPicVegNonveg";
divChildPlusMinus.className="menuitemsbodyplusminus";
divChildBasePrice.className="menuitemsbodybaseprice";
divChildBasePrice.innerHTML="&#x20b9; "+JSON.stringify(jsonofitems[itemnamearray[i]]["price"]);



divChildPicVegNonveg.src=generalIcons[jsonofitems[tempname]["vegnonveg"]];


divChildPlusMinus.addEventListener('click', function(pEvent) {
  pEvent.stopPropagation();
})

var menuitemsbodyplus=document.createElement("div");
menuitemsbodyplus.className="menuitemsbodyplus";
menuitemsbodyplus.innerHTML="+";
var menuitemsbodyminus=document.createElement("div");
menuitemsbodyminus.className="menuitemsbodyminus";
menuitemsbodyminus.innerHTML="_";


//divChildPlusMinus.innerHTML  = '<img class="menuitemsbodyplus" " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ22akRsJMV7hsI-OPSvJj7BHWM-qaLCO6Ea0U3gY0esVB2al8Gg"><br /><img class="menuitemsbodyminus" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAGFBMVEX///8AAADz8/NfX1+UlJT4+Pitra1XV1cQNkZNAAAAeElEQVR4nO3Y2QkAIRBEQXU98s/YGBYGZpCqDN5nd2sAAAAAAAAAAAAAAAAAAAAAAAAAAAAApFujlhVeuM9XydnhhbPXMhUqVJhOoUKF+RQqVJhPoUKF+eIL39/47/80AAAAAAAAAAAAAAAAAAAAAAAAAAAAAPx2ARGUD9oUhrtMAAAAAElFTkSuQmCC">';

menuitemsbodyplus.onclick=function(arg,arg2,arg3){
  return function() {
    createCustomizationTab(arg,arg2,arg3);
  }}(tempname,jsonofitems[tempname],jsonofitems[itemnamearray[i]]["price"]);
menuitemsbodyminus.onclick=function(arg,arg2){
    return function() {
      checkandminus(arg,arg2);
    }}(tempname,jsonofitems[tempname]);  





  divChildPlusMinus.appendChild(menuitemsbodyplus);
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
divChildPic.style.backgroundImage=window.menuPicArray[Math.floor(1+Math.random() * 10)];  
 
//divChildPic.innerHTML = '<img class="menuitemsbodyactualpic" src="../static/1.jpg">'; 
divChildPic.appendChild(divChildPicVegNonveg);

div.appendChild(divChildPic);
div.appendChild(divChild);
div.appendChild(divChildPlusMinus);  

div.appendChild(divChildDescriptionOfFood);   
div.appendChild(divChildBasePrice); 
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
       alert("you have multiple vriations.please go to cart to remove");
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
                  if(parseInt(window.cart[j]["quantity"])>1){
                    var priceofsingleitem=parseInt(window.cart[j]["price"])/parseInt(window.cart[j]["quantity"]);
                    window.cart[j]["quantity"]=window.cart[j]["quantity"]-1;
                    window.cart[j]["price"]=window.cart[j]["price"]-priceofsingleitem;
                    console.log(window.cart);
                  }
                  
           }
         }





     } 
}


function createCustomizationTab(item,text,baseprice){
    
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
            updatecart(item,customization,quantityofitems,true);
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
          updatecart(item,baseprice,1,false);
          
          
        }   
           

    
}
function updatecart(item,customization,quantity,customizationOrNot){
  if(customizationOrNot==true){
  var priceofindividualitem=calculatepriceofindividualitem(customization)*parseInt(quantity);
  var newitem={"item":item,"customization":customization,"quantity":parseInt(quantity),"price":priceofindividualitem,"status":"pending"};
  }
  if(customizationOrNot==false){
    var priceofindividualitem=customization;
    var newitem={"item":item,"customization":"","quantity":parseInt(quantity),"price":priceofindividualitem,"status":"pending"};
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













function clearAllBorders(){
  var a=document.getElementsByClassName("menuitemspic");
  for (var i=0; i < a.length; i++) {
    a[i].src=picCategoryArrayFood[i] ;
    
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
      var stringfooditem=JSON.stringify(fooditem);
      if( (stringfooditem.toLowerCase()).includes(textvalue.toLowerCase())){

         var price=menuitemjson[fooddrink][category][fooditem];
         jsonofitems[stringfooditem]=price;
        
         
      }
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

populateBody("restaurantName",nopethisone,menuPicArray);  
document.getElementById("textsearch").value = "";
document.getElementById("textsearch").blur();

}
