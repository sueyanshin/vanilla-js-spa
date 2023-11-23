import AbstractView from "./AbstractView";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Projects");
  }
  async getHtml() {
    return `
    <h1 class="text-ttl">Projects</h1>
    <p>Under maintainence 
    </p>
   
    `;
  }
}
