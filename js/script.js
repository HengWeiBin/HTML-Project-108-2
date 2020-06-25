$(document).ready(function(){
    //糕點圖片變化效果
    fade($(".cheese_cake"), "../images/pastry_1.png", "../images/pastry_1-1.png");
    fade($(".chocolate_cake"), "../images/pastry_2.png", "../images/pastry_2-1.png");
    fade($(".orange_pie"), "../images/pastry_3.png", "../images/pastry_3-1.png");
    fade($(".cinnamon_roll"), "../images/pastry_4.png", "../images/pastry_4-1.png");
    fade($(".macaron"), "../images/pastry_5.png", "../images/pastry_5-1.png");
    fade($(".pancake"), "../images/pastry_6.png", "../images/pastry_6-1.png");

    //Country Code 顯示
    $.get("https://ipinfo.io", function(response) {
        console.log(response.city, response.country);
        $(".location p").html(response.country);
        },
         "jsonp");
         
    //footer 畫綫
    let canvas = document.getElementById('line');
    let ctx = canvas.getContext("2d");
    
    canvas.height = 150;
    canvas.width = 300;

    ctx.beginPath()
    ctx.moveTo(280, 20)
    ctx.lineTo(280, 130)
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


