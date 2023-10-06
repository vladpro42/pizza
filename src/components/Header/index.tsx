import React from "react"
import Title from "../Title"

const Header = () => {
    return <header className="header">
        <div className="container">
            <div className="header__inner">
                <Title />
                <button className="header__btn">
                    <span className="header__price">520 ₽</span>
                    <span className="header__basket">
                        3
                    </span>
                </button>
            </div>
        </div>
    </header>
}

export default Header