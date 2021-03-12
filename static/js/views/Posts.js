import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Xlent Academy-Posts");
    }

    async getHtml() {
        return `
    <div style="text-align: center;" class="maintext">
        <h1>Posts</h1>
        <p>Welcome to Xlent Academy!</p>
        <p>You are viewing posts.</p>
        <a onclick="gototop()" class="postbtn" href="/posts/1" data-link>Post 1</a>
        <a onclick="gototop()" class="postbtn" href="/posts/2" data-link>Post 2</a>
    </div>
        `;
    }
}