(function( bs, _ ){
	var el = wp.element.createElement,
		supportedBlocks = [
		// // any of:
		// 'core/audio',
		// 'core/archives',
		// 'core/block',
		// 'core/button',
		// 'core/categories',
		// 'core/code',
		// 'core/columns',
		// 'core/column',
		// 'core/cover',
		// 'core-embed/*',
		// 'core/embed',
		// 'core/file',
		// 'core/freeform',
		// 'core/gallery',
		// 'core/heading',
		// 'core/html',
		// 'core/image',
		// 'core/latest-comments',
		// 'core/latest-posts',
		// 'core/list',
		'core/media-text',
		// 'core/missing',
		// 'core/more',
		// 'core/nextpage',
		// 'core/paragraph',
		// 'core/preformatted',
		// 'core/pullquote',
		// 'core/quote',
		// 'core/separator',
		// 'core/shortcode',
		// 'core/spacer',
		// 'core/subhead',
		// 'core/table',
		// 'core/template',
		// 'core/text-columns',
		// 'core/verse',
		// 'core/video',
	],
	feature = {
		name: 'grid-2-col',
		blocks: supportedBlocks,
		/**
		 *	@filter 'blocks.registerBlockType'
		 */
		register:function( props ){
			// adds visibility classes to outermost element
			var _origSave = props.save,
				_origEdit = props.edit;

			props = _.assign( props, {
				save:function(settings) {
					// adds visibility classes to outermost element
					var ret = _origSave(settings),
						new_props,
						media_props = {},
						text_props = {},
						col_class_name = 'col',
						col_num,
						text, media;

					if ( _.isNull(ret)) {
						// it's rendered server-side, or something else, mofo!
						return ret;
					}
					//attributes.mediaPosition; // left|right


					media = ret.props.children[0];
					text = ret.props.children[1];

					media_props = _.assign( {}, media.props );
					text_props = _.assign( {}, text.props );

					media_props.className += ' ' + col_class_name;
					text_props.className += ' ' + col_class_name;

					if ( settings.attributes.isStackedOnMobile ) {
						media_props.className += '-md';
						text_props.className += '-md';
					}

					if ( settings.attributes.mediaWidth !== 50 ) {
						col_num = Math.min( 11, Math.max(1, Math.round( 12 * settings.attributes.mediaWidth / 100 ) ));
						media_props.className += '-' + col_num.toString(10);
						text_props.className += '-' + ( 12 - col_num ).toString(10);
					}

					if ( 'right' === settings.attributes.mediaPosition ) {
						if ( settings.attributes.isStackedOnMobile ) {
							text_props.className += ' order-md-first';
						} else {
							text_props.className += ' order-first';
						}
					}


					new_props = {
						className: 'row',
					};

					// new_props.children[0] = el( new_props.children[0].type, media_props );
					// new_props.children[1] = el( new_props.children[1].type, text_props );

					return el( ret.type, new_props,
						el( media.type, media_props ),
						el( text.type, text_props )
					);
				},
				edit:function(settings,b) {

					var col_num = Math.min( 11, Math.max(1, Math.round( 12 * settings.attributes.mediaWidth / 100 ) ))
					settings.setAttributes( { mediaWidth: col_num * ( 100 / 12 ) } );
					return _origEdit(settings,b);
				}
			});
			return props;
		},
		/**
		 *	runs in filter 'editor.BlockEdit'
		 *	returns what should be added to UI
		 */
		// editWrap:function( settings ) {
		// 	return;
		// }
	};

	bs.block.registerFeature( feature );

})( bs, lodash )
