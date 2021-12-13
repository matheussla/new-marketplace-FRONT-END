import Header from "../../components/Header";
import MarketCard from "../../components/MarketCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestShops } from "../../store/modules/shop/actions";
import "./style.scss"

function Home() {
  const dispatch = useDispatch();
  const { shops } = useSelector((state) => state.shop);

  useEffect(() => {
    dispatch(requestShops());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container-fluid h-100 bg-primary">
    <Header />
     <br/>
     <br/>
     <br/>
     <div className="container">
     <div className="principal-box col-12 border-radius">
        <h1 className="text-center">Lojas</h1>
        <br/>
        <div className="child-box col-12 border-radius">
              <div className="row">
                {shops &&
                  shops.map((p) => (
                    <MarketCard key={p._id} market={p} />
                  ))}
              </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Home;