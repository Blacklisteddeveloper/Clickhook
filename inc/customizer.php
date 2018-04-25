<?php
/**
 * clickhook Theme Customizer
 *
 * @package clickhook
 */

/**
 * Add postMessage support for site title and description for the Theme Customizer.
 *
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 */
function clickhook_customize_register( $wp_customize ) {
	$wp_customize->get_setting( 'blogname' )->transport         = 'postMessage';
	$wp_customize->get_setting( 'blogdescription' )->transport  = 'postMessage';
	$wp_customize->get_setting( 'header_textcolor' )->transport = 'postMessage';

	if ( isset( $wp_customize->selective_refresh ) ) {
		$wp_customize->selective_refresh->add_partial( 'blogname', array(
			'selector'        => '.site-title a',
			'render_callback' => 'clickhook_customize_partial_blogname',
		) );
		$wp_customize->selective_refresh->add_partial( 'blogdescription', array(
			'selector'        => '.site-description',
			'render_callback' => 'clickhook_customize_partial_blogdescription',
		) );
	}
}
add_action( 'customize_register', 'clickhook_customize_register' );

/**
 * Render the site title for the selective refresh partial.
 *
 * @return void
 */
function clickhook_customize_partial_blogname() {
	bloginfo( 'name' );
}

/**
 * Render the site tagline for the selective refresh partial.
 *
 * @return void
 */
function clickhook_customize_partial_blogdescription() {
	bloginfo( 'description' );
}

/**
 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
 */
function clickhook_customize_preview_js() {
	
}
add_action( 'customize_preview_init', 'clickhook_customize_preview_js' );



add_filter( 'body_class','halfhalf_body_class' );
function halfhalf_body_class( $classes ) {
 
    if ( is_page_template( 'page-halfhalf.php' ) ) {
        $classes[] = 'halfhalf-page';
    }
     
    return $classes;
     
}



function add_slug_body_class( $classes ) {
global $post;
if ( isset( $post ) ) {
$classes[] = $post->post_name;
}
return $classes;
}
add_filter( 'body_class', 'add_slug_body_class' );