<?php


namespace TinyBootstrap\Admin\Mce;

if ( ! defined('ABSPATH') ) {
	die('FU!');
}

use TinyBootstrap\Core;

class MceBootstrapUppercase extends Mce {

	protected $module_name = 'tiny-bootstrap-uppercase';

	protected $editor_buttons = array(
		'mce_buttons'	=> array(
			'uppercase'	=> 5,
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
				'uppercase'	=> __( 'Uppercase', 'tiny-bootstrap' ),
			),
		);

		parent::__construct();
	}

}
