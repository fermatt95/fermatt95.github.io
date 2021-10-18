$(document).ready(function(){
  
    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, div a[href='#Home']").on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 900, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  
   
    /* ANIMACION */
    $(window).scroll(function() {
      $(".slideAnim").each(function(){
        var pos = $(this).offset().top;
  
        var winTop = $(window).scrollTop();
          if (pos < winTop + 600) {
            $(this).addClass("slideUp");
          }
      });
      
    });
    /* FIN ANIMA */
  
    /* UPDATE COMMENT BOX */
    $('#comment').keyup(function(){
      var commentLength = $(this).val().length;
      var characterLeft = 140 - commentLength;
      $('.counter').text(characterLeft);
      if (characterLeft < 0) {
        $('.counter').addClass('red');
        $('#submitButton').addClass('disabled');
      } else {
        $('.counter').removeClass('red');
        $('#submitButton').removeClass('disabled');
      };
    });
    /* fin update comment */
  })