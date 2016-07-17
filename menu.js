function toggleMenuOnClick() {

$(window).click(function(){
	$('.submenu').hide();
	$('.menu-item').removeClass('active');
})

	$('.menu-item').click(function(event){
		event.stopPropagation();

		var $thisSubmenu = $(this).find('.submenu');

		if($(this).hasClass('active')){
			$thisSubmenu.hide();
			$(this).removeClass('active');
		} else{
			$('.submenu').hide();
			$thisSubmenu.show();
			$('.menu-item').removeClass('active');
			$(this).addClass('active');
		}
	})

	$('.submenu-item').click(function(event){
		event.stopPropagation();
	})



}