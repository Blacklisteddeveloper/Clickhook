<?php
/**
 * Template Name: White Label Page
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
					<img src="<?php bloginfo('template_url'); ?>/assets/images/whitelabel1.png" class="graphic" alt="" />
				</div>
				<div class="content">
					<div class="centercontent">
						<h2><?php the_field('heading_1',$page_id); ?></h2>
						<p><?php the_field('description_1',$page_id); ?></p>
					</div>
				</div>
			</div>
		</aside>
		<aside class="page2 pages" data-menuanchor="page2">
			<div class="contentbox">
				<div class="middle-cont">
					<div class="content">
						<h2><?php the_field('heading_2',$page_id); ?></h2>
						<img src="<?php the_field('image_2',$page_id); ?>" class="graphic" alt="" />
					</div>
					<div class="box">
						<?php the_field('description_2',$page_id); ?>
					</div>
				</div>
			</div>
        </aside>
        <aside class="page3 pages" data-menuanchor="page3">
			<div class="middle">
				<div class="circle">
					
				</div>
				<div class="content">
					<div class="centercontent">
						<h2><?php the_field('heading_3',$page_id); ?></h2>
						<?php the_field('description_3',$page_id); ?>
					</div>
				</div>
			</div>
		</aside>
		<aside class="page4 pages" data-menuanchor="page4">
			<div class="contentbox">
				<div class="middle-cont">
					<div class="content">
						<h2><?php the_field('heading_4',$page_id); ?></h2>
						<div class="box">
							<?php the_field('description_4',$page_id); ?>
						</div>
					</div>
					<div class="listbox" >
						<ul>
							<li>
								<div class="number">01</div>
								<div class="desc">
									<h3><?php the_field('title_4_1',$page_id); ?> <span><?php the_field('title_blue_4_1',$page_id); ?></span></h3>
									<p><?php the_field('small_description_4',$page_id); ?></p>
								</div>
							</li>
							<li>
								<div class="number">02</div>
								<div class="desc">
									<h3><?php the_field('title_4_2',$page_id); ?> <span><?php the_field('title_blue_4_2',$page_id); ?></span></h3>
									<p><?php the_field('small_description_42',$page_id); ?></p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</aside>
		<aside class="page5 pages" data-menuanchor="page5">
			<div class="contentbox">
				<div class="middle-cont">
					<div class="content">
						<h2><?php the_field('heading_5',$page_id); ?></h2>
						<div class="box">
							<div class="comment">
								<p><?php the_field('testimonial_content',$page_id); ?></p>
							</div>
							<?php the_field('desciption_5',$page_id); ?>
						</div>
					</div>
				</div>
			</div>
		</aside>
		<aside class="page6 pages" data-menuanchor="page6">
			<div class="contentbox">
				<div class="middle-cont">
					<div class="content">
						<div class="listbox" >
						<ul>
							<li class="left-align">
								<div class="icon icon1"></div>
								<div class="desc">
									<h3><?php the_field('title_6',$page_id); ?></h3>
									<p><?php the_field('desciption_6',$page_id); ?></p>
								</div>
							</li>
							<li class="right-align">
								<div class="icon icon2 mobile"></div>
								<div class="desc">
									<h3><?php the_field('title_6_2',$page_id); ?></h3>
									<p><?php the_field('desciption_6_2',$page_id); ?></p>
								</div>
								<div class="icon icon2 web"></div>
							</li>
						</ul>
					</div>
					</div>
				</div>
			</div>
		</aside>
		<aside class="page7 pages" data-menuanchor="page7">
			<div class="contentbox">
				<div class="middle-cont">
					<div class="contact_form">
						<h2><?php the_field('form_title_7',$page_id); ?></h2>
						<strong><?php the_field('form_sub_title_7',$page_id); ?></strong>
							<?php echo do_shortcode('[contact-form-7 id="535" title="Pricing Form"]');?>
					</div>
				</div>
			</div>
		</aside>
	  </div>
</div>
<?php get_footer();
