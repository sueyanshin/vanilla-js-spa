import AbstractView from "./AbstractView";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Contact");
  }
  async getHtml() {
    return `
    <h1>Contact.</h1>
    <h2>If you have project idea, feel free to contact. </h2>
    <p>I am an independent software developer currently based in Myanmar. 
    </p>
    <p>
    <a href="/posts" data-link>View recent posts</a>.
    </p>
    `;
  }
}
