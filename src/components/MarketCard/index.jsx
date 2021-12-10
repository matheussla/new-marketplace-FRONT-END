import "./style.scss";

function ShopCard({ market }) {
  return (
    <div className="col-md-3 mb-5 petshopProduct">
      <div className="containProductImage d-flex pt-4 justify-content-center position-relative">
        <img src={market.cover} alt={market.name} />
      </div>
    </div>
  );
}

export default ShopCard;
