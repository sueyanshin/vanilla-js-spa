import "./style.css";
import Home from "./static/js/views/Home";
import Posts from "./static/js/views/Posts";
import Projects from "./static/js/views/Projects";
import Contact from "./static/js/views/Contact";

// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector("#app").innerHTML = `
//   <div>

//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `;

// setupCounter(document.querySelector("#counter"));

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};
const router = async () => {
  const routes = [
    {
      path: "/",
      view: Home,
    },
    {
      path: "/posts",
      view: Posts,
    },
    {
      path: "/projects",
      view: Projects,
    },
    {
      path: "/contact",
      view: Contact,
    },
  ];

  // Test each route for potential match
  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname == route.path,
    };
  });
  console.log(potentialMatches);
  let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

  if (!match) {
    match = {
      route: routes[0],
      isMatch: true,
    };
  }

  const view = new match.route.view();

  document.querySelector("#app").innerHTML = await view.getHtml();
  // console.log(match.route.view());
};
window.addEventListener("popstate", router);
document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.closest("[data-link]")) {
      e.preventDefault();
      // navigateTo(e.target.href);
      navigateTo(event.target.closest("[data-link]").href);
    }
  });
  router();
});
