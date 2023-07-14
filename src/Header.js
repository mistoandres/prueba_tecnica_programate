import logo from "../src/assets/Captain-America-Logo-sin.png";

function Header() {
  return (
    <nav className="navbar bg-danger z-1">
      <div className="container-fluid">
        <a className="navbar-brand text-light fw-bold" href="/">
          <img
            src={logo}
            alt=""
            width="50"
            height="50"
            className="d-inline-block align-text-center me-2"
          />
          SuperHero Api
        </a>
        <a className="navbar-brand text-light fw-bold" href="/search">
          Table SuperHero
        </a>
      </div>
    </nav>
  );
}

export default Header;
