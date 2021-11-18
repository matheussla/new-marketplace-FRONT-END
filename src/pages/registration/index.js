import Business from '../../assets/business.png';

import Header from "../../components/Header";

const Registration = () => {
  return (
    <div className="container-fluid h-100 bg-primary">
     <br/>
     <br/>
     <br/>
      <div className="row">
        <div className="col-6 text-center my-auto">
          <img src={Business} />
        </div>
        <div className="col-6">
          <div className="box col-6">
            <h2 className="text-center boxH2" >Cadastre-se</h2>
            <br />
            <input type="checkbox" className="checkbox1" id="buyer" />
            <label for="buyer">Comprador</label>
            <input type="checkbox" className="checkbox2" id="seller"  />
            <label for="seller">Vendedor</label>
            <br />
              <input 
              type="text" 
              className="form-control form-control-lg mb-3"
              placeholder="Nome completo"
              />
              
              <input 
              type="email" 
              className="form-control form-control-lg mb-3"
              placeholder="E-mail"
              />
              
              <input 
              type="text" 
              className="form-control form-control-lg mb-3"
              placeholder="Telefone"
              />

              <input 
              type="password" 
              className="form-control form-control-lg mb-3"
              placeholder="Senha"
              />

              <button className="btn btn-lg btn-block btn-secondary">
                Salvar
              </button>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Registration;