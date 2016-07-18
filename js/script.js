
$(document).one('pagecreate',function() {
	
	$(document).on('swipeleft','li', function(){
		$(this).remove();
	});

	$('form').on('submit' , function(event){
		event.preventDefault();
		$('#mainList').append('<li>' + 
								$('#newNote').val() +
					'</li>'
				);
		$('#mainList').listview('refresh');
		$('#newNote').val('')
		$.mobile.changePage('#notesPage');
	});

});
