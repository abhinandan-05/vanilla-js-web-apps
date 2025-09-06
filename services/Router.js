const Router = {
  init: () => {
    document.querySelectorAll("a.navlink").forEach((a) => {
      a.addEventListener("click", (event) => {
        event.preventDefault();
        // const url1 = event.target.href;
        const url = event.target.getAttribute("href");
        Router.go(url);
      });
    });
    // Event Handler for URL changes
    window.addEventListener("popstate", (event) => {
      Router.go(event.state.route, false);
    });

    // Check the initial URL
    Router.go(location.pathname);
  },
  go: (route, addToHistory = true) => {
    // console.log(`Going to ${route}`);

    if (addToHistory) {
      history.pushState({ route }, "", route);
    }

    let pageElement = null;

    switch (route) {
      case "/":
        pageElement = document.createElement("menu-page");
        // pageElement.textContent = "Menu";
        break;
      case "/order":
        pageElement = document.createElement("order-page");
        // pageElement.textContent = "Your Order";
        break;
      default:
        if (route.startsWith("/product-")) {
          pageElement = document.createElement("details-page");
          // pageElement.textContent = "Details";
          const paramId = route.substring(route.lastIndexOf("-") + 1);
          pageElement.dataset.productId = paramId;
        }
        break;
    }

    if (pageElement) {
      // document.querySelector("main").children[0].remove();

      const cache = document.querySelector("main");

      cache.innerHTML = "";
      cache.appendChild(pageElement);

      window.scrollX = 0;
      window.scrollY = 0;
    } /* ?else {
      // coment 404
      document.querySelector("main").innerHTML = "Oups, 404!";

      You can configure the Live Server extension and set "index.html" as the value for Live Server > Settings: File. This will route every request through the index file.
    } */
  },
};

export default Router;
