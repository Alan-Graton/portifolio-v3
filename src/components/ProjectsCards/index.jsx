import React from "react";

import vgLogo from "../../assets/valiant.png";
import intelsisLogo from "../../assets/intelsis.png";

import "./styles.css";

export function ProjectsCards() {
  return (
    <>
      <section className="valiant-projects">
        <h1>Experiências</h1>
        <img style={{ width: 300 }} src={vgLogo} alt="Valiant Group logo" />

        <p>
          Minha primeira e atual experiência profissional, onde pude
          aprender/ensinar diversas tecnologias.
        </p>
        <h2>Projetos</h2>
        <div className="projects">
          <div className="project-card">
            <h3>Fenix Group of Companies</h3>
            <h4>Portal Web</h4>
          </div>
          <div className="project-card">
            <h3>Fenix Group of Companies</h3>
            <h4>App Mobile</h4>
          </div>

          <div className="project-card">
            <h3>Youcast</h3>
            <h4>App Mobile</h4>
          </div>

          <div className="project-card">
            <h3>Kondzilla</h3>
            <h4>Carga de dados contínua</h4>
          </div>

          <div className="project-card">
            <h3>Vale</h3>
            <h4>Portal Web</h4>
          </div>
        </div>
      </section>
      <section className="intelsis-projects">
        <img
          style={{ width: 300 }}
          src={intelsisLogo}
          alt="Grupo Intelsis logo"
        />

        <p>
          Participei em projetos SAP através de uma parceria entre a{" "}
          <strong>Valiant Group</strong> & <strong>Grupo Intelsis</strong>.
        </p>
        <h2>Projetos</h2>
      </section>
    </>
  );
}
