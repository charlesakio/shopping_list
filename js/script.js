
$(document).one('pagecreate',function() {
	
	$(document).on('swipeleft','li', function(){
		$(this).remove();
	});

	$('form').on('submit' , function(event){
		event.preventDefault();
		$('#mainList').append('<li>' + 
					'<div class="whiteRec">' +
							'<img class="checkboxImage" src="images/checkboxImage.png">' +
							'<img class="checkImage" src="img/checkImage.png">' +
							'<div class="item">' +
								$('#newNote').val() +
							'</div>' +
							'<a href="javascript:undefined;" class="removeLink">' +
								'<img class="removeLink" src="img/removeLink.png">' +
							'</a>' +
						'</div>' +
					'</li>'
				);
		$('#mainList').listview('refresh');
		$('#newNote').val('')
		$.mobile.changePage('#notesPage');
	});

});
