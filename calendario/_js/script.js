$(document).ready(function(){

	/* UX testing purpose - no logic applied yet */
	$('#mainMenu a').on('click',function(){
		var dataDisplay = $(this).attr('data-menuOpt');
		
		$('#mainMenu li').removeClass('active');
		$(this).parent().addClass('active');

		$('.page').addClass('hide');

		switch(dataDisplay){
			case 'calendarPilates':
				$('#calendarApp').removeClass('hide');
			break;
			case 'calendarKinesio':
				$('#calendarApp').removeClass('hide');
			break;
			case 'peopleList':
				$('#personsList').removeClass('hide');
			break;
			case 'configuration':
				$('#config').removeClass('hide');
			break;
			default:
				$('#404').removeClass('hide');
		}
	});

	$('.personModule a').on('click',function(){
		$('.page').addClass('hide');
		$('#person').removeClass('hide');
	})

	$('.personOptions a').on('click',function(){
		var dataDisplay = $(this).attr('data-personAction');

		switch(dataDisplay){
			case 'view':
				$('.content .page').addClass('hide');
				$('#person').removeClass('hide');
			break;
			case 'edit':
				$('.content .page').addClass('hide');
				$('#person').removeClass('hide');
			break;
			case 'archive':
				$(this).parents('tr').toggleClass('inactive');
			break;
			case 'remove':
				$(this).parents('tr').addClass('hide');
			break;
			default:
				$('#404').removeClass('hide');
		}
	})
	
	$('#home a').on('click',function(){
		$('.page').addClass('hide');
		$('#calendarApp').removeClass('hide');
	});

	$('.brand a').on('click',function(){
		$('#mainMenu li').removeClass('active');
		$('.page').addClass('hide');
		$('#home').removeClass('hide');
	});


	$('.personModule :checkbox').on('change',function(){
		$(this).parent().toggleClass('present');
	});

	$('#personalInfo a[data-sectiontoggle="editPerson"]').on('click',function(){
		$('#personalInfo').addClass('hide');
		$('#editPerson').removeClass('hide');
	});

	$('#personEditor').on('submit',function(event){
		event.preventDefault();
		$('#personalInfo').removeClass('hide');
		$('#editPerson').addClass('hide');
	})
});