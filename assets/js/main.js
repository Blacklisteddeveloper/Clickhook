//# sourceURL=pen.js

/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/EUTi53 by Paul Irish
 *
 * Only fires on body classes that match. If a body class contains a dash,
 * replace the dash with an underscore when adding it to the object below.
 *
 * .noConflict()
 * The routing is enclosed within an anonymous function so that you can
 * always reference jQuery with $, even when in .noConflict() mode.
 * ======================================================================== */

(function($) {

	// Use this variable to set up the common and page specific functions. If you
	// rename this variable, you will also need to rename the namespace below.
	var Hyperdrive = {
		// All pages
		'common': {
			init: function() {
			
			var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};
			var hamburgers = document.querySelectorAll(".hamburger");
			if (hamburgers.length > 0) {
				forEach(hamburgers, function(hamburger) {
				hamburger.addEventListener("click", function() {
				 jQuery(".hamburgerbox2").toggleClass('active');
				jQuery(".hamburgerbox").toggleClass('active');
				 
				 jQuery(".navbar").toggleClass('bounceOutRight').toggleClass('bounceInRight');
				 jQuery(".boximg").toggleClass('bounceOutUp').toggleClass('bounceInDown');
				 
				 jQuery(".getdemo").toggleClass('hide');
				 jQuery(".bgbackground").toggleClass('active');
				 
				 this.classList.toggle("is-active");

				}, false);
			  });
			}


			!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function c(c,d){var f,e=this;e.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(c),appendDots:a(c),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(a,b){return'<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">'+(b+1)+"</button>"},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!1,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},e.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},a.extend(e,e.initials),e.activeBreakpoint=null,e.animType=null,e.animProp=null,e.breakpoints=[],e.breakpointSettings=[],e.cssTransitions=!1,e.hidden="hidden",e.paused=!1,e.positionProp=null,e.respondTo=null,e.rowCount=1,e.shouldClick=!0,e.$slider=a(c),e.$slidesCache=null,e.transformType=null,e.transitionType=null,e.visibilityChange="visibilitychange",e.windowWidth=0,e.windowTimer=null,f=a(c).data("slick")||{},e.options=a.extend({},e.defaults,f,d),e.currentSlide=e.options.initialSlide,e.originalSettings=e.options,"undefined"!=typeof document.mozHidden?(e.hidden="mozHidden",e.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(e.hidden="webkitHidden",e.visibilityChange="webkitvisibilitychange"),e.autoPlay=a.proxy(e.autoPlay,e),e.autoPlayClear=a.proxy(e.autoPlayClear,e),e.changeSlide=a.proxy(e.changeSlide,e),e.clickHandler=a.proxy(e.clickHandler,e),e.selectHandler=a.proxy(e.selectHandler,e),e.setPosition=a.proxy(e.setPosition,e),e.swipeHandler=a.proxy(e.swipeHandler,e),e.dragHandler=a.proxy(e.dragHandler,e),e.keyHandler=a.proxy(e.keyHandler,e),e.autoPlayIterator=a.proxy(e.autoPlayIterator,e),e.instanceUid=b++,e.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,e.registerBreakpoints(),e.init(!0),e.checkResponsive(!0)}var b=0;return c}(),b.prototype.addSlide=b.prototype.slickAdd=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.append(e.$slides),e.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({height:b},a.options.speed)}},b.prototype.animateSlide=function(b,c){var d={},e=this;e.animateHeight(),e.options.rtl===!0&&e.options.vertical===!1&&(b=-b),e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?(e.options.rtl===!0&&(e.currentLeft=-e.currentLeft),a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){a=Math.ceil(a),e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}})):(e.applyTransition(),b=Math.ceil(b),e.options.vertical===!1?d[e.animType]="translate3d("+b+"px, 0px, 0px)":d[e.animType]="translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.asNavFor=function(b){var c=this,d=c.options.asNavFor;d&&null!==d&&(d=a(d).not(c.$slider)),null!==d&&"object"==typeof d&&d.each(function(){var c=a(this).slick("getSlick");c.unslicked||c.slideHandler(b,!0)})},b.prototype.applyTransition=function(a){var b=this,c={};b.options.fade===!1?c[b.transitionType]=b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:c[b.transitionType]="opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer),a.slideCount>a.options.slidesToShow&&a.paused!==!0&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this;a.options.infinite===!1?1===a.direction?(a.currentSlide+1===a.slideCount-1&&(a.direction=0),a.slideHandler(a.currentSlide+a.options.slidesToScroll)):(a.currentSlide-1===0&&(a.direction=1),a.slideHandler(a.currentSlide-a.options.slidesToScroll)):a.slideHandler(a.currentSlide+a.options.slidesToScroll)},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&(b.$prevArrow=a(b.options.prevArrow).addClass("slick-arrow"),b.$nextArrow=a(b.options.nextArrow).addClass("slick-arrow"),b.slideCount>b.options.slidesToShow?(b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.prependTo(b.options.appendArrows),b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.appendTo(b.options.appendArrows),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},b.prototype.buildDots=function(){var c,d,b=this;if(b.options.dots===!0&&b.slideCount>b.options.slidesToShow){for(d='<ul class="'+b.options.dotsClass+'">',c=0;c<=b.getDotCount();c+=1)d+="<li>"+b.options.customPaging.call(this,b,c)+"</li>";d+="</ul>",b.$dots=a(d).appendTo(b.options.appendDots),b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(b.options.slide+":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slides.each(function(b,c){a(c).attr("data-slick-index",b).data("originalStyling",a(c).attr("style")||"")}),b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),(b.options.centerMode===!0||b.options.swipeToSlide===!0)&&(b.options.slidesToScroll=1),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.updateDots(),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.buildRows=function(){var b,c,d,e,f,g,h,a=this;if(e=document.createDocumentFragment(),g=a.$slider.children(),a.options.rows>1){for(h=a.options.slidesPerRow*a.options.rows,f=Math.ceil(g.length/h),b=0;f>b;b++){var i=document.createElement("div");for(c=0;c<a.options.rows;c++){var j=document.createElement("div");for(d=0;d<a.options.slidesPerRow;d++){var k=b*h+(c*a.options.slidesPerRow+d);g.get(k)&&j.appendChild(g.get(k))}i.appendChild(j)}e.appendChild(i)}a.$slider.html(e),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},b.prototype.checkResponsive=function(b,c){var e,f,g,d=this,h=!1,i=d.$slider.width(),j=window.innerWidth||a(window).width();if("window"===d.respondTo?g=j:"slider"===d.respondTo?g=i:"min"===d.respondTo&&(g=Math.min(j,i)),d.options.responsive&&d.options.responsive.length&&null!==d.options.responsive){f=null;for(e in d.breakpoints)d.breakpoints.hasOwnProperty(e)&&(d.originalSettings.mobileFirst===!1?g<d.breakpoints[e]&&(f=d.breakpoints[e]):g>d.breakpoints[e]&&(f=d.breakpoints[e]));null!==f?null!==d.activeBreakpoint?(f!==d.activeBreakpoint||c)&&(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):null!==d.activeBreakpoint&&(d.activeBreakpoint=null,d.options=d.originalSettings,b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b),h=f),b||h===!1||d.$slider.trigger("breakpoint",[d,h])}},b.prototype.changeSlide=function(b,c){var f,g,h,d=this,e=a(b.target);switch(e.is("a")&&b.preventDefault(),e.is("li")||(e=e.closest("li")),h=d.slideCount%d.options.slidesToScroll!==0,f=h?0:(d.slideCount-d.currentSlide)%d.options.slidesToScroll,b.data.message){case"previous":g=0===f?d.options.slidesToScroll:d.options.slidesToShow-f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide-g,!1,c);break;case"next":g=0===f?d.options.slidesToScroll:f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide+g,!1,c);break;case"index":var i=0===b.data.index?0:b.data.index||e.index()*d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i),!1,c),e.children().trigger("focus");break;default:return}},b.prototype.checkNavigable=function(a){var c,d,b=this;if(c=b.getNavigableIndexes(),d=0,a>c[c.length-1])a=c[c.length-1];else for(var e in c){if(a<c[e]){a=d;break}d=c[e]}return a},b.prototype.cleanUpEvents=function(){var b=this;b.options.dots&&null!==b.$dots&&(a("li",b.$dots).off("click.slick",b.changeSlide),b.options.pauseOnDotsHover===!0&&b.options.autoplay===!0&&a("li",b.$dots).off("mouseenter.slick",a.proxy(b.setPaused,b,!0)).off("mouseleave.slick",a.proxy(b.setPaused,b,!1))),b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow&&b.$prevArrow.off("click.slick",b.changeSlide),b.$nextArrow&&b.$nextArrow.off("click.slick",b.changeSlide)),b.$list.off("touchstart.slick mousedown.slick",b.swipeHandler),b.$list.off("touchmove.slick mousemove.slick",b.swipeHandler),b.$list.off("touchend.slick mouseup.slick",b.swipeHandler),b.$list.off("touchcancel.slick mouseleave.slick",b.swipeHandler),b.$list.off("click.slick",b.clickHandler),a(document).off(b.visibilityChange,b.visibility),b.$list.off("mouseenter.slick",a.proxy(b.setPaused,b,!0)),b.$list.off("mouseleave.slick",a.proxy(b.setPaused,b,!1)),b.options.accessibility===!0&&b.$list.off("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().off("click.slick",b.selectHandler),a(window).off("orientationchange.slick.slick-"+b.instanceUid,b.orientationChange),a(window).off("resize.slick.slick-"+b.instanceUid,b.resize),a("[draggable!=true]",b.$slideTrack).off("dragstart",b.preventDefault),a(window).off("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).off("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.cleanUpRows=function(){var b,a=this;a.options.rows>1&&(b=a.$slides.children().children(),b.removeAttr("style"),a.$slider.html(b))},b.prototype.clickHandler=function(a){var b=this;b.shouldClick===!1&&(a.stopImmediatePropagation(),a.stopPropagation(),a.preventDefault())},b.prototype.destroy=function(b){var c=this;c.autoPlayClear(),c.touchObject={},c.cleanUpEvents(),a(".slick-cloned",c.$slider).detach(),c.$dots&&c.$dots.remove(),c.$prevArrow&&c.$prevArrow.length&&(c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.prevArrow)&&c.$prevArrow.remove()),c.$nextArrow&&c.$nextArrow.length&&(c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.nextArrow)&&c.$nextArrow.remove()),c.$slides&&(c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){a(this).attr("style",a(this).data("originalStyling"))}),c.$slideTrack.children(this.options.slide).detach(),c.$slideTrack.detach(),c.$list.detach(),c.$slider.append(c.$slides)),c.cleanUpRows(),c.$slider.removeClass("slick-slider"),c.$slider.removeClass("slick-initialized"),c.unslicked=!0,b||c.$slider.trigger("destroy",[c])},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;c.cssTransitions===!1?(c.$slides.eq(a).css({zIndex:c.options.zIndex}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:c.options.zIndex}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.fadeSlideOut=function(a){var b=this;b.cssTransitions===!1?b.$slides.eq(a).animate({opacity:0,zIndex:b.options.zIndex-2},b.options.speed,b.options.easing):(b.applyTransition(a),b.$slides.eq(a).css({opacity:0,zIndex:b.options.zIndex-2}))},b.prototype.filterSlides=b.prototype.slickFilter=function(a){var b=this;null!==a&&(b.$slidesCache=b.$slides,b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var a=this,b=0,c=0,d=0;if(a.options.infinite===!0)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else if(a.options.centerMode===!0)d=a.slideCount;else for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d-1},b.prototype.getLeft=function(a){var c,d,f,b=this,e=0;return b.slideOffset=0,d=b.$slides.first().outerHeight(!0),b.options.infinite===!0?(b.slideCount>b.options.slidesToShow&&(b.slideOffset=b.slideWidth*b.options.slidesToShow*-1,e=d*b.options.slidesToShow*-1),b.slideCount%b.options.slidesToScroll!==0&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(a>b.slideCount?(b.slideOffset=(b.options.slidesToShow-(a-b.slideCount))*b.slideWidth*-1,e=(b.options.slidesToShow-(a-b.slideCount))*d*-1):(b.slideOffset=b.slideCount%b.options.slidesToScroll*b.slideWidth*-1,e=b.slideCount%b.options.slidesToScroll*d*-1))):a+b.options.slidesToShow>b.slideCount&&(b.slideOffset=(a+b.options.slidesToShow-b.slideCount)*b.slideWidth,e=(a+b.options.slidesToShow-b.slideCount)*d),b.slideCount<=b.options.slidesToShow&&(b.slideOffset=0,e=0),b.options.centerMode===!0&&b.options.infinite===!0?b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)-b.slideWidth:b.options.centerMode===!0&&(b.slideOffset=0,b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)),c=b.options.vertical===!1?a*b.slideWidth*-1+b.slideOffset:a*d*-1+e,b.options.variableWidth===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,b.options.centerMode===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow+1),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,c+=(b.$list.width()-f.outerWidth())/2)),c},b.prototype.getOption=b.prototype.slickGetOption=function(a){var b=this;return b.options[a]},b.prototype.getNavigableIndexes=function(){var e,a=this,b=0,c=0,d=[];for(a.options.infinite===!1?e=a.slideCount:(b=-1*a.options.slidesToScroll,c=-1*a.options.slidesToScroll,e=2*a.slideCount);e>b;)d.push(b),b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d},b.prototype.getSlick=function(){return this},b.prototype.getSlideCount=function(){var c,d,e,b=this;return e=b.options.centerMode===!0?b.slideWidth*Math.floor(b.options.slidesToShow/2):0,b.options.swipeToSlide===!0?(b.$slideTrack.find(".slick-slide").each(function(c,f){return f.offsetLeft-e+a(f).outerWidth()/2>-1*b.swipeLeft?(d=f,!1):void 0}),c=Math.abs(a(d).attr("data-slick-index")-b.currentSlide)||1):b.options.slidesToScroll},b.prototype.goTo=b.prototype.slickGoTo=function(a,b){var c=this;c.changeSlide({data:{message:"index",index:parseInt(a)}},b)},b.prototype.init=function(b){var c=this;a(c.$slider).hasClass("slick-initialized")||(a(c.$slider).addClass("slick-initialized"),c.buildRows(),c.buildOut(),c.setProps(),c.startLoad(),c.loadSlider(),c.initializeEvents(),c.updateArrows(),c.updateDots()),b&&c.$slider.trigger("init",[c]),c.options.accessibility===!0&&c.initADA()},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&b.options.autoplay===!0&&a("li",b.$dots).on("mouseenter.slick",a.proxy(b.setPaused,b,!0)).on("mouseleave.slick",a.proxy(b.setPaused,b,!1))},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.$list.on("click.slick",b.clickHandler),a(document).on(b.visibilityChange,a.proxy(b.visibility,b)),b.$list.on("mouseenter.slick",a.proxy(b.setPaused,b,!0)),b.$list.on("mouseleave.slick",a.proxy(b.setPaused,b,!1)),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,a.proxy(b.orientationChange,b)),a(window).on("resize.slick.slick-"+b.instanceUid,a.proxy(b.resize,b)),a("[draggable!=true]",b.$slideTrack).on("dragstart",b.preventDefault),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show(),a.options.autoplay===!0&&a.autoPlay()},b.prototype.keyHandler=function(a){var b=this;a.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===a.keyCode&&b.options.accessibility===!0?b.changeSlide({data:{message:"previous"}}):39===a.keyCode&&b.options.accessibility===!0&&b.changeSlide({data:{message:"next"}}))},b.prototype.lazyLoad=function(){function g(b){a("img[data-lazy]",b).each(function(){var b=a(this),c=a(this).attr("data-lazy"),d=document.createElement("img");d.onload=function(){b.animate({opacity:0},100,function(){b.attr("src",c).animate({opacity:1},200,function(){b.removeAttr("data-lazy").removeClass("slick-loading")})})},d.src=c})}var c,d,e,f,b=this;b.options.centerMode===!0?b.options.infinite===!0?(e=b.currentSlide+(b.options.slidesToShow/2+1),f=e+b.options.slidesToShow+2):(e=Math.max(0,b.currentSlide-(b.options.slidesToShow/2+1)),f=2+(b.options.slidesToShow/2+1)+b.currentSlide):(e=b.options.infinite?b.options.slidesToShow+b.currentSlide:b.currentSlide,f=e+b.options.slidesToShow,b.options.fade===!0&&(e>0&&e--,f<=b.slideCount&&f++)),c=b.$slider.find(".slick-slide").slice(e,f),g(c),b.slideCount<=b.options.slidesToShow?(d=b.$slider.find(".slick-slide"),g(d)):b.currentSlide>=b.slideCount-b.options.slidesToShow?(d=b.$slider.find(".slick-cloned").slice(0,b.options.slidesToShow),g(d)):0===b.currentSlide&&(d=b.$slider.find(".slick-cloned").slice(-1*b.options.slidesToShow),g(d))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.next=b.prototype.slickNext=function(){var a=this;a.changeSlide({data:{message:"next"}})},b.prototype.orientationChange=function(){var a=this;a.checkResponsive(),a.setPosition()},b.prototype.pause=b.prototype.slickPause=function(){var a=this;a.autoPlayClear(),a.paused=!0},b.prototype.play=b.prototype.slickPlay=function(){var a=this;a.paused=!1,a.autoPlay()},b.prototype.postSlide=function(a){var b=this;b.$slider.trigger("afterChange",[b,a]),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay===!0&&b.paused===!1&&b.autoPlay(),b.options.accessibility===!0&&b.initADA()},b.prototype.prev=b.prototype.slickPrev=function(){var a=this;a.changeSlide({data:{message:"previous"}})},b.prototype.preventDefault=function(a){a.preventDefault()},b.prototype.progressiveLazyLoad=function(){var c,d,b=this;c=a("img[data-lazy]",b.$slider).length,c>0&&(d=a("img[data-lazy]",b.$slider).first(),d.attr("src",null),d.attr("src",d.attr("data-lazy")).removeClass("slick-loading").load(function(){d.removeAttr("data-lazy"),b.progressiveLazyLoad(),b.options.adaptiveHeight===!0&&b.setPosition()}).error(function(){d.removeAttr("data-lazy"),b.progressiveLazyLoad()}))},b.prototype.refresh=function(b){var d,e,c=this;e=c.slideCount-c.options.slidesToShow,c.options.infinite||(c.slideCount<=c.options.slidesToShow?c.currentSlide=0:c.currentSlide>e&&(c.currentSlide=e)),d=c.currentSlide,c.destroy(!0),a.extend(c,c.initials,{currentSlide:d}),c.init(),b||c.changeSlide({data:{message:"index",index:d}},!1)},b.prototype.registerBreakpoints=function(){var c,d,e,b=this,f=b.options.responsive||null;if("array"===a.type(f)&&f.length){b.respondTo=b.options.respondTo||"window";for(c in f)if(e=b.breakpoints.length-1,d=f[c].breakpoint,f.hasOwnProperty(c)){for(;e>=0;)b.breakpoints[e]&&b.breakpoints[e]===d&&b.breakpoints.splice(e,1),e--;b.breakpoints.push(d),b.breakpointSettings[d]=f[c].settings}b.breakpoints.sort(function(a,c){return b.options.mobileFirst?a-c:c-a})}},b.prototype.reinit=function(){var b=this;b.$slides=b.$slideTrack.children(b.options.slide).addClass("slick-slide"),b.slideCount=b.$slides.length,b.currentSlide>=b.slideCount&&0!==b.currentSlide&&(b.currentSlide=b.currentSlide-b.options.slidesToScroll),b.slideCount<=b.options.slidesToShow&&(b.currentSlide=0),b.registerBreakpoints(),b.setProps(),b.setupInfinite(),b.buildArrows(),b.updateArrows(),b.initArrowEvents(),b.buildDots(),b.updateDots(),b.initDotEvents(),b.checkResponsive(!1,!0),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),b.setSlideClasses(0),b.setPosition(),b.$slider.trigger("reInit",[b]),b.options.autoplay===!0&&b.focusHandler()},b.prototype.resize=function(){var b=this;a(window).width()!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.unslicked||b.setPosition()},50))},b.prototype.removeSlide=b.prototype.slickRemove=function(a,b,c){var d=this;return"boolean"==typeof a?(b=a,a=b===!0?0:d.slideCount-1):a=b===!0?--a:a,d.slideCount<1||0>a||a>d.slideCount-1?!1:(d.unload(),c===!0?d.$slideTrack.children().remove():d.$slideTrack.children(this.options.slide).eq(a).remove(),d.$slides=d.$slideTrack.children(this.options.slide),d.$slideTrack.children(this.options.slide).detach(),d.$slideTrack.append(d.$slides),d.$slidesCache=d.$slides,void d.reinit())},b.prototype.setCSS=function(a){var d,e,b=this,c={};b.options.rtl===!0&&(a=-a),d="left"==b.positionProp?Math.ceil(a)+"px":"0px",e="top"==b.positionProp?Math.ceil(a)+"px":"0px",c[b.positionProp]=a,b.transformsEnabled===!1?b.$slideTrack.css(c):(c={},b.cssTransitions===!1?(c[b.animType]="translate("+d+", "+e+")",b.$slideTrack.css(c)):(c[b.animType]="translate3d("+d+", "+e+", 0px)",b.$slideTrack.css(c)))},b.prototype.setDimensions=function(){var a=this;a.options.vertical===!1?a.options.centerMode===!0&&a.$list.css({padding:"0px "+a.options.centerPadding}):(a.$list.height(a.$slides.first().outerHeight(!0)*a.options.slidesToShow),a.options.centerMode===!0&&a.$list.css({padding:a.options.centerPadding+" 0px"})),a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),a.options.vertical===!1&&a.options.variableWidth===!1?(a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length))):a.options.variableWidth===!0?a.$slideTrack.width(5e3*a.slideCount):(a.slideWidth=Math.ceil(a.listWidth),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0)*a.$slideTrack.children(".slick-slide").length)));var b=a.$slides.first().outerWidth(!0)-a.$slides.first().width();a.options.variableWidth===!1&&a.$slideTrack.children(".slick-slide").width(a.slideWidth-b)},b.prototype.setFade=function(){var c,b=this;b.$slides.each(function(d,e){c=b.slideWidth*d*-1,b.options.rtl===!0?a(e).css({position:"relative",right:c,top:0,zIndex:b.options.zIndex-2,opacity:0}):a(e).css({position:"relative",left:c,top:0,zIndex:b.options.zIndex-2,opacity:0})}),b.$slides.eq(b.currentSlide).css({zIndex:b.options.zIndex-1,opacity:1})},b.prototype.setHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height",b)}},b.prototype.setOption=b.prototype.slickSetOption=function(b,c,d){var f,g,e=this;if("responsive"===b&&"array"===a.type(c))for(g in c)if("array"!==a.type(e.options.responsive))e.options.responsive=[c[g]];else{for(f=e.options.responsive.length-1;f>=0;)e.options.responsive[f].breakpoint===c[g].breakpoint&&e.options.responsive.splice(f,1),f--;e.options.responsive.push(c[g])}else e.options[b]=c;d===!0&&(e.unload(),e.reinit())},b.prototype.setPosition=function(){var a=this;a.setDimensions(),a.setHeight(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade(),a.$slider.trigger("setPosition",[a])},b.prototype.setProps=function(){var a=this,b=document.body.style;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.msTransition)&&a.options.useCSS===!0&&(a.cssTransitions=!0),a.options.fade&&("number"==typeof a.options.zIndex?a.options.zIndex<3&&(a.options.zIndex=3):a.options.zIndex=a.defaults.zIndex),void 0!==b.OTransform&&(a.animType="OTransform",a.transformType="-o-transform",a.transitionType="OTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition",void 0===b.perspectiveProperty&&void 0===b.MozPerspective&&(a.animType=!1)),void 0!==b.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.msTransform&&(a.animType="msTransform",a.transformType="-ms-transform",a.transitionType="msTransition",void 0===b.msTransform&&(a.animType=!1)),void 0!==b.transform&&a.animType!==!1&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=a.options.useTransform&&null!==a.animType&&a.animType!==!1},b.prototype.setSlideClasses=function(a){var c,d,e,f,b=this;d=b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),b.$slides.eq(a).addClass("slick-current"),b.options.centerMode===!0?(c=Math.floor(b.options.slidesToShow/2),b.options.infinite===!0&&(a>=c&&a<=b.slideCount-1-c?b.$slides.slice(a-c,a+c+1).addClass("slick-active").attr("aria-hidden","false"):(e=b.options.slidesToShow+a,d.slice(e-c+1,e+c+2).addClass("slick-active").attr("aria-hidden","false")),0===a?d.eq(d.length-1-b.options.slidesToShow).addClass("slick-center"):a===b.slideCount-1&&d.eq(b.options.slidesToShow).addClass("slick-center")),b.$slides.eq(a).addClass("slick-center")):a>=0&&a<=b.slideCount-b.options.slidesToShow?b.$slides.slice(a,a+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):d.length<=b.options.slidesToShow?d.addClass("slick-active").attr("aria-hidden","false"):(f=b.slideCount%b.options.slidesToShow,e=b.options.infinite===!0?b.options.slidesToShow+a:a,b.options.slidesToShow==b.options.slidesToScroll&&b.slideCount-a<b.options.slidesToShow?d.slice(e-(b.options.slidesToShow-f),e+f).addClass("slick-active").attr("aria-hidden","false"):d.slice(e,e+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===b.options.lazyLoad&&b.lazyLoad()},b.prototype.setupInfinite=function(){var c,d,e,b=this;if(b.options.fade===!0&&(b.options.centerMode=!1),b.options.infinite===!0&&b.options.fade===!1&&(d=null,b.slideCount>b.options.slidesToShow)){for(e=b.options.centerMode===!0?b.options.slidesToShow+1:b.options.slidesToShow,c=b.slideCount;c>b.slideCount-e;c-=1)d=c-1,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d-b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");for(c=0;e>c;c+=1)d=c,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d+b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.setPaused=function(a){var b=this;b.options.autoplay===!0&&b.options.pauseOnHover===!0&&(b.paused=a,a?b.autoPlayClear():b.autoPlay())},b.prototype.selectHandler=function(b){var c=this,d=a(b.target).is(".slick-slide")?a(b.target):a(b.target).parents(".slick-slide"),e=parseInt(d.attr("data-slick-index"));return e||(e=0),c.slideCount<=c.options.slidesToShow?(c.setSlideClasses(e),void c.asNavFor(e)):void c.slideHandler(e)},b.prototype.slideHandler=function(a,b,c){var d,e,f,g,h=null,i=this;return b=b||!1,i.animating===!0&&i.options.waitForAnimate===!0||i.options.fade===!0&&i.currentSlide===a||i.slideCount<=i.options.slidesToShow?void 0:(b===!1&&i.asNavFor(a),d=a,h=i.getLeft(d),g=i.getLeft(i.currentSlide),i.currentLeft=null===i.swipeLeft?g:i.swipeLeft,i.options.infinite===!1&&i.options.centerMode===!1&&(0>a||a>i.getDotCount()*i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d);
}):i.postSlide(d))):i.options.infinite===!1&&i.options.centerMode===!0&&(0>a||a>i.slideCount-i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):(i.options.autoplay===!0&&clearInterval(i.autoPlayTimer),e=0>d?i.slideCount%i.options.slidesToScroll!==0?i.slideCount-i.slideCount%i.options.slidesToScroll:i.slideCount+d:d>=i.slideCount?i.slideCount%i.options.slidesToScroll!==0?0:d-i.slideCount:d,i.animating=!0,i.$slider.trigger("beforeChange",[i,i.currentSlide,e]),f=i.currentSlide,i.currentSlide=e,i.setSlideClasses(i.currentSlide),i.updateDots(),i.updateArrows(),i.options.fade===!0?(c!==!0?(i.fadeSlideOut(f),i.fadeSlide(e,function(){i.postSlide(e)})):i.postSlide(e),void i.animateHeight()):void(c!==!0?i.animateSlide(h,function(){i.postSlide(e)}):i.postSlide(e))))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?e.options.rtl===!1?"left":"right":360>=d&&d>=315?e.options.rtl===!1?"left":"right":d>=135&&225>=d?e.options.rtl===!1?"right":"left":e.options.verticalSwiping===!0?d>=35&&135>=d?"left":"right":"vertical"},b.prototype.swipeEnd=function(a){var c,b=this;if(b.dragging=!1,b.shouldClick=b.touchObject.swipeLength>10?!1:!0,void 0===b.touchObject.curX)return!1;if(b.touchObject.edgeHit===!0&&b.$slider.trigger("edge",[b,b.swipeDirection()]),b.touchObject.swipeLength>=b.touchObject.minSwipe)switch(b.swipeDirection()){case"left":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide+b.getSlideCount()):b.currentSlide+b.getSlideCount(),b.slideHandler(c),b.currentDirection=0,b.touchObject={},b.$slider.trigger("swipe",[b,"left"]);break;case"right":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide-b.getSlideCount()):b.currentSlide-b.getSlideCount(),b.slideHandler(c),b.currentDirection=1,b.touchObject={},b.$slider.trigger("swipe",[b,"right"])}else b.touchObject.startX!==b.touchObject.curX&&(b.slideHandler(b.currentSlide),b.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if(!(b.options.swipe===!1||"ontouchend"in document&&b.options.swipe===!1||b.options.draggable===!1&&-1!==a.type.indexOf("mouse")))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,b.options.verticalSwiping===!0&&(b.touchObject.minSwipe=b.listHeight/b.options.touchThreshold),a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var d,e,f,g,h,b=this;return h=void 0!==a.originalEvent?a.originalEvent.touches:null,!b.dragging||h&&1!==h.length?!1:(d=b.getLeft(b.currentSlide),b.touchObject.curX=void 0!==h?h[0].pageX:a.clientX,b.touchObject.curY=void 0!==h?h[0].pageY:a.clientY,b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curX-b.touchObject.startX,2))),b.options.verticalSwiping===!0&&(b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curY-b.touchObject.startY,2)))),e=b.swipeDirection(),"vertical"!==e?(void 0!==a.originalEvent&&b.touchObject.swipeLength>4&&a.preventDefault(),g=(b.options.rtl===!1?1:-1)*(b.touchObject.curX>b.touchObject.startX?1:-1),b.options.verticalSwiping===!0&&(g=b.touchObject.curY>b.touchObject.startY?1:-1),f=b.touchObject.swipeLength,b.touchObject.edgeHit=!1,b.options.infinite===!1&&(0===b.currentSlide&&"right"===e||b.currentSlide>=b.getDotCount()&&"left"===e)&&(f=b.touchObject.swipeLength*b.options.edgeFriction,b.touchObject.edgeHit=!0),b.options.vertical===!1?b.swipeLeft=d+f*g:b.swipeLeft=d+f*(b.$list.height()/b.listWidth)*g,b.options.verticalSwiping===!0&&(b.swipeLeft=d+f*g),b.options.fade===!0||b.options.touchMove===!1?!1:b.animating===!0?(b.swipeLeft=null,!1):void b.setCSS(b.swipeLeft)):void 0)},b.prototype.swipeStart=function(a){var c,b=this;return 1!==b.touchObject.fingerCount||b.slideCount<=b.options.slidesToShow?(b.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(c=a.originalEvent.touches[0]),b.touchObject.startX=b.touchObject.curX=void 0!==c?c.pageX:a.clientX,b.touchObject.startY=b.touchObject.curY=void 0!==c?c.pageY:a.clientY,void(b.dragging=!0))},b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).detach(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.remove(),b.$nextArrow&&b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},b.prototype.unslick=function(a){var b=this;b.$slider.trigger("unslick",[b,a]),b.destroy()},b.prototype.updateArrows=function(){var b,a=this;b=Math.floor(a.options.slidesToShow/2),a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&!a.options.infinite&&(a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&a.options.centerMode===!1?(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-1&&a.options.centerMode===!0&&(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),a.$dots.find("li").eq(Math.floor(a.currentSlide/a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},b.prototype.visibility=function(){var a=this;document[a.hidden]?(a.paused=!0,a.autoPlayClear()):a.options.autoplay===!0&&(a.paused=!1,a.autoPlay())},b.prototype.initADA=function(){var b=this;b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),b.$slideTrack.attr("role","listbox"),b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c){a(this).attr({role:"option","aria-describedby":"slick-slide"+b.instanceUid+c})}),null!==b.$dots&&b.$dots.attr("role","tablist").find("li").each(function(c){a(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+b.instanceUid+c,id:"slick-slide"+b.instanceUid+c})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),b.activateADA()},b.prototype.activateADA=function(){var a=this;a.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},b.prototype.focusHandler=function(){var b=this;b.$slider.on("focus.slick blur.slick","*",function(c){c.stopImmediatePropagation();var d=a(this);setTimeout(function(){b.isPlay&&(d.is(":focus")?(b.autoPlayClear(),b.paused=!0):(b.paused=!1,b.autoPlay()))},0)})},a.fn.slick=function(){var f,g,a=this,c=arguments[0],d=Array.prototype.slice.call(arguments,1),e=a.length;for(f=0;e>f;f++)if("object"==typeof c||"undefined"==typeof c?a[f].slick=new b(a[f],c):g=a[f].slick[c].apply(a[f].slick,d),"undefined"!=typeof g)return g;return a}});

			(function ($, document, window, undefined) {
						'use strict';

						$.fn.pagepiling = function (custom) {
							var PP = $.fn.pagepiling;
							var container = $(this);
							var lastScrolledDestiny;
							var lastAnimation = 0;
							var isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0) || (navigator.maxTouchPoints));
							var touchStartY = 0, touchStartX = 0, touchEndY = 0, touchEndX = 0;
							var scrollings = [];

							//Defines the delay to take place before being able to scroll to the next section
							//BE CAREFUL! Not recommened to change it under 400 for a good behavior in laptops and
							//Apple devices (laptops, mouses...)
							var scrollDelay = 600;

							// Create some defaults, extending them with any options that were provided
							var options = $.extend(true, {
								direction: 'vertical',
								menu: null,
								verticalCentered: true,
								sectionsColor: [],
								anchors: [],
								scrollingSpeed: 700,
								easing: 'easeInQuart',
								loopBottom: false,
								loopTop: false,
								css3: true,
								navigation: {
									textColor: '#000',
									bulletsColor: '#000',
									position: 'right',
									tooltips: []
								},
								normalScrollElements: null,
								normalScrollElementTouchThreshold: 5,
								touchSensitivity: 5,
								keyboardScrolling: true,
								sectionSelector: '.pages',
								animateAnchor: false,

								//events
								afterLoad: null,
								onLeave: null,
								afterRender: null
							}, custom);


							//easeInQuart animation included in the plugin
							$.extend($.easing,{ easeInQuart: function (x, t, b, c, d) { return c*(t/=d)*t*t*t + b; }});

							/**
							* Defines the scrolling speed
							*/
							PP.setScrollingSpeed = function(value){
							   options.scrollingSpeed = value;
							};

							/**
							* Adds or remove the possiblity of scrolling through sections by using the mouse wheel or the trackpad.
							*/
							PP.setMouseWheelScrolling = function (value){
								if(value){
									addMouseWheelHandler();
								}else{
									removeMouseWheelHandler();
								}
							};

							/**
							* Adds or remove the possiblity of scrolling through sections by using the mouse wheel/trackpad or touch gestures.
							*/
							PP.setAllowScrolling = function (value){
								if(value){
									PP.setMouseWheelScrolling(true);
									addTouchHandler();
								}else{
									PP.setMouseWheelScrolling(false);
									removeTouchHandler();
								}
							};

							/**
							* Adds or remove the possiblity of scrolling through sections by using the keyboard arrow keys
							*/
							PP.setKeyboardScrolling = function (value){
								options.keyboardScrolling = value;
							};

							/**
							* Moves sectio up
							*/
							PP.moveSectionUp = function () {
								var prev = $('.pp-section.active').prev('.pp-section');

								//looping to the bottom if there's no more sections above
								if (!prev.length && options.loopTop) {
									prev = $('.pp-section').last();
								}

								if (prev.length) {
									scrollPage(prev);
								}
							};

							/**
							* Moves sectio down
							*/
							PP.moveSectionDown = function () {
								var next = $('.pp-section.active').next('.pp-section');

								//looping to the top if there's no more sections below
								if(!next.length && options.loopBottom){
									next = $('.pp-section').first();
								}

								if (next.length) {
									scrollPage(next);
								}
							};

							/**
							* Moves the site to the given anchor or index
							*/
							PP.moveTo = function (section){
								var destiny = '';

								if(isNaN(section)){
									destiny = $(document).find('[data-anchor="'+section+'"]');
								}else{
									destiny = $('.pp-section').eq( (section -1) );
								}


								if(destiny.length > 0){
									scrollPage(destiny);
								}
							};

							//adding internal class names to void problem with common ones
							$(options.sectionSelector).each(function(){
								$(this).addClass('pp-section');
							});

							//if css3 is not supported, it will use jQuery animations
							if(options.css3){
								options.css3 = support3d();
							}

							$(container).css({
								'overflow' : 'hidden',
								'-ms-touch-action': 'none',  /* Touch detection for Windows 8 */
								'touch-action': 'none'       /* IE 11 on Windows Phone 8.1*/
							});

							//init
							PP.setAllowScrolling(true);

							//creating the navigation dots
							if (!$.isEmptyObject(options.navigation) ) {
								addVerticalNavigation();
							}

							 var zIndex = $('.pp-section').length;

							$('.pp-section').each(function (index) {
								$(this).data('data-index', index);
								$(this).css('z-index', zIndex);

								//if no active section is defined, the 1st one will be the default one
								if (!index && $('.pp-section.active').length === 0) {
									$(this).addClass('active');
								}

								if (typeof options.anchors[index] !== 'undefined') {
									$(this).attr('data-anchor', options.anchors[index]);
								}

								if (typeof options.sectionsColor[index] !== 'undefined') {
									$(this).css('background-color', options.sectionsColor[index]);
								}

								if(options.verticalCentered && !$(this).hasClass('pp-scrollable')){
									addTableClass($(this));
								}

								zIndex = zIndex - 1;
							}).promise().done(function(){
								//vertical centered of the navigation + first bullet active
								if(options.navigation){
									$('#pp-nav').css('margin-top', '-' + ($('#pp-nav').height()/2) + 'px');
									$('#pp-nav').find('li').eq($('.pp-section.active').index('.pp-section')).find('a').addClass('active');
								}

								$(window).on('load', function() {
									scrollToAnchor();
								});

								$.isFunction( options.afterRender ) && options.afterRender.call( this);
							});

							/**
							* Enables vertical centering by wrapping the content and the use of table and table-cell
							*/
							function addTableClass(element){
								element.addClass('pp-table').wrapInner('<div class="pp-tableCell" style="height:100%" />');
							}


						   /**
							* Retuns `up` or `down` depending on the scrolling movement to reach its destination
							* from the current section.
							*/
							function getYmovement(destiny){
								var fromIndex = $('.pp-section.active').index('.pp-section');
								var toIndex = destiny.index('.pp-section');

								if(fromIndex > toIndex){
									return 'up';
								}
								return 'down';
							}

							/**
							* Scrolls the page to the given destination
							*/
							function scrollPage(destination, animated) {
								var v ={
									destination: destination,
									animated: animated,
									activeSection: $('.pp-section.active'),
									anchorLink: destination.data('anchor'),
									sectionIndex: destination.index('.pp-section'),
									toMove: destination,
									yMovement: getYmovement(destination),
									leavingSection: $('.pp-section.active').index('.pp-section') + 1
								};

								//quiting when activeSection is the target element
								if(v.activeSection.is(destination)){ return; }

								if(typeof v.animated === 'undefined'){
									v.animated = true;
								}

								if(typeof v.anchorLink !== 'undefined'){
									setURLHash(v.anchorLink, v.sectionIndex);
								}

								v.destination.addClass('active').siblings().removeClass('active');

								v.sectionsToMove = getSectionsToMove(v);

								//scrolling down (moving sections up making them disappear)
								if (v.yMovement === 'down') {
									v.translate3d = getTranslate3d();
									v.scrolling = '-100%';

									if(!options.css3){
										v.sectionsToMove.each(function(index){
											if(index != v.activeSection.index('.pp-section')){
												$(this).css(getScrollProp(v.scrolling));
											}
										});
									}

									v.animateSection = v.activeSection;
								}

								//scrolling up (moving section down to the viewport)
								else {
									v.translate3d = 'translate3d(0px, 0px, 0px)';
									v.scrolling = '0';

									v.animateSection = destination;
								}

								$.isFunction(options.onLeave) && options.onLeave.call(this, v.leavingSection, (v.sectionIndex + 1), v.yMovement);

								performMovement(v);

								activateMenuElement(v.anchorLink);
								activateNavDots(v.anchorLink, v.sectionIndex);
								lastScrolledDestiny = v.anchorLink;

								var timeNow = new Date().getTime();
								lastAnimation = timeNow;
							}

							/**
							* Performs the movement (by CSS3 or by jQuery)
							*/
							function performMovement(v){
								if(options.css3){
									transformContainer(v.animateSection, v.translate3d, v.animated);

									v.sectionsToMove.each(function(){
										transformContainer($(this), v.translate3d, v.animated);
									});

									setTimeout(function () {
										afterSectionLoads(v);
									}, options.scrollingSpeed);
								}else{
									v.scrollOptions = getScrollProp(v.scrolling);

									if(v.animated){
										v.animateSection.animate(
											v.scrollOptions,
										options.scrollingSpeed, options.easing, function () {
											readjustSections(v);
											afterSectionLoads(v);
										});
									}else{
										v.animateSection.css(getScrollProp(v.scrolling));
										setTimeout(function(){
											readjustSections(v);
											afterSectionLoads(v);
										},400);
									}
								}
							}

							/**
							* Actions to execute after a secion is loaded
							*/
							function afterSectionLoads(v){
								//callback (afterLoad) if the site is not just resizing and readjusting the slides
								$.isFunction(options.afterLoad) && options.afterLoad.call(this, v.anchorLink, (v.sectionIndex + 1));
							}


							function getSectionsToMove(v){
								var sectionToMove;

								if(v.yMovement === 'down'){
									sectionToMove = $('.pp-section').map(function(index){
										if (index < v.destination.index('.pp-section')){
											return $(this);
										}
									});
								}else{
									sectionToMove = $('.pp-section').map(function(index){
										if (index > v.destination.index('.pp-section')){
											return $(this);
										}
									});
								}

								return sectionToMove;
							}

							/**
							* Returns the sections to re-adjust in the background after the section loads.
							*/
							function readjustSections(v){
								if(v.yMovement === 'up'){
									v.sectionsToMove.each(function(index){
										$(this).css(getScrollProp(v.scrolling));
									});
								}
							}

							/**
							* Gets the property used to create the scrolling effect when using jQuery animations
							* depending on the plugin direction option.
							*/
							function getScrollProp(propertyValue){
								if(options.direction === 'vertical'){
									return {'top': propertyValue};
								}
								return {'left': propertyValue};
							}

							/**
							* Scrolls the site without anymations (usually used in the background without the user noticing it)
							*/
							function silentScroll(section, offset){
								if (options.css3) {
									transformContainer(section, getTranslate3d(), false);
								}
								else{
									section.css(getScrollProp(offset));
								}
							}

							/**
							* Sets the URL hash for a section with slides
							*/
							function setURLHash(anchorLink, sectionIndex){
								if(options.anchors.length){
									location.hash = anchorLink;

									setBodyClass(location.hash);
								}else{
									setBodyClass(String(sectionIndex));
								}
							}

							/**
							* Sets a class for the body of the page depending on the active section / slide
							*/
							function setBodyClass(text){
								//removing the #
								text = text.replace('#','');

								//removing previous anchor classes
								$('body')[0].className = $('body')[0].className.replace(/\b\s?pp-viewing-[^\s]+\b/g, '');

								//adding the current anchor
								$('body').addClass('pp-viewing-' + text);
							}

							//TO DO
							function scrollToAnchor(){
								//getting the anchor link in the URL and deleting the `#`
								var value =  window.location.hash.replace('#', '');
								var sectionAnchor = value;
								var section = $(document).find('.pp-section[data-anchor="'+sectionAnchor+'"]');

								if(section.length > 0){  //if theres any #
									scrollPage(section, options.animateAnchor);
								}
							}

							/**
							* Determines if the transitions between sections still taking place.
							* The variable `scrollDelay` adds a "save zone" for devices such as Apple laptops and Apple magic mouses
							*/
							function isMoving(){
								var timeNow = new Date().getTime();
								// Cancel scroll if currently animating or within quiet period
								if (timeNow - lastAnimation < scrollDelay + options.scrollingSpeed) {
									return true;
								}
								return false;
							}

							//detecting any change on the URL to scroll to the given anchor link
							//(a way to detect back history button as we play with the hashes on the URL)
							$(window).on('hashchange', hashChangeHandler);

							/**
							* Actions to do when the hash (#) in the URL changes.
							*/
							function hashChangeHandler(){
								var value =  window.location.hash.replace('#', '').split('/');
								var sectionAnchor = value[0];

								if(sectionAnchor.length){
									/*in order to call scrollpage() only once for each destination at a time
									It is called twice for each scroll otherwise, as in case of using anchorlinks `hashChange`
									event is fired on every scroll too.*/
									if (sectionAnchor && sectionAnchor !== lastScrolledDestiny)  {
										var section;

										if(isNaN(sectionAnchor)){
											section = $(document).find('[data-anchor="'+sectionAnchor+'"]');
										}else{
											section = $('.pp-section').eq( (sectionAnchor -1) );
										}
										scrollPage(section);
									}
								}
							}

							/**
							* Cross browser transformations
							*/
							function getTransforms(translate3d) {
								return {
									'-webkit-transform': translate3d,
										'-moz-transform': translate3d,
										'-ms-transform': translate3d,
										'transform': translate3d
								};
							}

							/**
							 * Adds a css3 transform property to the container class with or without animation depending on the animated param.
							 */
							function transformContainer(element, translate3d, animated) {
								element.toggleClass('pp-easing', animated);

								element.css(getTransforms(translate3d));
							}

							/**
							 * Sliding with arrow keys, both, vertical and horizontal
							 */
							$(document).keydown(function (e) {
								if(options.keyboardScrolling && !isMoving()){
									//Moving the main page with the keyboard arrows if keyboard scrolling is enabled
									switch (e.which) {
											//up
										case 38:
										case 33:
											PP.moveSectionUp();
											break;

											//down
										case 40:
										case 34:
											PP.moveSectionDown();
											break;

											//Home
										case 36:
											PP.moveTo(1);
											break;

											//End
										case 35:
											PP.moveTo($('.pp-section').length);
											break;

											//left
										case 37:
											PP.moveSectionUp();
											break;

											//right
										case 39:
											PP.moveSectionDown();
											break;

										default:
											return; // exit this handler for other keys
									}
								}
							});

							/**
							* If `normalScrollElements` is used, the mouse wheel scrolling will scroll normally
							* over the defined elements in the option.
							*/
							if(options.normalScrollElements){
								$(document).on('mouseenter', options.normalScrollElements, function () {
									PP.setMouseWheelScrolling(false);
								});

								$(document).on('mouseleave', options.normalScrollElements, function(){
									PP.setMouseWheelScrolling(true);
								});
							}

							/**
							 * Detecting mousewheel scrolling
							 *
							 * http://blogs.sitepointstatic.com/examples/tech/mouse-wheel/index.html
							 * http://www.sitepoint.com/html5-javascript-mouse-wheel/
							 */
							var prevTime = new Date().getTime();

							function MouseWheelHandler(e) {
								var curTime = new Date().getTime();

								// cross-browser wheel delta
								e = e || window.event;
								var value = e.wheelDelta || -e.deltaY || -e.detail;
								var delta = Math.max(-1, Math.min(1, value));

								var horizontalDetection = typeof e.wheelDeltaX !== 'undefined' || typeof e.deltaX !== 'undefined';
								var isScrollingVertically = (Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta)) || (Math.abs(e.deltaX ) < Math.abs(e.deltaY) || !horizontalDetection);

								//Limiting the array to 150 (lets not waste memory!)
								if(scrollings.length > 149){
									scrollings.shift();
								}

								//keeping record of the previous scrollings
								scrollings.push(Math.abs(value));

								//time difference between the last scroll and the current one
								var timeDiff = curTime-prevTime;
								prevTime = curTime;

								//haven't they scrolled in a while?
								//(enough to be consider a different scrolling action to scroll another section)
								if(timeDiff > 200){
									//emptying the array, we dont care about old scrollings for our averages
									scrollings = [];
								}

								if(!isMoving()){
									var activeSection = $('.pp-section.active');
									var scrollable = isScrollable(activeSection);

									var averageEnd = getAverage(scrollings, 10);
									var averageMiddle = getAverage(scrollings, 70);
									var isAccelerating = averageEnd >= averageMiddle;

									if(isAccelerating && isScrollingVertically){
										//scrolling down?
										if (delta < 0) {
											scrolling('down', scrollable);

										//scrolling up?
										}else if(delta>0){
											scrolling('up', scrollable);
										}
									}

									return false;
								}
							 }

							/**
							* Gets the average of the last `number` elements of the given array.
							*/
							function getAverage(elements, number){
								var sum = 0;

								//taking `number` elements from the end to make the average, if there are not enought, 1
								var lastElements = elements.slice(Math.max(elements.length - number, 1));

								for(var i = 0; i < lastElements.length; i++){
									sum = sum + lastElements[i];
								}

								return Math.ceil(sum/number);
							}

							/**
							* Determines the way of scrolling up or down:
							* by 'automatically' scrolling a section or by using the default and normal scrolling.
							*/
							function scrolling(type, scrollable){
								var check;
								var scrollSection;

								if(type == 'down'){
									check = 'bottom';
									scrollSection = PP.moveSectionDown;
								}else{
									check = 'top';
									scrollSection = PP.moveSectionUp;
								}

								if(scrollable.length > 0 ){
									//is the scrollbar at the start/end of the scroll?
									if(isScrolled(check, scrollable)){
										scrollSection();
									}else{
										return true;
									}
								}else{
									//moved up/down
									scrollSection();
								}
							}

							/**
							* Return a boolean depending on whether the scrollable element is at the end or at the start of the scrolling
							* depending on the given type.
							*/
							function isScrolled(type, scrollable){
								if(type === 'top'){
									return !scrollable.scrollTop();
								}else if(type === 'bottom'){
									return scrollable.scrollTop() + 1 + scrollable.innerHeight() >= scrollable[0].scrollHeight;
								}
							}

							 /**
							* Determines whether the active section or slide is scrollable through and scrolling bar
							*/
							function isScrollable(activeSection){
								return activeSection.filter('.pp-scrollable');
							}

							/**
							* Removes the auto scrolling action fired by the mouse wheel and tackpad.
							* After this function is called, the mousewheel and trackpad movements won't scroll through sections.
							*/
							function removeMouseWheelHandler(){
								if (container.get(0).addEventListener) {
									container.get(0).removeEventListener('mousewheel', MouseWheelHandler, false); //IE9, Chrome, Safari, Oper
									container.get(0).removeEventListener('wheel', MouseWheelHandler, false); //Firefox
								} else {
									container.get(0).detachEvent('onmousewheel', MouseWheelHandler); //IE 6/7/8
								}
							}

							/**
							* Adds the auto scrolling action for the mouse wheel and tackpad.
							* After this function is called, the mousewheel and trackpad movements will scroll through sections
							*/
							function addMouseWheelHandler(){
								if (container.get(0).addEventListener) {
									container.get(0).addEventListener('mousewheel', MouseWheelHandler, false); //IE9, Chrome, Safari, Oper
									container.get(0).addEventListener('wheel', MouseWheelHandler, false); //Firefox
								} else {
									container.get(0).attachEvent('onmousewheel', MouseWheelHandler); //IE 6/7/8
								}
							}

							/**
							* Adds the possibility to auto scroll through sections on touch devices.
							*/
							function addTouchHandler(){
								if(isTouch){
									//Microsoft pointers
									var MSPointer = getMSPointer();

									container.off('touchstart ' +  MSPointer.down).on('touchstart ' + MSPointer.down, touchStartHandler);
									container.off('touchmove ' + MSPointer.move).on('touchmove ' + MSPointer.move, touchMoveHandler);
								}
							}

							/**
							* Removes the auto scrolling for touch devices.
							*/
							function removeTouchHandler(){
								if(isTouch){
									//Microsoft pointers
									var MSPointer = getMSPointer();

									container.off('touchstart ' + MSPointer.down);
									container.off('touchmove ' + MSPointer.move);
								}
							}

							/*
							* Returns and object with Microsoft pointers (for IE<11 and for IE >= 11)
							* http://msdn.microsoft.com/en-us/library/ie/dn304886(v=vs.85).aspx
							*/
							function getMSPointer(){
								var pointer;

								//IE >= 11 & rest of browsers
								if(window.PointerEvent){
									pointer = { down: 'pointerdown', move: 'pointermove', up: 'pointerup'};
								}

								//IE < 11
								else{
									pointer = { down: 'MSPointerDown', move: 'MSPointerMove', up: 'MSPointerUp'};
								}

								return pointer;
							}

							/**
							* Gets the pageX and pageY properties depending on the browser.
							* https://github.com/alvarotrigo/fullPage.js/issues/194#issuecomment-34069854
							*/
							function getEventsPage(e){
								var events = new Array();

								events.y = (typeof e.pageY !== 'undefined' && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY);
								events.x = (typeof e.pageX !== 'undefined' && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX);

								return events;
							}

							/**
							* As IE >= 10 fires both touch and mouse events when using a mouse in a touchscreen
							* this way we make sure that is really a touch event what IE is detecting.
							*/
							function isReallyTouch(e){
								//if is not IE   ||  IE is detecting `touch` or `pen`
								return typeof e.pointerType === 'undefined' || e.pointerType != 'mouse';
							}

							/**
							* Getting the starting possitions of the touch event
							*/
							function touchStartHandler(event){
								var e = event.originalEvent;

								if(isReallyTouch(e)){
									var touchEvents = getEventsPage(e);
									touchStartY = touchEvents.y;
									touchStartX = touchEvents.x;
								}
							}

							/* Detecting touch events
							*/
							function touchMoveHandler(event){
								var e = event.originalEvent;

								// additional: if one of the normalScrollElements isn't within options.normalScrollElementTouchThreshold hops up the DOM chain
								if ( !checkParentForNormalScrollElement(event.target) && isReallyTouch(e) ) {

									var activeSection = $('.pp-section.active');
									var scrollable = isScrollable(activeSection);

									if(!scrollable.length){
										event.preventDefault();
									}

									if (!isMoving()) {
										var touchEvents = getEventsPage(e);
										touchEndY = touchEvents.y;
										touchEndX = touchEvents.x;

									  //$('body').append('<span style="position:fixed; top: 250px; left: 20px; z-index:88; font-size: 25px; color: #000;">touchEndY: ' + touchEndY  + '</div>');

										//X movement bigger than Y movement?
										if (options.direction === 'horizontal' && Math.abs(touchStartX - touchEndX) > (Math.abs(touchStartY - touchEndY))) {
											//is the movement greater than the minimum resistance to scroll?
											if (Math.abs(touchStartX - touchEndX) > (container.width() / 100 * options.touchSensitivity)) {
												if (touchStartX > touchEndX) {
													scrolling('down', scrollable);
												} else if (touchEndX > touchStartX) {
													scrolling('up', scrollable);
												}
											}
										} else {
											if (Math.abs(touchStartY - touchEndY) > (container.height() / 100 * options.touchSensitivity)) {
												if (touchStartY > touchEndY) {
													scrolling('down', scrollable);
												} else if (touchEndY > touchStartY) {
													scrolling('up', scrollable);
												}
											}
										}
									}
								}
							}

							/**
							 * recursive function to loop up the parent nodes to check if one of them exists in options.normalScrollElements
							 * Currently works well for iOS - Android might need some testing
							 * @param  {Element} el  target element / jquery selector (in subsequent nodes)
							 * @param  {int}     hop current hop compared to options.normalScrollElementTouchThreshold
							 * @return {boolean} true if there is a match to options.normalScrollElements
							 */
							function checkParentForNormalScrollElement (el, hop) {
								hop = hop || 0;
								var parent = $(el).parent();

								if (hop < options.normalScrollElementTouchThreshold &&
									parent.is(options.normalScrollElements) ) {
									return true;
								} else if (hop == options.normalScrollElementTouchThreshold) {
									return false;
								} else {
									return checkParentForNormalScrollElement(parent, ++hop);
								}
							}


							/**
							* Creates a vertical navigation bar.
							*/
							function addVerticalNavigation(){
								$('body').append('<div id="pp-nav"><ul></ul></div>');
								var nav = $('#pp-nav');

								nav.css('color', options.navigation.textColor);

								nav.addClass(options.navigation.position);

								for(var cont = 0; cont < $('.pp-section').length; cont++){
									var link = '';
									if(options.anchors.length){
										link = options.anchors[cont];
									}
									if(options.navigation.tooltips !== 'undefined'){
										var tooltip = options.navigation.tooltips[cont];
										if(typeof tooltip === 'undefined'){
											tooltip = '';
										}
									}

									nav.find('ul').append('<li data-tooltip="' + tooltip + '"><a href="#' + link + '"><span></span></a></li>');
								}

								nav.find('span').css('border-color', options.navigation.bulletsColor);
							}

							/**
							* Scrolls to the section when clicking the navigation bullet
							*/
							$(document).on('click touchstart', '#pp-nav a', function(e){
								e.preventDefault();
								var index = $(this).parent().index();

								scrollPage($('.pp-section').eq(index));
							});

							/**
							* Navigation tooltips
							*/
							$(document).on({
								mouseenter: function(){
									var tooltip = $(this).data('tooltip');
									$('<div class="pp-tooltip ' + options.navigation.position +'">' + tooltip + '</div>').hide().appendTo($(this)).fadeIn(200);
								},
								mouseleave: function(){
									$(this).find('.pp-tooltip').fadeOut(200, function() {
										$(this).remove();
									});
								}
							}, '#pp-nav li');

							 /**
							 * Activating the website navigation dots according to the given slide name.
							 */
							function activateNavDots(name, sectionIndex){
								if(options.navigation){
									$('#pp-nav').find('.active').removeClass('active');
									if(name){
										$('#pp-nav').find('a[href="#' + name + '"]').addClass('active');
									}else{
										$('#pp-nav').find('li').eq(sectionIndex).find('a').addClass('active');
									}
								}
							}

							/**
							 * Activating the website main menu elements according to the given slide name.
							 */
							function activateMenuElement(name){
								if(options.menu){
									$(options.menu).find('.active').removeClass('active');
									$(options.menu).find('[data-menuanchor="'+name+'"]').addClass('active');
								}
							}

							/**
							* Checks for translate3d support
							* @return boolean
							* http://stackoverflow.com/questions/5661671/detecting-transform-translate3d-support
							*/
							function support3d() {
								var el = document.createElement('p'),
									has3d,
									transforms = {
										'webkitTransform':'-webkit-transform',
										'OTransform':'-o-transform',
										'msTransform':'-ms-transform',
										'MozTransform':'-moz-transform',
										'transform':'transform'
									};

								// Add it to the body to get the computed style.
								document.body.insertBefore(el, null);

								for (var t in transforms) {
									if (el.style[t] !== undefined) {
										el.style[t] = 'translate3d(1px,1px,1px)';
										has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]);
									}
								}

								document.body.removeChild(el);

								return (has3d !== undefined && has3d.length > 0 && has3d !== 'none');
							}

							/**
							* Gets the translate3d property to apply when using css3:true depending on the `direction` option.
							*/
							function getTranslate3d(){
								if (options.direction !== 'vertical') {
									  return 'translate3d(-100%, 0px, 0px)';
								}

								return 'translate3d(0px, -100%, 0px)';
							}

						};
					})(jQuery, document, window);
			},
			finalize: function() {
				// JavaScript to be fired on all pages, after page specific JS is fired

				
			}
		},
		// Home page
		'home': {

			init: function() {
				// JavaScript to be fired on the home page
				
					
					
					
					$(".slick").slick({
						infinite: true,
						fade: true,
						dots: true,	
						slidesToScroll: 1,	
						autoplay: true,
						autoplaySpeed: 2000,
					});
					(function () {
						detectPortrait();
						$(window).resize(function() {
							detectPortrait(".main");
						});


						function detectPortrait(mainDiv) {
							if (screen.height < 450) {
								$('body').addClass("landscape");
							}
							else {
								$('.main').pagepiling({
									anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'footer'],
									menu: '#menu',
									scrollBar:true,
									afterLoad: function(anchorLink, index){
										if(anchorLink == 'page1'){
											$('#pp-nav li a span, .pp-slidesNav li a span').attr('id', 'circle-white-child');
											$('#pp-nav li .active span, .pp-slidesNav .active span').attr('id', 'circle-white');
										}
										if(anchorLink == 'page2'){
											$('#pp-nav li a span, .pp-slidesNav li a span').attr('id', 'circle-black-child');
											$('#pp-nav li .active span, .pp-slidesNav .active span').attr('id', 'circle-black');
										}
										if(anchorLink == 'page3'){
											
											$('#pp-nav li a span, .pp-slidesNav li a span').attr('id', 'circle-white-child');
											$('#pp-nav li .active span, .pp-slidesNav .active span').attr('id', 'circle-white');
										}
										if(anchorLink == 'page4'){
											$('#pp-nav li a span, .pp-slidesNav li a span').attr('id', 'circle-black-child');
											$('#pp-nav li .active span, .pp-slidesNav .active span').attr('id', 'circle-black');
										}
										//using anchorLink
										if(anchorLink == 'page5'){
											$('#pp-nav li a span, .pp-slidesNav li a span').attr('id', 'circle-white-child');
											$('#pp-nav li .active span, .pp-slidesNav .active span').attr('id', 'circle-white');
										}
										//using anchorLink
										if(anchorLink == 'footer'){
											
											$('#pp-nav li a span, .pp-slidesNav li a span').attr('id', 'circle-black-child');
											$('#pp-nav li .active span, .pp-slidesNav .active span').attr('id', 'circle-black');
											$(".bg-portfolio img").outerWidth($(".Overlay-portfolio, .info-item-portfolio").outerWidth());
										}
									}
									
								});
							}
						}
					})();

				
			},
			finalize: function() {
				// JavaScript to be fired on the home page, after the init JS
			}
		},
		// About us page, note the change from about-us to about_us.
		'faq': {
			init: function() {
				$(function() {
				
				    $('.accordian_box .accordian').click(function() {
				    	if ( $(this).hasClass('active') ) {
					        $(this).removeClass('active');
					    } else {
					        $('.accordian_box .accordian.active').removeClass('active');
					        $(this).addClass('active');    
					    }
				    });

				});

				
			}
		},
		'features': {
			init: function() {
				$(function() {
				   
					
					(function () {
						detectPortrait();
						$(window).resize(function() {
							detectPortrait(".main");
						});


						function detectPortrait(mainDiv) {
							if (screen.height < 450) {
								$('body').addClass("landscape");
							}
							else {
								$('.main').pagepiling({
									anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9', 'page10', 'page11', 'page12'],
									menu: '#menu',
									scrollBar:true,
									afterLoad: function(anchorLink, index){
										if(anchorLink == 'page1'){
											$('#pp-nav li a span, .pp-slidesNav li a span').attr('id', 'circle-white-child');
											$('#pp-nav li .active span, .pp-slidesNav .active span').attr('id', 'circle-white');
										}
										if(anchorLink == 'page2'){
											$('#pp-nav li a span, .pp-slidesNav li a span').attr('id', 'circle-black-child');
											$('#pp-nav li .active span, .pp-slidesNav .active span').attr('id', 'circle-black');
										}
										if(anchorLink == 'page3'){
											$('#pp-nav li a span, .pp-slidesNav li a span').attr('id', 'circle-white-child');
											$('#pp-nav li .active span, .pp-slidesNav .active span').attr('id', 'circle-white');
										}
										if(anchorLink == 'page4'){
											$('#pp-nav li a span, .pp-slidesNav li a span').attr('id', 'circle-black-child');
											$('#pp-nav li .active span, .pp-slidesNav .active span').attr('id', 'circle-black');
										}
										if(anchorLink == 'page5'){
											$('#pp-nav li a span, .pp-slidesNav li a span').attr('id', 'circle-white-child');
											$('#pp-nav li .active span, .pp-slidesNav .active span').attr('id', 'circle-white');
										}
										if(anchorLink == 'footer'){
											$('#pp-nav li a span, .pp-slidesNav li a span').attr('id', 'circle-black-child');
											$('#pp-nav li .active span, .pp-slidesNav .active span').attr('id', 'circle-black');
											$(".bg-portfolio img").outerWidth($(".Overlay-portfolio, .info-item-portfolio").outerWidth());
										}
									}
									
								});
							}
						}
					})();

				});

				
			}
		},
		'pricing': {
			init: function() {
				$(function() {
					(function () {
						detectPortrait();
						$(window).resize(function() {
							detectPortrait(".main");
						});
						function detectPortrait(mainDiv) {
							if (screen.height < 450) {
								$('body').addClass("landscape");
							}
							else {
								$('.main').pagepiling({
									anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9', 'page10', 'page11', 'page12'],
									menu: '#menu',
									scrollBar:true,
									afterLoad: function(anchorLink, index){
										if(anchorLink == 'page1'){
											$('#pp-nav li a span, .pp-slidesNav li a span').attr('id', 'circle-white-child');
											$('#pp-nav li .active span, .pp-slidesNav .active span').attr('id', 'circle-white');
										}
										if(anchorLink == 'page2'){
											$('#pp-nav li a span, .pp-slidesNav li a span').attr('id', 'circle-black-child');
											$('#pp-nav li .active span, .pp-slidesNav .active span').attr('id', 'circle-black');
										}
										if(anchorLink == 'page3'){
											$('#pp-nav li a span, .pp-slidesNav li a span').attr('id', 'circle-white-child');
											$('#pp-nav li .active span, .pp-slidesNav .active span').attr('id', 'circle-white');
										}
										if(anchorLink == 'page4'){
											$('#pp-nav li a span, .pp-slidesNav li a span').attr('id', 'circle-black-child');
											$('#pp-nav li .active span, .pp-slidesNav .active span').attr('id', 'circle-black');										   
										}
										if(anchorLink == 'page5'){											
											$('#pp-nav li a span, .pp-slidesNav li a span').attr('id', 'circle-white-child');
											$('#pp-nav li .active span, .pp-slidesNav .active span').attr('id', 'circle-white');
										}
										if(anchorLink == 'footer'){
											$('#pp-nav li a span, .pp-slidesNav li a span').attr('id', 'circle-black-child');
											$('#pp-nav li .active span, .pp-slidesNav .active span').attr('id', 'circle-black');
											$(".bg-portfolio img").outerWidth($(".Overlay-portfolio, .info-item-portfolio").outerWidth());
										}
									}
								});
							}
						}
					})();

				});
			}
		},
		'insurance': {
			init: function() {
				(function () {
						detectPortrait();
						$(window).resize(function() {
							detectPortrait(".main");
						});
						function detectPortrait(mainDiv) {
							if (screen.height < 450) {
								$('body').addClass("landscape");
							}
							else {
								$('.main').pagepiling({
									anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9', 'page10', 'page11', 'page12'],
									menu: '#menu',
									scrollBar:true,
									afterLoad: function(anchorLink, index){
										if(anchorLink == 'page1'){
											$('#pp-nav li a span, .pp-slidesNav li a span').attr('id', 'circle-white-child');
											$('#pp-nav li .active span, .pp-slidesNav .active span').attr('id', 'circle-white');
										}
										if(anchorLink == 'page2'){
											$('#pp-nav li a span, .pp-slidesNav li a span').attr('id', 'circle-black-child');
											$('#pp-nav li .active span, .pp-slidesNav .active span').attr('id', 'circle-black');
										}
										if(anchorLink == 'page3'){
											$('#pp-nav li a span, .pp-slidesNav li a span').attr('id', 'circle-white-child');
											$('#pp-nav li .active span, .pp-slidesNav .active span').attr('id', 'circle-white');
										}
										if(anchorLink == 'page4'){
											$('#pp-nav li a span, .pp-slidesNav li a span').attr('id', 'circle-black-child');
											$('#pp-nav li .active span, .pp-slidesNav .active span').attr('id', 'circle-black');
										}
										if(anchorLink == 'page5'){
											$('#pp-nav li a span, .pp-slidesNav li a span').attr('id', 'circle-white-child');
											$('#pp-nav li .active span, .pp-slidesNav .active span').attr('id', 'circle-white');
										}
										if(anchorLink == 'footer'){
											$('#pp-nav li a span, .pp-slidesNav li a span').attr('id', 'circle-black-child');
											$('#pp-nav li .active span, .pp-slidesNav .active span').attr('id', 'circle-black');
											$(".bg-portfolio img").outerWidth($(".Overlay-portfolio, .info-item-portfolio").outerWidth());
										}
									}
									
								});
							}
						}
					})();
			}
		},
		'white_label': {
			init: function() {
				(function () {
						detectPortrait();
						$(window).resize(function() {
							detectPortrait(".main");
						});
						function detectPortrait(mainDiv) {
							if (screen.height < 450) {
								$('body').addClass("landscape");
							}
							else {
								$('.main').pagepiling({
									anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9', 'page10', 'page11', 'page12'],
									menu: '#menu',
									scrollBar:true,
									afterLoad: function(anchorLink, index){
										if(anchorLink == 'page1'){
											$('#pp-nav li a span, .pp-slidesNav li a span').attr('id', 'circle-white-child');
											$('#pp-nav li .active span, .pp-slidesNav .active span').attr('id', 'circle-white');
										}
										if(anchorLink == 'page2'){
											$('#pp-nav li a span, .pp-slidesNav li a span').attr('id', 'circle-black-child');
											$('#pp-nav li .active span, .pp-slidesNav .active span').attr('id', 'circle-black');
										}
										if(anchorLink == 'page3'){
											$('#pp-nav li a span, .pp-slidesNav li a span').attr('id', 'circle-white-child');
											$('#pp-nav li .active span, .pp-slidesNav .active span').attr('id', 'circle-white');
										}
										if(anchorLink == 'page4'){
											$('#pp-nav li a span, .pp-slidesNav li a span').attr('id', 'circle-black-child');
											$('#pp-nav li .active span, .pp-slidesNav .active span').attr('id', 'circle-black');
										}
										if(anchorLink == 'page5'){
											$('#pp-nav li a span, .pp-slidesNav li a span').attr('id', 'circle-white-child');
											$('#pp-nav li .active span, .pp-slidesNav .active span').attr('id', 'circle-white');
										}
										if(anchorLink == 'footer'){
											$('#pp-nav li a span, .pp-slidesNav li a span').attr('id', 'circle-black-child');
											$('#pp-nav li .active span, .pp-slidesNav .active span').attr('id', 'circle-black');
											$(".bg-portfolio img").outerWidth($(".Overlay-portfolio, .info-item-portfolio").outerWidth());
										}
									}
									
								});
							}
						}
					})();
			}
		},
		'about_us': {
			init: function() {
				// JavaScript to be fired on the about us page
			}
		}

	};
	var UTIL = {
		fire: function(func, funcname, args) {
			var fire;
			var namespace = Hyperdrive;
			funcname = (funcname === undefined) ? 'init' : funcname;
			fire = func !== '';
			fire = fire && namespace[func];
			fire = fire && typeof namespace[func][funcname] === 'function';

			if (fire) {
				namespace[func][funcname](args);
			}
		},
		loadEvents: function() {
			// Fire common init JS
			UTIL.fire('common');

			// Fire page-specific init JS, and then finalize JS
			$.each(document.body.className.replace(/-/g, '_').split(/\s+/), function(i, classnm) {
				UTIL.fire(classnm);
				UTIL.fire(classnm, 'finalize');
			});

			// Fire common finalize JS
			UTIL.fire('common', 'finalize');
		}
	};

	// Load Events
	$(document).ready(UTIL.loadEvents);

})(jQuery); // Fully reference jQuery after this point.

