import { useState } from "react";
import LayoutMaster from "./layouts/LayoutsMaster";

function App() {
  return (
    <>
      <LayoutMaster>
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
        <div className="card card-style mt-4">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://gameguru.ru/media/cache/66/dc/66dc55df642c35ce9a3e610cf1b032fa.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://gameguru.ru/media/cache/66/dc/66dc55df642c35ce9a3e610cf1b032fa.jpg"
                  className="d-hide w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://gameguru.ru/media/cache/66/dc/66dc55df642c35ce9a3e610cf1b032fa.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="content mt-2">
          <ul
            className="nav nav-pills mb-3 nav-justified"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Games
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Sosmed
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                Pulsa
              </button>
            </li>
          </ul>
        </div>
        <div className="card shadow mb-4">
          <div className="card-body">
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div className="d-flex text-center">
                  <div className="me-auto">
                    <a
                      href="#"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#menu-transfer"
                      className="icon icon-xxl rounded-m bg-theme shadow"
                    >
                      <img
                        src="https://gameguru.ru/media/cache/66/dc/66dc55df642c35ce9a3e610cf1b032fa.jpg"
                        className="rounded"
                        style={{ width: 65 }}
                      />
                      {/* <i className="font-28 color-red-dark bi bi-arrow-down-circle" /> */}
                    </a>
                    <h6 className="font-13 opacity-80 font-500 mb-0 pt-2">
                      Mobile Legends
                    </h6>
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
                    <h6 className="font-13 opacity-80 font-500 mb-0 pt-2">
                      Request
                    </h6>
                  </div>
                  <div
                    data-bs-toggle="offcanvas"
                    data-bs-target="#menu-exchange"
                    className="m-auto"
                  >
                    <a
                      href="#"
                      className="icon icon-xxl rounded-m bg-theme shadow-m"
                    >
                      <i className="font-28 color-blue-dark bi bi-arrow-repeat" />
                    </a>
                    <h6 className="font-13 opacity-80 font-500 mb-0 pt-2">
                      Exchange
                    </h6>
                  </div>
                  <div className="ms-auto">
                    <a
                      href="page-payment-bill.html"
                      className="icon icon-xxl rounded-m bg-theme shadow-m"
                    >
                      <i className="font-28 color-brown-dark bi bi-filter-circle" />
                    </a>
                    <h6 className="font-13 opacity-80 font-500 mb-0 pt-2">
                      Bills
                    </h6>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                Profile
              </div>
              <div
                className="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
              >
                Contact
              </div>
            </div>
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
        {/* <div
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
        </div> */}
      </LayoutMaster>
    </>
  );
}

export default App;
