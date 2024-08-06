import { DefaultLayout } from "./Layout/DefaultLayout";
import { About } from "./Pages/About";
import { Home } from "./Pages/Home";
import { Products } from "./Pages/Products";
import { router } from "./Utils/Router";

export function App() {
  return router([
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
  ]);
}
