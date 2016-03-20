$(document).ready(function() {
  // Smooth scroll to top after clicking navbar-brand item.
  $("a[href='#top']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
  
  terminalText('jonathan-berglind');
});

function terminalText(text) {
  //Init by removing header text
  $('.term').html('$');
  $('.term-result').addClass('hidden-xl-down');

  //Print one char at a time after a certain time has passed
  setTimeout(function functionName() {
    $.each(text.split(''), function(i, letter){
        setTimeout(function(){

            $('.term').html($('.term').html() + letter);

        }, 100*i);
    });
  }, 2000);

  setTimeout(function functionName() {
    $('.term-result').removeClass('hidden-xl-down');
  }, 5000);
}

// Attach navbar to top of window and show navbar-brand when scrolled past header.
$(window).scroll(function() {
  if( $(this).scrollTop() > $('.content-wrapper').position().top ) {
    $('.navbar').addClass('navbar-fixed-top');
    $('.content-wrapper').addClass('pad-content');
    $('.navbar-brand').fadeIn('fast');
  } else {
    $('.navbar').removeClass('navbar-fixed-top');
    $('.content-wrapper').removeClass('pad-content');
    $('.navbar-brand').fadeOut('fast');
  }
});
