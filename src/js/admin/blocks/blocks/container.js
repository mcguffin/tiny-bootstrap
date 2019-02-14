(function( bs, _ ){
	var el = wp.element.createElement;

	/*
	section > bgColor
		container align > full
			*
	*/

	wp.blocks.registerBlockType('tiny-bootstrap/container', {
		title: wp.i18n.__('Container','tiny-bootstrap'),
		name:'tiny-bootstrap/container',
		icon:'admin-generic',
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
						// template: [[ 'core/paragraph', { fontSize: 'large', placeholder: wp.i18n.__( 'Content…', 'content placeholder' ) } ]],
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

				if ( ! bgColorClass ) {
					return el (
						'div',
						innerProps,
						// children?
						innerBlocks,
						colorControls
					);
				} else {
					// add wrapper if bg color
					return el(
						'div',
						{
							className: bgColorClass + ' some-garbage',
							style: {
								backgroundColor: _.get( settings, 'backgroundColor.color', null ),
							}
						},
						el( 'div', innerProps, innerBlocks ),
						colorControls
					)
				}
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
		}
	});

})( bs, lodash );
