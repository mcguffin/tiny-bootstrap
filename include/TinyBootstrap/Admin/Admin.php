<?php

namespace TinyBootstrap\Admin;

if ( ! defined('ABSPATH') ) {
	die('FU!');
}

use TinyBootstrap\Core;

class Admin extends Core\Singleton {

	/**
	 *	@inheritdoc
	 */
	protected function __construct() {

		add_action( 'admin_init' , array( $this , 'admin_init' ) );

		parent::__construct();
	}


	/**
	 *	Init hook.
	 *
	 *  @action init
	 */
	public function admin_init() {

		$bs_version = apply_filters('tiny_bootstrap_version', 4 );

		if ( intval( $bs_version ) !== 4 ) {
			add_filter( 'tiny_bootstrap_visibiity_classes', array( $this, 'bootstrap_3_classes' ), 5 );
			add_filter( 'tiny_bootstrap_visibiity_classes', array( $this, 'bootstrap_3_visibility_classes' ), 5 );
		}
	}

	/**
	 *	Get Bootstrap 3 class set
	 *
	 *	@filter bootstrap_3_classes
	 *	@return array
	 */
	private function bootstrap_3_classes() {
		return array(
			'a,button'	=> array(
				'title'		=> __( 'Link style', 'mcguffin' ),
				'selector'	=> 'A',
				'classes'	=> array(
					array( 'value' => '', 					'text' => __( 'Normal', 'mcguffin' ), ),
					array( 'value' => 'btn btn-default',	'text' => __( 'Button Default', 'mcguffin' ), ),
					array( 'value' => 'btn btn-primary',	'text' => __( 'Button Primary', 'mcguffin' ), ),
					array( 'value' => 'btn btn-success', 	'text' => __( 'Button Success', 'mcguffin' ), ),
					array( 'value' => 'btn btn-info', 		'text' => __( 'Button Info', 'mcguffin' ), ),
					array( 'value' => 'btn btn-warning', 	'text' => __( 'Button Warning', 'mcguffin' ), ),
					array( 'value' => 'btn btn-danger', 	'text' => __( 'Button Danger', 'mcguffin' ), ),
				),
			),
			'h1,h2,h3,h4,h5,h6'	=> array(
				'title'		=> __( 'Heading style', 'mcguffin' ),
				'selector'	=> 'H1,H2,H3,H4,H5,H6',
				'classes'	=> array(
					array( 'value' => '', 	'text' => __( 'Normal', 'mcguffin' ), ),
					array( 'value' => 'h1', 'text' => __( 'H1', 'mcguffin' ), ),
					array( 'value' => 'h2', 'text' => __( 'H2', 'mcguffin' ), ),
					array( 'value' => 'h3', 'text' => __( 'H3', 'mcguffin' ), ),
					array( 'value' => 'h4', 'text' => __( 'H4', 'mcguffin' ), ),
					array( 'value' => 'h5', 'text' => __( 'H5', 'mcguffin' ), ),
					array( 'value' => 'h6', 'text' => __( 'H6', 'mcguffin' ), ),
				),
			),
			'p' 	=> array(
				'title'		=> __( 'Paragraph style', 'mcguffin' ),
				'selector'	=> 'P',
				'classes'	=> array(
					array( 'value' => '', 						'text' => __( 'Normal', 'mcguffin' ), ),
					array( 'value' => 'lead',					'text' => __( 'Lead', 'mcguffin' ), ),
					array( 'value' => 'alert alert-success',	'text' => __( 'Alert Success', 'mcguffin' ), ),
					array( 'value' => 'alert alert-info',		'text' => __( 'Alert Info', 'mcguffin' ), ),
					array( 'value' => 'alert alert-warning',	'text' => __( 'Alert Warning', 'mcguffin' ), ),
					array( 'value' => 'alert alert-danger',		'text' => __( 'Alert Danger', 'mcguffin' ), ),

				),
			),
			'ul,ol'	=> array(
				'title'		=> __( 'List style', 'mcguffin' ),
				'selector'	=> 'UL,OL',
				'classes'	=> array(
					array( 'value' => '', 				'text' => __( 'Normal', 'mcguffin' ), ),
					array( 'value' => 'list-unstyled', 	'text' => __( 'Unstyled List', 'mcguffin' ), ),
					array( 'value' => 'list-inline', 	'text' => __( 'Inline List', 'mcguffin' ), ),
				),
			),
			'hr'	=> array(
				'title'		=> __( 'Horizontal ruler style', 'mcguffin' ),
				'selector'	=> 'HR',
				'classes'	=> array(
					array( 'value' => '', 		'text' => __( 'Normal', 'mcguffin' ), ),
					array( 'value' => 'small',	'text' => __( 'Small', 'mcguffin' ), ),
				),
			),
			'blockquote'	=>	array(
				'title'		=> __( 'Blockquote', 'mcguffin' ),
				'selector'	=> 'BLOCKQUOTE',
				'classes'	=> array(
					array( 'value' => '', 		'text' => __( 'Normal', 'mcguffin' ), ),
					array( 'value' => 'blockquote-reverse',	'text' => __( 'Reverse', 'mcguffin' ), ),
				),
			),
		);
	}

	/**
	 *	Get Bootstrap 3 visibility classes
	 *
	 *	@filter bootstrap_3_visibility_classes
	 *	@return array
	 */
	private function bootstrap_3_visibility_classes() {
		return array(
			array(
				'value'	=> '',
				'text'	=> __( 'Everywhere', 'tiny-bootstrap' ),
			),
			array(
				'value'	=> 'hidden-xs',
				'text'	=> __( 'Desktop only', 'tiny-bootstrap' ),
			),
			array(
				'value'	=> 'visible-xs',
				'text'	=> __( 'Phones only', 'tiny-bootstrap' ),
			),
		);
	}



}
