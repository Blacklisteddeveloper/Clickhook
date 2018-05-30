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
	<?php wp_head();
		$page_id = get_the_ID();
	 ?>
</head>

<body <?php body_class(); ?> style="overflow:hidden">

<div class="hamburgerbox" id="hamburger" >
	<div class="section ">
		<div class="middle">
			<div class="boximg animated bounceOutUp delay">
				<img src="<?php bloginfo('template_url'); ?>/assets/images/img2.jpg" alt="" />
			</div>
			<div class="navbar animated bounceOutRight delay">
				<ul>
					<?php 
					$my_menu = array(
						'menu_id' => 'Header-menu',
						'menu' => 'main-menu',
						'container' => '',
						'theme_location' => 'Header-menu',
						'items_wrap' => '%3$s' 
					);
					wp_nav_menu( $my_menu );
					?>
					<li class="downloadbtn"><a href="#page4">Download App</a></li>
				</ul>
			</div>
		</div>
	</div>
</div>
<div class="bgbackground"></div>
<div class="hamburgerbox2" ></div>
	<header >
		<div class="logo animated bounceInDown">
			<a href="<?php bloginfo( 'url' ); ?>" title="<?php bloginfo( 'name' ); ?>">
				<img src="<?php the_field('element_logo',option); ?>" alt="" />
			 </a>
		</div>
		<nav class="animated bounceInDown">
			<a href="<?php the_field('header_button_link',option); ?>" class="getdemo"><?php the_field('header_button_text',option); ?></a>
			<div class="hamburger hamburger--spring">
				<div class="hamburger-box">
				  <div class="hamburger-inner"></div>
				</div>
			 </div>	
		</nav>
	</header>
