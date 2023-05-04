import Tooltip from "./Tooltip";

export default class TooltipWidget {
  constructor(container) {
    this.container = container;
    this.onClick = this.onClick.bind(this);

  }

  static get markup() {
    return `    
      <button type="button" class="showTooltip">Click to toggle popover</button>
    `;
  }

  static get button() {
    return 'button';
  }

  static get tooltip() {
    return `
    <div class="tooltip__container">
      <div class="tooltip">
        <div class="title">Popover title</div>
        <div class="message">And here's some amazing content. It's very engaging. Right?</div>
      </div>
      <div class="tooltip__arrow"></div>
    </div>
    `
  }

  static get tooltipSelector() {
    return `tooltip`
  }

  bindToDom() {

    this.container.innerHTML = TooltipWidget.markup;

    this.button = this.container.querySelector(TooltipWidget.button);

    this.button.addEventListener('click', this.onClick);

  }

  onClick(e) {
    e.preventDefault();

    if (document.querySelector('.tooltip') === null) {

      const content = document.querySelector('.content');

      content.insertAdjacentHTML('afterend', TooltipWidget.tooltip);

      const { top, left, height, width } = this.button.getBoundingClientRect();

      const tooltipContainer = document.querySelector('.tooltip__container');
      const tooltipContainerWidth = tooltipContainer.offsetWidth;
      const tooltipContainerHeight = tooltipContainer.offsetHeight;

      tooltipContainer.style.top = top - ( height ) - (tooltipContainerHeight / 2) + 'px'
      tooltipContainer.style.left = left + ( width / 2 ) - (tooltipContainerWidth / 2) + 'px'
    }

    else {
      const body = document.querySelector('body');
      body.removeChild(document.querySelector('.tooltip__container'));
    }

  }
}
