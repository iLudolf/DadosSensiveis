import './styles.css';

function Home() {
  return (
    <>
      <main className="home">
        <div class="container py-4">
          <header class="pb-3 mb-4 border-bottom">
            <a href="/" class="d-flex align-items-center text-dark text-decoration-none">
              <a class="navbar-brand text-dark" href="/" > <img src="./basket.svg" className="bi  mx-5" width="40" height="40" title="Ramais" alt="phone"></img>Dados Sensiveis</a>
            </a>
          </header>


          <div class="row align-items-md-stretch">
            <div class="col-md-6 ">
              <div class="h-100 p-5  prod  rounded-3">
                <h2> Ambiente de Produção</h2>
                <br /><p>Banco de dados <b>PostgreSQL</b> na AWS RDS</p><br />
                <p>Objetivo do ambiente de produção é usar uma base de dados relacional (PostgreSql), junto com o Sequelize ORM. Foi desenvolvido as rotas para a API, nesse ambiente é possível e realizar transações em um RDBS (Relational Database System), todo ambiente de desenvolvimento foi criado para uso e teste PostgreSql.</p>
                <a class="btn btn-outline-dark" href="/production" type="button">Abrir</a>
              </div>
            </div>
            <div class="col-md-6">
              <div class="h-100 p-5 dev border rounded-3">
                <h2>Ambiente de Desenvolvimento</h2>
                <br /><p>Banco de dados <b>Mongodb </b> no Atlas Database</p><br />
                <p>Objetivo do ambiente de desenvolvimento  é usar uma base de dados NoSQL (Mongodb), junto com o Mongoose. Foi desenvolvido as rotas para a API, nesse ambiente é possível e realizar transações em um NoSQL (Non-Relational Database), todo ambiente de desenvolvimento foi criado para uso e teste do Mongodb em um ambiente cloud (Atlas Database).</p>
                <a class="btn btn-outline-dark" href="/development" type="button">Abrir</a>
              </div>
            </div>
          </div>






          <div class="pt-3 mt-4 text-muted border-top"> </div>


        </div>
      </main>
    </>
  );
}

export default Home;
