import React from "react";
import "./Service.css";
export default function Service() {
  return (
    <>
      <div className="container_service">
          <div className=" location_vente">
            <div className=" location">
              <div class="title-content">
                <h3>
                  <a href="/location">LOCATION</a>
                </h3>
                <div class="intro">
                  {" "}
                  <a href="/location">Ndamar location</a>{" "}
                </div>
              </div>
              <div class="card-info">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim...
              </div>
            </div>
            <div className=" vente_container">
              <div class="title-content">
                <h3>
                  <a href="/vehicule">LOCATION</a>
                </h3>
                <div class="intro">
                  {" "}
                  <a href="/vehicule">Ndamar Achat</a>{" "}
                </div>
              </div>
              <div class="card-info">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim...
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
