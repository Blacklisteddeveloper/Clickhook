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
				<h2>Contact ClickHook</h2>
				<address><strong>Global Headquarters</strong><br/>ClickHook Inc.<br/>Avenue Westend 55,<br/>1800 Long Beach, Cashville</address>
				<address><strong>General enquiries</strong><br/>+12 123 456 7590<br/>07:30 - 18:00 EST<br/>Monday to Friday</address>
				<address><strong>Other Information</strong><br/>+12 123 456 7590<br/>info@clickhook.io</address>
			</div>
			<div class="contact_form">
				<strong>Fill in details here</strong>
				<div class="form">
					<form action="#" method="post" class="wpcf7-form" novalidate="novalidate">
						<input type="text" name="text-694" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" id="FullName" aria-required="true" aria-invalid="false" placeholder="Full Name" />
						<input type="text" name="text-695" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" id="Contactname" aria-required="true" aria-invalid="false" placeholder="Company Name" />
						<input type="text" name="text-696" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" id="Phone" aria-required="true" aria-invalid="false" placeholder="Phone Number" />
						<input type="text" name="text-697" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" id="email" aria-required="true" aria-invalid="false" placeholder="Email ID" />
						<input type="text" name="text-698" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" id="email" aria-required="true" aria-invalid="false" placeholder="Your Message" />
						<input type="submit" value="I AM A CUSTOMER" class="wpcf7-form-control wpcf7-submit  " id="IAMACUSTOMER" />
						<input type="submit" value="I WANT A DEMO" class="wpcf7-form-control wpcf7-submit black" id="IWANTADEMO" />
					</form>
				</div>
			</div>
		</div>
	  </div>
	</div>
</section>
<?php
get_footer();
