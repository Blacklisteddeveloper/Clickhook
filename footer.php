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
			<div class="copyright animated bounceInUp">Copyright © ClickHook. A Division of EMethod. </div>
			<div class="footernav animated bounceInUp">
				<a href="#">White Label CRM</a> | 
				<a href="#">Private Label</a>   |   
				<a href="#">Privacy</a>   |   
				<a href="#">Terms of Service</a>   |   
				<a href="#">Insurance</a>   |   
				<a href="#">API Documentation</a>
			</div>
			<a class="chatus" href="#">Chat With Us</a>
		</section>
	</footer>
</section>
<script type="text/javascript" src="<?php bloginfo('template_url'); ?>/assets/js/jquery-1.9.1.js"></script>
<script type="text/javascript" src="<?php bloginfo('template_url'); ?>/assets/js/main.js"></script> 

<?php wp_footer(); ?>

</body>
</html>
