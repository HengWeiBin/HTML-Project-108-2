$(document).ready(function(){
    new WOW().init();

    //糕點圖片變化效果
    fade($("#cheese_cake"));
    fade($("#chocolate_cake"));
    fade($("#orange_pie"));
    fade($("#cinnamon_roll"));
    fade($("#macaron"));
    fade($("#pancake"));

    //Country Code 顯示
    $.get("https://ipinfo.io", function(response) {
        console.log(response.city, response.country);
        $(".location p").html(response.country);
        },
         "jsonp");

    //nav-bar animation
    $('.first-button').on('click', function () {

        $('.animated-icon1').toggleClass('open');
      });
      $('.second-button').on('click', function () {
    
        $('.animated-icon2').toggleClass('open');
      });
      $('.third-button').on('click', function () {
    
        $('.animated-icon3').toggleClass('open');
      });
});

function fade(element){
    element.mouseenter(function(){
        element.carousel("next");
    });
    element.mouseleave(function(){
        element.carousel("prev");
    });
};

window.onresize = function(event) {
    //footer 畫綫
    let canvas = document.getElementById('line');
    let ctx = canvas.getContext("2d");
    let width = document.documentElement.clientWidth;
    
    canvas.height = 150;
    canvas.width = 300;

    if (width >= 768)
    {
        ctx.beginPath()
        ctx.moveTo(280, 20)
        ctx.lineTo(280, 130)
    }
    else
    {
        canvas.height = 15;
        ctx.beginPath()
        ctx.moveTo(30, 7)
        ctx.lineTo(260, 7)
    }
    ctx.strokeStyle="white"
    ctx.stroke()

});

function fade(element, pic_Origin, pic_Transform){
    let url_Origin = "url(" + pic_Origin + ")";
    let url_Transform = "url(" + pic_Transform + ")";
    element.mouseenter(function(){
        element.fadeOut(400, function(){
            element.css("background-image", url_Transform);
            element.fadeIn(400);
        });
    });
    element.mouseleave(function(){
        element.fadeOut(400, function(){
            element.css("background-image", url_Origin);
            element.fadeIn(400);
        });
    });
};


