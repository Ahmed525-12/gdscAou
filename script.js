// -------------------------------------------------navbar-----------------------------


$(window).scroll(function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});

$('body').scrollspy({target: '.navbar-fixed-top'})
// -------------------------------------------------navbar-----------------------------
// --------------------------------------------------up btn --------------------------------------------------------
$(window).scroll(function () {
    $('a').toggleClass('scrollh', $(this).scrollTop() > 50);
});

$(".demoupbtn").click(function(){
    $("body,html").animate({scrollTop:'0'},1000)
})


// --------------------------------------------------up btn --------------------------------------------------------








$(document).ready(function(){
    
    $("#store-container").fadeOut(3000,function(){
        $("#loading").fadeOut(500,function(){
          
            $("#loading").remove()
        })
    })
})

