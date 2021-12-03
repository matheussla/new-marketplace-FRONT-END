import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import "./style.scss";

import 'bootstrap/dist/css/bootstrap.min.css';

const OrderStatus = (trackId) => {

  const deliveryDate = () => {
    const date = new Date(Date.now());
    
    const randomDay = Math.floor(Math.random() * 5) + 1 ;

    const finalDay = date.getDate() + randomDay;

    if(finalDay > 30) {
      const day = finalDay - 31;
      const month = date.getMonth() + 2;
      return `${day === 0 ? 1 : day}/${month >= 12 ? 12 : month}`
    } else {
      return `${finalDay}/${date.getMonth() + 1}`
    }
  }

  const stepsObject = {
    0: "Ordem Confirmada",
    1: "Processando",
    2: "Preparando Produto",
    3: "Produto Enviado",
    4: "Produto Entregue"
  }
  
  const random = Math.floor(Math.random() * 4);

  const randomStatus = () => {
    return stepsObject[random]
  }
  
  const randomSteps = (step) => {
    if(step <= random) {
      return "step completed"
    } else {
      return "step"
    }
  }

  return (
    <div className="container-fluid h-100 bg-primary">
   
      <Header hideCart hideTrack/>
      <div class="container padding-bottom-3x mb-1">
      <SearchBar/>
      <div class="card mb-3">
        <div class="p-4 text-center text-white text-lg bg-dark rounded-top"><span class="text-uppercase">Tracking Order No - </span><span class="text-medium">001698653lp</span></div>
        <div class="d-flex flex-wrap flex-sm-nowrap justify-content-between py-3 px-2 bg-secondary">
          <div class="w-100 text-center py-1 px-2"><span class="text-medium">Empresa:</span> Correios</div>
          <div class="w-100 text-center py-1 px-2"><span class="text-medium">Status:</span> {randomStatus()}</div>
          <div class="w-100 text-center py-1 px-2"><span class="text-medium">Entregue até:</span> {deliveryDate()}</div>
        </div>
        <div class="card-body bg-color">
          <div class="steps d-flex flex-wrap flex-sm-nowrap justify-content-between padding-top-2x padding-bottom-1x">
            <div class={randomSteps(0)}>
              <div class="step-icon-wrap">
                <div class="step-icon"><i class="pe-7s-cart"></i></div>
              </div>
              <h4 class="step-title">Ordem Confirmada</h4>
            </div>
            <div class={randomSteps(1)}>
              <div class="step-icon-wrap">
                <div class="step-icon"><i class="pe-7s-config"></i></div>
              </div>
              <h4 class="step-title">Processando</h4>
            </div>
            <div class={randomSteps(2)}>
              <div class="step-icon-wrap">
                <div class="step-icon"><i class="pe-7s-medal"></i></div>
              </div>
              <h4 class="step-title">Preparando Produto</h4>
            </div>
            <div class={randomSteps(3)}>
              <div class="step-icon-wrap">
                <div class="step-icon"><i class="pe-7s-car"></i></div>
              </div>
              <h4 class="step-title">Produto Enviado</h4>
            </div>
            <div class={randomSteps(4)}>
              <div class="step-icon-wrap">
                <div class="step-icon"><i class="pe-7s-home"></i></div>
              </div>
              <h4 class="step-title">Produto Entregue</h4>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
}

export default OrderStatus;