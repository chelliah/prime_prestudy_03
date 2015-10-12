$(document).ready(function(){
	$('header').hide();
	$('#content-body').hide();
	$('button').on('click', function(){
		$('button').hide();
		$('header').show();
		$('#content-body').show();
	})
})