(function( bs, _ ){
	/**
	 *	Remove align wide support where possible
	 *	Add align wide to certain blocks.
	 */


	var el = wp.element.createElement,
		supportedBlocks = [
		'core/archives',
		'core/block',
		'core/button',
		'core/categories',
		'core/code',
		'core/columns',
		'core/column',
		'core/embed',
		'core-embed/*',
		'core/freeform',
		'core/gallery',
		'core/heading',
		'core/html',
		'core/latest-comments',
		'core/latest-posts',
		'core/list',
		'core/media-text',
		'core/missing',
		'core/more',
		'core/nextpage',
		'core/paragraph',
		'core/preformatted',
		'core/pullquote',
		'core/quote',
		'core/separator',
		'core/shortcode',
		'core/spacer',
		'core/subhead',
		'core/table',
		'core/template',
		'core/text-columns',
		'core/verse',
		'core/video',
	];

	bs.block.registerFeature( {
		name: 'align',
		/**
		 *	runs in filter 'editor.BlockEdit'
		 *	returns what should be added to UI
		 *
		 *	@type function | false
		 */
		blocks: supportedBlocks,
		/**
		 *	@filter 'blocks.registerBlockType'
		 */
		register:function( props ){
			// do something with props

			var supportAlign = _.get(props, 'supports.align' );
			if ( ! _.isUndefined( supportAlign ) ) {
				if ( supportAlign === true ) {
					props.supports.align = ['left','center','right','full'];
				} else if ( _.isArray( supportAlign ) && supportAlign.indexOf('wide') !== -1 ) {

					_.set(props,'supports.align', _.pull( supportAlign, 'wide' ) );

				} else {
					// else what?
				}
			}
			return props;
		},
		/**
		 *	runs in filter 'editor.BlockEdit'
		 *	returns what should be added to UI
		 *
		 *	@type function | false
		 */
		editWrap:false
	} );
	// @see issue: https://github.com/WordPress/gutenberg/issues/13780
	// bs.block.registerFeature( {
	// 	name: 'rm-align-wide',
	// 	blocks: [ 'core/image', 'core/cover' /*, ... */ ],
	// 	register: function( props ) {
	// 		var _origEdit = props.edit;
	// 		_.assign( props, {
	// 			supports:_.assign(props.supports, {
	// 				align:['left','center','right','full'], //
	// 			}),
	// 			edit:function(settings,b) {
	// 				var prevBAT = wp.editor.BlockAlignmentToolbar,
	// 					ret;
	// 				console.log(wp.editor.BlockAlignmentToolbar)
	//
	// 				_.assign(wp.editor,{
	// 					BlockAlignmentToolbar:function(){},
	// 				})
	//
	// 				console.log(wp.editor.BlockAlignmentToolbar)
	//
	// 				var ret = _origEdit(settings,b);
	//
	// 				wp.editor.BlockAlignmentToolbar = prevBAT
	// 				return ret;
	// 				var ret = _origEdit(settings,b),
	// 					new_props = _.assign({},ret.props),
	// 					new_ret = el('div', { className: 'foobar' }, el( ret.type, new_props ),el(wp.editor.BlockToolbar,settings));
	// 				console.log(new_ret)
	// 				return ret;
	// 			}
	// 		} )
	// 	}
	// } );


})( bs, lodash )
