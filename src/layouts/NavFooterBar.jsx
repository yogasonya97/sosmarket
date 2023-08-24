function NavFooterBar() {
  return (
    <>
      <a href="page-wallet.html">
        <i className="bi bi-wallet2" />
        <span>Cards</span>
      </a>
      <a href="page-activity.html" className="active-nav">
        <i className="bi bi-graph-up" />
        <span>Activity</span>
      </a>
      <a href="/" className="circle-nav-2">
        <i className="bi bi-house-fill" />
        <span>Home</span>
      </a>
      <a href="page-payments.html">
        <i className="bi bi-receipt" />
        <span>Payments</span>
      </a>
      <a href="#" data-bs-toggle="offcanvas" data-bs-target="#menu-sidebar">
        <i className="bi bi-three-dots" />
        <span>More</span>
      </a>
    </>
  );
}
export default NavFooterBar;
