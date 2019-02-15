(function( bs, _ ){
	var el = wp.element.createElement;

	/*
	ToDo:
		- select tag: div|section|article|aside
		-
	*/

	wp.blocks.registerBlockType('tiny-bootstrap/container', {
		title: wp.i18n.__('Container','tiny-bootstrap'),
		name:'tiny-bootstrap/container',
		icon: el(
			'svg',
			{
				viewBox: "0 0 24 24",
				xmlns: "http://www.w3.org/2000/svg"
			},
			el(
				'path',
				{
					d:'M21,4H3L2,5v14l1,1h18l1-1V5L21,4z M11,18H6v-7.3h5V18z M18,18h-5v-7.3h5V18z M18,9H6V6h12V9z'
				}
			)
		),
		category:'layout',
		attributes:{
			backgroundColor: {
				type: 'string',
		    },
			textColor: {
				type: 'string',
		    },
		},
		supports:{
			align:['full'],
			inserter: true,
		    reusable: true,
		    html: false,
		},
		edit: wp.editor.withColors( 'backgroundColor','textColor' )(
			function( settings ) {
				var containerClass = settings.attributes.align === 'full' ? 'container-fluid' : 'container',
					bgColorClass = wp.editor.getColorClassName( 'background-color', settings.attributes.backgroundColor ),
					textColorClass = wp.editor.getColorClassName( 'text-color', settings.attributes.textColor ),
					innerBlocks = el( wp.editor.InnerBlocks, {
						templateLock: false,
					} ),
					colorControls = el(
						wp.editor.InspectorControls,
						{},
						el(
							wp.editor.PanelColorSettings,
							{
								disableCustomColors: true,
								colors: _.get( wp.data.select('core/editor').getEditorSettings(), 'colors' ) || [],
								title: wp.i18n.__( 'Color Settings' ),
								colorSettings: [
									{
										value: _.get( settings, 'backgroundColor.color', null ),
										onChange: settings.setBackgroundColor,
										label: wp.i18n.__( 'Background Color' )
									},
									{
										value: _.get(settings, 'textColor.color', null ),
										onChange: settings.setTextColor,
										label: wp.i18n.__( 'Text Color' )
									}
								]
							}

						)
					),
					innerProps = {
						className: [ containerClass, textColorClass ].join(' '),
						style: {
							color: _.get(settings,'textColor.color', null),
						}
					};

				return el (
					'div',
					innerProps,
					// children?
					!! bgColorClass ? el( 'div',
					{
						className: 'tiny-bootstrap-bg ' + bgColorClass,
						style: {
							backgroundColor: _.get( settings, 'backgroundColor.color', null ),
						}
					} ) : null,
					innerBlocks,
					colorControls
				);

			}
		),
		save:function(settings) {

			var containerClass = settings.attributes.align === 'full' ? 'container-fluid' : 'container',
				bgColorClass = wp.editor.getColorClassName('background-color',settings.attributes.backgroundColor),
				textColorClass = wp.editor.getColorClassName( 'color', settings.attributes.textColor ),
				ret = el(
					'div',
					{
						className: [
							containerClass,
							textColorClass
						].join(' ')
					},
					el( wp.editor.InnerBlocks.Content, {} )
				);
			// add wrapper if bg color
			if ( !! bgColorClass ) {
				ret = el( 'div', { className: bgColorClass }, ret );
			}
			return ret;
		},
		getEditWrapperProps: function getEditWrapperProps(attributes) {
			var attr = {};

		    if ('wide' === attributes.width || 'full' === attributes.width) {
				attr['data-align'] = attributes.width;
		    }
			if ( attributes.backgroundColor ) {
				attr['data-has-bg-color'] = 'true';
			}
			return attr;
		}
	});

})( bs, lodash );
