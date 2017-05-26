/*jQuery(window).load(function(){
  $(".loader").fadeOut('slow');
  jQuery('body').delay(350).css({'overflow':'visible'});
});
*/

jQuery(function($){
	"use strict";

/***************************************************
		Scroll To Top
**************************************************
    $(document).on('ready', function () {
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').on('click', function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

        $('#back-to-top').tooltip('show');

    });
*/
/***************************************************
		mobile nav 
***************************************************		
$("#main_nav button").click(function(){
if($("#main_nav button i").hasClass("fa-bars")){
	$("#main_nav>ul").slideDown("slow");
	$("#main_nav button i").removeClass("fa-bars").addClass("fa-close");
	}else{
	$("#main_nav>ul").slideUp("slow");
	$("#main_nav button i").removeClass("fa-close").addClass("fa-bars");	
	}})

$("#main_nav>ul>li>span>i").click(function(){
if($(this).hasClass("fa-chevron-down")){
	$("#main_nav>ul>li>span>i").removeClass("fa-chevron-up").addClass("fa-chevron-down");
	$("ul.dropdown").slideUp("slow");
	$(this).removeClass("fa-chevron-down").addClass("fa-chevron-up");
	$(this).parent().next().slideDown("slow");
	}
	else{	
	$(this).removeClass("fa-chevron-up").addClass("fa-chevron-down");
	$(this).parent().next().slideUp("slow");
	}})*/

/***************************************************
		Revolution Slider
****************************************************/
/*if($('.main-slider .tp-banner').length){
	
	var MainSlider = $('.main-slider');
	var strtHeight = MainSlider.attr('data-start-height');
	var slideOverlay =  "'"+ MainSlider.attr('data-slide-overlay') +"'";
	

	$('.main-slider .tp-banner').show().revolution({
	  dottedOverlay: slideOverlay,
	  delay:10000,
	  startwidth:1200,
	  startheight:strtHeight,
	  hideThumbs:600,
	  thumbWidth:80,
	  thumbHeight:50,
	  thumbAmount:5,
	  navigationType:"bullet",
	  navigationArrows:"0",
	  navigationStyle:"preview3",
	  touchenabled:"on",
	  onHoverStop:"off",
	  swipe_velocity: 0.7,
	  swipe_min_touches: 1,
	  swipe_max_touches: 1,
	  drag_block_vertical: false,
	  parallax:"mouse",
	  parallaxBgFreeze:"on",
	  parallaxLevels:[7,4,3,2,5,4,3,2,1,0],
	  keyboardNavigation:"off",
	  navigationHAlign:"center",
	  navigationVAlign:"bottom",
	  navigationHOffset:0,
	  navigationVOffset:40,
	  soloArrowLeftHalign:"left",
	  soloArrowLeftValign:"center",
	  soloArrowLeftHOffset:20,
	  soloArrowLeftVOffset:20,
	  soloArrowRightHalign:"right",
	  soloArrowRightValign:"center",
	  soloArrowRightHOffset:20,
	  soloArrowRightVOffset:20,
	  shadow:0,
	  fullWidth:"on",
	  fullScreen:"off",
	  spinner:"spinner4",
	  stopLoop:"off",
	  stopAfterLoops:-1,
	  stopAtSlide:-1,
	  shuffle:"off",
	  autoHeight:"off",
	  forceFullWidth:"on",
	  hideThumbsOnMobile:"on",
	  hideNavDelayOnMobile:1500,
	  hideBulletsOnMobile:"on",
	  hideArrowsOnMobile:"on",
	  hideThumbsUnderResolution:0,
	  hideSliderAtLimit:0,
	  hideCaptionAtLimit:0,
	  hideAllCaptionAtLilmit:0,
	  startWithSlide:0,
	  videoJsPath:"",
	  fullScreenOffsetContainer: ""
  });
}*/



/***************************************************
	Testimonial
****************************************************

$("#testimonial").owlCarousel({
	navigation : false,
	items : 1, //10 items above 1000px browser width
	itemsDesktop : [1000,1], //5 items between 1000px and 901px
	itemsDesktopSmall : [900,1], // betweem 900px and 601px
	itemsTablet: [600,1], //2 items between 600 and 0
	itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
	pagination : true,
	loop:true,
	paginationNumbers: false
});	

$(".next-arrow").click(function(){
	$("#testimonial").trigger('owl.next');
})
$(".prev-arrow").click(function(){
	$("#testimonial").trigger('owl.prev');
})*/

/***************************************************
		Our Clients
****************************************************
	$('#clients').owlCarousel({
		navigation : false,
		singleItem : false,
		autoPlay : 5000,
		loop:true,
		items : 5, //10 items above 1000px browser width
		itemsDesktop : [1000,5], //5 items between 1000px and 901px
		itemsDesktopSmall : [900,3], // betweem 900px and 601px
		itemsTablet: [600,3], //2 items between 600 and 0
		transitionStyle : "slide",
		//Pagination
		pagination : true,
		paginationNumbers: false,
	});*/
})