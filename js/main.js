var mywindow = $(window);
var mypos = mywindow.scrollTop();
var up = false;
var newscroll;

		mywindow.scroll(function(){
		  newscroll = mywindow.scrollTop();

		    if (newscroll > 300 && !up) {
		        $( ".phantom" ).fadeIn(300);
		
		        up = !up;
		        
		      } else if(newscroll < 300 && up) {
		        $( ".phantom" ).fadeOut(150);
		        up = !up;
		      }
		      mypos = newscroll;
		      return false;

		  
		});

$(document).ready(function() {    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){    
        /* Check the location of each desired element */
        $('.graph__wrap').each( function(){            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
				$('.graph__inner--taxidermy').addClass('g-tax');
				$('.graph__inner--scenic').addClass('g-scenic');
				$('.graph__inner--reproductions').addClass('g-rep');
				$('.graph__inner--murals').addClass('g-mural');
            }            
        });     
    });    
});

$(document).ready(function () {
	var checkURL = ['#kel', '#levi', '#cheesh'];

	// if(window.location.href.indexOf({("#value1", "#value2", "#value3", "#value4")}) > -1) {
	// 	alert("IT WORKS");
	// }
	for (var i = 0; i < checkURL.length; i++) {
        if(window.location.href.indexOf(checkURL[i]) > -1) {
            alert("your url contains the string "+checkURL[i]);
        }
    }
});