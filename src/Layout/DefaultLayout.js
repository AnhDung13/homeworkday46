import "bootstrap/dist/css/bootstrap.min.css";

export const DefaultLayout = (body) => {
  return `
    <header class="mb-3 p-4 border-bottom">
        <div class="container">
            <h1><a class="text-danger text-decoration-none" href="/" data-route>HEADER</a></h1>
        </div>
    </header>
    <main>
        <div class="container">
            <div class="row">
                <div class="col-3">
                    <h2>Menu</h2>
                    <ul>
                        <li><a href="/" data-route>Trang chủ</a></li>
                        <li><a href="/gioi-thieu" data-route>Giới thiệu</a></li>
                        <li><a href="/san-pham" data-route>Sản phẩm</a></li>
                    </ul>
                </div>
                <div class="col-9">
                    ${body}
                </div>
            </div>
        </div>
    </main>
    <footer class="mt-3 border-top">
        <div class="container">
            <h1>FOOTER</h1>
        </div>
    </footer>
    `;
};
