// ReusableComponent.js
import React from "react";

const Summersection = ({ h1Tag ,pTag, btnText1, btntext2}) => {
  return (
    <section id="summer-section">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-8 text-center summer-text border">
            <h1>{h1Tag}</h1>
            <p> {pTag} </p>
            <div className="btn-div mt-4">
              <button className="btn btn-primary mx-2">{btnText1}</button>
              <button className="btn btn-primary mt-lg-0 ms-lg-4">
                {btntext2}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Summersection;
