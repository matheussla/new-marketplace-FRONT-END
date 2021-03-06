import Header from "../../components/Header";
import ShopCard from "../../components/Product/shopCard";
import "./style.scss";

function Shop(props) {
  const shop = props.location.state;

  return (
    <div className="h-100 shop bg-primary">
      <Header hideTrack/>
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
                    <ShopCard key={p._id} product={p} />
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
