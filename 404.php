<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package clickhook
 */

get_header();
?>


<div id="wrapper">
  <div class="main">
	<aside class="pages" >
		<div class="contentbox">
			<div class="middle-cont">
				<div class="content">
					<h1><?php esc_html_e( 'Oops! That page can&rsquo;t be found.', 'clickhook' ); ?></h1>
                    <p><?php esc_html_e( 'It looks like nothing was found at this location. Maybe try one of the links below.', 'clickhook' ); ?></p>
                    <a href="<?php bloginfo( 'url' ); ?>">Back To Home</a>
				</div>
			</div>
		</div>
    </aside>
  </div>
</div>
<?php
get_footer();
