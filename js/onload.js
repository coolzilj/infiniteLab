$(document).ready(function() {
	
	$('.slider').anythingSlider({
		autoPlay        : true,
		resizeContents  : true, // If true, solitary images/objects in the panel will expand to fit the viewport  	    
	    hashTags        : false,
	    buildArrows     : false,
	    delay			: 7000,
	    buildNavigation : true
	});

	$('.nav').localScroll({offset:-100}); // 使滚动平滑
	$('.nav li a').click(function () {
		$(this).parent().siblings().find('a').removeClass("current");
		$(this).addClass("current");
	});
	// // 点击.left导航执行的动画
	// $('.nav li a.left').click(function () {
	// 	var t_class = $(this).attr("href"); // return "icon-panel"
	// 	var target = $('body').find(t_class); // return div＃icon-panel
	// 	$('body').stop().scrollTo(target,1000,
	// 							  {
	// 								  easing:'easeInOutQuad',
	// 								  offset:-60,
	// 								  onAfter:function () {
	// 								  		var ribbon = $('body').find("." + t_class + ">.ribbon"); // return div＃icon-panel > div.ribbon
	// 								  		$(ribbon).animate({'margin-left':0},300,'easeInOutQuad');
	// 								  		var desc = $('body').find("." + t_class + " .desc");
	// 								  		$(desc).delay(300).animate({'margin-right':0},300,'easeInOutQuad');
	// 	}});
	// });
	// // 点击.right导航执行的动画
	// $('.nav li a.right').click(function () {
	// 	var t_class = $(this).attr("href"); // return "icon-panel"
	// 	var target = $('body').find('.'+t_class); // return div＃icon-panel
	// 	$('body').stop().scrollTo(target,1000,
	// 							  {
	// 								  easing:'easeInOutQuad',
	// 								  offset:-60,
	// 								  onAfter:function () {
	// 								  		var ribbon = $('body').find("." + t_class + ">.ribbon") // return div＃icon-panel > div.ribbon
	// 								  		$(ribbon).animate({'margin-right':0},300,'easeInOutQuad');
	// 								  		var desc = $('body').find("." + t_class + " .desc");
	// 								  		$(desc).delay(300).animate({'margin-left':0},300,'easeInOutQuad');}
	// 							  });
	// });
	// #icon,#wp-theme,#print(.left),当panel可见时执行动画
	$('#icon-panel,#wp-theme-panel,#print-panel').bind('inview', function (event, visible) {

		var t_class = $(this).attr("id"); //return "#icon-panel"
  		var desc = $('body').find("#" + t_class + " .desc"); //renturn div#icon-panel > .desc
		var ribbon = $('body').find("#" + t_class + ">.ribbon"); // return div#icon-panel > div.ribbon

	    if (visible == true) {
	  		$(ribbon).animate({'margin-left':0},300,'easeInOutQuad');
	  		$(desc).delay(300).animate({'margin-right':0},300,'easeInOutQuad');

	    }else{
	  		$(ribbon).animate({'margin-left':"-700px"},300,'easeInOutQuad');
	  		$(desc).delay(300).animate({'margin-right':"-700px"},300,'easeInOutQuad'); 
  		}
  	}); 
 	// #logo,#UI(.right),当panel可见时执行动画
  	$('#logo-panel,#ui-panel').bind('inview', function (event, visible) {

    	var t_class = $(this).attr("id");
  		var desc = $('body').find("#" + t_class + " .desc");
		var ribbon = $('body').find("#" + t_class + ">.ribbon"); // return div.icon-panel > div.ribbon

	    if (visible == true) {
	  		$(ribbon).animate({'margin-right':0},300,'easeInOutQuad');
	  		$(desc).delay(300).animate({'margin-left':0},300,'easeInOutQuad');
	    }else{
	  		$(ribbon).animate({'margin-right':"-700px"},300,'easeInOutQuad');
	  		$(desc).delay(300).animate({'margin-left':"-700px"},300,'easeInOutQuad'); 
  		}
  	}); 
  	// Sticky buildNavigation
  	$("body").find('.nav').waypoint(function(event, direction) {
		var nav = $(this).parent().parent(); // return div#nav
		if(direction == 'down'){
			nav.addClass("sticky").css("margin",0);
		}else{
			nav.removeClass("sticky").css({"margin-top":"-50px"});	
		}
	});
});