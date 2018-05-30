<?php
/**
 * Template Name: Faq Page
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package clickhook
 */
get_header();
?>
<section class="faq">
	<div id="wrapper">
	  <div class="main">
		<div class="contentbox">
			<section class="accordian_box">
				<h2><?php the_title(); ?></h2>
				<?php if( have_rows('faq_list',$page_id) ): while ( have_rows('faq_list',$page_id) ) : the_row(); ?>
				<div class="accordian">
					<h3><?php the_sub_field('faq_title',$page_id); ?></h3>
					<div class="animated bounceInRight">
						<h3><?php the_sub_field('faq_title',$page_id); ?></h3>
						<p><?php the_sub_field('faq_desciption',$page_id); ?></p>
					</div>
				</div>
				<?php  endwhile; else : endif; ?>
			</section>
		</div>
	  </div>
	</div>
</section>
<?php
get_footer();
