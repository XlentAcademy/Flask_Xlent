import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Xlent Academy-Test");
    }

    async getHtml() {
        return `
    <center><div style="top: 50%; left: 50%;" id="loader"></div></center>
    <div style="display:none;" id="myDiv" class="animate-bottom">
    <iframe  height="800px;" class="pdfsh" width="98%" onload="timeout()"
    src="https://xlentacademy.tk/12th_jee_1.pdf"></iframe>
    </div>
        `;
    }
}