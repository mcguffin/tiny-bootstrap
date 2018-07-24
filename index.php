<?php

/*
Plugin Name: Tiny Bootstrap
Plugin URI: http://wordpress.org/
Description: Enter description here.
Author: Jörn Lund
Version: 0.0.8
Author URI: https://github.com/mcguffin
License: GPL3
Github Repository: mcguffin/tiny-bootstrap
Text Domain: tiny-bootstrap
Domain Path: /languages/
*/

/*  Copyright 2018  Jörn Lund

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License, version 2, as
    published by the Free Software Foundation.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program; if not, write to the Free Software
    Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/

/*
Plugin was generated by WP Plugin Scaffold
https://github.com/mcguffin/wp-plugin-scaffold
Command line args were: ``
*/


namespace TinyBootstrap;

if ( ! defined('ABSPATH') ) {
	die('FU!');
}


define( 'TINY_BOOTSTRAP_FILE', __FILE__ );
define( 'TINY_BOOTSTRAP_DIRECTORY', plugin_dir_path(__FILE__) );
define( 'TINY_BOOTSTRAP_PLUGIN', pathinfo( TINY_BOOTSTRAP_DIRECTORY, PATHINFO_FILENAME ) . '/' . pathinfo( __FILE__, PATHINFO_BASENAME ) );

require_once TINY_BOOTSTRAP_DIRECTORY . 'include/autoload.php';

Core\Core::instance();



if ( is_admin() || defined( 'DOING_AJAX' ) ) {

	Admin\Mce\MceBootstrapBigSmall::instance();
	Admin\Mce\MceBootstrapClasses::instance();
	Admin\Mce\MceBootstrapVisibility::instance();

	// don't WP-Update actual repos!
	if ( ! file_exists( TINY_BOOTSTRAP_DIRECTORY . '/.git/' ) ) {
		AutoUpdate\AutoUpdateGithub::instance();
	}




}
