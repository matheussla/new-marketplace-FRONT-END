import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import ShopCard from "../../components/Product/shopCard";
import { requestShop } from "../../store/modules/shop/actions";
import "./style.scss";

function Shop() {
  const dispatch = useDispatch();
  const { shop } = useSelector((state) => state.shop);

  const { id } = useParams();

  useEffect(() => {
    dispatch(requestShop(id));
  }, []);

  return (
    <div className="h-100 shop">
      <Header />
      <div className="container">
        {shop && (
          <div className="row">
            <div className="col-2">
              <img
                src={shop.logo}
                alt={`Logo ${shop.logo}`}
                className="img-fluid"
              />
              <b>{shop.name}</b>
              <div className="shop-infos">
                <span className="mdi mdi-star"></span>
                <b>{shop.rank}</b>
                <span className="mdi mdi-cash-usd-outline"></span>
                <b>{shop.category}</b>
              </div>
              <label className="badge badge-primary">Frete Grátis</label>
            </div>
            <div className="col-10">
              <h4 className="mb-4">Produtos</h4>
              <div className="row">
                {shop &&
                  shop.products.map((p) => (
                    <ShopCard key={p._id} produto={p} />
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Shop;
