// $( "form" ).on( "submit", function( event ) {
//     event.preventDefault();
//     console.log( $( this ).serialize() );
//   });  

  // $(document).ready(function(){
  //   $(".svg").click(function(){
  //     $(this).removeClass("rotateBackwards");
  //     $(this).toggleClass("rotate");
  //     if ($(".svg").hasClass("rotate")) {
  //       $(this).click(function(){
  //         $(this).removeClass("rotate"),
  //         $(this).toggleClass("rotateBackwards")
  //       })
  //     }
      
  //   });
  // });

  // $(document).ready(function(){
  //   $(".svg").click(function(){
  //     $(this).addClass("rotate");
  //   })
  //   var a = $("this").hasClass("");
  //   var b = .css("rotate");
  //   if(b==a) {$(this).css({"transform": "rotate(0deg)", "transition": "0.5s"}
  //   )}
      
  // })

  $( "#clickable" ).on( "click", function() {
    $(this).next().slideToggle();
  });



    window.onload = function () {
      $("#R1H1").text("Tap for pumpkin");
      $("#R1P1").text("The Pumpkin Spice Latte and Pumpkin Cream Cold Brew are here, and you can order them now on our app when you join Starbucks® Rewards.");
      $("#R2H1").text("New apple in the bunch");
      $("#R2P1").text("Introducing our Iced Apple Crisp Oatmilk Shaken Espresso with a perfectly balanced taste.");
      $("#R3H1").text("Pastry fans, rejoice");
      $("#R3P1").text("Say hello to the new Baked Apple Croissant filled with warm apple filling.");
      $("#R4H1").text("A deal that delivers");
      $("#R4P1").text("Save on delivery with $7 off Starbucks® orders of $20 or more on Uber Eats, 8/24-8/27.*");

    }

//     $(document).on('click', '.svg-first', function () {
//       $(this).prev().children('ul').toggle();
//       $(".svg").click(function(){
          
//          $(this).addClass("rotate");
//         //  $(this).removeClass("rotate");
//         if ( $(".svg").hasClass( "rotate" ) ) {
//           $(this).delay( 800 ).removeClass("rotate");
//         }



//   });
// });

$(document).on('click', '.svg', function () {
  
  
  if ( $( this ).hasClass( "on" ) ) {
    $(this).removeClass('on');
    $(this).addClass('off');
    $(this).prev().children('.ul').slideToggle(500);
  }
  
  else {
    $(this).removeClass('off');
    $(this).addClass('on');
    $(this).prev().children('.ul').slideToggle(500);
  }
});





 
 
