// Slider
const sliderJS = document.querySelectorAll('.slider');
sliderJS.forEach(element => {
    element.classList.add('slider--js');
});
sliderTranslate('#sliderOne', '#sliderOneIndicator .sliderIndicator__item', 'sliderIndicator__item--enabled');
sliderTranslate('#sliderTwo', '#sliderTwoIndicator .sliderIndicator__item', 'sliderIndicator__item--onBlackEnabled');
sliderTranslate('#sliderThree', '#sliderThreeIndicator .sliderIndicator__item', 'sliderIndicator__item--enabled');
function sliderTranslate(sliderBlock, indicatorItem, indicatorItemEnabled) {
    const slider = document.querySelector(sliderBlock);
    const sliderIndicator = document.querySelectorAll(indicatorItem);
    let lastTranslateXvalue;
    sliderIndicator.forEach((element, numberOfElementClicked) => {
        element.addEventListener('click', (e) => {
            let numberOfOldElement;
            sliderIndicator.forEach((element, elementNumber) => {
                if (element.classList.contains(indicatorItemEnabled)) {
                    numberOfOldElement = elementNumber;
                }
                element.classList.remove(indicatorItemEnabled);
            });
            let translateXValue = ((numberOfElementClicked - numberOfOldElement) * -100);
            translateXValue = lastTranslateXvalue ? translateXValue + lastTranslateXvalue : translateXValue;
            slider.style.transform = 'translateX(' + translateXValue + '%)';
            lastTranslateXvalue = translateXValue;
            element.classList.add(indicatorItemEnabled);
        });
    });
}
// Menu
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu__item');
const burgerText = document.querySelectorAll('.burger__item');
const body = document.body;
burger.addEventListener('click', (e) => {
    menu.classList.toggle('menu--open');
    burgerText.forEach(element => {
        element.classList.toggle('burger__item--open');
    });
});
menuLinks.forEach(element => {
    element.addEventListener('click', (e) => {
        menu.classList.remove('menu--open');
        burgerText.forEach(element => {
            element.classList.remove('burger__item--open');
        });
    });
});
// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
	anchor.addEventListener('click', function () {
        smoothScroll.scrollTo(this.getAttribute('href'), 1000);
	});
});
(function (window) {
	'use strict';
	var document = window.document;
	var body = document.body;
	var rootElement = document.documentElement;
	var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (func) {
		window.setTimeout(func, 15);
	};
	var clock = '';
	var time = 500;
	var context = window;
	var start = context.scrollTop || window.pageYOffset;
	var end = 0;
	var easeInOutCubic = function (t) {
		return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
	};
	var getTargetTop = function (target) {
		var targetElement = {};
		if (typeof target === 'number') {
			return target;
		} else if (typeof target === 'string') {
			targetElement = document.querySelector(target);
			if (!targetElement) {
				return false;
			}
			return targetElement.getBoundingClientRect().top + window.pageYOffset;
		}
		return false;
	};
	var getScrollTop = function (startV, endV, elapsed, duration) {
		if (elapsed > duration) {
			return endV;
		}
		return startV + (end - startV) * easeInOutCubic(elapsed / duration);
	};
	var getScrollPageBottom = function () {
		var contentHeight = Math.max.apply(null, [body.clientHeight, body.scrollHeight, rootElement.scrollHeight, rootElement.clientHeight]);
		return contentHeight - window.innerHeight;
	};
	var scrollFrame = function () {
		var elapsed = Date.now() - clock;
		if (context === window) {
			window.scroll(0, getScrollTop(start, end, elapsed, time));
		} else {
			context.scrollTop = getScrollTop(start, end, elapsed, time);
		}
		if (elapsed <= time) {
			requestAnimationFrame(scrollFrame);
		}
	};
	var SmoothScroll = function SmoothScroll() {};
	SmoothScroll.prototype = {
		scrollTo: function (target, duration, root) {
			clock = Date.now();
			time = duration || 500;
			context = root || window;
			start = context.scrollTop || window.pageYOffset;
			end = getTargetTop(target);
			scrollFrame();
		},
		scrollTop: function (duration, root) {
			this.scrollTo(0, duration, root);
		},
		scrollBottom: function (duration, root) {
			this.scrollTo(getScrollPageBottom(), duration, root);
		}
	};
	window.smoothScroll = new SmoothScroll();
}(window));