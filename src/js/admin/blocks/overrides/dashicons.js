(function(){
	/**
	 *	Extend dashicon SVG
	 */
	var el = wp.element.createElement,
		_origRender = wp.components.Dashicon.prototype.render;

	wp.components.Dashicon.prototype.render = function() {
		var ret = _origRender.apply(this,arguments),
			size, iconClass;

		if ( ret !== null ) {
			return ret;
		}
		// set size
		size = !! this.props.size ? this.props.size : 20;

		// set path
		switch ( this.props.icon ) {
			case 'container':
				path = 'M17.2,3.6H2.8L2,4.4v11.2l0.8,0.8h14.4l0.8-0.8V4.4L17.2,3.6z M9.2,14.8h-4V8.9h4V14.8z M14.8,14.8h-4V8.9h4V14.8zM14.8,7.6H5.2V5.2h9.6V7.6z';
				break;
			case 'printer':
				path = 'M12.6,14.1H6.9v-1h5.7V14.1z M12.6,15.6H6.9v1h5.7V15.6z M19.4,8.1v4.1c0,0.9-0.8,1.7-1.7,1.7h-2.1v5.3H3.8v-5.3H2.3 c-0.9,0-1.7-0.8-1.7-1.7V8.1c0-0.9,0.8-1.7,1.7-1.7h1.5V0.8h11.7v5.6h2.1C18.6,6.4,19.4,7.1,19.4,8.1z M5.8,6.4h7.7V2.8H5.8V6.4z M13.6,11.6H5.8v5.9h7.7L13.6,11.6L13.6,11.6z M17.2,9c0-0.6-0.5-1.2-1.1-1.2S14.9,8.4,14.9,9s0.5,1.1,1.1,1.1S17.2,9.7,17.2,9z';
				break;
			/* more to come */
			case 'tablet-landscape':
				path = 'M3,3h14c0.5,0,1,0.5,1,1v12c0,0.5-0.5,1-1,1H3c-0.5,0-1-0.5-1-1V4C2,3.5,2.5,3,3,3z M16,5H4v10h12V5z M10,6l-5,6V6H10z';
				break;
			default:
				return ret;
			// more dashicons to come
		}

		iconClass = 'dashicon dashicon-' + this.props.icon;

		return el( wp.components.SVG, {
			"aria-hidden": true,
			role: "img",
			focusable: "false",
			className: iconClass,
			xmlns: "http://www.w3.org/2000/svg",
			width: size,
			height: size,
			viewBox: "0 0 20 20"

		}, el(
			wp.components.Path,
			{
				d: path
			}
		));
	}

})();
