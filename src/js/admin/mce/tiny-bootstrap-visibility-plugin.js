(function($){

var mobilePluginCallback = function( editor ){
	var mobileBtn, nodes = 'H1,H2,H3,H4,H5,H6,DIV,P,PRE,ADDRESS',
		options = mce_tiny_bootstrap_visibility,
		l10n = options.l10n;

	function resetMobileVisible( ) {
		var parent_node = editor.dom.getParent( editor.selection.getNode() ,nodes),
			classes;
		for ( i=1;i<options.classes.length;i++) {
			if ( editor.dom.getAttrib( parent_node, 'class' ).indexOf( options.classes[i].value ) !== -1 ) {
				classes = options.classes[i].value.split(' ');
				for (var j=0;j<classes.length;j++) {
					jQuery(parent_node).removeClass(classes[j]);
				}
			}
		}
	}
	function setMobileVisibleState( ) {
		var parent_node = editor.dom.getParent( editor.selection.getNode() ,nodes), i;
		mobileBtn.disabled( ! parent_node );
		for ( i=1;i<options.classes.length;i++) {
			if ( editor.dom.getAttrib( parent_node, 'class' ).indexOf( options.classes[i].value ) !== -1 ) {
				mobileBtn.value( options.classes[i].value );
				return;
			}
		}
		mobileBtn.value( '' );
//
	}
	function setMobileVisible( value ) {
		var node = editor.dom.getParent( editor.selection.getNode() ,nodes), $node = jQuery(node),
			classes = value.split(' ');
		resetMobileVisible( );
		if ( value != '' ) {
			for ( i=0;i<classes.length;i++ )
				$node.addClass(classes[i]);
		}
	}

	editor.addButton('tiny_bootstrap_visibility', {
		type: 'listbox',
		text: l10n.devices,
		tooltip: l10n.visibility_on_devices,
		menu_button : true,
		classes : 'widget btn fixed-width',
		onselect: function(e) {
			setMobileVisible( this.value() );
		},
		values: options.classes,
		onPostRender: function() {
			mobileBtn = this;
			editor.on( 'nodechange', function( event ) {
				setMobileVisibleState( );
			});
		}

	});
};

tinymce.PluginManager.add( 'tiny-bootstrap-visibility', mobilePluginCallback );

})(jQuery);
