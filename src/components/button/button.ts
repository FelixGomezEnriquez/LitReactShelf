import { LitElement, html, css } from "lit";

class Button extends LitElement {
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
      <button @click=${this._handleClick}>
        <slot></slot>
      </button>
    `;
  }

  _handleClick() {
    alert("¡Botón Lit presionado!");
  }
}

customElements.define("lit-button", Button);
