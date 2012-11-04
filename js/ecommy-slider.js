/* slide for homepage */
function animate(current_element, sl_cnt) {

	next_element = animate_code(current_element, sl_cnt);
	
	//save element as on timeout it gets overwritten
	$('body').data('slider_settings_next_element'+sl_cnt, next_element);	

	timer = $('body').data('slider_settings_timer'+sl_cnt);
	if(timer) clearTimeout(timer);
	
    $('body').data('slider_settings_timer'+sl_cnt, setTimeout(function () {
        animate($('body').data('slider_settings_next_element'+sl_cnt), sl_cnt);
    }, 3000));
}

function animate_code(current_element, sl_cnt) {
	//selected index
	parent_element = current_element.parent('ul');
	selectedindex = parent_element.children('li').index(current_element);

	//hide everything else
	parent_element.children('li').fadeOut(1000);

	//show current element
	current_element.fadeIn(1000);

	//select the button
	parent_element.find('.cpanel a').removeClass('on');

	$('#c'+sl_cnt+'_'+selectedindex).addClass('on');
	
    if (current_element.hasClass('last')) {
		next_element = parent_element.children('li:first');
	}
    else {
		next_element = current_element.next('li');
	}
	return next_element;
}


//plugin code
var ecommy_sliders_counter=0;
(function($){
	$.fn.ecommy_slider = function(options) {
		var defaults = {

		};
		var options = $.extend(defaults, options);		
		
		return this.each(function() {			
			parent_obj = $(this); 

			parent_obj.children('li:gt(0)').hide();
			parent_obj.children('li:last').addClass('last');

			//build the links
			var links = '';
			var i=0;
			parent_obj.children('li').each(function() {
				links += '<a class="cnt_triggers '+(i==0?' on':'')+'" counter="'+(ecommy_sliders_counter)+'" cnt="'+(i+1)+'" id="c'+ecommy_sliders_counter+'_'+(i++)+'" href="#"></a>';
			});

			parent_obj.append('<div class="cpanel" style="left: '+parseInt((parent_obj.width()-i*19)/2)+'px">'+links+'</div>');

			//when buttons are clicked
			parent_obj.find(".cnt_triggers").click(function() {
				parent_element = $(this).parent().parent();
				//stop the slider
				cnt = parseInt($(this).attr('cnt')); //counting starts at 1, we choose the next element
				slider_counter = parseInt($(this).attr('counter')); 
				
				cur = parent_element.children("li:nth-child("+cnt+")");
				
				timer = $('body').data('slider_settings_timer'+slider_counter);
				if(timer) clearTimeout(timer);			

				animate(cur, slider_counter);
				return false;
			});		

			//start slideshow with a delay
			var cur = parent_obj.children('li:nth-child(1)');
			animate(cur, ecommy_sliders_counter);
			ecommy_sliders_counter++;
		});
	};
})(jQuery);
