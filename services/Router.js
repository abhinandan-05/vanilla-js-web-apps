const Router = {
  init: () => {
    document.querySelectorAll("a.navlink").forEach((a) => {
      a.addEventListener("click", (event) => {
        event.preventDefault();
        console.log("Link clicked");
      });
    });
  },
  go: (route, addToHistory = true) => {
    console.log(`Going to ${route}`);
  },
};

export default Router;
