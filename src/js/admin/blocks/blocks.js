var bs = (function( _ ){
	var el = wp.element.createElement;

	var bs = bs || {};

	_.assign( bs, {
		block: {
			registerFeature:function( feature ) {
				var self = this;
				_.assign( {
					name:false,
					register:false,
					editWrap:false,
					blocks:[],
				}, feature );

				if ( ! feature.name ) {
					return false;
				}

				feature.blocks.forEach( function( blockType ) {
					_.setWith( self.featureMap, [ blockType, feature.name ], feature, Object );
				});

			},
			/**
			 *	@return array of functions
			 */
			getFeatures: function( blockType, cbName ) {
				var ret = [],
					blockTypeWildcard = blockType.replace(/\/([^\/]+)$/,'/*'),
					features = _.get( this.featureMap, [ blockType ] ) || _.get( this.featureMap, [ blockTypeWildcard ] );

				_.forEach( features, function( feature, featureName ) {

					ret.push( _.get( feature, [ cbName ] ) );
				});

				return Array.filter( ret, _.isFunction );
			},
			featureMap:{},
		}
	});


	wp.hooks.addFilter(
		'editor.BlockEdit',
		'tiny-bootstrap/with-inspector-controls',

		wp.compose.createHigherOrderComponent( function( BlockEdit ) {

		    return function( settings ) {

				var args = [ wp.element.Fragment, {}, el( BlockEdit, settings ) ];

				bs.block.getFeatures( settings.name, 'editWrap' ).forEach(function(cb){
					var result = cb(settings);
					!!result && args.push( result );
				});

				return el.apply( this, args );
		    };
		}, 'withInspectorControls' )
	);


	wp.hooks.addFilter(
		'blocks.registerBlockType',
		'tiny-bootstrap/register-block-type',
		function( settings, name ) {

			bs.block.getFeatures( settings.name, 'register' ).forEach(function(cb){
				cb(settings);
			});

			return settings;
		}
	);
	return bs;
})( lodash );
