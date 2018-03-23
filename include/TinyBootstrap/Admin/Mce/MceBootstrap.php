<?php


namespace TinyBootstrap\Admin\Mce;

if ( ! defined('ABSPATH') ) {
	die('FU!');
}

use TinyBootstrap\Core;

class MceBootstrap extends Mce {

	protected $module_name = 'tiny-bootstrap';

	protected $editor_buttons = array(
		'mce_buttons_2' => array(
			'tiny_bootstrap'	=> -15,
		),
	);

	protected $toolbar_css	= false;

	protected $editor_css	= true;

	/**
	 *	@inheritdoc
	 */
	protected function __construct() {


		$bootstrap_classes = array(
			'a,button'	=> array(
				'title'		=> __( 'Link style', 'mcguffin' ),
				'selector'	=> 'A',
				'classes'	=> array(
					array( 'value' => '', 					'text' => __( 'Normal', 'mcguffin' ), ),
					array( 'value' => 'btn btn-primary',	'text' => __( 'Button Primary', 'mcguffin' ), ),
					array( 'value' => 'btn btn-secondary',	'text' => __( 'Button Secondary', 'mcguffin' ), ),
					array( 'value' => 'btn btn-success', 	'text' => __( 'Button Success', 'mcguffin' ), ),
					array( 'value' => 'btn btn-danger', 	'text' => __( 'Button Danger', 'mcguffin' ), ),
					array( 'value' => 'btn btn-warning', 	'text' => __( 'Button Warning', 'mcguffin' ), ),
					array( 'value' => 'btn btn-info', 		'text' => __( 'Button Info', 'mcguffin' ), ),
					array( 'value' => 'btn btn-light', 		'text' => __( 'Button Light', 'mcguffin' ), ),
					array( 'value' => 'btn btn-dark', 		'text' => __( 'Button Dark', 'mcguffin' ), ),
					array( 'text' => '-' ),
					array( 'value' => 'btn btn-outline-primary',	'text' => __( 'Outline Button Primary', 'mcguffin' ), ),
					array( 'value' => 'btn btn-outline-secondary',	'text' => __( 'Outline Button Secondary', 'mcguffin' ), ),
					array( 'value' => 'btn btn-outline-success', 	'text' => __( 'Outline Button Success', 'mcguffin' ), ),
					array( 'value' => 'btn btn-outline-danger', 	'text' => __( 'Outline Button Danger', 'mcguffin' ), ),
					array( 'value' => 'btn btn-outline-warning', 	'text' => __( 'Outline Button Warning', 'mcguffin' ), ),
					array( 'value' => 'btn btn-outline-info', 		'text' => __( 'Outline Button Info', 'mcguffin' ), ),
					array( 'value' => 'btn btn-outline-light', 		'text' => __( 'Outline Button Light', 'mcguffin' ), ),
					array( 'value' => 'btn btn-outline-dark', 		'text' => __( 'Outline Button Dark', 'mcguffin' ), ),
					array( 'text' => '-' ),
					array( 'value' => 'badge badge-primary',	'text' => __( 'Badge Primary', 'mcguffin' ), ),
					array( 'value' => 'badge badge-secondary',	'text' => __( 'Badge Secondary', 'mcguffin' ), ),
					array( 'value' => 'badge badge-success', 	'text' => __( 'Badge Success', 'mcguffin' ), ),
					array( 'value' => 'badge badge-danger', 	'text' => __( 'Badge Danger', 'mcguffin' ), ),
					array( 'value' => 'badge badge-warning', 	'text' => __( 'Badge Warning', 'mcguffin' ), ),
					array( 'value' => 'badge badge-info', 		'text' => __( 'Badge Info', 'mcguffin' ), ),
					array( 'value' => 'badge badge-light', 		'text' => __( 'Badge Light', 'mcguffin' ), ),
					array( 'value' => 'badge badge-dark', 		'text' => __( 'Badge Dark', 'mcguffin' ), ),
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
					array( 'text' => '-' ),
					array( 'value' => 'display-1', 'text' => __( 'Display 1', 'mcguffin' ), ),
					array( 'value' => 'display-2', 'text' => __( 'Display 2', 'mcguffin' ), ),
					array( 'value' => 'display-3', 'text' => __( 'Display 3', 'mcguffin' ), ),
					array( 'value' => 'display-4', 'text' => __( 'Display 4', 'mcguffin' ), ),
				),
			),
			'p,div' 	=> array(
				'title'		=> __( 'Paragraph style', 'mcguffin' ),
				'selector'	=> 'P',
				'classes'	=> array(
					array( 'value' => '', 						'text' => __( 'Normal', 'mcguffin' ), ),
					array( 'value' => 'lead',					'text' => __( 'Lead', 'mcguffin' ), ),
					array( 'text' => '-' ),
					array( 'value' => 'alert alert-primary',	'text' => __( 'Alert Primary', 'mcguffin' ), ),
					array( 'value' => 'alert alert-secondary',	'text' => __( 'Alert Secondary', 'mcguffin' ), ),
					array( 'value' => 'alert alert-light',		'text' => __( 'Alert Light', 'mcguffin' ), ),
					array( 'value' => 'alert alert-dark',		'text' => __( 'Alert Dark', 'mcguffin' ), ),
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
		$this->plugin_params = array(
			'l10n'		=> array(

			),
			'classes'	=> apply_filters( 'tiny_bootstrap_classes', $bootstrap_classes ),
		);

		parent::__construct();
	}
}
