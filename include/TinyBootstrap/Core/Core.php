<?php

namespace TinyBootstrap\Core;

if ( ! defined('ABSPATH') ) {
	die('FU!');
}


class Core extends Plugin {

	/**
	 *	@inheritdoc
	 */
	protected function __construct() {

		add_action( 'init' , array( $this , 'init' ) );
		add_action( 'wp_enqueue_scripts' , array( $this , 'wp_enqueue_style' ) );

		$args = func_get_args();
		parent::__construct( ...$args );
	}

	/**
	 *	Load frontend styles and scripts
	 *
	 *	@action wp_enqueue_scripts
	 */
	public function wp_enqueue_style() {
	}




	/**
	 *	Init hook.
	 *
	 *  @action init
	 */
	public function init() {
		remove_action( 'wp_enqueue_scripts', 'wp_common_block_scripts_and_styles' );
		remove_action( 'admin_enqueue_scripts', 'wp_common_block_scripts_and_styles' );
		if ( ! is_admin() ) {
			// don't include wp block styles in frontend
		}
	}

	/**
	 *	Get asset url for this plugin
	 *
	 *	@param	string	$asset	URL part relative to plugin class
	 *	@return wp_enqueue_editor
	 */
	public function get_asset_url( $asset ) {
		return plugins_url( $asset, TINY_BOOTSTRAP_FILE );
	}



}
