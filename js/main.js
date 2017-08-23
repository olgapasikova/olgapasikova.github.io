$(document).ready(function(){


  		$('.value').each(function(){

  			var value = ($(this).data('num') * 10);

  			$(this).animate({'width': value + '%'}, 1000, "easeOutSine", function(){

  				$('.percentage').fadeIn();

  			});


  		});


  	});


	  
