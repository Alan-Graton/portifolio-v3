import React from "react";

import english from "../../assets/english.svg";
import spanish from "../../assets/spanish.svg";
import german from "../../assets/german.svg";

import "./styles.css";

/**
 * TODO: Add extra hover animation revealing the comemmented texts
 */
export function IdiomsCard() {
  return (
    <>
      <h1>Idiomas</h1>
      <div className="idiom-cards">
        <div className="idiom-card">
          <img src={english} style={{ width: 70 }} alt="usa flag" />
          {/* <p>CNA</p>
          <p>Fluente</p> */}
        </div>
        <div className="idiom-card">
          <img src={spanish} style={{ width: 70 }} alt="spain flag" />
          {/* <p>CNA</p>
          <p>Intermediário</p> */}
        </div>
        <div className="idiom-card">
          <img src={german} style={{ width: 70 }} alt="germany flag" />
          {/* <p>Goethe Institut</p>
          <p>Intermediário</p> */}
        </div>
      </div>
    </>
  );
}
