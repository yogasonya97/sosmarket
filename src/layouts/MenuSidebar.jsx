function MenuSidebar() {
    return (
        <div className="menu-size" style={{width: '230px'}}>
          {/* Menu Title*/}
          <div className="pt-3">
            <div className="page-title sidebar-title d-flex">
              <div className="align-self-center me-auto">
                <p className="color-highlight">Welcome Back</p>
                <h1>Enabled</h1>
              </div>
              <div className="align-self-center ms-auto">
                <a href="#" data-bs-toggle="dropdown" className="icon gradient-blue shadow-bg shadow-bg-s rounded-m">
                  <img src="/src/assets/mobile/images/pictures/25s.jpg" width={45} className="rounded-m" alt="img" />
                </a>
                {/* Menu Title Dropdown Menu*/}
                <div className="dropdown-menu">
                  <div className="card card-style shadow-m mt-1 me-1">
                    <div className="list-group list-custom list-group-s list-group-flush rounded-xs px-3 py-1">
                      <a href="page-wallet.html" className="list-group-item">
                        <i className="has-bg gradient-green shadow-bg shadow-bg-xs color-white rounded-xs bi bi-credit-card" />
                        <strong className="font-13">Wallet</strong>
                      </a>
                      <a href="page-activity.html" className="list-group-item">
                        <i className="has-bg gradient-blue shadow-bg shadow-bg-xs color-white rounded-xs bi bi-graph-up" />
                        <strong className="font-13">Activity</strong>
                      </a>
                      <a href="page-profile.html" className="list-group-item">
                        <i className="has-bg gradient-yellow shadow-bg shadow-bg-xs color-white rounded-xs bi bi-person-circle" />
                        <strong className="font-13">Account</strong>
                      </a>
                      <a href="page-signin-1.html" className="list-group-item">
                        <i className="has-bg gradient-red shadow-bg shadow-bg-xs color-white rounded-xs bi bi-power" />
                        <strong className="font-13">Log Out</strong>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="divider divider-margins mb-3 opacity-50" />
            {/* Main Menu List*/}
            <div className="list-group list-custom list-menu-large">
              <a href="index-waves.html" id="nav-welcome" className="list-group-item list-group-item-active">
                <i className="bi bg-red-dark shadow-bg shadow-bg-xs bi-heart-fill" />
                <div>Welcome</div>
                <i className="bi bi-chevron-right" />
              </a>
              <a href="pages.html" id="nav-pages" className="list-group-item">
                <i className="bi bg-green-dark shadow-bg shadow-bg-xs bi-star-fill" />
                <div>Page Packs</div>
                <i className="bi bi-chevron-right" />
              </a>
              <a href="#" id="nav-homes" data-submenu="sub1" className="list-group-item">
                <i className="bi bg-blue-dark shadow-bg shadow-bg-xs bi-house-fill" />
                <div>Home Styles</div>
                <i className="bi bi-plus font-18" />
              </a>
              <div className="list-submenu" id="sub1">
                <a href="index-waves.html" id="nav-waves" className="list-group-item">
                  <div className="ps-4">Waves</div>
                  <i className="bi bi-chevron-right" />
                </a>
                <a href="index.html" id="nav-classic" className="list-group-item">
                  <div className="ps-4">Classic</div>
                  <i className="bi bi-chevron-right" />
                </a>
              </div>
              <a href="components.html" id="nav-comps" className="list-group-item">
                <i className="bi bg-brown-dark shadow-bg shadow-bg-xs bi-gear-wide-connected" />
                <div>Components</div>
                <i className="bi bi-chevron-right" />
              </a>
              <a data-bs-toggle="offcanvas" data-bs-target="#menu-highlights" href="#" className="list-group-item">
                <i className="bi bg-magenta-dark shadow-bg shadow-bg-xs bi-droplet" />
                <div>Color Theme</div>
                <i className="bi bi-chevron-right" />
              </a>
              <a href="#" className="list-group-item" data-toggle-theme data-trigger-switch="switch-1">
                <i className="bi bg-yellow-dark shadow-bg shadow-bg-xs bi-lightbulb-fill" />
                <div>Dark Mode</div>
                <div className="form-switch ios-switch switch-green switch-s me-2">
                  <input type="checkbox" data-toggle-theme className="ios-input" id="switch-1" />
                  <label className="custom-control-label" htmlFor="switch-1" />
                </div>
              </a>
            </div>
            <div className="divider divider-margins mb-3 opacity-50" />
            {/* Quick Actions Icons*/}
            <div className="content pt-1">
              <div className="d-flex text-center">
                <div className="me-auto">
                  <a href="page-payment-transfer.html" className="icon icon-s rounded-s gradient-red shadow-bg shadow-bg-xs"><i className="font-16 color-white bi bi-arrow-up" /></a>
                  <h6 className="font-11 font-400 opacity-70 mb-n1 pt-2">
                    Transfer
                  </h6>
                </div>
                <div className="m-auto">
                  <a href="page-payment-request.html" className="icon icon-s rounded-s gradient-green shadow-bg shadow-bg-xs"><i className="font-16 color-white bi bi-arrow-down" /></a>
                  <h6 className="font-11 font-400 opacity-70 mb-n1 pt-2">
                    Request
                  </h6>
                </div>
                <div className="ms-auto">
                  <a href="page-payment-exchange.html" className="icon icon-s rounded-s gradient-blue shadow-bg shadow-bg-xs"><i className="font-16 color-white bi bi-arrow-left-right" /></a>
                  <h6 className="font-11 font-400 opacity-70 mb-n1 pt-2">
                    Exchange
                  </h6>
                </div>
              </div>
            </div>
            <div className="divider divider-margins opacity-50" />
            {/* Useful Links*/}
            <h6 className="opacity-40 px-3 mt-n2 mb-0">Useful Links</h6>
            <div className="list-group list-custom list-menu-small">
              <a href="tel:+1 234 567 8091" className="list-group-item default-link">
                <i className="bi bi-arrow-up-circle-fill opacity-20 font-16" />
                <div>Support</div>
                <i className="bi bi-chevron-right" />
              </a>
              <a href="page-profile.html" className="list-group-item">
                <i className="bi bi-person-circle opacity-20 font-16" />
                <div>Account</div>
                <i className="bi bi-chevron-right" />
              </a>
              <a href="page-signin-1.html" className="list-group-item">
                <i className="bi bi-bar-chart-fill opacity-20 font-16" />
                <div>Log Out</div>
                <i className="bi bi-chevron-right" />
              </a>
            </div>
            <div className="divider divider-margins opacity-50" />
            {/* Menu Copyright */}
            <p className="px-3 font-9 opacity-30 color-theme mt-n3">
              Copyright <span className="copyright-year">2023</span>. Made with
              <i className="bi bi-heart-fill color-red-dark px-1" /> by Enabled
            </p>
          </div>
        </div>
      );
  
}

export default MenuSidebar;