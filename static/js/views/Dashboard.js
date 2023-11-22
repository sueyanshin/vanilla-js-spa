import AbstractView from "./AbstractView";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Dashboard");
  }
  async getHtml() {
    return `
    <h1>Welcome back, Sue</h1>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    </p>
    <p>
    <a href="/posts" data-link>View recent posts</a>.
    </p>
    `;
  }
}
