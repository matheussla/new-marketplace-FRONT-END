import Header from "../../components/Header";
import "./style.scss";

function Confirmation(props) {
  const card = props.location.state;

  const validCard = (card) => {
    if(card.number && card.cvv && card.validate){
      return <h1 className="h1">Sucesso!</h1>
    }
    return <h1 className="h1-error">Cartão Inválido</h1>
  }
  
  const message = () => {
    if(validCard(card) ===  "Sucesso!"){
      return "Recebemos seu Pedido!"
    }
    return "Erro ao realizar seu pedido"
  }

  return (
    <div className="container-fluid h-100 bg-primary">
    <Header hideCart hideTrack/>
      <div className="body" >
        <div class="card">
          {validCard(card)}
          <p className="p">{message()}</p>
        </div>

      </div>
    </div>
  )
}

export default Confirmation;