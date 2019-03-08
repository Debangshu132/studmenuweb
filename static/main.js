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
      790: {
        slidesPerView: 8,
        spaceBetween: 40,
      },
      640: {
        slidesPerView: 7,
        spaceBetween: 30,
      },
      500: {
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
  var menuitemjson=JSON.parse(menuitem);
 
  populateBody("restaurantName",menuitemjson["Foods"]["rice"]);
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
          populateBody("restaurantName",arg)
      }
  }(item);
  div.appendChild(img);
  div.appendChild(divChild);
  var currentDiv = document.getElementById("div1"); 
  document.getElementById("menuite").insertBefore(div,currentDiv);}
  window.swiper.updateSize(); 
  window.swiper.updateSlides();
 
}


function populateBody(restaurantName,jsonofitems){
clearFooter("menuitbody");  
var itemnamearray=Object.keys(jsonofitems); 
for(i=0;i<itemnamearray.length;i++){
var div = document.createElement("div");
div.className="slidebody";
div.onclick=  function(arg) {
  return function() {
      
      if( arg.style.height==='120px'){

        resetAllHeights();
        arg.style.height='240px';}
        else{
        arg.style.height='120px';
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
    
divChildPic.innerHTML = '<img class="menuitemsbodyactualpic" src="data:image/jpeg;base64,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">'; 
div.appendChild(divChildPic);
div.appendChild(divChild);
div.appendChild(divChildPlusMinus);  
div.appendChild(divChildDescriptionOfFood);    
document.getElementById("menuitbody").appendChild(div);}
}
function resetAllHeights(){
  var items=document.getElementsByClassName("slidebody");
  for (var i=0; i < items.length; i++) {
    items[i].style.height='120px' ;
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


