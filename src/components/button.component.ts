import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { TailwindElement } from "../shared/tailwind.element";
import { SIZE, VARIANT } from './button.defs';
import { classMap } from 'lit/directives/class-map.js';

import style from "./button.component.scss";
@customElement('dwc-button')
export class DWCButton extends TailwindElement(style) {

  @property({ reflect: true, type: SIZE })
  size = SIZE.MEDIUM;

  @property({ reflect: true, type: VARIANT })
  variant = VARIANT.PRIMARY;

  override render() {
    const { size, variant } = this;

    const classes = classMap({
      [`dwc-button`]: true,
      [`dwc-button--${variant}`]: variant,
      [`dwc-button--${size}`]: size,
    });

    return html`<button id="button" part="button" class="${classes}">
  <slot></slot>
</button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dwc-button': DWCButton;
  }
}
