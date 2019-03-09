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
      1000: {
          slidesPerView: 9,
          spaceBetween: 40,
        },
      710: {
        slidesPerView: 8,
        spaceBetween: 40,
      },
      560: {
        slidesPerView: 7,
        spaceBetween: 30,
      },
      420: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 5,
        spaceBetween: 10,
      }
    }

});

food=['best sellers','rice','paratha','pizza','chicken','veg','nonveg','egg','fish','italian','chinese'];
drink=['beer','water','whiskey','water'];
picCategoryArrayFood=[
"https://img.icons8.com/color/48/000000/best-seller.png",  
"https://img.icons8.com/plasticine/100/000000/rice-bowl.png",
"https://img.icons8.com/dusk/64/000000/naan.png",
"https://img.icons8.com/doodle/48/000000/pizza.png",
"https://img.icons8.com/cotton/64/000000/chicken-box.png",
"https://img.icons8.com/color/48/000000/vegetarian-mark.png",
"https://img.icons8.com/color/48/000000/vegetarian-mark.png",
"https://img.icons8.com/cotton/64/000000/sunny-side-up-eggs.png",
"https://img.icons8.com/color/48/000000/fish-food.png",
"https://img.icons8.com/dusk/64/000000/italian-pizza.png",
"https://img.icons8.com/dusk/64/000000/italian-pizza.png",
"https://img.icons8.com/color/48/000000/wrap.png"
]
picCategoryArrayDrink=[
  "https://img.icons8.com/color/48/000000/beer-glass.png",
  "https://img.icons8.com/cotton/64/000000/water-glass.png",
  "https://img.icons8.com/dusk/64/000000/wine-glass.png",
  "https://img.icons8.com/cotton/64/000000/water-glass.png"
]
menuPicArray=[
  "url('../static/1.jpg')",
  "url('../static/2.jpg')",
  "url('../static/3.jpg')",
  "url('../static/4.jpg')",
  "url('../static/5.jpg')",
  "url('../static/6.jpg')",
  "url('../static/7.jpg')",
  "url('../static/8.jpg')",
  "url('../static/9.jpg')",
  "url('../static/10.jpg')"
  
]



document.getElementById("food").onclick=function()
{
  //document.getElementById("menuit").style.background="#1a8cff";
  clearFooter("menuite");
  populateFooter("Taj",food,"Foods",picCategoryArrayFood);
} 



document.getElementById("drink").onclick=function()
{//document.getElementById("menuit").style.background="#46cc3d";
clearFooter("menuite");

populateFooter("Taj",drink,"Drinks",picCategoryArrayDrink);
}  




window.onload = function() {
  populateFooter("Taj",food,"Foods",picCategoryArrayFood);
  window.menuitemjson=JSON.parse(menuitem);
  clearFooter("menuitbody");
  populateBody("restaurantName",menuitemjson["Foods"]["rice"],menuPicArray);
  };
 

  


function clearFooter(elementID)
{document.getElementById(elementID).innerHTML = "";


}
function populateFooter(restaurantName,foodOrDrink,foodDrink,arraypic){
  
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
  img.onclick= function(arg) {
      return function() {
          clearFooter("menuitbody");
          populateBody("restaurantName",arg,menuPicArray);
          
      }
  }(item);
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
div.onclick=  function(arg) {
  return function() {
      
      if( arg.style.height==='90px'){

        resetAllHeights();
        arg.style.height='240px';}
        else{
        arg.style.height='90px';
      } 
  }
}(div);
var divChild = document.createElement("div");
divChild.className="menuitemsdescriptionbody";
var tempname=JSON.stringify(itemnamearray[i]);
tempname = tempname.substring(1, tempname.length-1);
divChild.innerHTML += tempname; 
divChild.style.fontFamily = "Times New Roman, Times, serif";

var divChildPic = document.createElement("div");
var divChildPlusMinus = document.createElement("div");  
var divChildDescriptionOfFood = document.createElement("div");
divChildDescriptionOfFood.className="menuitemsbodyDescriptionOfFood"
  
divChildPic.className="menuitemsbodypic";
divChildPlusMinus.className="menuitemsbodyplusminus";
divChildPlusMinus.innerHTML  = '<img class="menuitemsbodyplus"  onclick="alert(yeah1);" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ22akRsJMV7hsI-OPSvJj7BHWM-qaLCO6Ea0U3gY0esVB2al8Gg"><br /><img class="menuitemsbodyminus" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAGFBMVEX///8AAADz8/NfX1+UlJT4+Pitra1XV1cQNkZNAAAAeElEQVR4nO3Y2QkAIRBEQXU98s/YGBYGZpCqDN5nd2sAAAAAAAAAAAAAAAAAAAAAAAAAAAAApFujlhVeuM9XydnhhbPXMhUqVJhOoUKF+RQqVJhPoUKF+eIL39/47/80AAAAAAAAAAAAAAAAAAAAAAAAAAAAAPx2ARGUD9oUhrtMAAAAAElFTkSuQmCC">';
var temp=JSON.stringify(jsonofitems[itemnamearray[i]]);

divChildDescriptionOfFood.innerHTML= jsonofitems[itemnamearray[i]];
divChildPic.style.backgroundImage=menuPicArray[Math.floor(1+Math.random() * 10)];  
 
//divChildPic.innerHTML = '<img class="menuitemsbodyactualpic" src="../static/1.jpg">'; 
div.appendChild(divChildPic);
div.appendChild(divChild);
div.appendChild(divChildPlusMinus);  
div.appendChild(divChildDescriptionOfFood);    
document.getElementById("menuitbody").appendChild(div);}
}
function resetAllHeights(){
  var items=document.getElementsByClassName("slidebody");
  for (var i=0; i < items.length; i++) {
    items[i].style.height='90px' ;
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
      if( stringfooditem.includes(textvalue.toLowerCase())){

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
}
