import AbstractView from "./AbstractView";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Home");
  }
  async getHtml() {
    return `
    <img src=""/>
    <h1 class="text-ttl">Hello.</h1>
    <h3 class="text-subttl">My name is Sue Yan Shin !</h3>
    <p class="muted-text">I am an independent software developer currently based in Myanmar(Burma).🇲🇲 
    I've strong passion for coding in web, mobile and IoT.I primarily work with Java, Javascript, PHP, Dart(Flutter) & Firebase.
    </p>
    <p>
    <a href="/posts" data-link>View recent posts</a>.
    </p>

    <div class="long-card">
    <div class="left-col">
      <img src="/spotify.svg" alt="Spotify" width="30" />
      <h3>Mariposa</h3>
      <p class="muted-text">Peach Tree Rascals</p>
      <button><span class="play-icon">&#9654; &nbsp;</span>Play</button>
      <!-- <input type="button" value="Play" /> -->
    </div>
    <div class="right-col">
      <img src="/mariposa.jpeg" alt="Mariposa" width="100" />
    </div>
  </div>
    `;
  }
}
