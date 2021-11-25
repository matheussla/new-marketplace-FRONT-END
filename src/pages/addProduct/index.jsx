import Header from "../../components/Header";
import "./style.scss";

const AddProduct = () => {
  return (
    <div className="container-fluid h-100 bg-primary">
    <Header />
     <br/>
     <br/>
     <br/>
     <div className="principal-box">
     <h2 className="text-center h2Text" >Adicione seu produto</h2>
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

        <button className="btn btn-lg btn-block mb-3 btn-secondary">
        Salvar
        </button>

     </div>
    </div>
  )
}

export default AddProduct;