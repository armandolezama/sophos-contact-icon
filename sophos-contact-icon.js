import { LitElement, html } from 'lit';
import styles from './sophos-contact-icon-styles';


export class SophosContactIcon extends LitElement {
  /**
   *Creates an instance of SophosContactIcon.
   * @memberof SophosContactIcon
   */
  constructor () {
    super();
    this.iconRoutes = [];
    this.contactPhotoPath = '';
    this.contactPhotoAlt = '';
    this.altIcon = '';
  }

  /**
   * Declared properties and their corresponding attributes
   * @readonly
   * @static
   * @memberof SophosContactIcon
   */
  static get properties () {
    return {
      iconRoutes: {type: Array}
    };
  }

  static get styles () {
    return styles;
  }

  _createImages () {
    let iconsHTML = html``;
    for(const iconPath of this.iconRoutes) {
      iconsHTML = html`
        ${iconsHTML}
        <div class="icon-container">
          <img class="icon" .src=${iconPath} .alt=${this.altIcon}>
        </div>
        `;
    }
    return iconsHTML;
  }

  render () {
    return html`
    <div id="main-container">
      ${this._createImages()}
      <div id="contact-photo-container">
        <img id="contact-photo" .src=${this.contactPhotoPath} .alt=${this.contactPhotoAlt}>
      </div>
    </div>
    `;
  }
}
customElements.define('sophos-contact-icon', SophosContactIcon);