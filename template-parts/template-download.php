<?php
/**
 * Template Name: Download App Page
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package clickhook
 */
get_header();
?>
<div id="wrapper">
	  <div class="main">
		<aside class="page4 download_app pages" > 
			<div class="contentbox">
				<div class="manageleads">
					<div class="imgbox">
						<img src="<?php bloginfo('template_url'); ?>/assets/images/phoneFrame.gif">
					</div>
					<div class="desciption">
						<h3><?php the_field('heading_4',2); ?></h3>
						<p><?php the_field('description_4',2); ?></p>
						<a target="_blank" href="<?php the_field('button_link_1',2); ?>"><img src="<?php bloginfo('template_url'); ?>/assets/images/appavailable-1.png"/></a><a target="_blank" href="<?php the_field('button_link_2',2); ?>"><img src="<?php bloginfo('template_url'); ?>/assets/images/appavailable-2.png"/></a>
					</div>
				</div>
				
			</div>
		</aside>

	  </div>
	</div>
	<?php get_footer();
