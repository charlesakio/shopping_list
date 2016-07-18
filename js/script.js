
$(document).one('pagecreate',function() {


	/*Add new item*/
	$('form').on('submit' , function(event){
		event.preventDefault();
		$('#mainList').append('<li>' +
					'<div class="whiteRect">' +
						'<img class="checkboxImage" src="img/checkboxImage.png" alt="blank check box">'						+	'<img class="checkImage" src="img/checkImage.png">' + 
						'<div class="item">' + 
							$('#newNote').val() +
						'</div>' +
						'<a href="javascript:undefined;" class="removeLink">' + 
							'<img class="removeLink" src="img/removeLink.png" alt="X image">' +
						'</a>' + 
					 '</div>' +
					'</li>'
				);
		$('#mainList').listview('refresh');
		$('#newNote').val('')
		$.mobile.changePage('#notesPage');
	});

	/*Delete item*/
	$(document).on('click', '.removeLink', function(){
		$(this).closest("li").slideUp();
	});

	/*Checkbox on*/
	$(document).on('click', '.checkboxImage', function() {
		$(this).closest(".whiteRect").find(".checkImage").show();
	});

	/*Checkbox off*/
	$(document).on('click', '.checkImage', function() {
		$(this).hide();
	});


	/*Edit item*/
	$(document).on('click', '.item', function() {
		var itemText = $(this).text();
		$(this).text('').append($("<input class='editInput' maxlength='25' />"));
		$(document).find(".editInput").val(itemText);
		$("input").focus();
	}); 

	$(document).on('blur', '.editInput', function(e) {
		if ($(this).val() !== "") {
			$(this).parent().text($(this).val());
		}
	});
});
