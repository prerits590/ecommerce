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
              <button className="btn main-btn2 mx-2 px-5"><p className="text">{btnText1}</p></button>
              <button className="btn main-btn2 mt-lg-0 ms-lg-4">
               <p className="text">{btntext2}</p> 
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Summersection;
{/* <button className="btn main-btn"><p className="text">SHOP MEN</p></button>
<button className="btn main-btn mt-lg-0 ms-lg-4">
  <p className="text">SHOP WOMEN</p>
</button> */}