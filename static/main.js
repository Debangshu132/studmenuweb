window.item='abc';
window.swiper = new Swiper('.swiper-container', {
    slidesPerView:5,
    simulateTouch:true,
    initialSlide:0,
    lazy: {
        //  tell swiper to load images before they appear
        loadPrevNext: true,
        // amount of images to load
          loadPrevNextAmount: 2,
      },
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

food=['rice','paratha','pizza','chicken','fish','egg','desserts',"veg","nonveg",'beer','water',"rum","beer1",'beer2','water','whiskey','water',"pani"];
drink=['beer','water',"rum","beer1",'beer2','water','whiskey','water',"pani"];
document.getElementById("food").onclick=function()
{
    document.getElementById("menuit").style.background="#1a8cff";
    clearFooter("menuite");
    populateFooter("Taj",food);
} 



document.getElementById("drink").onclick=function()
{document.getElementById("menuit").style.background="#46cc3d";
clearFooter("menuite");

populateFooter("Taj",drink);
}  




window.onload = function() {
    populateFooter("Taj",food);
    
    };
    function createSwiper(){
        var swiper = new Swiper('.swiper-container', {
            slidesPerView:5,
            simulateTouch:true,
            
            lazy: {
                //  tell swiper to load images before they appear
                loadPrevNext: true,
                // amount of images to load
                  loadPrevNextAmount: 2,
              },
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


    }


function clearFooter(elementID)
{document.getElementById(elementID).innerHTML = "";


}
function populateFooter(restaurantName,foodOrDrink){
    
    for(i=0;i<foodOrDrink.length;i++){
    var div = document.createElement("div");
   
    div.className="swiper-slide";
    var img = document.createElement("img");
    img.src = "http://3.bp.blogspot.com/_5pqCqLjs8WA/TGmMutN5ISI/AAAAAAAAACw/rMgIXNxHSN8/s400/Aspect1x1.png";
    img.className="menuitemspic"
    var divChild = document.createElement("div");
    divChild.className="menuitemsdescription";
    divChild.innerHTML += foodOrDrink[i]; 
    var item=foodOrDrink[i]+{{menu}};
    img.onclick= function(arg) {
        return function() {
            var body = document.getElementById("menu");
            body.innerHTML=arg;
        }
    }(item);
    div.appendChild(img);
    div.appendChild(divChild);
    var currentDiv = document.getElementById("div1"); 
    document.getElementById("menuite").insertBefore(div,currentDiv);}
    window.swiper.updateSize(); 
    window.swiper.updateSlides();
   
}


     function showClicked(data){

        var body = document.getElementById("menu");
        body.innerHTML=data;
     }
        
