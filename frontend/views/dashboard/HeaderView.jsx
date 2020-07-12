const HeaderView = () => {
  return (
    <React.Fragment>
      <div className="row topHeader">
        <div className="col-md-12">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="sidebar-heading logo">
              <a href="#">Dashboard</a>
            </div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className="nav-item rightMenu dateHeader">
                  <p>20th February 2020</p>
                </li>
                <li className="nav-item rightMenu headerIcons">
                  <button className="btn">
                    <img src={require("../../static/dashboard_image/search.svg")} />
                  </button>
                  <button className="btn">
                    <img src={require("../../static/dashboard_image/bell.svg")} />
                  </button>
                </li>
                <li className="nav-item rightMenu renLightLogo">
                  <img className="rightLogo" src={require("../../static/dashboard_image/logo.svg")} />
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeaderView;
