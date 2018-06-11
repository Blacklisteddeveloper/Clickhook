<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
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
			<div class="min-cont">
				<?php if ( have_posts() ) : if ( is_home() && ! is_front_page() ) while ( have_posts() ) : the_post(); ?>
				<div class="content">
					<h2><?php the_title( '<h2 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' ); ?></h2>
					<div class="entry-meta"><?php clickhook_posted_on(); ?></div><!-- .entry-meta -->
				 	<?php the_excerpt(); ?>
				</div>
			<?php endwhile;
			the_posts_navigation(); 
			else : endif; ?>
			</div>
			<div class="get_sidebar">
				<?php get_sidebar(); ?>
			</div>
		</div>
    </aside>
  </div>
</div>

	

<?php
get_footer();
