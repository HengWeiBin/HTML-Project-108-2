$(document).ready(function(){
    slideHeader();
    document.addEventListener("scroll", function(){
        let test = document.getElementById("fullscreen-hotzone");
        if(document.documentElement.scrollTop > 50){
            $(".header").css("display", "none");
            test.addEventListener("mouseover", headerSlideDown);
            test.addEventListener("mouseout", headerSlideup);
        }
        else{
            $(".header").css("display", "flex");
            test.removeEventListener("mouseover", headerSlideDown);
            test.removeEventListener("mouseout", headerSlideup);
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