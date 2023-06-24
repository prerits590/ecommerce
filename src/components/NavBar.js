import React from "react";

export default function NavBar() {
  return (
    <header>
      <div className="nav-bar">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
           </ul> */}
              <div className="container-fluid">
                <div className="container">
                  <div className="row">
                    <div className="col-5 border border-primary">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            aria-current="page"
                            href="/"
                          >
                            Home
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/">
                            Link
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/">
                            Link
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/">
                            Link
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-2 border border-primary text-center">
                      <a className="navbar-brand" href="/">
                        Navbar
                      </a>
                    </div>
                    <div className="col-5 border border-primary col-auto">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-end">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            aria-current="page"
                            href="/"
                          >
                            Home
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/">
                            Link
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/">
                            Link
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/">
                            Link
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
