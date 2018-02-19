$(document).ready(function(){
    
    // popup full portfolio image from thumbnail
    $(".img-thumb-portfolio").click( function(ev){
        ev.preventDefault();
        
        //var imgSrc = $(this).attr("aria-hidden");
        var imgSrc = $(this).attr("rel");
        $('#img-full').attr('src',imgSrc);
                
    });   
    
});
