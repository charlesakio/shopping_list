
$(document).one('pagecreate',function() {

	/*Load local storage items*/
	var items = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : items = [];

	console.log(items);
	items.forEach(function(key) {
		appendItem(key);
	});

	/*Add new item*/
	$('form').on('submit' , function(event){
		event.preventDefault();
		
		var item = $('#newNote').val();
		
		//Append this to the arrayItems;
		saveToLocalStorage(item);

		//Create the new item and inject to list
		appendItem(item);

		$('#mainList').listview('refresh');
		$.mobile.changePage('#notesPage');
	});

	/*Delete item*/
	$(document).on('click', 'li', function(){
		var item = $(this).closest('li');
		var index = items.indexOf($(item).text());
		items.splice(index, 1);
		console.log(items);
		localStorage.setItem("items", JSON.stringify(items));
		$(item).slideUp();
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

	/*Save data to localStorage*/
	function saveToLocalStorage(data) {
		items.push(data);
		console.log(items);
		localStorage.setItem('items', JSON.stringify(items));
	}

	/*Append item to html*/
	function appendItem(data) {	
		$('#mainList').append('<li class="ui-li-static ui-body-inherit ui-first-child ui-last-child">' + 
				'<div class="whiteRect">' +
					'<img class="checkboxImage" src="img/checkboxImage.png" alt="blank check box">'	+
					'<img class="checkImage" src="img/checkImage.png">' +
					'<div class="item">' +  data  + '</div>' +
					'<a href="javascript:undefined;" class="removeLink">' + 
						'<img class="removeLink" src="img/removeLink.png" alt="X image">' +
						'</a>' + 
				'</div>' +
			'</li>'
			);
	
	}//appendItem
});
