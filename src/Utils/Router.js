import Navigo from "navigo";
const navigo = new Navigo("/", { linksSelector: "a", hash: true });

export function router(contents, layout) {
  for (let i = 0; i < contents.length; i++) {
    const { path, component } = contents[i];
    if (path) {
      navigo.on(`${path}`, component());
    }
  }
  navigo.resolve();
  return layout;
}
