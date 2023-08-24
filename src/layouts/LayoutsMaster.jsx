import MenuSidebar from "./MenuSidebar.jsx";
import NavFooterBar from "./NavFooterBar.jsx";

const LayoutMaster = ({ children }) => {
  return (
    <>
      
        <div id="footer-bar" className="footer-bar-1 footer-bar-detached">
          <NavFooterBar />
        </div>
        <div className="page-content footer-clear">
          <div className="pt-3">
            <div className="page-title d-flex">
              <div className="align-self-center me-auto">
                <p className="color-white opacity-80 header-date" />
                <h1 className="color-white">Welcome</h1>
              </div>
              <div className="align-self-center ms-auto">
                <a
                  href="#"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#menu-highlights"
                  className="icon bg-white color-theme rounded-m shadow-xl"
                >
                  <i className="bi bi-palette-fill color-black font-16" />
                </a>
                <a
                  href="#"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#menu-notifications"
                  className="icon bg-white color-theme rounded-m shadow-xl"
                >
                  <i className="bi bi-bell-fill color-black font-17" />
                  <em className="badge bg-red-light color-white scale-box">
                    3
                  </em>
                </a>
                <a
                  href="#"
                  data-bs-toggle="dropdown"
                  className="icon rounded-m shadow-xl"
                >
                  <img
                    src="/src/assets/mobile/images/pictures/25s.jpg"
                    width={45}
                    className="rounded-m"
                    alt="img"
                  />
                </a>
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
          </div>
          {children}
        </div>
        <div
          id="menu-sidebar"
          data-menu-active="nav-welcome"
          className="offcanvas offcanvas-start offcanvas-detached rounded-m"
        >
          <MenuSidebar />
        </div>

        <div
          className="offcanvas offcanvas-bottom rounded-m offcanvas-detached"
          id="menu-install-pwa-ios"
        >
          <div className="content">
            <img
              src="/src/assets/mobile/app/icons/icon-128x128.png"
              alt="img"
              width={80}
              className="rounded-m mx-auto my-4"
            />
            <h1 className="text-center">Install PayApp</h1>
            <p className="boxed-text-xl">
              Install PayApp on your home screen, and access it just like a
              regular app. Open your Safari menu and tap "Add to Home Screen".
            </p>
            <a
              href="#"
              className="pwa-dismiss close-menu color-theme text-uppercase font-900 opacity-50 font-11 text-center d-block mt-n2"
              data-bs-dismiss="offcanvas"
            >
              Maybe Later
            </a>
          </div>
        </div>
        <div
          className="offcanvas offcanvas-bottom rounded-m offcanvas-detached"
          id="menu-install-pwa-android"
        >
          <div className="content">
            <img
              src="/src/assets/mobile/app/icons/icon-128x128.png"
              alt="img"
              width={80}
              className="rounded-m mx-auto my-4"
            />
            <h1 className="text-center">Install PayApp</h1>
            <p className="boxed-text-l">
              Install PayApp to your Home Screen to enjoy a unique and native
              experience.
            </p>
            <a
              href="#"
              className="pwa-install btn btn-m rounded-s text-uppercase font-900 gradient-highlight shadow-bg shadow-bg-s btn-full"
            >
              Add to Home Screen
            </a>
            <br />
            <a
              href="#"
              data-bs-dismiss="offcanvas"
              className="pwa-dismiss close-menu color-theme text-uppercase font-900 opacity-60 font-11 text-center d-block mt-n1"
            >
              Maybe later
            </a>
          </div>
        </div>
      
    </>
  );
};

export default LayoutMaster;
