import AbstractView from "./AbstractView";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Projects");
  }
  async getHtml() {
    return `
    <h1>Projects</h1>
    <p>Manage your privacy and configuration 
    </p>
   
    `;
  }
}
