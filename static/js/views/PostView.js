import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.postId = params.id;
        this.setTitle("Viewing Post");
    }

    async getHtml() {
        if (this.postId == 1) {
            return `
        <center><div id="loader"></div></center>
        <div style="display:none;" id="myDiv" class="animate-bottom">
        <div class="maintext">
                <h1>Posts</h1>
                <p>Welcome to Xlent Academy!</p>
                <iframe onload="timeout()" class="posts" src="https://xlentacademy.tk" width="100%" height="560px" data-link></iframe>
                <br /><br /><br />
                <a style="text-decoration: none;" href="https://xlentacademy.tk" target="_blank">Show in Your Browser</a>
                <br /><br /><br />
                <a onclick="gototop()" class="back" href="/posts" data-link>Go Back</a>
            </div>
        </div>
            `;
        } else if (this.postId == 2) {
            return `
        <center><div id="loader"></div></center>
        <div style="display:none;" id="myDiv" class="animate-bottom">
        <div class="maintext">
                <h1>Posts</h1>
                <p>Welcome to Xlent Academy!</p>
                <iframe onload="timeout()" class="posts" src="https://xlentacademy.blogspot.com" width="100%" height="560px" data-link></iframe>
                <br /><br /><br />
                <a style="text-decoration: none;" href="https://xlentacademy.blogspot.com/" target="_blank">Show in Your Browser</a>
                <br /><br /><br />
                <a onclick="gototop()" class="back" href="/posts" data-link>Go Back</a>
            </div>
        </div>
            `;
        } else {
            return `
        <center><div id="loader"></div></center>
        <div style="display:none;" id="myDiv" class="animate-bottom">
        <div class="maintext">
                <h1>Posts</h1>
                <p>Welcome to Xlent Academy!</p>
                <p>This post does not exits!.</p>
                <a onclick="gototop()" class="back" href="/posts" data-link>Go Back</a>
            </div>
        </div>
            `;
        }
    }
}