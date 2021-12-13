import { useState } from "react";
import Business from '../../assets/business.png';
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Header from "../../components/Header";

function Registration() {
  const dispatch = useDispatch();
  const [customer, setCustomer] = useState({
    external_id: new Date().getTime().toString(),
    name: "",
    type: "buyer",
    email: "",
    phone_numbers: "",
    password: "",
  });

  return (
    <div className="container-fluid h-100 bg-primary">
      <Header hideCart hideTrack/>
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
              <input 
              type="text" 
              className="form-control form-control-lg mb-3"
              placeholder="Nome completo"
              maxlength="35"
              onChange={(e) => {
                setCustomer({ ...customer, name: e.target.value });
              }}
              />
              
              <input 
              type="email" 
              className="form-control form-control-lg mb-3"
              placeholder="E-mail"
              maxlength="35"
              onChange={(e) => {
                setCustomer({ ...customer, email: e.target.value });
              }}
              />
              
              <input 
              type="text" 
              className="form-control form-control-lg mb-3"
              placeholder="Telefone"
              maxlength="9"
              onChange={(e) => {
                setCustomer({ ...customer, phone_number: [e.target.value] });
              }}
              />

              <input 
              type="password" 
              className="form-control form-control-lg mb-3"
              placeholder="Senha"
              onChange={(e) => {
                setCustomer({ ...customer, password: [e.target.value] });
              }}
              />
              <Link to={{ pathname: "/checkout", state: customer }} >
              <button 
              className="btn btn-lg btn-block btn-secondary">
                Finalizar Compra
              </button>
              </Link>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Registration;