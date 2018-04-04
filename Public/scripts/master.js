// JavaScript Document
// Author Name: Saptarang
// Themeforest: http://themeforest.net/user/saptarang?ref=saptarang
// Creation Date: 15 Nov 2016
// Created for Foxy App Landing Page

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

// load DOM
( function ( $ ) {
    'use strict';
		
	// Main Slider
	$('.carousel').carousel({
		pause: 'none',
		interval: 7000 // set value to change speed
	})
	
	// equal height
	var equalheight, topPostion, currentDiv, rowDivs;
	equalheight = function(container){
		var currentTallest = 0,
		currentRowStart = 0,
		rowDivs = new Array(),
		$el,
		topPosition = 0;
		$(container).each(function() {
		
			$el = $(this);
			$($el).height('auto')
			topPostion = $el.position().top;
			
			if (currentRowStart != topPostion) {
				for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
				rowDivs[currentDiv].height(currentTallest);
			}
				rowDivs.length = 0; // empty the array
				currentRowStart = topPostion;
				currentTallest = $el.height();
				rowDivs.push($el);
			} else {
				rowDivs.push($el);
				currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
			}
			for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
				rowDivs[currentDiv].height(currentTallest);
			}
		});
	} // end equalheights
	
	/* ======  FUNCTIONS  ========= */
	
	// full height for slider
	function sliderHt() {
		var winH = $(window).innerHeight();
		$('#homeSlider').css("height", winH);
	}
	// carousel indicator reposition
	function carIndiRepos() {
		var winH = $('#homeSlider').innerHeight();
		var carH = $('#homeSlider .carousel-indicators').height();
		$('#homeSlider .carousel-indicators').css('margin-top', '-'+carH/2+'px');
		$('#homeSlider .carousel-indicators').css('top', winH/2+'px');	
	}
	// .btn hover effect
	function btnHover() {
		$('.btn').each(function() {
			var thisBtn = $(this);
			if( thisBtn.find('i') ) {
				var thisSpan = thisBtn.find('i').clone();
				thisBtn.append(thisSpan.addClass('hover'));
			}
		});
	}
	// load video
	function loadVid() {
		var vidUrl = $('#video a.icon').attr('href');
		// add video
		var vidFrame = '<iframe width="" height="" src="'+vidUrl+'?autoplay=1&loop=1&rel=0?wmode=xxxx" frameborder="0" allowfullscreen></iframe>';
		$('#video .videoBox').append(vidFrame);
		
	}
	
	// auto vertical center element
	function autoVcnter(elm) {
		var elmH = $(elm).innerHeight();
		$(elm).css("margin-top", "-"+elmH/2+'px');
	}
	
	// video re position for mobile devices
	function vidRePos() {
		var winW = $('body').width();
		if( winW <= 850 ) {
			var getTopMargin = $('#video .textBox').height();
			$('#video .videoBox').css('margin-top', getTopMargin+'px');	
		} else {
			$('#video .videoBox').css('margin-top', '0px');
		}
	}
	
	// Owl carousel for gallery and testimonial
	$('#contentBox .owl-carousel').owlCarousel({
		loop:true,
		rewind: false,
		margin:0,
		animateIn: 'fadeInLeft',
		animateOut: 'fadeOutDown',
		autoplay: true,
		autoplayTimeout: 5000, // set value to change speed
		autoplayHoverPause: true,
		nav: true,
		navText : ["<img class='svg' src='images/svg/arrow-left-w.svg' onerror='this.src='arrow-left-w.png' alt='Prev' />","<img class='svg' src='images/svg/arrow-right-w.svg' onerror='this.src='arrow-right-w.png'' alt='Next' />"],
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			600:{
				items:1,
				nav:true
			},
			1000:{
				items:1,
				nav:true
			}
		}
	});
	
	$('#testimonial .owl-carousel').owlCarousel({
		center: true,
		loop:true,
		rewind: false,
		margin:0,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut',
		autoplay: true,
		autoplayTimeout: 5000, // set value to change speed
		autoplayHoverPause: true,
		dots: false,
		nav: true,
		navText : ["<img class='svg' src='images/svg/arrow-left-w.svg' onerror='this.src='arrow-left-w.png' alt='Prev' />","<img class='svg' src='images/svg/arrow-right-w.svg' onerror='this.src='arrow-right-w.png'' alt='Next' />"],
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			600:{
				items:1,
				nav:true
			},
			1000:{
				items:1,
				nav:true
			}
		}
	});
	
	// Gallery setting for fix width and wide layout
	
	var fixWidth = $('body').hasClass('fixWidth');
	if(fixWidth) {
	
		$('#gallery .owl-carousel').owlCarousel({
			center: true,
			loop:true,
			rewind: false,
			margin: 0,
			autoplay: true,
			autoplayTimeout: 5000, // set value to change speed
			autoplayHoverPause: true,
			responsiveBaseElement:window,
			dots: false,
			nav: true,
			navText : ["<img class='svg' src='images/svg/arrow-left-w.svg' onerror='this.src='arrow-left-w.png' alt='Prev' />","<img class='svg' src='images/svg/arrow-right-w.svg' onerror='this.src='arrow-right-w.png'' alt='Next' />"],
			responsiveClass:true,
			responsive:{
				0:{
					items:2,
					nav:true
				},
				600:{
					items:3,
					nav:false
				},
				1000:{
					items:4,
					nav:true
				},
				1201:{
					items:4,
					nav:true
				}
			}
		});
		
	} else {
	
		$('#gallery .owl-carousel').owlCarousel({
			center: true,
			loop:true,
			rewind: false,
			margin: 0,
			autoplay: true,
			autoplayTimeout: 5000, // set value to change speed
			autoplayHoverPause: true,
			responsiveBaseElement:window,
			dots: false,
			nav: true,
			navText : ["<img class='svg' src='images/svg/arrow-left-w.svg' onerror='this.src='arrow-left-w.png' alt='Prev' />","<img class='svg' src='images/svg/arrow-right-w.svg' onerror='this.src='arrow-right-w.png'' alt='Next' />"],
			responsiveClass:true,
			responsive:{
				0:{
					items:2,
					nav:true
				},
				600:{
					items:3,
					nav:false
				},
				1000:{
					items:4,
					nav:true
				},
				1400:{
					items:6,
					nav:true
				}
			}
		});
	}
	
	/* ==== Window Load ====== */
	$(window).load(function() {
		
		//Preloader
		var preLodr = $('#preloader');
		if( preLodr ) {
			$('#preloader').fadeOut();
			$('.loading').delay(350).fadeOut('slow');  
			$('body').delay(350).css({'overflow':'visible'});
		}
		
		// Equal Heights
		if( equalheight ) {
			equalheight('.equal, .member, #testimonial .owl-item .item');
		}
		
		// full height for slider
		var winW = $('body').width();
		if( winW >= 1024 ) {
			sliderHt();
		}
		
		// Collapse menu for small devices
		if (winW <= 767) {
			// smooth page Scroll
			$('nav a[href^=#], a.top[href^=#], a.smooth[href^=#]').on("click", function(event) {
				event.preventDefault();
				$('html,body').animate({
				scrollTop: $(this.hash).offset().top - 0},
				1000);	
			});
		} else {
			// smooth page Scroll
			$('nav a[href^=#], a.top[href^=#], a.smooth[href^=#]').on("click", function(event) {
				event.preventDefault();
				$('html,body').animate({
				scrollTop: $(this.hash).offset().top - 0},
				1000);	
			});
		}
		
		// carousel indicator reposition
		var carI = $('#homeSlider .carousel-indicators').length;
		if( carI > 0 ) {
			carIndiRepos();
		}
		
		// .btn hover effect
		var btnHovr = $('.btn');
		if( btnHovr ) {
			btnHover();
		}
		
		// input focus class
		var contactForm = $('#contact');
		if( contactForm ) {
			$('#contact .form-control').on('focus', function() {
				$('#contact .form-group').removeClass('active');
				$(this).parent('.form-group').addClass('active');	
			});
			
			$('#contact .form-control').on('blur', function() {
				$('#contact .form-group').removeClass('active');	
			});
		}
		
		// auto vertical center video button
		autoVcnter('.textBox');
		
		// load video event
		var vidUrl = $('#video a.icon').attr('href');
		if( vidUrl ) {
			$('#video a.icon').on("click", function(event) {
				event.preventDefault();
				if( $('#video').hasClass('vidLoaded') ) {
					$('#video').removeClass('vidLoaded');
					setTimeout( function() { $('#video .videoBox').html(''); }, 800 );
				} else {
					$('#video').addClass('vidLoaded');
					loadVid();
				}
			});
		}
		
		//video re position for mobile devices
		vidRePos();
		
	});
	
	/* ==== Window Resize ====== */
	$(window).resize(function(){
		
		// Equal Heights
		if( equalheight ) {
			equalheight('.equal, .member, #testimonial .owl-item .item');
		}
		
		// slider height
		var winW = $('body').width();
		if( winW >= 1024 ) {
			sliderHt();
		}
		
		// carousel Reposition
		var carI = $('#homeSlider .carousel-indicators').length;
		if( carI > 0 ) {
			carIndiRepos();
		}
		
		// auto vertical center video button
		autoVcnter('.textBox');
		
		// video re position for mobile devices
		vidRePos();
		
	});
	
	/* ==== Window Scroll ====== */
	$(window).on('scroll', function() {
		// Top Arrow
		if ($(window).scrollTop() > 1000) { 
			$('a.top').fadeIn('slow'); 
		} else { 
			$('a.top').fadeOut('slow');
		}
	});	
	
	// Scroll spy for active menu
	$('body').scrollspy({ target: '#menu' });
  
	// WOW - animated content
	var wow = new WOW(
	  {
	  boxClass:     'wow',      // default
	  animateClass: 'animated', // default
	  offset:       150,          // default
	  mobile:       true,       // set false if you dont want animation on mobile phones
	  live:         true        // default
	}
	)
	wow.init();
	
	// Navigation Menu 
	$('#nav-expander').on('click',function(e){
		e.preventDefault();
		$('body').toggleClass('nav-expanded');
	});
	$('#nav-close, .main-menu > li > a').on('click',function(e){
		e.preventDefault();
		$('body').removeClass('nav-expanded');
	});
	
	// tooltip
	$('[data-toggle="tooltip"]').tooltip();
	
	// Animation for slider text and image
    function doAnimations( elems ) {
        //Cache the animationend event in a variable
        var animEndEv = 'webkitAnimationEnd animationend';
        
        elems.each(function () {
            var $this = $(this),
                $animationType = $this.data('animation');
            $this.addClass($animationType).one(animEndEv, function () {
                $this.removeClass($animationType);
            });
        });
    }
    
    //Variables on page load 
    var $myCarousel = $('#homeSlider'),
    $firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");
        
    $myCarousel.carousel();
    
    doAnimations($firstAnimatingElems);
    
    $myCarousel.carousel('pause');
    
    //Other slides to be animated on carousel slide event 
    $myCarousel.on('slide.bs.carousel', function (e) {
        var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
        doAnimations($animatingElems);
    });  
	
	// Image Lightbox
	$("a[data-rel^='prettyPhoto']").prettyPhoto({overlay_gallery: true});
				
	// Input placeholder in IE
	$('input, textarea').placeholder();
	
	// stellar js for parallax
	if( !isMobile.any() ){
        $(window).stellar({
			horizontalScrolling: false,
			responsive: true
		});
    }
	
	//counter
	$('.stat').waypoint(function() {
		
		// formatter function
		var ranges = [
		  { divider: 1e9 , suffix: 'G' },
		  { divider: 1e6 , suffix: 'M' },
		  { divider: 1e3 , suffix: 'k' }
		];
		
		function formatNumber(n) {
		  for (var i = 0; i < ranges.length; i++) {
			if (n >= ranges[i].divider) {
			  return (n / ranges[i].divider).toString() + ranges[i].suffix;
			}
		  }
		  return n.toString();
		}
		
		// stats
		$('.timer').removeClass('statEnd');
		
	  	$('.timer').countTo({
			refreshInterval: 50,
			formatter: function (value, options) {
			  return value.toFixed(options.decimals);
			},
			onComplete: function (value) {
			  console.debug(this);
			  
			  $('.timer').each(function() {
				  var statVal = $(this).attr('data-to');
			  	  $(this).addClass('statEnd').html( formatNumber(statVal) );
			  });
			  
			//$('#stat').waypoint(function (direction){
//				this.destroy();
//			});
			  
			}
		});
			
		var lightLayout = $('body').hasClass('light');
		if(lightLayout) {
			
			// easy pie chart
			$('.chart').easyPieChart({
				scaleColor: false,
				lineWidth: 1,
				barColor: '#6961ff',
				trackColor: '#f0efff',
				size: 133
			});
		} else {
			
			// easy pie chart
			$('.chart').easyPieChart({
				scaleColor: false,
				lineWidth: 5,
				barColor: '#6961ff',
				trackColor: '#f0efff',
				size: 133
			});
			
		}
		
	},  { offset: '50%' });
	
	// Accordion Symbols
	$('.panel-title a').on("click", (function() {
		var thisParent = $(this).parent().parent().next();
		if(thisParent.hasClass('in')) {
			$(this).parent().removeClass('active');
			$(this).parent().parent().parent().removeClass('active');
		} else {
			$('.panel-title').removeClass('active');
			$('.panel-default').removeClass('active');
			
			$(this).parent().addClass('active');
			$(this).parent().parent().parent().addClass('active');
		}
	}));
				
	/* SET SUBSCRIBE FORM SUCCESS MESSAGE */
	var sub_submitMessage = "You have subscribed successfully.";
	var sub_successBoxColor = "00c853"; // Background color for the success box
	var sub_successBoxBorderStyle = "solid"; // Border Style  -  Example: solid, dotted, dashed, double
	var sub_successBox_Border_Color = "00c853"; // Border color for success box
	var sub_textColor = "fff"; // text color for success box
	
	// Subscription Form Validation
	$("#subscribeForm input").on("focus", (function() {
		$(this).prev("label").hide();
		$(this).prev().prev("label").hide();	 		 	
	}));
	   
	$("#subscribeForm").submit(function() {
		// validate and process form here
		var emailSubscribe = $("#emailSubscribe").val();
		if (emailSubscribe == "") {
			$('#emailSubscribe').addClass('reqfld');
			$('<span class="error" style="display:none; color: #F30;"><i class="fa fa-exclamation-circle"></i></span>').insertBefore('#emailSubscribe').fadeIn(400);
			$("#emailSubscribe").on("focus", (function() {  $('#emailSubscribe').removeClass('reqfld');  $(this).prev().fadeOut(400);}));
			return false;
		} else if(emailSubscribe.indexOf('@') == -1 || emailSubscribe.indexOf('.') == -1) {
			$('#emailSubscribe').addClass('reqfld');
			$('<span class="error" style="display:none;  color:#f30">Invalid!</span>').insertBefore('#emailSubscribe').fadeIn(400);
			$("#emailSubscribe").on("focus", (function() {  $('#emailSubscribe').removeClass('reqfld');  $(this).prev().fadeOut(400);}));
			return false;
		}
		
		var sub_security = $("#sub-security").val();
		var dataString = '&emailSubscribe=' + emailSubscribe + '&sub-security=' + sub_security;
		
		$.ajax({
		type: "POST",
		url: "form/subscribe.php",
		data: dataString,
		success: function() {
		  $("#subscribeForm .form-row").hide();
		  $('#subscribeForm').append("<div id='subscribesuccess' class='alert alert-success' style='border:#"+sub_successBox_Border_Color+" 1px "+sub_successBoxBorderStyle+"; background:#"+sub_successBoxColor+";' ></div>");
		  $('#subscribesuccess').html("<h5 class='text-center' style='color:#"+sub_textColor+"; margin: 0'><i class='fa fa-check-circle'></i> "+sub_submitMessage+"</h5>")
		  .hide().delay(300)
		  .fadeIn(1500);
		  
		  $('#subscribeForm .form-row').delay(6000).slideUp('fast');
		  
		}
		});
		return false;
	});
	

	// Slider Validation
	$( "#cfSlide" ).slider({
		value:1,
		min: 1,
		max: 100,
		step: 1,
		slide: function( event, ui ) {
			$( "#cfsVal" ).val( ui.value );
			var sval = $( "#cfsVal" ).val();
			if( sval == 100 ) {
				$('#cfSubmit').removeAttr("disabled");
			} else {
				$('#cfSubmit').attr('disabled', 'disabled');
			}
		}
	});
	
	// Contact form
	$("#cfSubmit").on("click", function() { 
		var proceed = true;
		var output = '';
		$("#cForm input[required], #cForm textarea[required]").each(function(){
			$(this).css('border-color',''); 
			if( !$.trim( $(this).val() ) ){ 
				$(this).css('border-color','red');  
				proceed = false;
			}
			var email_reg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; 
			if( $(this).attr("type")=="email" && !email_reg.test( $.trim( $(this).val() ) ) ){
				$(this).css('border-color','red'); 
				proceed = false;              
			}   
		});
		if( proceed ){
			var post_data = {
			'name'     		: $('input[name=name]').val(), 
			'email'    		: $('input[name=email]').val(),
			'message'       : $('textarea[name=message]').val(),
			'domain'		: $(location).attr('href')
		}
		
		//Ajax post data to server
		$.post('form/contact.php', post_data, function(response){  
			if(response.type == 'error'){ 
				//load json data from server and output message     
				output = '<div class="alert alert-warning alert-dismissible"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+response.text+'</div>';
			}else{
				output = '<div class="alert alert-success alert-dismissible"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+response.text+'</div>';
				//reset values in all input fields
				$("#cForm  input[required=true], #cForm textarea[required=true]").val(''); 
				$(".cfs_response").slideUp(); //hide form after success
			}
				$(".cfs_response").hide().html(output).slideDown();
			}, 'json');
		}
	});
	
	//reset previously set border colors and hide all message on .keyup()
	$("#cForm  input[required=true], #cForm textarea[required=true]").keyup(function() { 
		$(this).css('border-color',''); 
		$(".cfs_response").slideUp();
	});	
		
} ( jQuery ) ); // end of jQuery dom

