<!DOCTYPE html>
<html>
  <head>
    <title>studmenu</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
    <link rel="stylesheet" type="text/css" href="../static/style.css">
    <link rel="stylesheet" type="text/css" href="../static/swiper.min.css">
    
    
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min.js"></script>
   
  </head>
  <body>
    <script>
      (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/messenger.Extensions.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'Messenger'));
      
       window.extAsyncInit = function () {
  // the Messenger Extensions JS SDK is done loading
   MessengerExtensions.getUserID(function success(uids) {
    var psid = uids.psid;//This is your page scoped sender_id
    
}, function error(err) {
    alert("Messenger Extension Error: " + err);
});
};
      </script>
      <div id="load"></div> 
      <div class="flexbox">
          <div id="searchitems"class="search">
          
          <div >
              <input id="textsearch" type="text" placeholder="   Search . . ." required   onchange="searchitem()">
            </div>
          </div>
         
          <img class="carticon" id="carticon"  src="https://s3.ap-south-1.amazonaws.com/studmenu/General+Icons/Cart.png">  
          
       
        </div>
      <div class="menu" id="menu">
         
        
          
        <div class="containerbody" id="menuitbody">
          <!-- Using Javascript dynamically add elements here -->

          </div>
          
      </div>
      
      <div class="footer">
            <div class="supermenu">
                    <div class="foods"><button id="food">Foods</button></div><div class="drinks" ><button id="drink">Drinks</button></div>
                     
            </div>     
           
        <div class="swiper-container" id="menuit">
                 <div class="swiper-wrapper" id="menuite">
                  <!-- Using Javascript dynamically add elements here -->
                  </div>
                <!-- Add Pagination -->
                <div class="swiper-pagination"></div>
             </div> 
         </div> 
    <script>
     var menuitem={{menuitems|tojson}};
    </script>
    
    <script type="text/javascript" src="../static/swiper.min.js"></script>
        
    <script type="text/javascript" src="../static/main.js"></script>
   
</body>
</html> 
