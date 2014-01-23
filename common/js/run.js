///////////////////////////////   
// Mobile Detection
///////////////////////////////

function isMobile(){
    return (
    (navigator.userAgent.match(/Android/i)) ||
    (navigator.userAgent.match(/webOS/i)) ||
    (navigator.userAgent.match(/iPhone/i)) ||
    (navigator.userAgent.match(/iPod/i)) ||
    (navigator.userAgent.match(/iPad/i)) ||
    (navigator.userAgent.match(/BlackBerry/))
    );
}

///////////////////////////////
// Parallax
///////////////////////////////

// Calcualte the home banner parallax scrolling
  function scrollBanner() {
    //Get the scoll position of the page
    scrollPos = jQuery(this).scrollTop();

    //Scroll and fade out the banner text
    jQuery('.major-brand .row').css({
    	// 'margin-left' : (scrollPos/10)+"px",
    	// 'opacity' : 1.5-(scrollPos/300)
    });
  }


///////////////////////////////
// Initialize
///////////////////////////////	
	
jQuery.noConflict();
jQuery(document).ready(function(){
  if(!isMobile()) {
		jQuery(window).scroll(function() {	      
	       scrollBanner();	      
		});
  }
    jQuery(".major-brand .row").fitText(1.7, { minFontSize: '24px', maxFontSize: '64px' });  
	});
