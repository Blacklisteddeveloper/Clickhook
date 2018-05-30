<?php
/**
 * Template Name: Pricing Page
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
			<div class="contentbox">
				<div class="middle-cont">
					<div class="content-top">
						<h2><?php the_field('heading',$page_id); ?></h2>
						<p><?php the_field('desciption',$page_id); ?></p>
					</div>
					<div class="pricing web">

						
						<ul>
							<?php if( have_rows('pricing_section',$page_id) ): while ( have_rows('pricing_section',$page_id) ) : the_row(); ?>
								<li class="list">
								<div class="box">
									<i><?php $filesvg = get_sub_field('icon_select',$page_id); inline_svg($filesvg);?></i>
									<div class="title">
										<h3><?php the_sub_field('pricing_title',$page_id); ?></h3>
										<?php if(get_sub_field('pricing_description',$page_id)) {?>
											<p><?php the_sub_field('pricing_description',$page_id); ?></p>
										<?php } ?>
									</div>
									<ul>
										<?php if( have_rows('pricing_list',$page_id) ): while ( have_rows('pricing_list',$page_id) ) : the_row(); ?>
											<li><?php the_sub_field('point',$page_id); ?></li>
										<?php  endwhile; else : endif; ?>
									</ul>
									<span><?php the_sub_field('pricing_price',$page_id); ?></span>
								</div>
								<a href="<?php the_sub_field('get_started_link',$page_id); ?>" class="buttom">GET STARTED</a>
							</li>
							<?php  endwhile; else : endif; ?>
						</ul>
					</div>
					<div class="pricing mobile">
						<div class="slick">
								<?php if( have_rows('pricing_section',$page_id) ): while ( have_rows('pricing_section',$page_id) ) : the_row(); ?>
								<div class="list">
								<div class="box">
									<i><?php $filesvg = get_sub_field('icon_select',$page_id); inline_svg($filesvg);?></i>
									<div class="title">
										<h3><?php the_sub_field('pricing_title',$page_id); ?></h3>
										<?php if(get_sub_field('pricing_description',$page_id)) {?>
											<p><?php the_sub_field('pricing_description',$page_id); ?></p>
										<?php } ?>
									</div>
									<ul>
										<?php if( have_rows('pricing_list',$page_id) ): while ( have_rows('pricing_list',$page_id) ) : the_row(); ?>
											<li><?php the_sub_field('point',$page_id); ?></li>
										<?php  endwhile; else : endif; ?>
									</ul>
									<span><?php the_sub_field('pricing_price',$page_id); ?></span>
								</div>
								<a href="<?php the_sub_field('get_started_link',$page_id); ?>" class="buttom">GET STARTED</a>
							</div>
							<?php  endwhile; else : endif; ?>
						</div>
					</div>
				</div>
			</div>
		</aside>
		<aside class="page2 pages" data-menuanchor="page2">
			<div class="contentbox">
				<div class="middle-cont">
					<div class="content-top">
						<h2><?php the_field('heading_2',$page_id); ?></h2>
						<div class="box">
							<?php the_field('desciption_2',$page_id); ?>
						</div>
						<div class="box last">
							<?php the_field('desciption_2_right',$page_id); ?>
						</div>
					</div>
				</div>
			</div>
        </aside>
		<aside class="page3 pages" data-menuanchor="page3">
			<div class="contentbox">
				<div class="middle-cont">
					<div class="contact_form">
						<h2><?php the_field('form_heading',$page_id); ?></h2>
						<strong><?php the_field('form_subheading',$page_id); ?></strong>
							<?php echo do_shortcode('[contact-form-7 id="535" title="Pricing Form"]');?>
					</div>
				</div>
			</div>
		</aside>
	  </div>
</div>
<?php get_footer();
