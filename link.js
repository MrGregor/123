$(document).ready(function($) {
		
	$(".link").on("click", function() {

		var get_id = $(this).data('item');
		var target = $("#"+get_id).offset().top;

		$("html, body").animate({scrollTop: target}, 500);

	});
  
});

// <div class="link" data-item="nameID"></div>
// <div id="nameID">Some text</div>
