import Header from "../../components/Header";
import "./style.scss"

function Home() {
  return (
    <div className="container-fluid h-100 bg-primary">
    <Header />
     <br/>
     <br/>
     <br/>
     <div className="container">
     <div className="principal-box col-12 border-radius">
        <h1 className="text-center">New Marketplace</h1>
        <br/>
        <div className="child-box col-12 border-radius">
          
        </div>
      </div>
     </div>
    </div>
  )
}

export default Home;