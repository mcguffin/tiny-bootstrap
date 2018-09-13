var uppercasePluginCallback;

(function($){

	uppercasePluginCallback = function( editor ) {
		var uppercaseBtn;

		editor.addCommand( 'cmd_uppercase', function() {

			var $node = $(editor.selection.getNode());

			if ( $node.is('[class]') && ! $node.is('span[class="text-uppercase"]') ) { // don't ointerfere with other classes
				$node.toggleClass('text-uppercase');
			} else { //
				editor.formatter.toggle( 'uppercase' )
			}

		});


		editor.addButton('uppercase', {
			icon: 'uppercase',
			tooltip: mce_tiny_bootstrap_uppercase.l10n.uppercase,
			cmd : 'cmd_uppercase',
			onPostRender: function() {
				uppercaseBtn = this;
				editor.on( 'nodechange', function( event ) {
					uppercaseBtn.active( editor.formatter.match( 'uppercase' ) );
				});
			}
		});


		editor.on( 'init', function(){
	//		editor.formatter.register( 'span', { inline: 'span' });
			editor.formatter.register( 'uppercase', { attributes: { class: 'text-uppercase' }, selector:'a,span,big,small,strong,em,h1,h2,h3,h4,h5,h6,p', inline:'span' });
		});
	};

	tinymce.PluginManager.add( 'tiny-bootstrap-uppercase', uppercasePluginCallback);

} )(jQuery);
