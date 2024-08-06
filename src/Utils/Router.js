import Navigo from "navigo";
const navigo = new Navigo("/", { linksSelector: "a", hash: true });

export function router(contents, layout) {
  let renderLayout = "";
  for (let i = 0; i < contents.length; i++) {
    const { path, component } = contents[i];
    navigo.on(path, () => {
      const componentHTML = component();
      renderLayout = layout(componentHTML);
    });
  }
  navigo.resolve();
  return renderLayout;
}
