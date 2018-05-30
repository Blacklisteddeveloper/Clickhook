<?php
/**
 * Template Name: Home Page
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package clickhook
 */
get_header();

?>

<div id="wrapper">
	  <div class="main">
		<aside class="page1 pages active" data-menuanchor="page1">
			<div class="cloudbox">
				<div class="cloud-loop"></div>
			</div>
			<div class="contentbox">
				<h1><?php the_field('main_title_1',$page_id); ?></h1>
				<div class="imagecenter">
					<img class="web" src="<?php bloginfo('template_url'); ?>/assets/images/homeslide.jpg" width="1207" height="422" alt="" />
					<img class="mobile" src="<?php bloginfo('template_url'); ?>/assets/images/homeslide-mobile.png" alt="" />
				</div>
				<a href="https://leads.clickhook.io/create" class="getdemo">TRY FOR FREE</a>
			</div>
		</aside>
		<aside class="page2 pages" data-menuanchor="page2">
			<div class="middle">
				<div class="contentbox">
					<div class="comment">
						<p><?php the_field('description_2',$page_id); ?></p>
						<span><?php the_field('main_title_2',$page_id); ?></p>
					</div>
					<div class="intro_section">
						<div class="box">
							<ul>
								<?php if( have_rows('listing_box',$page_id) ): while ( have_rows('listing_box',$page_id) ) : the_row(); ?>
								<li><?php the_sub_field('list_point',$page_id); ?></li>
								<?php  endwhile; else : endif; ?>
							</div>
						<div class="box whitebg">
							<?php the_field('content_box3',$page_id); ?>
						</div>
					</div>
				</div>
			</div>
        </aside>
		<aside class="page3 pages" data-menuanchor="page3">
			<div class="middle">
				<div class="contentbox">
					<h3><?php the_field('main_heading',$page_id); ?></h3>
					<span><?php the_field('short_heading',$page_id); ?></span>
					<div class="service">
						<div class="box">
							<i><img src="<?php bloginfo('template_url'); ?>/assets/images/icon1.png"/></i>
							<h4><?php the_field('feature_heading',$page_id); ?></h4>
							<p><?php the_field('feature_content',$page_id); ?></p>
                            <a href="<?php echo get_permalink('11'); ?>" >Learn More...</a>
						</div>
						<div class="box">
							<i><img src="<?php bloginfo('template_url'); ?>/assets/images/icon2.png"/></i>
							<h4><?php the_field('feature_heading_2',$page_id); ?></h4>
							<p><?php the_field('feature_content_2',$page_id); ?></p>
                            <a href="<?php echo get_permalink('11'); ?>" >Learn More...</a>
						</div>
						<div class="box">
							<i><img src="<?php bloginfo('template_url'); ?>/assets/images/icon3.png"/></i>
							<h4><?php the_field('feature_heading_3',$page_id); ?></h4>
							<p><?php the_field('feature_content_3',$page_id); ?></p>
                            <a href="<?php echo get_permalink('11'); ?>" >Learn More...</a>
						</div>
					</div>
					<div class="service mobile slick">
						<div class="box">
							<i><img src="<?php bloginfo('template_url'); ?>/assets/images/icon1.png"/></i>
							<h4><?php the_field('feature_heading',$page_id); ?></h4>
							<p><?php the_field('feature_content',$page_id); ?></p>
                            <a href="<?php echo get_permalink('11'); ?>" >Learn More...</a>
						</div>
						<div class="box">
							<i><img src="<?php bloginfo('template_url'); ?>/assets/images/icon2.png"/></i>
							<h4><?php the_field('feature_heading_2',$page_id); ?></h4>
							<p><?php the_field('feature_content_2',$page_id); ?></p>
                            <a href="<?php echo get_permalink('11'); ?>" >Learn More...</a>
						</div>
						<div class="box">
							<i><img src="<?php bloginfo('template_url'); ?>/assets/images/icon3.png"/></i>
							<h4><?php the_field('feature_heading_3',$page_id); ?></h4>
							<p><?php the_field('feature_content_3',$page_id); ?></p>
                            <a href="<?php echo get_permalink('11'); ?>" class="largetxt">Learn More...</a>
						</div>
					</div>

				</div>
			</div>
		</aside>
		<aside class="page4 pages" data-menuanchor="page4"> 
			<div class="contentbox">
				<div class="manageleads">
					<div class="imgbox">
						<img src="<?php bloginfo('template_url'); ?>/assets/images/phoneFrame.gif">
					</div>
					<div class="desciption">
						<h3><?php the_field('heading_4',$page_id); ?></h3>
						<p><?php the_field('description_4',$page_id); ?></p>
						<a target="_blank" href="<?php the_field('button_link_1',$page_id); ?>"><img src="<?php bloginfo('template_url'); ?>/assets/images/appavailable-1.png"/></a><a target="_blank" href="<?php the_field('button_link_2',$page_id); ?>"><img src="<?php bloginfo('template_url'); ?>/assets/images/appavailable-2.png"/></a>
					</div>
				</div>
				
			</div>
		</aside>
		<aside class="page5 pages" data-menuanchor="page5">
			<div class="contentbox">
				<section>
					<ul class="testimonials">
						<li class="testimonial">
							<p><?php the_field('testimonial_text_1',$page_id); ?></p>
							<span><?php the_field('testimonial_auther_1',$page_id); ?></span>
							<em><?php the_field('designation_&_company_name_1',$page_id); ?></em>
						</li>
						<li class="testimonial">
							<p><?php the_field('testimonial_text_2',$page_id); ?></p>
							<span><?php the_field('testimonial_auther_2',$page_id); ?></span>
							<em><?php the_field('designation_&_company_name_2',$page_id); ?></em>
						</li>
					</ul>
					<ul class="testimonials mobile slick">
						<li class="testimonial">
							<p><?php the_field('testimonial_text_1',$page_id); ?></p>
							<span><?php the_field('testimonial_auther_1',$page_id); ?></span>
							<em><?php the_field('designation_&_company_name_1',$page_id); ?></em>
						</li>
						<li class="testimonial">
							<p><?php the_field('testimonial_text_2',$page_id); ?></p>
							<span><?php the_field('testimonial_auther_2',$page_id); ?></span>
							<em><?php the_field('designation_&_company_name_2',$page_id); ?></em>
						</li>
					</ul>
					<div class="calltoaction">
						<h3><?php the_field('about_detail_title',$page_id); ?></h3>
						<span><?php the_field('about_subtitle',$page_id); ?></span>
						<p><?php the_field('about_desciption',$page_id); ?></p>
						<a href="<?php the_field('about_button_link',$page_id); ?>"><?php the_field('about_button_name',$page_id); ?></a>
					</div>
				</section>
			</div>
		</aside>

		<aside class="footer pages" data-menuanchor="footer">
			<div class="contentbox">
				<div class="copyright">
					<h3><?php the_field('footer_title',option); ?></h3>
					<span><?php the_field('footer_content',option); ?></span>
					<a href="<?php the_field('footer_button',option); ?>">Get Started Now</a>
				</div>
			</div>
		</aside>
	  </div>
	</div><?php
get_footer();
