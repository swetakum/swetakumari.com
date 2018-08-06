$(document).ready(function(e){
    $(".menuIcon").click(function(e){
        $(this).toggleClass("fa-times");
        $(".overlayMenu").toggleClass("menuExpanded");
        //$(".typed-cursor").toggleClass("hide");
    });
    $(".nav-menu").click(function(e){
        $(".menuIcon").toggleClass("fa-times");
        $(".overlayMenu").toggleClass("menuExpanded");
        //$(".typed-cursor").toggleClass("hide");
    });

    //project page
    $(".goBack").click(function(e){
        window.history.back();
    });

});
