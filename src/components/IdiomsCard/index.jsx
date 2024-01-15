import React from "react";

import english from "../../assets/english.svg";
import spanish from "../../assets/spanish.svg";
import german from "../../assets/german.svg";

export function IdiomsCard() {
  return (
    <>
      <h1>Idiomas</h1>
      <div className="idiom-cards">
        <div className="idiom-card">
          <img src={english} style={{ width: 70 }} alt="usa flag" />
          <p>Fluente</p>
          <p>Estudei no CNA por 6 anos</p>
        </div>
        <div className="idiom-card">
          <img src={spanish} style={{ width: 70 }} alt="spain flag" />
          <p>Intermediário</p>
          <p>Estudei no CNA por 2 anos</p>
        </div>
        <div className="idiom-card">
          <img src={german} style={{ width: 70 }} alt="germany flag" />
          <p>Intermediário</p>
          <p>Estudando no Goethe Institut há ~2 anos</p>
        </div>
      </div>
    </>
  );
}
