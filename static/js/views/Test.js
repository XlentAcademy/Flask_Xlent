import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Xlent Academy-Test");
    }

    async getHtml() {
        return `
    <center><div id="loader"></div></center>
    <div style="display:none;" id="myDiv" class="animate-bottom">
    <div class="maintext">
        <p>Welcome to Xlent Academy!</p>
        <a onclick="gototop()" data-link href="/uploads/default/tests/0000256pdffullview/"
        style="text-decoration: none; color: red;">View in full screen</a><br /><br /><br />
        <iframe style="display:none;" onload="timeout()" src="https://xlentacademy.tk/12th_jee_1.pdf"></iframe>
        <object class="pdfsh" data="https://docs.google.com/gview?embedded=true&url=https://xlentacademy.tk/12th_jee_1.pdf" type="application/pdf" width="100%" height="700px" data-link>
        <p>Your web browser doesn't have a PDF plugin.
        Instead you can</p>
        </object><br /><br /><br />
    <a href="/static/test.pdf" download="xlent_test.pdf">click here to
    download the PDF file.</a>
    </div>
    </div>
        `;
    }
}