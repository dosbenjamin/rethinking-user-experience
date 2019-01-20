const tableSlider = document.querySelector('.tableSlider');
tableSlider.classList.add('tableSlider--js');
sliderTranslate('.imgSlider', '#problem .sliderIndicator__item', 'sliderIndicator__item--onWhiteEnabled');
sliderTranslate('.tableSlider', '.sliderIndicator__item', 'sliderIndicator__item--enabled');
function sliderTranslate(sliderBlock, indicatorItem, indicatorItemEnabled) {
    const slider = document.querySelector(sliderBlock);
    const sliderIndicator = document.querySelectorAll(indicatorItem);
    // slider.style.width = 'calc(100% + var(--space))'
    slider.style.overflowX = 'visible';
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