import "./SkeletonCart.css"
import "../../../../pages/BasketPage/basket.css"

const SkeletonCart = () => {
    return <div className="menu__card menu__card_skeleton ">
        <p className="card__img circle_skeleton skeleton__color"></p>
        <h3 className="card__title card__title_skeleton skeleton__color"></h3>
        <div className="card__buttons card__buttons_skeleton">
            <div className="card__types card__types_skeleton skeleton__color">
                {
                    ["тонкое", "традиционное"].map((item, typesIndex) => {
                        return <button
                            className="card__btn card__btn_skeleton skeleton__color"
                            key={item}
                        >
                        </button>
                    })
                }
            </div>
            <div className="card__size">
                {
                    [25, 30, 35].map((item, sizesIndex) => {
                        return <button
                            key={item}
                            className="card__btn card__btn_skeleton skeleton__color"
                        >
                        </button>
                    })
                }
            </div>
        </div >
        <div className="card__footer">
            <p className="card__price card__price_skeleton skeleton__color"></p>
            <button className="card__add card__add_skeleton skeleton__color">
            </button>
        </div>
    </div>
}

export default SkeletonCart