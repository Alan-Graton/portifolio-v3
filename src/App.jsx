import "./App.css";

function App() {
  return (
    <>
      <div className="card">
        <h1>Sobre mim</h1>
        <p>
          Desenvolvedor Fullstack com ~3 anos de experiência. Nesses anos pude
          aprender sobre a stack utilizada na Valiant Group.
        </p>
        <p>
          Sou comprometido com minhas tarefas, sei trabalhar em equipe e adoro
          novos desafios e não gosto de ficar ocioso. Estou sempre lendo,
          assistindo e praticando algo da minha área.
        </p>
      </div>
      <div className="card">
        <h1>Minha jornada</h1>
        <p>
          Fiz a faculdade de ADS na UNIP de 2021 - 2022 realizando projetos em
          C++ e C#.
        </p>
        <p>
          No meu 3º semestre na faculdade tive a oportunidade de entrar na VG
          sem nenhum conhecimento de Desenvolvimento Web/Mobile.
        </p>
      </div>
      <div className="card">
        <h1>Minhas Tecnologias</h1>
        <ul>
          <li style={{ textAlign: "start" }}>
            Frontend
            <ul>
              <li>React</li>
              <li>React-Native</li>
              <li>CSS</li>
              <li>SCSS</li>
              <li>Styled-Components</li>
              <li>Gluestack UI - Estudando</li>
              <li>Linaria - Estudando</li>
            </ul>
          </li>
          <li style={{ textAlign: "start" }}>
            Backend
            <ul>
              <li>NodeJS</li>
              <li>TypeScript</li>
              <li>AWS Lambdas</li>
              <li>Serverless Framework</li>
              <li>TypeORM</li>
            </ul>
          </li>
          <li style={{ textAlign: "start" }}>
            Nuvem
            <ul>
              <li>
                AWS
                <ul>
                  <li>AWS Lambdas</li>
                  <li>AWS Amplify</li>
                  <li>AWS S3</li>
                  <li>AWS Cognito</li>
                </ul>
              </li>
              <li>
                GCP
                <ul>
                  <li>Cloud Functions</li>
                  <li>Bigquery</li>
                  <li>Cloud Build</li>
                  <li>App Engine</li>
                </ul>
              </li>
            </ul>
          </li>
          <li style={{ textAlign: "start" }}>
            Ferramentas
            <ul>
              <li>DBeaver</li>
              <li>Postman</li>
              <li>Insomnia</li>
              <li>Git</li>
              <li>GitHub Actions</li>
              <li>CI/CD</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="card">
        <h1>Experiências</h1>
        <section>
          <h2>Valiant Group</h2>
          <h3>Descrição</h3>
          <p>
            Minha primeira e atual experiência profissional, onde pude
            aprender/ensinar diversas tecnologias.
          </p>
          <h4>Projetos</h4>
          <ul>
            <li style={{ textAlign: "start" }}>
              Fenix Portal {"(Portal Web)"}
              <p>
                Entrei no projeto para dar suporte ao desenvolvedor inicial{" "}
                {"(pleno)"} por questões do cronograma.
              </p>
              <p>
                Foi necessário desenvolver uma Aplicação Web Fullstack para a
                empresa <strong>Fenix Group of Companies</strong> do Canada para
                gerenciamento de pessoal, projetos e salários de seus
                empregrados.
              </p>
              <p>
                Participei em diversos desenvolvimentos de melhorias e ajustes,
                também fiquei encarregado de integrar o portal com a API do
                QuickBooks, o qual era o sistema de contabilidade utilizado pelo
                cliente.
              </p>
              <h5>Tecnologias</h5>
              <ul>
                <li>
                  Frontend
                  <ul>
                    <li>ReactJS</li>
                    <li>AWS Cognito</li>
                    <li>AWS Amplify</li>
                  </ul>
                </li>
                <li>
                  Backend
                  <ul>
                    <li>Typescript</li>
                    <li>AWS Lambda</li>
                    <li>Serverless Framework</li>
                    <li>QuickBooks API</li>
                  </ul>
                </li>
                <li>
                  Banco de Dados
                  <ul>
                    <li>MySQL</li>
                    <li>DBeaver</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li style={{ textAlign: "start" }}>
              Fenix Construction {"(App Mobile)"}
              <p>
                Ao fim do projeto pude aprender a desenvolver um app fullstack
                sozinho, realizar deploys e publicar o app nas lojas: Play Store
                e App Store.
              </p>
              <ul>
                <li>
                  Aplicativo Mobile desenvolvido para a empresa{" "}
                  <strong>Fenix Group of Companies</strong>
                </li>
                <p>
                  Com o portal tendo a equipe de escritório da Fenix como alvo,
                  o app foi desenvolvido visando como usuários os funcionários
                  que trabalhavam nas contruções e demolições.
                </p>
                <p>
                  O Aplicativo é totalmente integrado com o portal, com isso, a
                  equipe Fenix pode agendar novos trabalhos para seus
                  funcionários. Os usuário por sua vez podem "bater seus pontos"
                  tirando uma foto somente se estiverem a pelo menos 10KM do
                  local de trabalho.
                </p>
                <p>
                  Também é possível visualizar o total de horas realizadas
                  dentro da quinzena e do fim do mês.
                </p>
              </ul>
              <h5>Tecnologias</h5>
              <ul>
                <li>
                  Frontend
                  <ul>
                    <li>React Native</li>
                    <li>JavaScript</li>
                    <li>Styled-Components</li>
                  </ul>
                </li>
                <li>
                  Backend
                  <ul>
                    <li>TypeScript</li>
                    <li>AWS Lambdas</li>
                    <li>Serverless Framework</li>
                  </ul>
                </li>
                <li>
                  Banco de Dados
                  <ul>
                    <li>MySQL</li>
                    <li>TypeORM</li>
                  </ul>
                </li>
                <li>
                  Serviços de Nuvem
                  <ul>
                    <li>AWS S3</li>
                    <li>AWS Lambdas</li>
                    <li>AWS Cognito</li>
                  </ul>
                </li>
                <li>
                  Ferramentas
                  <ul>
                    <li>DBeaver</li>
                    <li>GitHub Actions</li>
                    <li>Expo</li>
                    <li>EAS</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li style={{ textAlign: "start" }}>
              Telemedicina {"E-saúde"} {"(App Mobile)"}
              <ul>
                <li>
                  Aplicativo criado em parceiria com a <strong>YouCast</strong>,
                  onde foi desenvolvido apenas o frontend de uma aplicação
                  webview para iOS que redirecionava o usuário para a plataforma{" "}
                  <strong>Médico Online</strong> após usuário realizar seu
                  cadastro e login com sua conta da YouCast.
                </li>
              </ul>
              <h5>Tecnlogias</h5>
              <ul>
                <li>
                  Frontend
                  <ul>
                    <li>React Native</li>
                    <li>JavaScript</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li style={{ textAlign: "start" }}>
              Kondzilla {"(Backend)"}
              <ul>
                <li>
                  Porjeto onde foi desenvolvido um Backend que integrava com um
                  Dashboard BI.
                </li>

                <p>
                  Fiquei encarregado de desenvolver o Backend que buscava
                  fiscais da empresa em diversas API's para popular um Banco de
                  Dados MySQL.
                </p>
                <p>
                  Também foi necessário desenvolver um pequeno formulário para
                  que os usuário pudessem carregar arquivos{" "}
                  <strong>.CSV</strong> e <strong>.XLSX</strong> para serem
                  processados e enviados para o Banco de Dados.
                </p>
              </ul>
              <h5>Tecnologias</h5>
              <ul>
                <li>
                  Backend
                  <ul>
                    <li>TypeScript</li>
                    <li>AWS Scheduled Lambdas</li>
                    <li>AWS S3 Lambdas</li>
                    <li>Serverless Framework</li>
                  </ul>
                </li>
                <li>
                  Banco de Dados
                  <ul>
                    <li>MySQL</li>
                    <li>TypeORM</li>
                  </ul>
                </li>
                <li>
                  Serviços de Nuvem
                  <ul>
                    <li>AWS Amplify</li>
                    <li>AWS S3</li>
                    <li>AWS Lambdas</li>
                    <li>AWS Cognito</li>
                  </ul>
                </li>
                <li>
                  Ferramentas
                  <ul>
                    <li>DBeaver</li>
                    <li>GitHub Actions</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </section>

        <section>
          <h2>Grupo Intelsis</h2>
          <h3>Descrição</h3>
          <p>
            Participei em projetos SAP através de uma parceria entre a{" "}
            <strong>Valiant Group</strong> & <strong>Grupo Intelsis</strong>.
          </p>
          <h4>Projetos</h4>
          <ul>
            <li style={{ textAlign: "start" }}>LATAM</li>
            <ul>
              <li style={{ textAlign: "start" }}>
                Projeto onde pude aprender <strong>SAP CPI</strong> durante o
                desenvolvimento de um projeto para a LATAM.
                <br />
                <p>
                  Foi necessário criar vários fluxos no CPI para realizar a
                  integração entre 2 plataformas onde a empresa cliente realiza
                  a compra de peças de suas aeronaves.
                </p>
              </li>
            </ul>
            <li style={{ textAlign: "start" }}>Vale</li>
            <ul>
              <li style={{ textAlign: "start" }}>
                Projeto onde pude aprender <strong>Fiori UI5</strong> durante
                desenvolvimento do projeto.
              </li>
              <p>
                Participei em desenvolvimentos de diversos <strong>GAPs</strong>{" "}
                do projeto inicial. Sigo com o desenvolvimento atualmente com
                auxílio de outro desenvolvedor Fiori
              </p>
            </ul>
          </ul>
        </section>
      </div>
    </>
  );
}

export default App;
