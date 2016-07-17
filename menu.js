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
function labelForInput(input) {
	var id = input.id;
	return $("label[for='"+id+"']"); 
}

function invisionForm() {
	var $formInputs = $('.invisionapp-input>input');
	$formInputs.keyup(function () {
		var labelVisible = $(this).val().length==0;
		
		var $label = labelForInput(this); 

		if (labelVisible) {
			$label.show();
		} else {
			$label.hide();
		}
	});

	$formInputs.focusin(function () {
		var $label = labelForInput(this);
		if ($label.is(":visible")){
			$label.fadeTo('fast', 0.5);
		}
	});
	$formInputs.focusout(function () {
		var $label = labelForInput(this);
		if ($label.is(":visible")){
			$label.fadeTo('fast', 1);
		}
	});


}