import React from "react";

// Frontend
import reactsvg from "../../assets/react.svg";
import fioriui5svg from "../../assets/fioriui5.svg";
import styledcomponentspng from "../../assets/styledcomponents.png";
import coreuisvg from "../../assets/coreui.svg";
import gluestackuisvg from "../../assets/gluestackui.png";
import linariasvg from "../../assets/linaria.svg";

// Backend
import nodesvg from "../../assets/nodejs.svg";
import typescriptsvg from "../../assets/typescript.svg";
import awslambdasvg from "../../assets/awslambda.svg";
import serverlesssvg from "../../assets/serverless.svg";
import typeormsvg from "../../assets/typeorm.png";

// Clouds
import awssvg from "../../assets/aws.svg";
import gcpsvg from "../../assets/gcp.svg";

// Tools
import dbeaverpng from "../../assets/dbeaver.png";
import postmansvg from "../../assets/postman.svg";
import insomniasvg from "../../assets/insomnia.svg";
import git from "../../assets/git.svg";

import "./styles.css";

export function TechsCards() {
  return (
    <>
      <h1>Minhas Tecnologias</h1>
      <div className="tech-cards">
        <div className="tech-card frontend">
          <img className="tech-logo" src={reactsvg} alt="React logo" />
        </div>
        <div className="tech-card frontend">
          <img className="tech-logo" src={reactsvg} alt="React-Native logo" />
        </div>
        <div className="tech-card frontend">
          <img className="tech-logo" src={fioriui5svg} alt="Fiori UI5 logo" />
        </div>
        <div className="tech-card frontend">
          <img
            className="tech-logo"
            style={{ width: "55px", height: "55px" }}
            src={styledcomponentspng}
            alt="Styled-Components logo"
          />
        </div>
        <div className="tech-card frontend">
          <img
            className="tech-logo"
            style={{ width: "65px", height: "65px" }}
            src={coreuisvg}
            alt="CoreUI logo"
          />
        </div>
        <div className="tech-card frontend">
          <img
            className="tech-logo"
            src={gluestackuisvg}
            alt="Gluestack UI logo"
          />
        </div>
        <div className="tech-card frontend">
          <img
            className="tech-logo"
            style={{ width: "60px", height: "60px" }}
            src={linariasvg}
            alt="Linaria logo"
          />
        </div>
        <div className="tech-card">
          <img className="tech-logo" src={nodesvg} alt="NodeJS logo" />
        </div>
        <div className="tech-card">
          <img
            className="tech-logo"
            src={typescriptsvg}
            alt="TypeScript logo"
          />
        </div>
        <div className="tech-card">
          <img
            className="tech-logo"
            src={awslambdasvg}
            alt="AWS Lambdas logo"
          />
        </div>
        <div className="tech-card">
          <img
            className="tech-logo"
            src={serverlesssvg}
            alt="Serverless Framework logo"
          />
        </div>
        <div className="tech-card">
          <img className="tech-logo" src={typeormsvg} alt="TypeORM logo" />
        </div>
        <div className="tech-card">
          <img className="tech-logo" src={awssvg} alt="AWS logo" />
        </div>
        <div className="tech-card">
          <img className="tech-logo" src={gcpsvg} alt="GCP logo" />
        </div>
        <div className="tech-card">
          <img className="tech-logo" src={dbeaverpng} alt="DBeaver logo" />
        </div>
        <div className="tech-card">
          <img className="tech-logo" src={postmansvg} alt="Postman logo" />
        </div>
        <div className="tech-card">
          <img className="tech-logo" src={insomniasvg} alt="Insomnia logo" />
        </div>
        <div className="tech-card">
          <img className="tech-logo" src={git} alt="Git logo" />
        </div>
      </div>
    </>
  );
}
