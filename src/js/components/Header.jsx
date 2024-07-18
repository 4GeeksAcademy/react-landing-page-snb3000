import React from "react";

const Header = () => (
  <header className="py-5 bg-secondary">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-xxl-6">
          <div className="text-center my-5">
            <h1 className="fw-bolder">A Warm Welcome!</h1>
            <p className="lead fw-normal text-white mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
              ipsam, eligendi, in quo sunt possimus non incidunt odit vero
              aliquid similique quaerat nam nobis illo aspernatur vitae fugiat
              numquam repellat.
            </p>
            <a className="btn btn-primary btn-lg" href="#features">
              Call to action!
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
