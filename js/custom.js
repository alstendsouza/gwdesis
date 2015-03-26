
	
$('#description p').fadeIn(1700); // description will fade in 1.7 seconds

//--------------------------------------------------------------------------------

// Code to scroll to the inline elements in the same page of the website
jQuery(function($) {
        // from http://imakewebthings.com/jquery-waypoints/
 
        // Wicked credit to
	// http://www.zachstronaut.com/posts/2009/01/18/jquery-smooth-scroll-bugs.html
	var scrollElement = 'html, body';
	$('html, body').each(function () {
		var initScrollTop = $(this).attr('scrollTop');
		$(this).attr('scrollTop', initScrollTop + 1);
		if ($(this).attr('scrollTop') == initScrollTop + 1) {
			scrollElement = this.nodeName.toLowerCase();
			$(this).attr('scrollTop', initScrollTop);
			return false;
		}    
	});
	
	// Smooth scrolling for internal links
	$("a[href^='#']").click(function(event) {
		event.preventDefault();
		
		var $this = $(this),
		target = this.hash,
		$target = $(target);
		
		$(scrollElement).stop().animate({
			'scrollTop': $target.offset().top
		}, 1000, 'swing', function() {
			window.location.hash = target;
		});
		
	});
 
});
//---------------------------------------------------------------------------------------------------------------------


// This code below is an ajax call to the team.json file. It parses the json and renders it in the browser
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
if(xhr.readyState === 4)
	{
		var team = JSON.parse(xhr.responseText);
		var teamHTML='<p id="event_heading">Team GW Desis </p>';
		for(var i=0; i<team.length; i++)
		{
			teamHTML += '<div class="imgContainer col-md-3">';
			teamHTML += '<img src="'+team[i].photo_url+'" id="memberimg">';
			teamHTML += '<p id="member_name">'+team[i].name+'</p>';
			teamHTML += '<p id="member_post">'+team[i].post+'</p>';
			teamHTML += '</div>';
		}
		
		document.getElementById('team').innerHTML = teamHTML;
	}	
			
};
xhr.open('GET', 'data/team.json', true);
xhr.send();
//---------------------------------------------------------------------------------------------------------------------