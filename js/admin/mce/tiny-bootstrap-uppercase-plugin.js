var uppercasePluginCallback;

(function($){

	uppercasePluginCallback = function( editor ) {
		var uppercaseBtn;

		function isUppercase() {
			return !! editor.formatter.matchNode( editor.selection.getNode(), 'uppercase' );
		}

		editor.addCommand( 'cmd_uppercase', function() {
			console.log(isUppercase());
			if ( isUppercase() ) {
				editor.formatter.remove( 'uppercase' );
				// remove empty span if necessary!
			} else {
				editor.formatter.apply( 'uppercase' );
			}
		});

		editor.addButton('uppercase', {
			icon: 'uppercase',
			tooltip: mce_tiny_bootstrap_uppercase.l10n.uppercase,
			cmd : 'cmd_uppercase',
			onPostRender: function() {
				uppercaseBtn = this;
				editor.on( 'nodechange', function( event ) {
					uppercaseBtn.active( isUppercase() );
				});
			}
		});


		editor.on( 'init', function(){
	//		editor.formatter.register( 'span', { inline: 'span' });
			editor.formatter.register( 'uppercase', { attributes: { class: 'text-uppercase' }, selector:'a,span,big,small,strong,em,h1,h2,h3,h4,h5,h6', inline:'span' });
		});
	};

	tinymce.PluginManager.add( 'tiny-bootstrap-uppercase', uppercasePluginCallback);

} )(jQuery);
