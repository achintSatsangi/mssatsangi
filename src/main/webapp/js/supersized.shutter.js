/**************************************************************************
 * jQuery Banner Slider, jQuery Scrolling Banner, Banner Rotator, slider, carseoul, trigger, manu, navigation
 * Transition Effects, jQuery Image Slider/Slideshow/Carousel/Gallery/Banner js+html TOUCH SWIPE & Responsive,
 * SlideDeck examples: Gallery Slideshow, Rotating Banner Slider, Vertical Slider , 
 * jQuery Plugin for kenburn Slider
 * @requires jQuery v1.2.2 or later 
 * @author aamirwd 
 * http://khanaamir.com/
 * http://99script.com/
**************************************************************************/

(function($){
	
	theme = {
	 	
	 	
	 	/* Initial Placement
		----------------------------*/
	 	_init : function(){
	 				
		
			/* Navigation Items
			----------------------------*/
		    $(vars.next_slide).click(function() {
		    	api.nextSlide();
		    });
		    
		    $(vars.prev_slide).click(function() {
		    	api.prevSlide();
		    });
		    					
		    $(vars.play_button).click(function() {
				api.playToggle();						    
		    });
					
	 	},
	 	
	 	
	 	/* Play & Pause Toggle
		----------------------------*/
	 	playToggle : function(state){
	 		
	 		if (state =='play'){
	 			$(vars.play_button).addClass("sz-pause").removeClass("sz-play");
	 		}else if (state == 'pause'){
	 			$(vars.play_button).addClass("sz-play").removeClass("sz-pause");
	 		}
	 		
	 	},	 	
	 
	 };
	 
	 
	 /* Theme Specific Variables
	 ----------------------------*/
	 $.supersized.themeVars = {
	 	
	 	// Internal Variables
		progress_delay		:	false,				// Delay after resize before resuming slideshow
		thumb_page 			: 	false,				// Thumbnail page
		thumb_interval 		: 	false,				// Thumbnail interval
		image_path			:	'img/',				// Default image path
													
		// General Elements							
		play_button			:	'#pauseplay',		// Play/Pause button
		next_slide			:	'#nextslide',		// Next slide button
		prev_slide			:	'#prevslide',		// Prev slide button
		next_thumb			:	'#nextthumb',		// Next slide thumb button
		prev_thumb			:	'#prevthumb',		// Prev slide thumb button
		
		slide_caption		:	'#slidecaption',	// Slide caption
		slide_current		:	'.slidenumber',		// Current slide number
		slide_total			:	'.totalslides',		// Total Slides
		slide_list			:	'#slide-list',		// Slide jump list							
		
		thumb_tray			:	'#thumb-tray',		// Thumbnail tray
		thumb_list			:	'#thumb-list',		// Thumbnail list
		thumb_forward		:	'#thumb-forward',	// Cycles forward through thumbnail list
		thumb_back			:	'#thumb-back',		// Cycles backwards through thumbnail list
		tray_arrow			:	'#tray-arrow',		// Thumbnail tray button arrow
		tray_button			:	'#tray-button',		// Thumbnail tray button
		
		progress_bar		:	'#progress-bar'		// Progress bar
	 												
	 };												
	
	 /* Theme Specific Options
	 ----------------------------*/												
	 $.supersized.themeOptions = {					
	 						   
		progress_bar		:	1,		// Timer for each slide											
		mouse_scrub			:	0		// Thumbnails move with mouse
		
	 };
		
})(jQuery);