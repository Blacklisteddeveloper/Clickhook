<?php
/**
 * Template Name: Contact Page
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package clickhook
 */
get_header();
?>
<section class="contact">
	<div id="wrapper">
	  <div class="main">
		<div class="contentbox">
			<div class="contactdetail">
				<h2><?php the_field('contact_heading',$page_id); ?></h2>
				<address><strong>Global Headquarters</strong><br/><?php the_field('global_headquarters',$page_id); ?></address>
				<address><strong>General enquiries</strong><br/><?php the_field('general_enquiries',$page_id); ?></address>
				<address><strong>Other Information</strong><br/><?php the_field('information_phone',$page_id); ?><br/><?php the_field('information_email',$page_id); ?></address>
			</div>
			<div class="contact_form">
				<strong>Fill in details here</strong>
				<?php echo do_shortcode('[contact-form-7 id="608" title="Contact form 7"]');?>
			</div>
		</div>
	  </div>
	</div>
</section>
<?php
get_footer();
