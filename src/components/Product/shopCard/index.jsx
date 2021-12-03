import { useDispatch, useSelector } from "react-redux";
import { toggleCartProduct } from "../../../store/modules/shop/actions";
import "./style.scss";

function ShopCard({ product }) {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.shop);
  const isOnShoppingCart =
    cart.findIndex((p) => p._id === product._id) === -1 ? true : false;

  const handleToggleShoppingCart = () => {
    dispatch(toggleCartProduct(product));
  };

  return (
    <div className="col-md-3 mb-5 petshopProduct">
      <div className="containProductImage d-flex pt-4 justify-content-center position-relative">
        <img src={product.capa} alt={product.nome} />
        <button
          className={`btn btn-lg rounded-circle ${
            isOnShoppingCart ? "btn-primary" : "btn-secondary"
          }  position-absolute`}
          onClick={() => handleToggleShoppingCart()}
        >
          {isOnShoppingCart ? "+" : "-"}
        </button>
      </div>
      <div className="d-flex justify-content-between w-100 pt-2">
        <label className="badge">R$ {product.preco}</label>
      </div>
      <div className="title pt-2">
        <b>{product.nome}</b>
      </div>
    </div>
  );
}

export default ShopCard;
