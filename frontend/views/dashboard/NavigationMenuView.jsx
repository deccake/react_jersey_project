const NavigationMenuView = () => {
  return (
    <React.Fragment>
      <div className="clearfix" id="sidebar-wrapper">
        <div className="sidebar1">
          <div className="list-group list-group-flush">
            <a href="#" className="list-group-item list-group-item-action activeMenu">
              <i className="fa fa-address-book-o"></i>
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              <i className="fa fa-user-circle"></i>
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              <i className="fa fa-podcast"></i>
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NavigationMenuView;
