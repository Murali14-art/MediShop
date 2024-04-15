import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="https://assets.isu.pub/document-structure/230824115434-f10fbdb9956f683c5d4393e950c95b0c/v1/ad4579c652e6f65a8a5e34b7b12f6431.jpeg"
            alt="Card"
            height={100}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-lighter text-success">Medical Store</h5>
              <p className="card-text fs-5 d-none d-sm-block text-success">
              We have a wide variety of products for health care and attention, covering the needs of patients and professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
