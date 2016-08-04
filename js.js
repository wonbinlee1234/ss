$(function(){
    $(".home").click(function(){
        $("body").css("background","#5F5F5F");
        $("section").css("height","750px");
        $("section").css("width","1600px");
        $("article").css("display","none");
        $("#main_wrap").css("display","block");
    });
            
    $(".hangang").click(function(){
        $("body").css("background","#8390F0");
        $("section").css("height","750px");
        $("section").css("width","1800px");
        $("#main_wrap").css("display","none");
        
        setTimeout(function(){
            $("article").css("display","inline-block");
        },1740);
    });
    
    var current = 0;
    var max =0;
    var container;

    function init(){
        container = $(".slide ul");
        max = container.children().length;

        events();
        setInterval(next, 5000);
    }
    function events(){
        $("button.prev").on("click", prev);
        $("button.next").on("click", next);
    }
    
    function prev(e){
        current--;
        if(current < 0) current = max-1;
        animate();
    }
    function next(e){
            current++;
            if(current > max-1) current = 0;
            animate();
        }
    function animate(){
        var moveX = current * 1129;
        TweenMax.to(container, 0.5, {marginLeft : -moveX, ease:Expo.easeOut}); 
    }
    
    $(document).ready( init );
});