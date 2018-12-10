$(document).ready(function(){

    $(".personal-proj").hide();

    // corporate
    $("#link-corp-proj").click(function(event){
        event.preventDefault();
        $(".corp-proj").fadeIn();
        $(".personal-proj").fadeOut();
        $("#li-corp").addClass("active");
        $("#li-person").removeClass("active");
    });

    // personal
    $("#link-person-proj").click(function(){
        event.preventDefault();
        $(".corp-proj").fadeOut();
        $(".personal-proj").fadeIn();
        $("#li-corp").removeClass("active");
        $("#li-person").addClass("active");
    });

});