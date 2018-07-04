<?php


namespace TinyBootstrap\Admin\Mce;

if ( ! defined('ABSPATH') ) {
	die('FU!');
}

use TinyBootstrap\Core;

class MceBootstrapVisibility extends Mce {

	protected $module_name = 'tiny-bootstrap-visibility';

	protected $editor_buttons = array(
		'mce_buttons_2' => array(
			'tiny_bootstrap_visibility'	=> false,
		),
	);

	protected $toolbar_css	= false;

	protected $editor_css	= true;

	protected $text_widget = true;

	/**
	 *	@inheritdoc
	 */
	protected function __construct() {

		add_action( 'admin_init', array( $this, 'setup') );

		$this->plugin_params = array();

		parent::__construct();
	}

	/**
	 *	@action admin_init
	 */
	public function setup() {

		$visibility_classes = array(
			array(
				'value'	=> '',
				'text'	=> __( 'Everywhere', 'tiny-bootstrap' ),
			),
			array(
				'value'	=> 'd-none d-sm-block',
				'text'	=> __( 'Desktop only', 'tiny-bootstrap' ),
			),
			array(
				'value'	=> 'd-sm-none',
				'text'	=> __( 'Phones only', 'tiny-bootstrap' ),
			),
		);
		$this->plugin_params = array(
			'l10n'		=> array(
				'devices'				=> __( 'Devices', 'tiny-bootstrap' ),
				'visibility_on_devices'	=> __( 'Visibility on devices', 'tiny-bootstrap' ),
			),
			'classes'	=> apply_filters( 'tiny_bootstrap_visibiity_classes', $visibility_classes ),
		);

	}
}
