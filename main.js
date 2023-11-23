import "./style.css";
import Home from "./static/js/views/Home";
import Posts from "./static/js/views/Posts";
import PostView from "./static/js/views/PostView";
import Projects from "./static/js/views/Projects";
import Contact from "./static/js/views/Contact";

// const navigateTo = (url) => {
//   history.pushState(null, null, url);
//   router();
// };
// const router = async () => {
//   const routes = [
//     {
//       path: "/",
//       view: Home,
//     },
//     {
//       path: "/posts",
//       view: Posts,
//     },
//     {
//       path: "/projects",
//       view: Projects,
//     },
//     {
//       path: "/contact",
//       view: Contact,
//     },
//   ];

//   // Test each route for potential match
//   const potentialMatches = routes.map((route) => {
//     return {
//       route: route,
//       isMatch: location.pathname == route.path,
//     };
//   });
//   console.log(potentialMatches);
//   let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

//   if (!match) {
//     match = {
//       route: routes[0],
//       isMatch: true,
//     };
//   }

//   const view = new match.route.view();

//   document.querySelector("#app").innerHTML = await view.getHtml();
//   // console.log(match.route.view());
// };
// window.addEventListener("popstate", router);
// document.addEventListener("DOMContentLoaded", () => {
//   document.body.addEventListener("click", (e) => {
//     if (e.target.closest("[data-link]")) {
//       e.preventDefault();
//       // navigateTo(e.target.href);
//       navigateTo(event.target.closest("[data-link]").href);
//     }
//   });
//   router();
// });

// import Home from "./views/Home.js";
// import Posts from "./views/Posts.js";
// import PostView from "./views/PostView.js";
// import Projects from "./views/Projects.js";
// import Contact from "./views/Contact.js";

const pathToRegex = (path) =>
  new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = (match) => {
  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(
    (result) => result[1]
  );

  return Object.fromEntries(
    keys.map((key, i) => {
      return [key, values[i]];
    })
  );
};

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  const routes = [
    { path: "/", view: Home },
    { path: "/posts", view: Posts },
    { path: "/posts/:id", view: PostView },
    { path: "/projects", view: Projects },
    { path: "/contact", view: Contact },
  ];

  // Test each route for potential match
  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      result: location.pathname.match(pathToRegex(route.path)),
    };
  });

  let match = potentialMatches.find(
    (potentialMatch) => potentialMatch.result !== null
  );

  if (!match) {
    match = {
      route: routes[0],
      result: [location.pathname],
    };
  }

  // Remove the "active" class from all links
  document.querySelectorAll(".nav__link").forEach((link) => {
    link.classList.remove("active");
  });

  // Find the active link based on the current route
  const activeLink = document.querySelector(
    `.nav__link[href="${location.pathname}"]`
  );
  if (activeLink) {
    // Add the "active" class to the active link
    activeLink.classList.add("active");
  }

  const view = new match.route.view(getParams(match));

  document.querySelector("#app").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.closest("[data-link]")) {
      e.preventDefault();
      // navigateTo(e.target.href);
      navigateTo(e.target.closest("[data-link]").href);
    }
  });

  router();
});
