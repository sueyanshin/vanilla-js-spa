import AbstractView from "./AbstractView";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Posts");
  }
  async getHtml() {
    return `
    <h1 class="text-ttl">Latest posts</h1>
    <div class="post-card">
    <a href="/posts/1" data-link>Fact that I hate Flutter.</a>
    <span class="muted-text">Dec 25</span>
    </div>

    `;
  }
}
