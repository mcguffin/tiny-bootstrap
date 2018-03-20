<?php

namespace TinyBootstrap\Shortcode;

if ( ! defined('ABSPATH') ) {
	die('FU!');
}

use TinyBootstrap\Core;

abstract class Shortcode extends Core\Singleton {

	protected $shortcode = false;

	/**
	 *	@inheritdoc
	 */
	protected function __construct(){
		parent::__construct();
		if ( $this->shortcode ) {
			add_shortcode( $this->shortcode, array( $this, 'do_shortcode' ) );
		}
	}

	abstract function do_shortcode( $atts, $content );

}
