import React from "react";

function Rate() {
  return (
    <>
      <section className="rate">
        <div className="price-con">
          <div className="card">
            <p className="prod">Maize</p>
            <p className="price">₦315 / KG</p>
          </div>
          <div className="card">
            <p className="prod">Soya Beans</p>
            <p className="price">₦375 / KG</p>
          </div>
          <div className="card">
            <p className="prod">Ginger</p>
            <p className="price">₦183 / KG</p>
          </div>
          <div className="card">
            <p className="prod">Sesame Seeds</p>
            <p className="price">₦112 / KG</p>
          </div>
          <div className="card">
            <p className="prod">Hibiscus</p>
            <p className="price">₦220 / KG</p>
          </div>
          <div className="card">
            <p className="prod">Yam</p>
            <p className="price">₦520 / KG</p>
          </div>
          <div className="card">
            <p className="prod">Millet</p>
            <p className="price">₦160 / KG</p>
          </div>
          <div className="card">
            <p className="prod">Soghum</p>
            <p className="price">₦210 / KG</p>
          </div>
        </div>
        {/* <div className="exchange-rate">
        </div> */}
      </section>
    </>
  );
}

export default Rate;
