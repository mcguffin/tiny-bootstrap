<?php


namespace TinyBootstrap\Admin\Mce;

if ( ! defined('ABSPATH') ) {
	die('FU!');
}

use TinyBootstrap\Core;

class MceBootstrapBigSmall extends Mce {

	protected $module_name = 'tiny-bootstrap-bigsmall';

	protected $editor_buttons = array(
		'mce_buttons'	=> array(
			'small'	=> 3,
			'big'	=> 4,
		),
	);

	protected $toolbar_css	= true;

	protected $text_widget	= true;

	protected $editor_css	= false;

	/**
	 *	@inheritdoc
	 */
	protected function __construct() {

		$this->plugin_params = array(
			'l10n' => array(
				'small'	=> __( 'Small', 'tiny-bootstrap' ),
				'big'	=> __( 'Big', 'tiny-bootstrap' ),
			),
		);

		parent::__construct();
	}

}
