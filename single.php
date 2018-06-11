<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package clickhook
 */

get_header();
?>

	<div id="wrapper">
	<div class="cloudbox">
		<div class="cloud-loop"></div>
	</div>
  <div class="content-page">
	<aside class="page" >
		<div class="contentbox">
			<div class="middle-cont">
				<?php while ( have_posts() ) : the_post();?>
				<div class="content">
					<h1><?php the_title(); ?></h1>
					<div class="entry-meta"><?php clickhook_posted_on(); ?></div><!-- .entry-meta -->
				</div>
				<div class="box">
					<?php the_content();?>
				</div>
			<?php endwhile;?>
			</div>
		</div>
    </aside>
  </div>
</div>

<?php
get_footer();
