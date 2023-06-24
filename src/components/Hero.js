import React from "react";

export default function Hero() {
  return (
    <section>
      <div className="container-fluid px-0 hero-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* <div className="hero-text">
             
                <h1>Wanderlust Meets Wander-light</h1>
                <h3>Lightweight styles for wherever the wind takes you. </h3>

                <div className="btn-div mt-4">
                  <button className="btn btn-primary mx-2">SHOP MEN</button>
                  <button className="btn btn-primary ms-lg-4 mt-lg-0 mt-4">
                    SHOP WOMEN
                  </button>
                </div>
              </div> */}
              <div className="hero-text">
                <h1>Wanderlust Meets Wander-light</h1>
                <h3>Lightweight styles for wherever the wind takes you. </h3>
                <div className="btn-div mt-4">
                  <button className="btn btn-primary mx-2">SHOP MEN</button>
                  <button className="btn btn-primary mt-lg-0 ms-lg-4">
                    SHOP WOMEN
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
