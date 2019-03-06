html, body {
     
  height: 100%;
  width:100%;
  font-size: 10px;
  position:fixed;
  padding-left:0%;
  margin-left:0%;

}

.swiper-container {
  background: #1a8cff;
  height:100%;
  bottom:0;
 

 }
 .swiper-container-body{

  height:100%;
  overflow:scroll;

 }
.swiper-slide {
  text-align: bottom;
  
  }
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
}
.menuitemspic{
    border-radius:50%;
    display:block;
    margin-left: auto;
    margin-right:auto;
    max-width:67%;
    max-height:67%;
    margin-top:1.0vh;
   
}
.menuitemsdescription{
    text-align: center;
    margin-left: auto;
    margin-right:auto;
    color: white;
    
    
}

.footer{
    font-family: "Times New Roman", Times, serif;
    height:80px;
    bottom:0;
    width:100%;
    margin-left:0%;
    padding-block-start: 0%;
    margin-block-start: 0%;
    margin-inline-start: 0%;
    box-shadow: 10px 10px grey;
    position: fixed;
    z-index:4; 
    
}
#menuitebody{
  position: fixed;

  overflow:scroll;
}
.menu{
   height:70%;
}
.supermenu{
   }
.swiper-slide-body {
    width:80%;
    display:inline;
    height:120px;
    text-align: bottom;
    color:black;
    text-align: center;
    margin-left:auto;
    margin-right:auto;
    margin-bottom:20px;
    border-radius:15px;
    background:white;
    box-shadow: 5px 10px;
    -webkit-box-shadow: 0 0 20px rgb(200,200,200);
-moz-box-shadow: 0 0 20px rgb(200,200,200);
}
.menuitemsbodypic{
  width:100px;
  height:80px;
  border-radius: 20px;
  margin-top:10px;
   margin-left:-8%;
  background: white;
  z-index: 3;
  box-shadow: 5px 10px;
  -webkit-box-shadow: 0 0 20px rgb(200,200,200);
  -moz-box-shadow: 0 0 20px rgb(200,200,200);



}
.menuitemsdescriptionbody{
  position: relative;
  top: -80px;        
  left: 50px; 
  margin-right:30px; 
  text-align: top;
   font-size: 15px;
  font-weight:bold;
}
.menuitemsbodyactualpic{

max-width: 80%;
max-height: 80%;
}
.menuitemsbodyplusminus{
    width:30px;
    height:60px;
    float:right;
    position:relative;
    top:-80px;
    
    background:white;
    margin-right:-15px;
    box-shadow: 5px 10px;
    
    -webkit-box-shadow: 0 0 20px rgb(200,200,200);
-moz-box-shadow: 0 0 20px rgb(200,200,200);
border-radius: 10%;
    
    
  }  
 .menuitemsbodyplus{
    padding-top:8px; 
    max-width:50%;
    max-height:50%;

 }  
 .menuitemsbodyminus{
    padding-top:12px; 
    max-width:50%;
    max-height:50%;
 }  
.menuitemsbodyDescriptionOfFood{
   color:grey;
   position: relative;
   width:40%;
   height:100px;
   top:-70px;
   left:130px;
   text-align: right;
   overflow: hidden;
   overflow-wrap: break-word;

 }
.foods{
color:white;
text-align: center;
 background: #1a8cff;
 width:50%;  
 height: 10%;
 padding-top:5px;
 padding-bottom: 5px;
display: inline-block;

}
#food {
font-size: 10px; 
font-family: "Times New Roman", Times, serif; 
background-color: Transparent;
color:white;
background-repeat:no-repeat;
border: none;
cursor:pointer;
overflow: hidden;
outline:none;

}
#food:focus{
outline: none;
}
#drink {
font-size: 10px; 
font-family: "Times New Roman", Times, serif; 
background-color: Transparent;
background-repeat:no-repeat;
color:white;
border: none;
cursor:pointer;
overflow: hidden;
outline:none;
}
#drink:focus{
outline: none;
}
.drinks{

color:white;
text-align: center;
padding-top:5px;
padding-bottom: 5px;
background:#46cc3d;
width:50%;
height: 10%; 
display: inline-block;
}







@media screen and (min-height: 1000px) {
body {
  font-size: 14px;
}
}


}

