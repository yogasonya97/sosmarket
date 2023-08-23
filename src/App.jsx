import { useState } from "react";

function App() {
  return (
    <>
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
              <em className="badge bg-red-light color-white scale-box">3</em>
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
      <svg
        id="header-deco"
        viewBox="0 0 1440 600"
        xmlns="http://www.w3.org/2000/svg"
        className="transition duration-300 ease-in-out delay-150"
      >
        <path
          id="header-deco-1"
          d="M 0,600 C 0,600 0,120 0,120 C 92.36363636363635,133.79904306220095 184.7272727272727,147.59808612440193 287,148 C 389.2727272727273,148.40191387559807 501.4545454545455,135.40669856459328 592,129 C 682.5454545454545,122.5933014354067 751.4545454545455,122.77511961722489 848,115 C 944.5454545454545,107.22488038277511 1068.7272727272727,91.49282296650718 1172,91 C 1275.2727272727273,90.50717703349282 1357.6363636363635,105.25358851674642 1440,120 C 1440,120 1440,600 1440,600 Z"
        />
        <path
          id="header-deco-2"
          d="M 0,600 C 0,600 0,240 0,240 C 98.97607655502392,258.2105263157895 197.95215311004785,276.4210526315789 278,282 C 358.04784688995215,287.5789473684211 419.16746411483257,280.5263157894737 524,265 C 628.8325358851674,249.4736842105263 777.377990430622,225.47368421052633 888,211 C 998.622009569378,196.52631578947367 1071.3205741626793,191.57894736842107 1157,198 C 1242.6794258373207,204.42105263157893 1341.3397129186603,222.21052631578948 1440,240 C 1440,240 1440,600 1440,600 Z"
        />
        <path
          id="header-deco-3"
          d="M 0,600 C 0,600 0,360 0,360 C 65.43540669856458,339.55023923444975 130.87081339712915,319.1004784688995 245,321 C 359.12918660287085,322.8995215311005 521.9521531100479,347.1483253588517 616,352 C 710.0478468899521,356.8516746411483 735.3205741626795,342.3062200956938 822,333 C 908.6794258373205,323.6937799043062 1056.7655502392345,319.62679425837325 1170,325 C 1283.2344497607655,330.37320574162675 1361.6172248803828,345.1866028708134 1440,360 C 1440,360 1440,600 1440,600 Z"
        />
        <path
          id="header-deco-4"
          d="M 0,600 C 0,600 0,480 0,480 C 70.90909090909093,494.91866028708137 141.81818181818187,509.8373205741627 239,499 C 336.18181818181813,488.1626794258373 459.6363636363636,451.5693779904306 567,446 C 674.3636363636364,440.4306220095694 765.6363636363636,465.88516746411483 862,465 C 958.3636363636364,464.11483253588517 1059.8181818181818,436.8899521531101 1157,435 C 1254.1818181818182,433.1100478468899 1347.090909090909,456.555023923445 1440,480 C 1440,480 1440,600 1440,600 Z"
        />
      </svg>
      {/* <div
        className="splide single-slider slider-no-dots slider-no-arrows slider-visible"
        id="single-slider-1"
      >
        <div className="splide__track">
          <div className="splide__list">
            <div className="splide__slide">
              <div
                className="card card-style m-0 bg-5 shadow-card shadow-card-m"
                style={{ height: '200px' }}
              >
                <div className="card-top p-3">
                  <a
                    href="#"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#menu-card-more"
                    className="icon icon-xxs bg-white color-black float-end"
                  >
                    <i className="bi bi-three-dots font-18" />
                  </a>
                </div>
                <div className="card-center">
                  <div className="bg-theme px-3 py-2 rounded-end d-inline-block">
                    <h1 className="font-13 my-n1">
                      <a
                        className="color-theme"
                        data-bs-toggle="collapse"
                        href="#balance3"
                        aria-controls="balance2"
                      >
                        Click for Balance
                      </a>
                    </h1>
                    <div className="collapse" id="balance3">
                      <h2 className="color-theme font-26">$26,315</h2>
                    </div>
                  </div>
                </div>
                <strong className="card-top no-click font-12 p-3 color-white font-monospace">
                  Main Account
                </strong>
                <strong className="card-bottom no-click p-3 font-12 text-start color-white font-monospace">
                  1234 5678 1234 5661
                </strong>
                <strong className="card-bottom no-click p-3 font-12 text-end color-white font-monospace">
                  08 / 25
                </strong>
                <div className="card-overlay bg-black opacity-50" />
              </div>
            </div>
            <div className="splide__slide">
              <div
                className="card card-style m-0 bg-9 shadow-card shadow-card-m"
                style={{ height: 200 }}
              >
                <div className="card-top p-3">
                  <a
                    href="#"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#menu-card-more"
                    className="icon icon-xxs bg-white color-black float-end"
                  >
                    <i className="bi bi-three-dots font-18" />
                  </a>
                </div>
                <div className="card-center">
                  <div className="bg-theme px-3 py-2 rounded-end d-inline-block">
                    <h1 className="font-13 my-n1">
                      <a
                        className="color-theme"
                        data-bs-toggle="collapse"
                        href="#balance1"
                        aria-controls="balance1"
                      >
                        Click for Balance
                      </a>
                    </h1>
                    <div className="collapse" id="balance1">
                      <h2 className="color-theme font-26">$65,500</h2>
                    </div>
                  </div>
                </div>
                <strong className="card-top no-click font-12 p-3 color-white font-monospace">
                  Company Account
                </strong>
                <strong className="card-bottom no-click p-3 font-12 text-start color-white font-monospace">
                  1234 5678 1234 5661
                </strong>
                <strong className="card-bottom no-click p-3 font-12 text-end color-white font-monospace">
                  08 / 25
                </strong>
                <div className="card-overlay bg-black opacity-50" />
              </div>
            </div>
            <div className="splide__slide">
              <div
                className="card card-style m-0 bg-7 shadow-card shadow-card-m"
                style={{ height: 200 }}
              >
                <div className="card-top p-3">
                  <a
                    href="#"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#menu-card-more"
                    className="icon icon-xxs bg-white color-black float-end"
                  >
                    <i className="bi bi-three-dots font-18" />
                  </a>
                </div>
                <div className="card-center">
                  <div className="bg-theme px-3 py-2 rounded-end d-inline-block">
                    <h1 className="font-13 my-n1">
                      <a
                        className="color-theme"
                        data-bs-toggle="collapse"
                        href="#balance2"
                        aria-controls="balance2"
                      >
                        Click for Balance
                      </a>
                    </h1>
                    <div className="collapse" id="balance2">
                      <h2 className="color-theme font-26">$15,100</h2>
                    </div>
                  </div>
                </div>
                <strong className="card-top no-click font-12 p-3 color-white font-monospace">
                  Savings Account
                </strong>
                <strong className="card-bottom no-click p-3 font-12 text-start color-white font-monospace">
                  1234 5678 1234 5661
                </strong>
                <strong className="card-bottom no-click p-3 font-12 text-end color-white font-monospace">
                  08 / 25
                </strong>
                <div className="card-overlay bg-black opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="content py-2">
        <div className="d-flex text-center">
          <div className="me-auto">
            <a
              href="#"
              data-bs-toggle="offcanvas"
              data-bs-target="#menu-transfer"
              className="icon icon-xxl rounded-m bg-theme shadow-m"
            >
              <i className="font-28 color-green-dark bi bi-arrow-up-circle" />
            </a>
            <h6 className="font-13 opacity-80 font-500 mb-0 pt-2">Transfer</h6>
          </div>
          <div className="m-auto">
            <a
              href="#"
              data-bs-toggle="offcanvas"
              data-bs-target="#menu-request"
              className="icon icon-xxl rounded-m bg-theme shadow-m"
            >
              <i className="font-28 color-red-dark bi bi-arrow-down-circle" />
            </a>
            <h6 className="font-13 opacity-80 font-500 mb-0 pt-2">Request</h6>
          </div>
          <div
            data-bs-toggle="offcanvas"
            data-bs-target="#menu-exchange"
            className="m-auto"
          >
            <a href="#" className="icon icon-xxl rounded-m bg-theme shadow-m">
              <i className="font-28 color-blue-dark bi bi-arrow-repeat" />
            </a>
            <h6 className="font-13 opacity-80 font-500 mb-0 pt-2">Exchange</h6>
          </div>
          <div className="ms-auto">
            <a
              href="page-payment-bill.html"
              className="icon icon-xxl rounded-m bg-theme shadow-m"
            >
              <i className="font-28 color-brown-dark bi bi-filter-circle" />
            </a>
            <h6 className="font-13 opacity-80 font-500 mb-0 pt-2">Bills</h6>
          </div>
        </div>
      </div>
      <div className="content my-0 mt-n2 px-1">
        <div className="d-flex">
          <div className="align-self-center">
            <h3 className="font-16 mb-2">Recent Activity</h3>
          </div>
          <div className="align-self-center ms-auto">
            <a href="page-activity.html" className="font-12 pt-1">
              View All
            </a>
          </div>
        </div>
      </div>
      <div className="card card-style">
        <div className="content">
          <a href="page-activity.html" className="d-flex py-1">
            <div className="align-self-center">
              <span className="icon rounded-s me-2 gradient-orange shadow-bg shadow-bg-s">
                <i className="bi bi-google color-white" />
              </span>
            </div>
            <div className="align-self-center ps-1">
              <h5 className="pt-1 mb-n1">Google Ads</h5>
              <p className="mb-0 font-11 opacity-50">
                14th March <span className="copyright-year" />
              </p>
            </div>
            <div className="align-self-center ms-auto text-end">
              <h4 className="pt-1 mb-n1 color-red-dark">$150.55</h4>
              <p className="mb-0 font-11">Bill Payment</p>
            </div>
          </a>
          <div className="divider my-2 opacity-50" />
          <a href="page-activity.html" className="d-flex py-1">
            <div className="align-self-center">
              <span className="icon rounded-s me-2 gradient-green shadow-bg shadow-bg-s">
                <i className="bi bi-caret-up-fill color-white" />
              </span>
            </div>
            <div className="align-self-center ps-1">
              <h5 className="pt-1 mb-n1">Bitcoin</h5>
              <p className="mb-0 font-11 opacity-50">
                14th March <span className="copyright-year" />
              </p>
            </div>
            <div className="align-self-center ms-auto text-end">
              <h4 className="pt-1 mb-n1 color-blue-dark">+0.315%</h4>
              <p className="mb-0 font-11">Stock Update</p>
            </div>
          </a>
          <div className="divider my-2 opacity-50" />
          <a href="page-activity.html" className="d-flex py-1">
            <div className="align-self-center">
              <span className="icon rounded-s me-2 gradient-yellow shadow-bg shadow-bg-s">
                <i className="bi bi-pie-chart-fill color-white" />
              </span>
            </div>
            <div className="align-self-center ps-1">
              <h5 className="pt-1 mb-n1">Dividends</h5>
              <p className="mb-0 font-11 opacity-50">
                13th March <span className="copyright-year" />
              </p>
            </div>
            <div className="align-self-center ms-auto text-end">
              <h4 className="pt-1 mb-n1 color-green-dark">$950.00</h4>
              <p className="mb-0 font-11">Wire Transfer</p>
            </div>
          </a>
        </div>
      </div>
      <div className="content my-0 mt-n2 px-1">
        <div className="d-flex">
          <div className="align-self-center">
            <h3 className="font-16 mb-2">Account Activity</h3>
          </div>
          <div className="align-self-center ms-auto">
            <a href="page-activity.html" className="font-12 pt-1">
              View All
            </a>
          </div>
        </div>
      </div>
      <div className="card card-style gradient-green shadow-bg shadow-bg-s">
        <div className="content">
          <a href="page-activity.html" className="d-flex">
            <div className="align-self-center">
              <h1 className="mb-0 font-40">
                <i className="bi bi-check-circle color-white pe-3" />
              </h1>
            </div>
            <div className="align-self-center">
              <h5 className="color-white font-700 mb-0 mt-0 pt-1">
                Withdrawal of funds to your <br />
                Account has been successful.
              </h5>
            </div>
            <div className="align-self-center ms-auto">
              <i className="bi bi-arrow-right-short color-white d-block pt-1 font-20 opacity-50" />
            </div>
          </a>
        </div>
      </div>
      <div className="content mb-0">
        <div className="d-flex">
          <div className="align-self-center">
            <h3 className="font-16 mb-2">Send Money</h3>
          </div>
          <div className="align-self-center ms-auto">
            <a href="page-payment-transfer.html" className="font-12 pt-1">
              View All
            </a>
          </div>
        </div>
      </div>
      <div
        className="splide quad-slider slider-no-dots slider-no-arrows slider-visible text-center"
        id="double-slider-2"
      >
        <div className="splide__track">
          <div className="splide__list">
            <div className="splide__slide">
              <a
                href="#"
                data-card-height={60}
                data-bs-toggle="offcanvas"
                data-bs-target="#menu-friends-transfer"
                className="card border-0 bg-1 shadow-card shadow-card-m rounded-m"
              />
              <h6 className="pt-2">Johnatan</h6>
            </div>
            <div className="splide__slide">
              <a
                href="#"
                data-card-height={60}
                data-bs-toggle="offcanvas"
                data-bs-target="#menu-friends-transfer"
                className="card border-0 bg-6 shadow-card shadow-card-m rounded-m"
              />
              <h6 className="pt-2">Alexandra</h6>
            </div>
            <div className="splide__slide">
              <a
                href="#"
                data-card-height={60}
                data-bs-toggle="offcanvas"
                data-bs-target="#menu-friends-transfer"
                className="card border-0 bg-3 shadow-card shadow-card-m rounded-m"
              />
              <h6 className="pt-2">Juanita</h6>
            </div>
            <div className="splide__slide">
              <a
                href="#"
                data-card-height={60}
                data-bs-toggle="offcanvas"
                data-bs-target="#menu-friends-transfer"
                className="card border-0 bg-9 shadow-card shadow-card-m rounded-m"
              />
              <h6 className="pt-2">Danielle</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
