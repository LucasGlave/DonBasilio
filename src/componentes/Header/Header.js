import "./Header.scss";

const Header = () => {
  const sections = document.querySelectorAll("section"),
    navLinks = document.querySelectorAll("nav a");
  const resetLinks = () =>
    navLinks.forEach((link) => link.classList.remove("active"));
  const handleScroll = () => {
    const { pageYoffset } = window;
    sections.forEach((section) => {
      const { id, offsetTop, clientHeight } = section;
      const offset = offsetTop - 1;

      if (pageYoffset >= offset && pageYoffset < offset + clientHeight) {
        resetLinks();
        navLinks.forEach((link) => {
          if (link.dataset.scroll === id) {
            link.classList.add("active");
          }
        });
      }
    });
  };
  document.addEventListener("scroll", handleScroll);
  return (
    <div className="header">
      <div className="nav">
        <div className="leftN">
          <a data-scroll="SOBREMI" href="#SOBREMI" className="active">
            <h6>SOBRE MI</h6>
          </a>
          <a data-scroll="SACARTURNO" href="#SACARTURNO">
            <h6>SACAR TURNO</h6>
          </a>
        </div>
        <img src="./favicon.ico" width="180" height="180" alt="logo"></img>
        <div className="rightN">
          <a data-scroll="CLIENTES" href="#CLIENTES">
            <h6>CLIENTES</h6>
          </a>
          <a data-scroll="UBICACION" href="#UBICACION">
            <h6>UBICACION</h6>
          </a>
        </div>
      </div>
      {/* navbar responsive */}
      <nav className="navbar nav-responsive">
        <div className="container-fluid">
          <div className="nav-responsive-container">
            <a className="navbar-brand" href="#">
              <img src="./favicon.ico" alt="logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasDarkNavbar"
              aria-controls="offcanvasDarkNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div
            className="offcanvas offcanvas-end text-bg-dark"
            tabindex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#SOBREMI"
                  >
                    SOBRE MI
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#SACARTURNO">
                    SACAR TURNO
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#CLIENTES">
                    CLIENTES
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#UBICACION">
                    UBICACION
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
