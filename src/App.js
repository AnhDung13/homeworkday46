import { DefaultLayout } from "./Layout/DefaultLayout.js";
import { About } from "./Pages/About.js";
import { Home } from "./Pages/Home.js";
import { Products } from "./Pages/Products.js";
import { router } from "./Utils/Router.js";

export function App() {
  return router(
    [
      {
        path: "/",
        component: Home,
      },
      {
        path: "/gioi-thieu",
        component: About,
      },
      {
        path: "/san-pham",
        component: Products,
      },
    ],
    DefaultLayout
  );
}
