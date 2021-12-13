import "./style.scss";
import { Link } from "react-router-dom";

function ShopCard({ market }) {
  return (
    <div className="col-md-3 mb-5 petshopProduct">
      <div className="containProductImage justify-content-center position-relative">
        <Link to={{ pathname: "/shop", state: market }} >
            <img
              src={market.logo}
              alt={`Logo ${market.logo}`}
              className="img-fluid containProductImage"
            />
        </Link>
      </div>
    </div>
  );
}

export default ShopCard;
