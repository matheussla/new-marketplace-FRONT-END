import Header from "../../components/Header";
import "./style.scss";

function Confirmation() {
  return (
    <div className="container-fluid h-100 bg-primary">
    <Header hideCart hideTrack/>
      <div className="body" >
        <div class="card">
          <h1 className="h1">Sucesso</h1> 
          <p className="p">Recebemos seu Pedido!</p>
        </div>
      </div>
    </div>
  )
}

export default Confirmation;