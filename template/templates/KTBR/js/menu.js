window.addEvent('domready', function() {
	var displayers = $$('.show-menu'),
		wrapper = $('wrapper'),
		menu = $$('.moduletable_vmenu.mobile')[0],
		visible = false;
		
	displayers.addEvent('click', function(event) {
		event = new Event(event);
		event.stop();
		menu.toggleClass('menu-open');
		visible = !visible;
	});
});