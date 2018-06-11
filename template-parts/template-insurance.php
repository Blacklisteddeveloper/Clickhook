	<?php
/**
 * Template Name: Insurance Page
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
			<div class="middle">
				<div class="circle">
					<img src="<?php bloginfo('template_url'); ?>/assets/images/umbrella.gif" class="graphic" alt="" />
				</div>
				<div class="content">
					<div class="centercontent">
						<h2><?php the_field('heading_1',$page_id); ?></h2>
						<p><?php the_field('subheading_1',$page_id); ?></p>
						<a class="showcase" data-rel="lightcase" href="https://player.vimeo.com/video/272254151?autoplay=1"><i class="fa fa-play"></i><span>Play Now</span></a>
					</div>
				</div>
			</div>
		</aside>
		<aside class="page2 pages" data-menuanchor="page2">
			<div class="contentbox">
				<div class="middle-cont">
					<div class="content">
						<h2><?php the_field('heading_2',$page_id); ?></h2>
						<p><?php the_field('subtitle_2',$page_id); ?></p>
						<div class="box">
							<?php the_field('desciption_2',$page_id); ?>
						</div>
					</div>
					<img src="<?php bloginfo('template_url'); ?>/assets/images/keyHole.gif" class="graphic" alt="" />
				</div>
				<a href="<?php the_field('button_link_2',$page_id); ?>" class="largetxt"><?php the_field('button_text_2',$page_id); ?></a>
			</div>
        </aside>
        <aside class="page3 pages" data-menuanchor="page3">
			<div class="contentbox">
				<div class="middle-cont">
					<div class="client-logo">
						<h2><?php the_field('heading_3',$page_id); ?></h2>
						<ul>
							<?php if( have_rows('client_logo',$page_id) ): while ( have_rows('client_logo',$page_id) ) : the_row(); ?>
								<?php
									$file = get_sub_field('client_logoimage',$page_id); $url = wp_get_attachment_url( $file );
								 ?>
								<li><a href="<?php the_sub_field('client_website_url',$page_id); ?>"><img src="<?php echo $url; ?>" alt="" /></a></li>
							<?php  endwhile; else : endif; ?>
						</ul>
					</div>
				</div>
			</div>
		</aside>
		<aside class="page4 pages" data-menuanchor="page4">
			<div class="contentbox">
				<div class="middle-cont">
					<h2><?php the_field('heading_4',$page_id); ?></h2>
					<div class="content">
						<?php the_field('desciption_4',$page_id); ?>
					</div>
					<img src="<?php bloginfo('template_url'); ?>/assets/images/insurance_3.gif" class="graphic" alt="" />

				</div>
				<a href="<?php the_field('button_link_4',$page_id); ?>" class="largetxt"><?php the_field('button_text_4',$page_id); ?></a>

			</div>
		</aside>
		 <aside class="page5 pages" data-menuanchor="page5">
			<div class="contentbox">
				<section>
					<ul class="testimonials">
						<li class="testimonial">
							<p><?php the_field('testimonial_text_4',$page_id); ?></p>
							<span><?php the_field('testimonial_auther_4',$page_id); ?></span>
							<em><?php the_field('designation_&_company_name_2',$page_id); ?></em>
						</li>
						<li class="testimonial">
							<p><?php the_field('testimonial_text_42',$page_id); ?></p>
							<span><?php the_field('testimonial_auther_42',$page_id); ?></span>
							<em><?php the_field('designation_&_company_name_42',$page_id); ?></em>
						</li>
					</ul>
					<ul class="testimonials mobile slick">
						<li class="testimonial">
							<p><?php the_field('testimonial_text_4',$page_id); ?></p>
							<span><?php the_field('testimonial_auther_4',$page_id); ?></span>
							<em><?php the_field('designation_&_company_name_2',$page_id); ?></em>
						</li>
						<li class="testimonial">
							<p><?php the_field('testimonial_text_42',$page_id); ?></p>
							<span><?php the_field('testimonial_auther_42',$page_id); ?></span>
							<em><?php the_field('designation_&_company_name_42',$page_id); ?></em>
						</li>
					</ul>
				</section>
			</div>
		</aside>
		<aside class="page6 pages" data-menuanchor="page6">
			<div class="contentbox">
				<div class="middle-cont">
					<div class="contact_form">
						<h2><?php the_field('form_title_6',$page_id); ?></h2>
						<strong><?php the_field('form_subtitle_6',$page_id); ?></strong>
							<?php echo do_shortcode('[contact-form-7 id="535" title="Pricing Form"]');?>
					</div>
				</div>
			</div>
		</aside>
	  </div>
</div>
<?php get_footer();
