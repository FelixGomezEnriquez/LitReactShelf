import { LitElement, html, css } from "lit";
import { property } from "lit/decorators.js";
import { ButtonVM } from "./button-model";
class Button extends LitElement implements ButtonVM {
  @property({ attribute: false }) handleClick = () => {
    console.log("Texto por defecto");
  };

  static get styles() {
    return css`
      button {
        padding: 10px 20px;
        background-color: var(--btn-bg, #007bff);
        color: var(--btn-color, white);
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
      }

      button:hover {
        background-color: var(--btn-hover-bg, #0056b3);
      }
    `;
  }

  render() {
    return html`
      <button
        @click=${() => {
          this.handleClick();
        }}
      >
        <slot></slot>
      </button>
    `;
  }
}

customElements.define("lit-button", Button);
