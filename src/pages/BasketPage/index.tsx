import Header from "../../components/Header";
import "./basket.css"
import Basket from "../../modules/Basket";

const BasketPage = () => {


    return <div className="basket__container">
        <div className="container">
            <Header />
            <Basket />
        </div>
    </div>
}

export default BasketPage;
