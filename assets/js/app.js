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
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const body = document.body;
burger.addEventListener('click', (e) => {
    menu.classList.toggle('menu--open');
    body.classList.toggle('noscroll');
    const burgerText = document.querySelectorAll('.burger__item');
    burgerText.forEach(element => {
        element.classList.toggle('burger__item--open');
    });
});