<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package clickhook
 */

?>

<footer >
		<section>
			<div class="copyright animated bounceInUp"><?php the_field('copy_right_text',option); ?> </div>
			<div class="footernav animated bounceInUp">
				
                <?php 
				
				class cwp_custom_menu_walker extends Walker
{
    public function walk( $elements, $max_depth )
    {
        $list = array ();

        foreach ( $elements as $item )
            $list[] = "<a href='$item->url'>$item->title</a> <span>|</span>";

        return join( "\n", $list );
    }
} wp_nav_menu( array( 'menu_id' => 'Footer-menu', 'container' => '', 'menu' => '', 'walker' => new cwp_custom_menu_walker, 'items_wrap'     => '%3$s' ) );
				
				?>
                
			</div>
			
		</section>
	</footer>
</section>

<div id="rotate" class="rotate"><div class="middle"><?php inline_svg(rotate);?></div></div>
<script type="text/javascript" src="<?php bloginfo('template_url'); ?>/assets/js/jquery-1.9.1.js"></script>
<script type="text/javascript" src="<?php bloginfo('template_url'); ?>/assets/js/main.js"></script> 

<?php wp_footer(); ?>

</body>
</html>
