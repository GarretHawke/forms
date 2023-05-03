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
    return `      <div class="tooltip">
    <div class="title">Popover title</div>
    <div class="message">And here's some amazing content. It's very engaging. Right?</div>
</div>
<div class="tooltip__arrow"></div>`
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

      this.button.insertAdjacentHTML('afterend', TooltipWidget.tooltip);

      const tooltipElement = document.querySelector('.tooltip');
      tooltipElement.style.top = this.button.offsetHeight + 9 + 'px';

      const arrow = document.querySelector('.tooltip__arrow');
      arrow.style.bottom = this.button.offsetHeight + 10 + 'px';

    }
    else {
      this.container.removeChild(document.querySelector('.tooltip'));
      this.container.removeChild(document.querySelector('.tooltip__arrow'));
    }

  }
}