import Navigo from "navigo";
const navigo = new Navigo("/", { linksSelector: "a", hash: true });
const root = document.querySelector("#root");
export function router(contents, layout) {
  let renderLayout = "";
  for (let i = 0; i < contents.length; i++) {
    const { path, component } = contents[i];
    navigo.on(path, () => {
      const componentHTML = component();
      if (layout) {
        renderLayout = layout(componentHTML);
      } else {
        renderLayout = component();
      }
    });
  }
  navigo.resolve();
  return renderLayout;
}
