var menu = function () {
	var data = $('.accordion').attr('data-accordion');

	$('.menu-item').on('mouseenter', function(){
		if(data === 'close'){
			$('.drop-out').slideUp();	
			if ($(this).hasClass('active')){
				$(this).toggleClass('active');
			}
			else{
				$('.menu-item').removeClass('active');
				$(this).toggleClass('active');	
			}
		}
		else {
			$(this).toggleClass('active');
		}
		$(this).next('.drop-out').not(':animated').slideToggle();
	});
	

}

menu();


