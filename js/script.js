$(document).ready(function(){
    slideHeader();
    document.addEventListener("scroll", function(){
        if(document.documentElement.scrollTop > 50){
            $("header").css("display", "none");
            $("header").addClass("header");
        }
        else{
            $("header").css("display", "flex");
            $("header").removeClass("header");
        };
    });
});

function slideHeader(){
    let hotZone = document.createElement("div"); 
    hotZone.id = "fullscreen-hotzone"
    hotZone.style.position = "fixed"
    hotZone.style.top = "0"
    hotZone.style.left = "0"
    hotZone.style.margin = "0"
    hotZone.style.height= "100px"
    hotZone.style.width = "100%"
    hotZone.addEventListener("mouseover", headerSlideDown);
    hotZone.addEventListener("mouseout", headerSlideup);
    document.body.appendChild(hotZone);
};

function headerSlideup(event){
    $(".header").mouseleave(function(){
        $(".header").slideUp();
    });
};

function headerSlideDown(event){
    if($(".header").css("display") == "none"){
        $(".header").slideDown();
    }
};