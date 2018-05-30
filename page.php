<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package clickhook
 */

get_header();
?>
<div id="wrapper">
  <div class="content-page">
	<aside class="page" >
		<div class="contentbox">
			<div class="middle-cont">
				<?php while ( have_posts() ) : the_post();?>
				<div class="content">
					<h1><?php the_title(); ?></h1>
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