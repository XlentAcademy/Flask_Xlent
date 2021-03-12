import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Xlent Academy-About Us");
    }

    async getHtml() {
        return `
    <div class="maintext">
        <h1>About Us</h1><br />
        <h2> Educational Blog </h2>
        <p>This site belongs <a href="mailto:xlentclass@gmail.com">Mr.Eknath Mahale sir</a>.<br />
        If you have any query regrading Site, Advertisement and any other issue, please feel free to contact at <a href="mailto:xlentclass@gmail.com">Xlent Academy</a>
        </p>
    </div>
        `;
    }
}