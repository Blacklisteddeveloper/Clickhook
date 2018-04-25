<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package clickhook
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link href="<?php bloginfo('template_url'); ?>/assets/css/main.css" rel="stylesheet" type="text/css" />
	<link rel="shortcut icon" href="<?php bloginfo('template_url'); ?>/assets/images/chaticon.png" />
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?> style="overflow:hidden">
<div class="hamburgerbox" id="hamburger" >
	<div class="section ">
		<div class="boximg">
			<img src="<?php bloginfo('template_url'); ?>/assets/images/img2.jpg" alt="" />
		</div>
		<div class="navbar">
			<ul>
				<li><a href="#">Login</a></li>
				<li><a href="#">Features</a></li>
				<li><a href="#">Pricing</a></li>
				<li><a href="#">Contact Us</a></li>
				<li class="downloadbtn"><a href="#">Download App</a></li>
			</ul>
		</div>
	</div>
</div>
	<header >
		<div class="logo animated bounceInDown">
			<a href="#">
				<img src="<?php bloginfo('template_url'); ?>/assets/images/logo.png" alt="" />
			 </a>
		</div>
		<nav class="animated bounceInDown">
			<a href="#" class="getdemo">TRY FOR FREE</a>
			<div class="hamburger hamburger--spring">
				<div class="hamburger-box">
				  <div class="hamburger-inner"></div>
				</div>
			 </div>	
		</nav>
	</header>