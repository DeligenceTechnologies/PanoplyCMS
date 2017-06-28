import React, { Component } from 'react';
import { render } from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

var createReactClass = require('create-react-class');


import FrontHeader from './homeLayouts/Header.jsx';
import FrontFooter from './homeLayouts/Footer.jsx';


DefaultTemplate = createReactClass({
	mixins:[ReactMeteorData],
	getMeteorData(){
		return {
			result: PanoplyCMSCollections.Sites.findOne()
		};
	},
	componentDidMount: function() {
		// 
		require('../imports/style.css')
		require('../imports/animate.css')
		require('../imports/flaticon.css')
		require('../imports/responsive.css')

		// require('../lib/js/custom.js')
		require('../imports/js/jquery-1.12.4.min.js')
		require('../imports/plugin/owl-carousel/css/owl.carousel.css')
		require('../imports/plugin/owl-carousel/css/owl.theme.css')
		require('../imports/plugin/owl-carousel/css/owl.transitions.css')
		require('../imports/plugin/owl-carousel/js/owl.carousel.js')
		require('../imports/plugin/owl-carousel/js/owl.carousel.min.js')

		require('../imports/plugin/rs-plugin/css/settings.css');
		// require('../imports/plugin/rs-plugin/font/revicons.woff');
		require('../imports/plugin/rs-plugin/js/jquery.themepunch.revolution.min.js');
		// require('../imports/plugin/rs-plugin/js/jquery.themepunch.tools.min.js');

		/***************************************************
				Scroll To Top While Page Change
		***************************************************/
		$(window).scrollTop(0);

		/***************************************************
				Scroll To Top
		***************************************************/
		    $(window).on('scroll', function () {
		            if ($(this).scrollTop() > 50) {
		                $('#back-to-top').fadeIn();
		            } else {
		                $('#back-to-top').fadeOut();
		            }
		        });
		        // scroll body to 0px on click
		        $('#back-to-top').on('click', function () {
		            // $('#back-to-top').tooltip('hide');
		            $('body,html').animate({
		                scrollTop: 0
		            }, 800);
		            return false;
		        });

		        // $('#back-to-top').tooltip('show');

		/***************************************************
				mobile nav 
		***************************************************/		
		$(".main_nav button").click(function(){
			if($(".main_nav button i").hasClass("fa-bars")){
				$(".main_nav>div>ul").slideDown("slow");
				$(".main_nav button i").removeClass("fa-bars").addClass("fa-close");
			}else{
				$(".main_nav>div>ul").slideUp("slow");
				$(".main_nav button i").removeClass("fa-close").addClass("fa-bars");	
			}
		})

		$(".main_nav>div>ul>li>span>i").click(function(){
			if($(this).hasClass("fa-chevron-down")){
				
				$(".main_nav>div>ul>li>span>i").removeClass("fa-chevron-up").addClass("fa-chevron-down");
				$(this).parent().next().slideUp("slow");
				$(this).removeClass("fa-chevron-down").addClass("fa-chevron-up");
				$(this).parent().next().slideDown("slow");
			}
			else{	
				$(this).removeClass("fa-chevron-up").addClass("fa-chevron-down");
				
				$(this).parent().next().slideUp("slow");
			}
		})
		$(".main_nav>div>ul>li>ul>li>span>i").click(function(){
			if($(this).hasClass("fa-chevron-down")){
				
				$(".main_nav>div>ul>li>ul>li>span>i").removeClass("fa-chevron-up").addClass("fa-chevron-down");
				$(this).parent().next().slideUp("slow");
				$(this).removeClass("fa-chevron-down").addClass("fa-chevron-up");
				$(this).parent().next().slideDown("slow");
			}
			else{	
				$(this).removeClass("fa-chevron-up").addClass("fa-chevron-down");
				
				$(this).parent().next().slideUp("slow");
			}
		})
		    
			
		/***************************************************
				Sticky header
		***************************************************/
			
		$(window).scroll(function() {
	    if ($(this).scrollTop() > 1){  
        $('.header').addClass("sticky");
	    }
	    else{
        $('.header').removeClass("sticky");
	    }
		});


		// Testimonial initialization

		$("#testimonial").owlCarousel({
			navigation : false,
			items : 1, //10 items above 1000px browser width
			itemsDesktop : [1000,1], //5 items between 1000px and 901px
			itemsDesktopSmall : [900,1], // betweem 900px and 601px
			itemsTablet: [600,1], //2 items between 600 and 0
			itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
			pagination : false,
			paginationNumbers: false
		});
		$(".next-arrow").click(function(){
			$("#testimonial").trigger('owl.next');
		})
		$(".prev-arrow").click(function(){
			$("#testimonial").trigger('owl.prev');
		})

		// Our Partner Carousel Initialization
		$('#clients').owlCarousel({
			navigation : false,
			singleItem : false,
			autoPlay : 5000,
			loop:true,
			items : 6, //10 items above 1000px browser width
			itemsDesktop : [1000,6], //5 items between 1000px and 901px
			itemsDesktopSmall : [900,4], // betweem 900px and 601px
			itemsTablet: [600,4], //2 items between 600 and 0
			transitionStyle : "slide",
			// Pagination
			pagination : true,
			paginationNumbers: false,
		});


		// Revolution Slider Initialization
		if($('.main-slider .tp-banner').length){
	
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
				navigationStyle:"preview4",
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
		}

		// Meta initializations
		document.title = this.data.result.name;
		if(PanoplyRouter.current().path == '/'){
			if($('meta[name=keywords]').length){
				$('meta[name=keywords]').attr('content', this.data.result.siteMetaKeyword);
			} else {
				let metakey = document.createElement('meta');
				metakey.name = "keywords"
				metakey.content = this.data.result.siteMetaKeyword
				document.getElementsByTagName('head')[0].appendChild(metakey)
			}
			if($('meta[name=description]').length){
				$('meta[name=description]').attr('content', this.data.result.siteMetaDesc);
			} else {
				let metadesc = document.createElement('meta');
				metadesc.name = "description"
				metadesc.content = this.data.result.siteMetaDesc
				document.getElementsByTagName('head')[0].appendChild(metadesc)

			} 
		}
		
		
		let meta1 = document.createElement('meta');
		meta1.httpEquiv = "Content-Type";
		meta1.content = "text/html; charset=utf-8";
		document.getElementsByTagName('head')[0].appendChild(meta1);
		let meta2 = document.createElement('meta');
		meta2.name = "viewport";
		meta2.content = "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no";
		document.getElementsByTagName('head')[0].appendChild(meta2);
		let meta3 = document.createElement('meta');
		meta3.httpEquiv = "X-UA-Compatible";
		meta3.content = "IE=edge";
		document.getElementsByTagName('head')[0].appendChild(meta3);

		let link = document.createElement('link');
		link.id = 'id2';
    link.rel = 'shortcut icon';
    link.href = 'favicon.ico';
    document.getElementsByTagName('head')[0].appendChild(link);

		// document.getElementsByTagName('head')[0].appendChild(meta);
		// document.getElementsByTagName('head')[0].appendChild("<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">")
		// document.getElementsByTagName('head')[0].appendChild("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no\">")
		// document.getElementsByTagName('head')[0].appendChild("<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">")
	},
	componentDidUpdate: function() {
		// 
		require('../imports/style.css')
		require('../imports/animate.css')
		require('../imports/flaticon.css')
		require('../imports/responsive.css')

		// require('../lib/js/custom.js')

		require('../imports/plugin/owl-carousel/css/owl.carousel.css')
		require('../imports/plugin/owl-carousel/css/owl.theme.css')
		require('../imports/plugin/owl-carousel/css/owl.transitions.css')
		require('../imports/plugin/owl-carousel/js/owl.carousel.js')
		require('../imports/plugin/owl-carousel/js/owl.carousel.min.js')

		require('../imports/plugin/rs-plugin/css/settings.css');
		require('../imports/plugin/rs-plugin/js/jquery.themepunch.revolution.min.js');


		/***************************************************
				Scroll To Top While Page Change
		***************************************************/
		$(window).scrollTop(0);

		// Testimonial initialization
		$("#testimonial").owlCarousel({
			navigation : false,
			items : 1, //10 items above 1000px browser width
			itemsDesktop : [1000,1], //5 items between 1000px and 901px
			itemsDesktopSmall : [900,1], // betweem 900px and 601px
			itemsTablet: [600,1], //2 items between 600 and 0
			itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
			pagination : false,
			paginationNumbers: false
		});
		$(".next-arrow").click(function(){
			$("#testimonial").trigger('owl.next');
		})
		$(".prev-arrow").click(function(){
			$("#testimonial").trigger('owl.prev');
		})

		// Our Partner Carousel Initialization
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
			// Pagination
			pagination : true,
			paginationNumbers: false,
		});

		// Revolution Slider Initialization
		if($('.main-slider .tp-banner').length){
	
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
		}

		// Meta initializations
		document.title = this.data.result.name;
		if(PanoplyRouter.current().path == '/'){
			if($('meta[name=keywords]').length){
				$('meta[name=keywords]').attr('content', this.data.result.siteMetaKeyword);
			} else {
				let metakey = document.createElement('meta');
				metakey.name = "keywords"
				metakey.content = this.data.result.siteMetaKeyword
				document.getElementsByTagName('head')[0].appendChild(metakey)
			}
			if($('meta[name=description]').length){
				$('meta[name=description]').attr('content', this.data.result.siteMetaDesc);
			} else {
				let metadesc = document.createElement('meta');
				metadesc.name = "description"
				metadesc.content = this.data.result.siteMetaDesc
				document.getElementsByTagName('head')[0].appendChild(metadesc)
			}
		}
	},
	render() {
		let img = this.data.result && this.data.result.logoId?Images.findOne({ _id:this.data.result.logoId }):null
		let grid = 12;
		console.log(img)
		return (
			<div>
				{/*<FrontHeader module={this.props.mainHeaderRight} topHeaderLeft={this.props.topHeaderLeft} topHeaderRight={this.props.topHeaderRight} siteData={this.data.result} />*/}
				

				{/* FRONT HEADER START */}
					<header className='header'>
						<div className='container'>
							{
								this.props.topHeader && this.props.topHeader.length?
									<div className="top-head animated bounceInDown row">
											{
												this.props.topHeader.map((topHeader,index) => {
													if(topHeader.props.gridLength){
														grid = topHeader.props.gridLength;
													}else{
														grid = 12/this.props.topHeader.length;
													}
													return (
														<div key={index} className={"col-sm-"+grid}>
															{ topHeader }
														</div>
													);
												})
											}
									</div>
								:
									''
							}

							<div id="dt-mainHeader" className=" ">
								<div className="navbar-head animated fadeInUp">
									<div className="row">
										<div className="col-sm-4">
											<div className="logo animated fadeInLeft">
												{
													img ?
														<a href="javascript:void(0)" onClick={()=>PanoplyRouter.go('/')}><img src={img.url()} /></a>
													:
														<div>
															<a href="javascript:void(0)" onClick={()=>PanoplyRouter.go('/')}><img src="/logo.png" alt={this.data.result ? this.data.result.name:''}/></a>
														</div>
												}
											</div>
										</div>
										<div className = "col-sm-8">
											<div className="row">
									    		{
								      				this.props.mainHeader && this.props.mainHeader.length?
									      				this.props.mainHeader.map((mainHeader,index) => {
									      					if(mainHeader.props.gridLength){
									      						grid = mainHeader.props.gridLength;
									      					}else{
									      						grid = 8/this.props.mainHeader.length;
									      					}
									      					return (
									        					<div key={index} className={"col-sm-"+grid}>
									        						<div id="" className="main_nav pull-right animated fadeInRight">
									        							<button><span>Menu</span> <i className="fa fa-bars"></i></button>
									        							{mainHeader}
									        						</div>
									        					</div>
									        				);
									        			})
									        		:
									        			''
									      		}
									      	</div>
									    </div>
							  		</div>
						  		</div>
						  	</div>
						</div>
					</header>
				{/* FRONT HEADER END */}


				{/* FRONT SHOWCASE START */}
					{
						this.props.showcase && this.props.showcase.length?
							<section id="dt-showcase" className="container">
								<div className="top animated bounceInDown">
									<div className="row">
										{
											
											this.props.showcase.map((showcase,index) => {
												if(showcase.props.gridLength){
													grid = showcase.props.gridLength;
												}else{
													grid = 12/this.props.showcase.length;
												}
												return (
													<div key={index} className={"col-sm-"+grid}>
														{showcase}
													</div>
												);
											})
										}
						      </div>
					    	</div>
						  </section>
						:
							''
					}
				{/* FRONT SHOWCASE END */}




				{/* FRONT UTILITY START */}
					{
						this.props.utility && this.props.utility.length?
							<section id="dt-utility" className="">
								<div className="top animated bounceInDown">
									<div className="row">
						      			{
						      				
						      				this.props.utility.map((utility,index) => {
						      					if(utility.props.gridLength){
						      						grid = utility.props.gridLength;
						      					}else{
						      						grid = 12/this.props.utility.length;
						      					}
						        				return (
						        					<div key={index} className={"col-sm-"+grid}>
						        						{utility}
						        					</div>
						        				);
						        			})
						      			}
						      		</div>
					    		</div>
						  	</section>
						:
							''
					}
				{/* FRONT UTILITY END */}



				{/* FRONT FEATURE START */}
					{
						this.props.feature && this.props.feature.length?
							<section id="dt-feature" className="section-space">
								<div className="top animated bounceInDown">
									<div className="row">
						      			{
						      				
						      				this.props.feature.map((feature,index) => {
						      					if(feature.props.gridLength){
						      						grid = feature.props.gridLength;
						      					}else{
						      						grid = 12/this.props.feature.length;
						      					}
						        				return (
						        					<div key={index} className={"col-sm-"+grid}>
						        						{feature}
						        					</div>
						        				);
						        			})
						      			}
						      		</div>
					    		</div>
						  	</section>
						:
							''
					}
				{/* FRONT FEATURE END */}



				{/* FRONT MAIN TOP START */}
					{
						this.props.mainTop && this.props.mainTop.length?
							<div id="dt-mainTop" className="">
								<div className="top animated bounceInDown">
									<div className="row">
						      			{
						      				
						      				this.props.mainTop.map((mainTop,index) => {
						      					if(mainTop.props.gridLength){
						      						grid = mainTop.props.gridLength;
						      					}else{
						      						grid = 12/this.props.mainTop.length;
						      					}
						        				return (
						        					<div key={index} className={"col-sm-"+grid}>
						        						{mainTop}
						        					</div>
						        				);
						        			})
						      			}
						      		</div>
					    		</div>
						  	</div>
						:
							''
					}
				{/* FRONT MAIN TOP END */}



				<div className="container">
					<div className="row">
						<div className={_.isEmpty(this.props.sidebar) ? "col-sm-12 blog-main" : "col-sm-9 blog-main"}>
							{/* FRONT CONTENT TOP START */}
								{
									this.props.contentTop && this.props.contentTop.length?
										<section id="dt-contentTop" className="container">
											<div className="top animated bounceInDown">
												<div className="row">
									      			{
									      				
									      				this.props.contentTop.map((contentTop,index) => {
									      					if(contentTop.props.gridLength){
									      						grid = contentTop.props.gridLength;
									      					}else{
									      						grid = 12/this.props.contentTop.length;
									      					}
									        				return (
									        					<div key={index} className={"col-sm-"+grid}>
									        						{contentTop}
									        					</div>
									        				);
									        			})
									      			}
									      		</div>
								    		</div>
									  	</section>
									:
										''
								}
							{/* FRONT CONTENT TOP END */}


							{ this.props.content }


							{/* FRONT CONTENT BOTTOM START */}
								{
									this.props.contentBottom && this.props.contentBottom.length?
										<section id="dt-contentBottom" className="container">
											<div className="top animated bounceInDown">
												<div className="row">
									      			{
									      				
									      				this.props.contentBottom.map((contentBottom,index) => {
									      					if(contentBottom.props.gridLength){
									      						grid = contentBottom.props.gridLength;
									      					}else{
									      						grid = 12/this.props.contentBottom.length;
									      					}
									        				return (
									        					<div key={index} className={"col-sm-"+grid}>
									        						{contentBottom}
									        					</div>
									        				);
									        			})
									      			}
									      		</div>
								    		</div>
									  	</section>
									:
										''
								}
							{/* FRONT CONTENT BOTTOM END */}
						</div>
						<div className={_.isEmpty(this.props.sidebar) ? "":"col-sm-3 pull-right blog-sidebar"}>
							<SidePanel module={this.props.sidebar} />
						</div>

					</div>
				</div>

				


				{/* FRONT MAIN BOTTOM START */}
					{
						this.props.mainBottom && this.props.mainBottom.length?
							<section id="dt-mainBottom" className="container">
								<div className="top animated bounceInDown">
									<div className="row">
						      			{
						      				
						      				this.props.mainBottom.map((mainBottom,index) => {
						      					if(mainBottom.props.gridLength){
						      						grid = mainBottom.props.gridLength;
						      					}else{
						      						grid = 12/this.props.mainBottom.length;
						      					}
						        				return (
						        					<div key={index} className={"col-sm-"+grid}>
						        						{mainBottom}
						        					</div>
						        				);
						        			})
						      			}
						      		</div>
					    		</div>
						  	</section>
						:
							''
					}
				{/* FRONT MAIN BOTTOM END */}



				{/* FRONT EXTENSION START */}
					{
						this.props.extension && this.props.extension.length?
							<section id="dt-extension" className="">
								<div className="top animated bounceInDown">
									<div className="row">
						      			{
						      				
						      				this.props.extension.map((extension,index) => {
						      					if(extension.props.gridLength){
						      						grid = extension.props.gridLength;
						      					}else{
						      						grid = 12/this.props.extension.length;
						      					}
						        				return (
						        					<div key={index} className={"col-sm-"+grid}>
						        						{extension}
						        					</div>
						        				);
						        			})
						      			}
						      		</div>
					    		</div>
						  	</section>
						:
							''
					}
				{/* FRONT EXTENSION END */}



				{/* FRONT FULL WIDTH START */}
					{
						this.props.fullWidth && this.props.fullWidth.length?
							<section id="dt-fullWidth" className="">
								<div className="">
									<div className="row">
						      			{
						      				
						      				this.props.fullWidth.map((fullWidth,index) => {
						      					if(fullWidth.props.gridLength){
						      						grid = fullWidth.props.gridLength;
						      					}else{
						      						grid = 12/this.props.fullWidth.length;
						      					}
						        				return (
						        					<div key={index} className={"col-sm-"+grid}>
						        						{fullWidth}
						        					</div>
						        				);
						        			})
						      			}
						      		</div>
					    		</div>
						  	</section>
						:
							''
					}
				{/* FRONT FULL WIDTH END */}



				{/* FRONT BOTTOM START */}
					{
						this.props.bottom && this.props.bottom.length?
							<section id="dt-bottom" className="container">
								<div className="top animated bounceInDown">
									<div className="row">
						      			{
						      				
						      				this.props.bottom.map((bottom,index) => {
						      					if(bottom.props.gridLength){
						      						grid = bottom.props.gridLength;
						      					}else{
						      						grid = 12/this.props.bottom.length;
						      					}
						        				return (
						        					<div key={index} className={"col-sm-"+grid}>
						        						{bottom}
						        					</div>
						        				);
						        			})
						      			}
						      		</div>
					    		</div>
						  	</section>
						:
							''
					}
				{/* FRONT EXTENSION END */}


				{/* FRONT FOOTER START */}
					{
						this.props.mainFooter && this.props.mainFooter.length?
							<section id="dt-mainFooter" className="site-footer ftrbtm-link  mainFooter">
								<div className="container">
									<div className="row">
						      			{
							      				
						      				this.props.mainFooter.map((mainFooter,index) => {
						      						if(mainFooter.props.gridLength){
							      						grid = mainFooter.props.gridLength;
							      					}else{
							      						grid = 12/this.props.mainFooter.length;
							      					}
						        				return (
						        					<div key={index} className={"col-sm-"+grid}>
						        						{mainFooter}
						        					</div>
						        				);
						        			})
						      			}
						      			
						    		</div>
						    	</div>
						  	</section>
						:
							''
					}

					{
						this.props.copyright && this.props.copyright.length?
							<section id="dt-copyright" className="copyright footer-bottom">
								<div className="copyright-content container">
									<div className="row">
							    		{
					      				this.props.copyright.map((copyright,index) => {
					      					if(copyright.props.gridLength){
					      						grid = copyright.props.gridLength;
					      					}else{
					      						grid = 12/this.props.copyright.length;
					      					}
					        				return (
					        					<div key={index} className={"col-sm-"+grid}>
					        						{copyright}
					        					</div>
					        				);
					        			})
					      			}
							  		</div>
							  	</div>
						  </section>
						:
							''
					}
				{/* FRONT FOOTER END */}

				{/*<FrontFooter mainFooterLeft={this.props.mainFooterLeft} mainFooterRight={this.props.mainFooterRight} copyright={this.props.copyright} />*/}
				{/* -----------Back to Top ---------------> */}
				<a id="back-to-top" href="#" className="back-to-top" title="Click to return on the top page" data-toggle="tooltip" data-placement="left">
			    <span className="fa fa-chevron-up"></span>
				</a>
			</div>
		)
	}
});

ModuleOnly = createReactClass({
	render(){
		// 
		return(
			<div></div>
		)
	}
});


DefaultArticle = createReactClass({
	mixins:[ReactMeteorData],
	getMeteorData(){
		let handle = Meteor.subscribe('articlesFind')
		return {
			isReady: handle.ready(),
			article: PanoplyCMSCollections.Articles.findOne({_id: this.props.id, trash:false}),
			siteData: PanoplyCMSCollections.Sites.findOne()
		}
	},
	componentDidMount: function() {
		if(PanoplyRouter.current().path != '/'){
			if($('meta[name=keywords]').length){
				this.data.article ? this.data.article.metaKeyword != '' ? $('meta[name=keywords]').attr('content', this.data.article.metaKeyword) : this.data.siteData && this.data.siteData.siteMetaKeyword != '' ? $('meta[name=keywords]').attr('content', this.data.siteData.siteMetaKeyword) :'':'';
			} else {
				let metakey = document.createElement('meta');
				metakey.name = "keywords"
				metakey.content = this.data.article ? this.data.article.metaKeyword ? this.data.article.metaKeyword :this.data.siteData && this.data.siteData.siteMetaKeyword ? this.data.siteData.siteMetaKeyword:'':''
				document.getElementsByTagName('head')[0].appendChild(metakey)
			}
			if($('meta[name=description]').length){
				this.data.article ? this.data.article.metaDescription != '' ? $('meta[name=description]').attr('content', this.data.article.metaDescription) : this.data.siteData && this.data.siteData.siteMetaDesc != '' ? $('meta[name=description]').attr('content', this.data.siteData.siteMetaDesc) : '' :'';
			} else {
				let metadesc = document.createElement('meta');
				metadesc.name = "description"
				metadesc.content = this.data.article ? this.data.article.metaDescription ? this.data.article.metaDescription:this.data.siteData && this.data.siteData.siteMetaDesc ? this.data.siteData.siteMetaDesc :'':''
				document.getElementsByTagName('head')[0].appendChild(metadesc)
			}
		}
	},
	componentDidUpdate: function() {
		if(PanoplyRouter.current().path != '/'){
			if($('meta[name=keywords]').length){
				this.data.article ? this.data.article.metaKeyword != '' ? $('meta[name=keywords]').attr('content', this.data.article.metaKeyword) : this.data.siteData && this.data.siteData.siteMetaKeyword != '' ? $('meta[name=keywords]').attr('content', this.data.siteData.siteMetaKeyword) :'':'';
			} else {
				let metakey = document.createElement('meta');
				metakey.name = "keywords"
				metakey.content = this.data.article && this.data.article.metaKeyword ? this.data.article.metaKeyword :this.data.siteData && this.data.siteData.siteMetaKeyword ? this.data.siteData.siteMetaKeyword:''
				document.getElementsByTagName('head')[0].appendChild(metakey)
			}
			if($('meta[name=description]').length){
				this.data.article && this.data.article.metaDescription != '' ? $('meta[name=description]').attr('content', this.data.article.metaDescription) : this.data.siteData && this.data.siteData.siteMetaDesc != '' ? $('meta[name=description]').attr('content', this.data.siteData.siteMetaDesc) : '' ;
			} else {
				let metadesc = document.createElement('meta');
				metadesc.name = "description"
				metadesc.content = this.data.article && this.data.article.metaDescription ? this.data.article.metaDescription:this.data.siteData && this.data.siteData.siteMetaDesc ? this.data.siteData.siteMetaDesc :''
				document.getElementsByTagName('head')[0].appendChild(metadesc)
			}
		}
	},
	render(){
		// 
		if(this.data.article){
			if(!_.has(this.data.article, "_id") && this.data.isReady){
				return <LoadingSpinner />;
			}
			return <ArticleFullView articles={this.data.article} modules={this.props.modules} />
		}else{
			return (
				<div className="col-md-3 col-md-offset-5">
					<div className="alert alert-danger"><strong>Sorry!</strong> Article not found.</div>
				</div>
			);
		}
	}
})

ArticleFullView = data => {
	let userData = Meteor.users.findOne({_id: data.ownerId})
	return (
		<div>
			<div className="">
				<div className="blog-post-header">
					<h3 className="blog-post-title">{data.articles && data.articles.title ? data.articles.title.toUpperCase() :''}</h3>
					<ul className="blog-post-meta">
						<li>
							<i className="fa fa-calendar"></i>  {data.articles && data.articles.createdAt ? new Date(data.articles.createdAt).toDateString() :''} {userData && userData.profile && userData.profile.username ? 'by' :''} <strong>{userData && userData.profile && userData.profile.username ? userData.profile.username :''}</strong>
						</li>
					</ul>
					<br/>
					<div dangerouslySetInnerHTML={{__html: data.articles && data.articles.article ? data.articles.article :''}} />
					<ShowTags tags={data.articles && data.articles.tags ? data.articles.tags :''} />
				</div>
			</div>
		</div>
	);
}

DefaultCategory = createReactClass({
	mixins:[ReactMeteorData],
	getMeteorData(){
		let sub = Meteor.subscribe('articlesFind');
		let category = Meteor.subscribe('Categories', this.props.id);
		
		let articles =[];
		if(PanoplyRouter.current().path == '/' || PanoplyRouter.current().path == '/home'){
			articles = PanoplyCMSCollections.Articles.find({category: this.props.id, trash:false},{sort:{createdAt: -1},limit: 3}).fetch()
		}else{
			articles = PanoplyCMSCollections.Articles.find({category: this.props.id, trash:false}).fetch();
		}
		return {
			isReady: sub.ready() && category.ready(),
			articles: articles,
			category: PanoplyCMSCollections.Categories.findOne({_id: this.props.id, trash:false})
		}
	},
	render(){

		if(this.data.articles && this.data.articles.length){
			if(!this.data.articles.length && this.data.isReady){
				return <LoadingSpinner />;
			}
			let grid = 12;
			if(this.data.category && this.data.category.column){
				grid = 12 / this.data.category.column;
			}
			return (
				<div className="row">
					{
						this.data.articles.map(a => {
							a.grid = grid
							return <ArticleListView key={a._id} {...a}/>
						})
					}
				</div>
			)
		}else{
			return (
				<div className="col-md-3 col-md-offset-5">
					<div className="alert alert-danger"><strong>Sorry!</strong> Article not found.</div>
				</div>
			);
		}
	}
})

ArticleListView = data => {
	let userData = Meteor.users.findOne({_id: data.ownerId})

	let route = PanoplyRouter.current().route.path.split('/')

	alias = ''
	if(route[route.length - 1] != ''){
		alias = PanoplyRouter.current().route.path+'/'+data.alias
	} else {
		alias = PanoplyRouter.current().route.path+data.alias
	}
	let regex = /<img.*?src=\"(.*?)\"/;
	let url = data.article?regex.exec(data.article)[1]:'';
	let home = false;
	if(PanoplyRouter.current().path == '/' || PanoplyRouter.current().path == '/home'){
		home = true;
	}else{
		home = false;
	}
	return (
		<div key={data._id} className={home?"blog-box animated fadeInUp col-md-4":"blog-box animated fadeInUp col-md-"+data.grid}>
			{
				url!=''?
					<div className="blog-image">
						<img src={url} className="img-responsive border_radius" />
					</div>
				:
					''
			}
			<div className="news_box border_radius">
				<h4><a href="#">{data && data.title ? data.title.toUpperCase() :''}</a></h4>
				<ul className="commment">
					<li>
						<a href="#">
							<i className="fa fa-calendar"></i>
							{
								data && data.createdAt ? 
									new Date(data.createdAt).toDateString() 
								:
									''
							} 
							{
								userData && userData.profile && userData.profile.username ?
									' by ' 
								: 
									''
							}  
							<strong>
								{
									userData && userData.profile && userData.profile.username ? 
										userData.profile.username 
									:
										''
								}
							</strong>
						</a>
					</li>
				</ul>
				<p dangerouslySetInnerHTML={{__html:data && data.article ? data.article.replace(/<img[^>]*>/g,"").substr(0, 300)+'...':''}} />
				<a href={alias} className="readmore">Read More...</a>
			</div>
		</div>
	);
}

ShowTags = createReactClass({
	mixins:[ReactMeteorData],
	getMeteorData(){
		return {
			tags: PanoplyCMSCollections.Tags.find({}).fetch()
		}
	},
	render: function(){
		return (
			<div className="tag">
				{
					this.props.tags ?
						this.props.tags.map(tag => {
							let t = _.find(this.data.tags, t => { return t._id == tag })
							if(t)
								return <span key={tag}><a className="label label-info"> {t.title} </a></span>
							else return ''
						})
					:''
				}
			</div>
		)
	}
})

class LoadingSpinner extends Component {
	render(){
		return(
			<div className="loader">
	      <div className="sk-folding-cube">
	        <div className="sk-cube1 sk-cube"></div>
	        <div className="sk-cube2 sk-cube"></div>
	        <div className="sk-cube4 sk-cube"></div>
	        <div className="sk-cube3 sk-cube"></div>
	      </div>
	   </div>
		);
	}

}