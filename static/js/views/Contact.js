import AbstractView from "./AbstractView";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Contact");
  }
  async getHtml() {
    return `
    <h1 class="text-ttl">Contact.</h1>
    <h2 class="muted-text">If you have project idea, feel free to contact. </h2>
      <form>
          <input type="text" class="text-box" placeholder="example@gmail.com"/><br>
          <textarea class="text-box" placeholder="Enter your message"></textarea>
          <button>Send</button>
      </form>
    `;
  }
}
