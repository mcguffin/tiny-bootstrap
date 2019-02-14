<?php

namespace TinyBootstrap\Core;

if ( ! defined('ABSPATH') ) {
	die('FU!');
}


class Blocks extends Singleton {

	/**
	 *	@inheritdoc
	 */
	protected function __construct() {

		add_action( 'init' , array( $this , 'init' ) );
		add_action('enqueue_block_editor_assets',array( $this, 'enqueue_block_editor_assets' ) );
		add_filter('render_block', array( $this, 'render_block'), 10, 2 );
		parent::__construct(  );

	}

	/**
	 *	@filter render_block
	 */
	public function render_block( $block_content, $block ) {
		//var_dump($block_content,$block);
		return $block_content;
	}

	/**
	 *	@action enqueue_block_editor_assets
	 */
	public function enqueue_block_editor_assets() {
		$core = Core::instance();
		wp_enqueue_script('tiny-bootstrap-blocks-admin', $core->get_asset_url( 'js/admin/blocks/blocks.js' ), [ 'wp-edit-post' ], $core->get_version(), true );
		wp_enqueue_style('tiny-bootstrap-blocks-admin-css', $core->get_asset_url( 'css/admin/blocks/blocks.css' ), [], $core->get_version() );

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


}
