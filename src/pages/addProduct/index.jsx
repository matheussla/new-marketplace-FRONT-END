import Header from "../../components/Header";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setProduct as setStateProduct } from "../../store/modules/shop/actions";
import "./style.scss";
import DefaultImage from "../../assets/default.jpg"

function AddProduct() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({
    external_id: new Date().getTime().toString(),
    name: "",
    type: "buyer",
    email: "",
    phone_numbers: "",
    password: "",
  });
  return (
    <div className="container-fluid h-100 bg-primary">
    {/* <Header /> */}
     <br/>
     <br/>
     <br/>
     <div className="container">
     <div className="principal-box col-3 border-radius">
        <h1 className="text-center">Adicionar Produto</h1>
        <br/>
        <div className="child-box col-12 border-radius">

        <div className="imagem-box text-center">
          <img src={DefaultImage} width="250px"/>
        </div>
        
        <br/>
        

          <input 
          type="text" 
          className="form-control form-control-lg mb-3"
          placeholder="Nome"
          />
          
          <input 
          type="text" 
          className="form-control form-control-lg mb-3"
          placeholder="Preço"
          />

          <input 
          type="text" 
          className="form-control form-control-lg mb-3"
          placeholder="Descrição"
          />

          <input 
          type="text" 
          className="form-control form-control-lg mb-3"
          placeholder="imagem.jpg"
          />

          <div class="text-center mb-3">
            <button className="btn-primary">
                Salvar
            </button>
          </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default AddProduct;