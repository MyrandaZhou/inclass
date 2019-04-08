console.log("JavaScript is loaded");

$(document).ready(function() {
    console.log("Document is ready");
    $( "#menu" ).click(function() {
        $("#navigation-bar").toggleClass("navigation-bar--hidden");
        $("#content").toggleClass("content--no-navigation");
    });

// when the FAB is clicked,
$( "#button-card-transition" ).click(function() {
    console.log("Button Clicked");

    // animate button

    // animate button when clicked
    $( "#button-card-transition" ).addClass("button-click");

    // remove the button click class after
    // the animation ends
    setTimeout(function(){
        $( "#button-card-transition" ).removeClass("button-click");
    },300);
    


    // if the red card is faded out,
    //fade in red, fade out blue
    if($(".card-red").hasClass("fade-through-out")){

        // //Then remove the fade out class
        // $(".card-red").removeClass("fade-through-out");
        
        // //and add the fade in class
        // $(".card-red").addClass("fade-through-in");

        // //Remove the fade in class from the blue card
        // $(".card-blue").removeClass("fade-through-in");

        // //and add the fade out class to the blue card
        // $(".card-blue").addClass("fade-through-out");

        fadeThrough(
            $(".card-blue"),
            $(".card-red")
           );
        rotateToggle(
            $("#icon-anchor"),
            $("#icon-switch")
        );
    }
        
    else{
        
        fadeThrough(
            $(".card-red"),
            $(".card-blue")
        );
        rotateToggle(
            $("#icon-switch"),
            $("#icon-anchor")
        );
   
    }
});

function fadeThrough(elementFadeOut, elementFadeIn){
     //remove the fade in class from the red card
     elementFadeOut.removeClass("fade-through-in");
     //fade out red content
     elementFadeOut.addClass("fade-through-out");

     //remove the fade out class from the blue card
     elementFadeIn.removeClass("fade-through-out");

     //add the fade in class to the blue card
     elementFadeIn.addClass("fade-through-in");
}


function rotateToggle(elementRotateOut, elementRotateIn){
    //remove the fade in class from the red card
    elementRotateOut.removeClass("fade-through-in");
    //fade out red content
    elementRotateOut.addClass("fade-through-out");

    //remove the fade out class from the blue card
    elementRotateIn.removeClass("fade-through-out");

    //add the fade in class to the blue card
    elementRotateIn.addClass("fade-through-in");
}

});
