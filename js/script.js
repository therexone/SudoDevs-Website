$(document).ready(function(){
 

    var current = $("#p1");
    var i = 0;
    var back =  i + ".jpg";

    $(".imgbox").css({background:"url(img/"+back+")","background-size":"cover"});
    var prevtime = new Date().getTime();
    prevtime = 0;
    
document.addEventListener("wheel", function (e) {
    

    var currenttime = new Date().getTime();
     var difference = currenttime - prevtime;

    console.log(e.deltaY + " " + difference + " " + back);
    
    if(e.deltaY>=0 && difference > 1300)//DOWN
    {
             i=i+1;
             if(i==4)
              i = 0;
        back =  i + ".jpg";

        $(".imgbox").animate({width:0,left:"81.45%"},650).queue(function(){
            $(this).css({background:"url(img/"+back+")","background-size":"cover"});
            $(this).dequeue();
        }).delay(500).animate({width:"20.57%",left:"60.88%"},650);

        current.children("div.title").delay(800).animate({top:"-50px",opacity:"0"});
        
        current.children("div.infobox").children("div.head").children("h2.info-title").delay(600).animate({top:"-50px",opacity:"0"});
        
         current.children("div.infobox").children("div.head").children("p.info-des").delay(500).animate({top:"-50px",opacity:"0"});
        
        current.children("div.infobox").children("div.description").children("p.what-des").delay(600).animate({top:"-50px",opacity:"0"});
        
         //current.children("div.infobox").children("div.description").children("p.what-des").css({animation:"text-out-up .65s cubic-bezier(0, 0, .03, 1.42) .5s forwards"});

         

        current.delay(700).animate({opacity:0},500);
        
        
        if(current.attr("id")!="p4"){
            current = current.next();
            if(current.attr("class")=="imgbox")
                current=current.next();
        }
        else if(current.attr("id")=="p4"){
            current = $("#p1");
        }
       
        
        current.delay(1400).animate({opacity:1},500);
        
        
    current.children("div.title").delay(2000).css({opacity:"0",top:"100%"}).animate({top:"20%",opacity:"1"});
        
        current.children("div.infobox").children("div.head").children("h2.info-title").delay(1700).css({opacity:"0",top:"100%"}).animate({top:"",opacity:"1"});
        
         current.children("div.infobox").children("div.head").children("p.info-des").delay(1600).css({opacity:"0",top:"100%"}).animate({top:"",opacity:"1"}); 
        
         current.children("div.infobox").children("div.description").children("p.what-des").delay(1600).css({opacity:"0",top:"100%"}).animate({top:"",opacity:"1"});
        
        prevtime = currenttime;
    }
    
    
    else if(e.deltaY<=0  && difference > 1300)//UP
    {
                i=i-1;

        if(i==-1)
        i = 3;
        back =  i + ".jpg";
      $(".imgbox").animate({width:0,left:"81.45%"},650).queue(function(){
            $(this).css({background:"url(img/"+back+")","background-size":"cover"});
            $(this).dequeue();
        }).delay(500).animate({width:"20.57%",left:"60.88%"},650);

        
        current.children("div.title").delay(800).animate({opacity:"0",top:"100%"});
        
        current.children("div.infobox").children("div.head").children("h2.info-title").delay(600).animate({opacity:"0",top:"50px"});
        
         current.children("div.infobox").children("div.head").children("p.info-des").delay(500).animate({opacity:"0",top:"50px"}); 
        
         current.children("div.infobox").children("div.description").children("p.what-des").delay(600).animate({opacity:"0",top:"50px"});

        current.delay(700).animate({opacity:0},500);
        
         
        
         if(current.attr("id")!="p1"){
            current = current.prev();
            if(current.attr("class")=="imgbox")
                current=current.prev();
        }
        else if(current.attr("id")=="p1"){
            current = $("#p4");
        }      
        
        
        
        current.delay(1400).animate({opacity:1},500);
        
        
        current.children("div.title").delay(2000).css({opacity:"0",top:"-50px"}).animate({top:"20%",opacity:"1"});
        
        current.children("div.infobox").children("div.head").children("h2.info-title").delay(1700).css({opacity:"0",top:"-50px"}).animate({top:"",opacity:"1"});
        
         current.children("div.infobox").children("div.head").children("p.info-des").delay(1600).css({opacity:"0",top:"-50px"}).animate({top:"",opacity:"1"}); 
        
         current.children("div.infobox").children("div.description").children("p.what-des").delay(1600).css({opacity:"0",top:"-50px"}).animate({top:"",opacity:"1"});

      //   $(".imgbox").css({animation:"img-in  1s cubic-bezier(0, 0, .03, 1.42) 1.5s forwards"});
        prevtime = currenttime;
    }
    
      var colour = current.children("div.title").css("color");
      $(".slideno").text(i+1).css({color:colour});    
      

},true);
    
    
var card = $(".infobox");

card.on("mousemove",function(e) {  
    
  var ax = -($(window).innerWidth()/2 -e.pageX)/20;
  var ay = ($(window).innerHeight()/2- e.pageY)/20;
    card.css({ transform: "rotateY("+ax+"deg) rotateX("+ay+"deg)","-webkit-transform": "rotateY("+ax+"deg) rotateX("+ay+"deg)","-moz-transform": "rotateY("+ax+"deg) rotateX("+ay+"deg)"});
});
    
card.on("mouseleave",function(e) {  
    

    card.css({ transform: "rotateY("+0+"deg) rotateX("+0+"deg)","-webkit-transform": "rotateY("+0+"deg) rotateX("+0+"deg)","-moz-transform": "rotateY("+0+"deg) rotateX("+0+"deg)"});
});
    
});
//
  