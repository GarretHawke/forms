/**
 * @jest-environment jsdom
 */

import TooltipWidget from "../TooltipWidget";

// Отрисовка контейнера в DOM

test('should render self', () => {
    document.body.innerHTML = '<div class="container"></div>';

    const container = document.querySelector('.container');

    const tooltipWidget = new TooltipWidget(container);

    tooltipWidget.bindToDom();

    expect(container.innerHTML).toEqual(TooltipWidget.markup);
});

// Появление подсказки

test('should show tooltip', ()=> {
    document.body.innerHTML = '<div class="container"></div>';

    const container = document.querySelector('.container');

    const tooltipWidget = new TooltipWidget(container);

    tooltipWidget.bindToDom();

    tooltipWidget.onClick();

    expect().toEqual();
});