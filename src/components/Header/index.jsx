import Logo from "../../assets/logo.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./style.scss";
function Header({ hideCart, hideTrack }) {
  const { cart } = useSelector((state) => state.shop);
  const productsInCart = cart.length;
  const openDrawer = () => {
    const event = new CustomEvent("openCart");
    window.dispatchEvent(event);
  };
  return (
    <div className="container pb-5">
      <div className="row">
        <div className="col-6 text-center py-5 offset-3 d-flex justify-content-center align-items-center">
          <header>
            <Link to="/">
              <img
                src={Logo}
                alt="NewMarketplace"
                className="img-responsive"
                width="200px"
              />
            </Link>
          </header>
        </div>
        <div className="col-3 text-align-right d-flex justify-content-end align-items-center">
        {!hideTrack && (
             <Link to="/orderStatus"
              className="btn btn-secondary ml-0 bt-space"
            >
              <span className="mdi mdi-magnify pr-1"></span>
              <b>Rastrear</b>
            </Link>
          )}
          
          {!hideCart && (
            <button
              className="btn btn-secondary ml-0"
              onClick={() => {
                openDrawer();
              }}
            >
              <span className="mdi mdi-cart pr-1"></span>
              <b>{productsInCart} Itens</b>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
