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
		// 'core/media-text',
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
		name: '__something_unique__',
		blocks: supportedBlocks,
		/**
		 *	@filter 'blocks.registerBlockType'
		 */
		register:function( props ){
			// do something with props
			return props;
		},
		/**
		 *	runs in filter 'editor.BlockEdit'
		 *	returns what should be added to UI
		 */
		editWrap:function( settings ) {
			return;
		}
	};

	bs.block.registerFeature( feature );

})( bs, lodash )
