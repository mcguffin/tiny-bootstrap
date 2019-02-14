(function( bs, _ ){


	function ToggleAttrBtn( args, settings ) {
		var ctrlAttr = args['data-control-attr'],
			attr = _.assign( {} , {

			isActive: settings.attributes[ ctrlAttr ],
			className:'components-toolbar__control',
			onClick:function(event) {
				var attr = {};
				attr[ ctrlAttr ] = ! settings.attributes[ ctrlAttr ];
				settings.setAttributes( attr );
			},

		}, args );

		return el( wp.components.ToolbarButton, attr );
	}


	function ToggleClassBtn( args, settings ) {
		var ctrlClass = args['data-control-class'],
			active = settings.attributes.className.split(' ').indexOf(ctrlClass) !== -1,
			attr = _.assign( {} , {

				isActive: active,
				className:'components-toolbar__control',
				onClick:function(event) {
					var attr = {
						className: settings.attributes.className
					};

					if ( active ) {
						attr.className = attr.className.split( ctrlClass ).join('').replace(/\s+/g,' ');
					} else {
						attr.className += ' '+ctrlClass;
					}

					settings.setAttributes( attr );
				},

			}, args );

		return el( wp.components.ToolbarButton, attr );
	}

	var el = wp.element.createElement,
		// no widgets, no images
		supportedBlocks = [
			'core/audio',
			'core/block',
			'core/button',
			'core/categories',
			'core/code',
			'core/columns',
			'core/column',
			'core/cover',
			'core-embed/*',
			'core/embed',
			'core/file',
			'core/freeform',
			'core/gallery',
			'core/heading',
			'core/image',
			'core/list',
			'core/media-text',
			'core/missing',
			'core/more',
			'core/nextpage',
			'core/paragraph',
			'core/preformatted',
			'core/pullquote',
			'core/quote',
			'core/shortcode',
			'core/spacer',
			'core/subhead',
			'core/table',
			'core/template',
			'core/text-columns',
			'core/verse',
			'core/video',

			'core/separator',
			'core/latest-posts',

			// unsupported forever!
			// 'core/archives',// api: block-renderer/core/archives
			// 'core/latest-comments', // api: block-renderer/core/latest-comments

	],
	screen_sizes = ['xs','sm','md','lg','xl'],
	btnconfig = {
		xs: {
			icon: 'smartphone',
			label: wp.i18n.__('Smartphone','tiny-bootstrap'),
		},
		sm: {
			icon: 'tablet',
			label: wp.i18n.__('Tablet','tiny-bootstrap'),
		},
		md: {
			icon: 'tablet-landscape',
			label: wp.i18n.__('Tablet (Landsape)','tiny-bootstrap'),
		},
		lg: {
			icon: 'laptop',
			label: wp.i18n.__('Laptop','tiny-bootstrap'),
		},
		xl: {
			icon: 'desktop',
			label: wp.i18n.__('Desktop','tiny-bootstrap'),
		},
		print: {
			icon: 'printer',
			label: wp.i18n.__('Print','tiny-bootstrap'),
		}
	},

	feature = {
		name: 'visibility',
		blocks: supportedBlocks,
		register:function( props ) {
			var _origSave = props.save,
				_origEdit = props.edit,
				_rmVisibilityClasses = function(classes) {
					if ( _.isUndefined(classes) ) {
						return '';
					}
					return classes.replace(/(d\-(xs|sm|md|lg|xl|print)\-(none|block))/g,'').replace(/\s+/,' ');
				},
				_getVisibilityClasses = function( settings ) {
					var cls = [],
						prevHidden = null,
						defaultDisplay = 'block';
						// rm display classes...
						//className = !! settings.attributes.className ? settings.attributes.className.replace(/\s?d-([\w-]+)(\s|^)/g,'') : ' ';

					//
					screen_sizes.forEach( function( size, i ) {

						var isHidden = _.get(settings,[ 'attributes', 'bs_hidden_' + size ] );
						if ( prevHidden != isHidden ) {
							if ( ! i ) {
								isHidden && cls.push('d-none')
							} else {
								cls.push(isHidden ? 'd-'+size+'-none' : 'd-'+size+'-'+defaultDisplay )
							}
						}
						prevHidden = isHidden;
					});
					if ( _.get(settings,[ 'attributes', 'bs_hidden_print' ] ) ) {
						cls.push( 'd-print-none' );
					}
					return cls.join(' ');
				};

			props = _.assign( props, {
				attributes:lodash.assign({},props.attributes,{
					bs_hidden_xs: { type: 'boolean', default: false },
					bs_hidden_sm: { type: 'boolean', default: false },
					bs_hidden_md: { type: 'boolean', default: false },
					bs_hidden_lg: { type: 'boolean', default: false },
					bs_hidden_xl: { type: 'boolean', default: false },
					bs_hidden_print: { type: 'boolean', default: false },
				}),
				save:function(settings) {
					// add visibility classes

					var ret = _origSave(settings),
						cls = _getVisibilityClasses( settings ),
						new_props; // can be null!

					if ( '' === cls || _.isNull(ret)) {
						// it's rendered server-side, mofo!
						return ret;
					}

					new_props = _.assign({},{
						className: '',
					},ret.props);

					_.set( new_props, ['className'], _rmVisibilityClasses( new_props.className ) + ' ' + cls );
					return el( ret.type, new_props );


				},
// 				edit:function(settings,b) {
// 					// add visibility classes
// 					var ret = null; // this, props, ...?
// 					try {
// 						ret = _origEdit(settings,b)
// 						console.log(settings.name,"> call",ret.type,ret.props)
// 					} catch(err) {
// 						ret = new _origEdit(settings,b);
// 						console.log(settings.name,"> constructor")
// 					}
//
// 					if ( _.isNull(ret)) {
// 						// it's rendered server-side, mofo!
// 						return ret;
// 					}
// 					//ret.props.className = 'something';
// 					// find displayed el, add vis classes.
// //					console.log( props.name, ret.type, ret.props );
//
// 					return ret;
// 				},



			});
			return props;
		},
		editWrap:function( settings ) {
			// just add dashicons!
			var ret = [],
				icons = [],
				tb_args = [wp.components.Toolbar,{}];

			screen_sizes.concat(['print']).forEach(function(size){
				var attr = 'bs_hidden_' + size,
					size = size;
				tb_args.push(
 					el( wp.components.ToolbarButton,
						_.assign({},btnconfig[size], {
							isActive: settings.attributes[ attr ],
							className:'components-toolbar__control',
							onClick:function(event) {
								var new_attr = {};
								new_attr[ attr ] = ! settings.attributes[ attr ];
								settings.setAttributes( new_attr );
							}
						})
					)
				);
				if ( !! settings.attributes[attr] ) {
					icons.push( el(wp.components.Dashicon,btnconfig[size]) )
				}
			});

			ret.push( el(
				wp.editor.InspectorControls,
				{},
				el(
					wp.components.PanelBody,
					{
						title:'Devices'
					},
					'Hide on Devices',
					el.apply( this, tb_args )
				)
			) );

			ret.push( el('div',{ className: 'bs-visibility-indicator' }, icons ) )


			return ret;
		},

	};

	bs.block.registerFeature( feature );

})( bs, lodash )
