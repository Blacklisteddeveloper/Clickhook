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
				
				// for header animation
				var canvas = document.querySelector(".particle-grid");
				canvas.width = window.innerWidth;
				canvas.height = window.innerHeight;
				var ctx = canvas.getContext("2d");

				var TAU = 2 * Math.PI;

				times = [];
				function loop() {
				  var startTime = performance .now();
				  ctx.clearRect(0, 0, canvas.width, canvas.height);
				  update();
				  draw();
				  requestAnimationFrame(loop);
				}

				function Ball (startX, startY, startVelX, startVelY) {
				  this.x = startX || Math.random() * canvas.width;
				  this.y = startY || Math.random() * canvas.height;
				  this.vel = {
					x: startVelX || Math.random() * 2 - 1,
					y: startVelY || Math.random() * 2 - 1
				  };
				  this.update = function(canvas) {
					if (this.x > canvas.width + 50 || this.x < -50) {
					  this.vel.x = -this.vel.x;
					}
					if (this.y > canvas.height + 50 || this.y < -50) {
					  this.vel.y = -this.vel.y;
					}
					this.x += this.vel.x;
					this.y += this.vel.y;
				  };
				  this.draw = function(ctx, can) {
					ctx.beginPath();
					if (distMouse(this) > 100) {
					  ctx.fillStyle = "#8f9aa3";
					  ctx.globalAlpha =  .2;
					} else {
					  ctx.fillStyle = '#36c0cc';
					  ctx.globalAlpha =  .6;
					}
					ctx.arc((0.5 + this.x) | 0, (0.5 + this.y) | 0, 3, 0, TAU, false);
					ctx.fill();
				  }
				}

				var balls = [];
				for (var i = 0; i < canvas.width * canvas.height / (65*65); i++) {
				  balls.push(new Ball(Math.random() * canvas.width, Math.random() * canvas.height));
				}

				var lastTime = Date.now();
				function update() {
				  var diff = Date.now() - lastTime;
				  for (var frame = 0; frame * 16.6667 < diff; frame++) {
					for (var index = 0; index < balls.length; index++) {
					  balls[index].update(canvas);
					}
				  }
				  lastTime = Date.now();
				}
				var mouseX = -1e9, mouseY = -1e9;
				document.addEventListener('mousemove', function(event) {
				  mouseX = event.clientX;
				  mouseY = event.clientY;
				});

				function distMouse(ball) {
				  return Math.hypot(ball.x - mouseX, ball.y - mouseY);
				}

				function draw() {
				  for (var index = 0; index < balls.length; index++) {
					var ball = balls[index];
					ball.draw(ctx, canvas);
					ctx.beginPath();
					for (var index2 = balls.length - 1; index2 > index; index2 += -1) {
					  var ball2 = balls[index2];
				  var dist = Math.hypot(ball.x - ball2.x, ball.y - ball2.y);
						if (dist < 100) {
						  if (distMouse(ball) > 100) {
							ctx.strokeStyle = "#8f9aa3";
							ctx.globalAlpha = .2;
						  } else {
							ctx.strokeStyle = '#36c0cc';
							ctx.globalAlpha =  .6;
						  }
						  ctx.lineWidth = "2px";
						  ctx.moveTo((0.5 + ball.x) | 0, (0.5 + ball.y) | 0);
						  ctx.lineTo((0.5 + ball2.x) | 0, (0.5 + ball2.y) | 0);
						}
				}
					ctx.stroke();
				  }
				}

				// Start
				loop();
			},
			finalize: function() {
				// JavaScript to be fired on all pages, after page specific JS is fired
			}
		},
		// Home page
		'home': {
			init: function() {
				// JavaScript to be fired on the home page
			},
			finalize: function() {
				// JavaScript to be fired on the home page, after the init JS
			}
		},
		// About us page, note the change from about-us to about_us.
		'about_us': {
			init: function() {
				// JavaScript to be fired on the about us page
			}
		}
	};

	// The routing fires all common scripts, followed by the page specific scripts.
	// Add additional events for more control over timing e.g. a finalize event
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

