import "./style.scss";

const SearchBar = () => (
  <div className="align-right">
      <form action="/orderStatus" method="get">
      <input
          className="form-control-lg mb-2 form-margin"
          type="text"
          id="header-search"
          placeholder="Digite sua ordem"
          name="s" 
      />
      <button  className="btn btn-lg btn-block btn-secondary mdi mdi-magnify pr-1" type="submit">Pesquisar</button>
  </form>
  </div>
);

export default SearchBar;