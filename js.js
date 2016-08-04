$(function(){
    $(".home").click(function(){
        $("body").css("background","#5F5F5F");
        $("section").css("height","750px");
        $("section").css("width","1600px");
        
        setTimeout(function(){
            $("#ss_logo").css("display","inline-block");
            $("section img").css("display","block");
        },1740)
    });
            
    $(".hangang").click(function(){
        $("body").css("background","#5CB04C");
        $("section").css("height","1500px");
        $("section").css("width","900px");
        $("#ss_logo").css("display","none");
        $("section img").css("display","none");
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