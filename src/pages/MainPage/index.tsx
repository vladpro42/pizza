import React from "react"
import Header from "../../components/Header";

const MainPage = () => {
    return <div className="body">
        <Header />
        <div className="container">
            <nav className="navigation">
                <div className="navigation__btns-box">
                    <button className="navigation__btn navigation__btn_active" value="Все">Все</button>
                    <button className="navigation__btn" value="Все">Мясные</button>
                    <button className="navigation__btn" value="Все">Вегетарианская</button>
                    <button className="navigation__btn" value="Все">Гриль</button>
                    <button className="navigation__btn" value="Все">Острые</button>
                    <button className="navigation__btn" value="Все">Закрытые</button>
                </div>
                <div className="navigation__sort">
                    <svg className="sort__btn" xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
                        <path d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z" fill="#2C2C2C" />
                    </svg>
                    <span className="sort__title">Сортировка по:</span>
                    <select className="sort__select" name="" id="">
                        <option className="sort__param" value="">популярности</option>
                        <option className="sort__param" value="">по цене</option>
                        <option className="sort__param" value="">по алфавиту</option>
                    </select>
                </div>
            </nav>
            <div className="menu">
                <div className="container">
                    <h2 className="menu__title">Все пиццы</h2>
                    <div className="menu__inner">
                        <div className="menu__card">
                            <img className="card__img" src="/img/pizza1.jpg" alt="" />
                            <h3 className="card__title">Чизбургер-пицца</h3>
                            <div className="card__buttons">
                                <div className="card__types">
                                    <button className="card__btn card__btn_active">тонкое</button>
                                    <button className="card__btn">традиционное</button>
                                </div>
                                <div className="card__size">
                                    <button className="card__btn card__btn_active">26 см.</button>
                                    <button className="card__btn">30 см.</button>
                                    <button className="card__btn">40 см.</button>
                                </div>
                            </div>
                            <div className="card__footer">
                                <p className="card__price">от 395 ₽</p>
                                <button className="card__add">
                                    <span className="card__add-plus">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="#EB5A1E" />
                                        </svg>
                                    </span>
                                    <span className="card__add-text">Добавить</span>
                                    <span className="card__add-count">2</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default MainPage;
