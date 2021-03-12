import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Xlent Academy-Contact Us");
    }

    async getHtml() {
        return `
    <div class="maintext">
        <h1>Contact Us</h1><br />
        <p>If you have any query regrading Site, Advertisement and any other issue, please feel free to contact at <strong><a href="mailto:xlentclass@gmail.com">xlentclass@gmail.com</a></strong></p><br />
        <p>You can also contact us at <a href="tel:8668367103">+91 866 836 7103</a>.<br /></p>
    </div>
        `;
    }
}