$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();

    $('.bar-motion').on('mouseover',function(){
    	$('.bar-motion').addClass('animated shake').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
    		function(){
    			$(this).removeClass('animated shake');
    	})
    })


});