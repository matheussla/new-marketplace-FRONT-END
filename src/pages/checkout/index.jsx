import { useState } from "react";
import Header from "../../components/Header";
import Product from "../../components/Product/list";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./style.scss";
function Checkout(props) {

  const customer = props.location.state;
  console.log(customer);
  const { cart } = useSelector((state) => state.shop);
  const total = cart
    .map((e) => e.price)
    .reduce((a, b) => {
      return a + b;
    }, 0);

  const [card, setCard] = useState({
    number: "",
    cvv: "",
    validate: ""
  });
  return (
    <div className="container-fluid h-100 bg-primary">
      <Header hideTrack/>
      <div className="container mt-4">
        <div className="row">
          <div className="col-6">
            <h5>{customer.name}</h5>
            <br/>
            <h6>{customer.email}</h6>
            <br/>
            <span className="section-title">Dados de Entrega</span>
            <div className="row mb-3">
              <div className="col-12">
                <input
                  type="text"
                  placeholder="CEP"
                  className="form-control form-control-lg"
                  maxlength="9"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-6">
                <input
                  type="text"
                  placeholder="Cidade"
                  className="form-control form-control-lg"
                  maxlength="20"
                />
              </div>
              <div className="col-6">
                <input
                  type="text"
                  placeholder="Logradouro"
                  className="form-control form-control-lg"
                  maxlength="10"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-5">
                <input
                  type="text"
                  placeholder="Número"
                  className="form-control form-control-lg"
                  maxlength="5"
                />
              </div>
              <div className="col-5">
                <input
                  type="text"
                  placeholder="Bairro"
                  className="form-control form-control-lg"
                />
              </div>
              <div className="col-2">
                <input
                  type="text"
                  placeholder="UF"
                  className="form-control form-control-lg"
                  maxlength="2"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-6">
                <input
                  type="text"
                  placeholder="Bairro"
                  className="form-control form-control-lg"
                  maxlength="20"
                />
              </div>
              <div className="col-6">
                <input
                  type="text"
                  placeholder="Complemento"
                  className="form-control form-control-lg"
                  maxlength="20"
                />
              </div>
            </div>

            <span className="section-title">Dados de Pagamento</span>
            <div className="row mb-3">
              <div className="col-12">
                <input
                  type="text"
                  placeholder="Número do Cartão"
                  className="form-control form-control-lg"
                  maxlength="16"
                  onChange={(e) => {
                    setCard({ ...card, validate: e.target.value });
                  }}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-6">
                <input
                  type="text"
                  placeholder="Validade"
                  className="form-control form-control-lg"
                  maxlength="4"
                  onChange={(e) => {
                    setCard({ ...card, number: e.target.value });
                  }}
                />
              </div>
              <div className="col-6">
                <input
                  type="text"
                  placeholder="CVV"
                  className="form-control form-control-lg"
                  maxlength="3"
                  onChange={(e) => {
                    setCard({ ...card, cvv: e.target.value });
                  }}
                />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-12  d-flex justify-content-between align-items-center">
                <b>Total</b>
                <h3>R$ {total.toFixed(2)}</h3>
              </div>
              <div className="col-12">
                <Link to={{ pathname: "/confirmation", state: card }} className="btn btn-block w-100 btn-lg btn-secondary">
                Finalizar Compra
                </Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="box mb-4 box-sidebar">
              <h4>Minha Sacola ({cart.length})</h4>
              <div className="row products">
                {cart.map((p) => (
                  <Product product={p} key={p._id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
