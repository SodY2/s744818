;(function ($) {
	var ie6 = $.browser.msie && parseInt($.browser.version) == 6 && typeof window['XMLHttpRequest'] != "object",
		ieQuirks = null,
		w = [];

	/*
	 * Stand-alone function to create a modal dialog.
	 * 
	 * @param {string, object} data A string, jQuery object or DOM object
	 * @param {object} [options] An optional object containing options overrides
	 */
	$.modal = function (data, options) {
		return $.modal.impl.init(data, options);
	};

	/*
	 * Stand-alone close function to close the modal dialog
	 */
	$.modal.close = function () {
		$.modal.impl.close();
	};

	/*
	 * Chained function to create a modal dialog.
	 * 
	 * @param {object} [options] An optional object containing options overrides
	 */
	$.fn.modal = function (options) {
		return $.modal.impl.init(this, options);
	};

	$.modal.defaults = {
		appendTo: 'body',
		focus: true,
		opacity: 50,
		overlayId: 'kw-asso-overlay',
		overlayCss: {},
		containerId: 'kw-asso-container',
		containerCss: {},
		dataId: 'keywordExtendAssociationsDataContainer',
		dataCss: {},
		minHeight: 200,
		minWidth: 300,
		maxHeight: null,
		maxWidth: null,
		autoResize: false,
		zIndex: 1000,
		close: true,
		closeHTML: '<a class="modalCloseImg" title="Schlie&szlig;en"></a>',
		closeClass: 'kw-asso-close',
		escClose: true,
		overlayClose: false,
		position: null,
		persist: false,
		onOpen: null,
		onShow: null,
		onClose: null
	};

	/*
	 * Main modal object
	 */
	$.modal.impl = {
		/*
		 * Modal dialog options
		 */
		opts: null,
		/*
		 * Contains the modal dialog elements and is the object passed 
		 * back to the callback (onOpen, onShow, onClose) functions
		 */
		dialog: {},
		/*
		 * Initialize the modal dialog
		 */
		init: function (data, options) {
			// don't allow multiple calls
			if (this.dialog.data) {
				return false;
			}

			// $.boxModel is undefined if checked earlier
			ieQuirks = $.browser.msie && !$.boxModel;

			// merge defaults and user options
			this.opts = $.extend({}, $.modal.defaults, options);

			// keep track of z-index
			this.zIndex = this.opts.zIndex;

			// set the onClose callback flag
			this.occb = false;

			// determine how to handle the data based on its type
			if (typeof data == 'object') {
				// convert DOM object to a jQuery object
				data = data instanceof jQuery ? data : $(data);

				// if the object came from the DOM, keep track of its parent
				if (data.parent().parent().size() > 0) {
					this.dialog.parentNode = data.parent();

					// persist changes? if not, make a clone of the element
					if (!this.opts.persist) {
						this.dialog.orig = data.clone(true);
					}
				}
			}
			else if (typeof data == 'string' || typeof data == 'number') {
				// just insert the data as innerHTML
				data = $('<div/>').html(data);
			}
			else {
				// unsupported data type!
				alert('SimpleModal Error: Unsupported data type: ' + typeof data);
				return false;
			}

			// create the modal overlay, container and, if necessary, iframe
			this.create(data);
			data = null;

			// display the modal dialog
			this.open();

			// useful for adding events/manipulating data in the modal dialog
			if ($.isFunction(this.opts.onShow)) {
				this.opts.onShow.apply(this, [this.dialog]);
			}

			// don't break the chain =)
			return this;
		},
		/*
		 * Create and add the modal overlay and container to the page
		 */
		create: function (data) {
			// get the window properties
			w = this.getDimensions();

			// add an iframe to prevent select options from bleeding through
			if (ie6) {
				this.dialog.iframe = $('<iframe src="javascript:false;"/>')
					.css($.extend(this.opts.iframeCss, {
						display: 'none',
						opacity: 0, 
						position: 'fixed',
						height: w[0],
						width: w[1],
						zIndex: this.opts.zIndex,
						top: 0,
						left: 0
					}))
					.appendTo(this.opts.appendTo);
			}

			// create the overlay
			this.dialog.overlay = $('<div/>')
				.attr('id', this.opts.overlayId)
				.addClass('simplemodal-overlay')
				.css($.extend(this.opts.overlayCss, {
					display: 'none',
					opacity: this.opts.opacity / 100,
					height: w[0],
					width: w[1],
					position: 'fixed',
					left: 0,
					top: 0,
					zIndex: this.opts.zIndex + 1
				}))
				.appendTo(this.opts.appendTo);
		
			// create the container
			this.dialog.container = $('<div/>')
				.attr('id', this.opts.containerId)
				.addClass('simplemodal-container')
				.css($.extend(this.opts.containerCss, {
					display: 'none',
					position: 'absolute', 
					zIndex: this.opts.zIndex + 2
				}))
				.append(this.opts.close && this.opts.closeHTML
					? $(this.opts.closeHTML).addClass(this.opts.closeClass)
					: '')
				.appendTo(this.opts.appendTo);
				
			this.dialog.wrap = $('<div/>')
				.attr('tabIndex', -1)
				.addClass('simplemodal-wrap')
				.css({height: 'auto', outline: 0, width: 'auto'})
				.appendTo(this.dialog.container);
				
			// add styling and attributes to the data
			this.dialog.data = data
				.attr('id', data.attr('id') || this.opts.dataId)
				.addClass('simplemodal-data')
				.css($.extend(this.opts.dataCss, {
						display: 'none'
				}));
			data = null;

			this.dialog.data.appendTo(this.dialog.wrap);

			this.dialog.container.css({top: $(window).scrollTop() + 20 });


			// fix issues with IE
			if (ie6 || ieQuirks) {
				this.fixIE();
			}
		},
		/*
		 * Bind events
		 */
		bindEvents: function () {
			var self = this;

			// bind the close event to any element with the closeClass class
			$('.' + self.opts.closeClass).bind('click.simplemodal', function (e) {
				e.preventDefault();
				self.close();
			});
			
			// bind the overlay click to the close function, if enabled
			if (self.opts.close && self.opts.overlayClose) {
				self.dialog.overlay.bind('click.simplemodal', function (e) {
					e.preventDefault();
					self.close();
				});
			}
	
			// bind keydown events
			$(document).bind('keydown.simplemodal', function (e) {
				if (self.opts.focus && e.keyCode == 9) { // TAB
					self.watchTab(e);
				}
				else if ((self.opts.close && self.opts.escClose) && e.keyCode == 27) { // ESC
					e.preventDefault();
					self.close();
				}
			});

			// update window size
			$(window).bind('resize.simplemodal', function () {
				// redetermine the window width/height
				w = self.getDimensions();

				// reposition the dialog
				self.opts.autoResize ? self.setContainerDimensions() : self.setPosition();
	
				if (ie6 || ieQuirks) {
					self.fixIE();
				}
				else {
					// update the iframe & overlay
					self.dialog.iframe && self.dialog.iframe.css({height: w[0], width: w[1]});
					self.dialog.overlay.css({height: w[0], width: w[1]});
				}
			});
		},
		/*
		 * Unbind events
		 */
		unbindEvents: function () {
			$('.' + this.opts.closeClass).unbind('click.simplemodal');
			$(document).unbind('keydown.simplemodal');
			$(window).unbind('resize.simplemodal');
			this.dialog.overlay.unbind('click.simplemodal');
		},
		/*
		 * Fix issues in IE6 and IE7 in quirks mode
		 */
		fixIE: function () {
			var p = this.opts.position;

			// simulate fixed position - adapted from BlockUI
			$.each([this.dialog.iframe || null, this.dialog.overlay], function (i, el) {
				if (el) {
					var bch = 'document.body.clientHeight', bcw = 'document.body.clientWidth',
						bsh = 'document.body.scrollHeight', bsl = 'document.body.scrollLeft',
						bst = 'document.body.scrollTop', bsw = 'document.body.scrollWidth',
						ch = 'document.documentElement.clientHeight', cw = 'document.documentElement.clientWidth',
						sl = 'document.documentElement.scrollLeft', st = 'document.documentElement.scrollTop',
						s = el[0].style;

					s.position = 'absolute';
					if (i < 2) {
						s.removeExpression('height');
						s.removeExpression('width');
						s.setExpression('height','' + bsh + ' > ' + bch + ' ? ' + bsh + ' : ' + bch + ' + "px"');
						s.setExpression('width','' + bsw + ' > ' + bcw + ' ? ' + bsw + ' : ' + bcw + ' + "px"');
					}
					else {
						var te, le;
						if (p && p.constructor == Array) {
							var top = p[0] 
								? typeof p[0] == 'number' ? p[0].toString() : p[0].replace(/px/, '')
								: el.css('top').replace(/px/, '');
							te = top.indexOf('%') == -1 
								? top + ' + (t = ' + st + ' ? ' + st + ' : ' + bst + ') + "px"'
								: parseInt(top.replace(/%/, '')) + ' * ((' + ch + ' || ' + bch + ') / 100) + (t = ' + st + ' ? ' + st + ' : ' + bst + ') + "px"';

							if (p[1]) {
								var left = typeof p[1] == 'number' ? p[1].toString() : p[1].replace(/px/, '');
								le = left.indexOf('%') == -1 
									? left + ' + (t = ' + sl + ' ? ' + sl + ' : ' + bsl + ') + "px"'
									: parseInt(left.replace(/%/, '')) + ' * ((' + cw + ' || ' + bcw + ') / 100) + (t = ' + sl + ' ? ' + sl + ' : ' + bsl + ') + "px"';
							}
						}
						else {
							te = '(' + ch + ' || ' + bch + ') / 2 - (this.offsetHeight / 2) + (t = ' + st + ' ? ' + st + ' : ' + bst + ') + "px"';
							le = '(' + cw + ' || ' + bcw + ') / 2 - (this.offsetWidth / 2) + (t = ' + sl + ' ? ' + sl + ' : ' + bsl + ') + "px"';
						}
						s.removeExpression('top');
						s.removeExpression('left');
						s.setExpression('top', te);
						s.setExpression('left', le);
					}
				}
			});
		},
		focus: function (pos) {
			var self = this,
				p = pos || 'first';

			// focus on dialog or the first visible/enabled input element
			var input = $(':input:enabled:visible:' + p, self.dialog.wrap);
			input.length > 0 ? input.focus() : self.dialog.wrap.focus();
		},
		getDimensions: function () {
			var el = $(window);

			// fix a jQuery/Opera bug with determining the window height
			var h = $.browser.opera && $.browser.version > '9.5' && $.fn.jquery <= '1.2.6' ? document.documentElement['clientHeight'] :
				$.browser.opera && $.browser.version < '9.5' && $.fn.jquery > '1.2.6' ? window.innerHeight :
				el.height();

			return [h, el.width()];
		},
		getVal: function (v) {
			return v == 'auto' ? 0 : parseInt(v.replace(/px/, ''));
		},
		setContainerDimensions: function () {
			// ignore
		},
		setPosition: function () {
			// ignore
		},
		watchTab: function (e) {
			var self = this;
			if ($(e.target).parents('.simplemodal-container').length > 0) {
				// save the list of inputs
				self.inputs = $(':input:enabled:visible:first, :input:enabled:visible:last', self.dialog.data);

				// if it's the first or last tabbable element, refocus
				if (!e.shiftKey && e.target == self.inputs[self.inputs.length -1] ||
						e.shiftKey && e.target == self.inputs[0] ||
						self.inputs.length == 0) {
					e.preventDefault();
					var pos = e.shiftKey ? 'last' : 'first';
					setTimeout(function () {self.focus(pos);}, 10);
				}
			}
			else {
				// might be necessary when custom onShow callback is used
				e.preventDefault();
				setTimeout(function () {self.focus();}, 10);
			}
		},
		/*
		 * Open the modal dialog elements
		 * - Note: If you use the onOpen callback, you must "show" the 
		 *	        overlay and container elements manually 
		 *         (the iframe will be handled by SimpleModal)
		 */
		open: function () {
			// display the iframe
			this.dialog.iframe && this.dialog.iframe.show();

			if ($.isFunction(this.opts.onOpen)) {
				// execute the onOpen callback 
				this.opts.onOpen.apply(this, [this.dialog]);
			}
			else {
				// display the remaining elements
				this.dialog.overlay.show();
				this.dialog.container.show();
				this.dialog.data.show();
			}
			
			this.focus();

			// bind default events
			this.bindEvents();
		},
		/*
		 * Close the modal dialog
		 * - Note: If you use an onClose callback, you must remove the 
		 *         overlay, container and iframe elements manually
		 *
		 * @param {boolean} external Indicates whether the call to this
		 *     function was internal or external. If it was external, the
		 *     onClose callback will be ignored
		 */
		close: function () {
			// prevent close when dialog does not exist
			if (!this.dialog.data) {
				return false;
			}

			// remove the default events
			this.unbindEvents();

			if ($.isFunction(this.opts.onClose) && !this.occb) {
				// set the onClose callback flag
				this.occb = true;

				// execute the onClose callback
				this.opts.onClose.apply(this, [this.dialog]);
			}
			else {
				// if the data came from the DOM, put it back
				if (this.dialog.parentNode) {
					// save changes to the data?
					if (this.opts.persist) {
						// insert the (possibly) modified data back into the DOM
						this.dialog.data.hide().appendTo(this.dialog.parentNode);
					}
					else {
						// remove the current and insert the original, 
						// unmodified data back into the DOM
						this.dialog.data.hide().remove();
						this.dialog.orig.appendTo(this.dialog.parentNode);
					}
				}
				else {
					// otherwise, remove it
					this.dialog.data.hide().remove();
				}

				// remove the remaining elements
				this.dialog.container.hide().remove();
				this.dialog.overlay.hide().remove();
				this.dialog.iframe && this.dialog.iframe.hide().remove();

				// reset the dialog object
				this.dialog = {};
			}
		}
	};
})(jQuery);
