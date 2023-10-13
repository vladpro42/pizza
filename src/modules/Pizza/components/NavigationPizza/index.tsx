import { useState } from "react";

const navFilterPizza = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];


const NavigationPizza = () => {

    const [active, setActive] = useState(0)

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (event.currentTarget.dataset.index) {
            setActive(+event.currentTarget.dataset.index)
        }
    }

    return <nav className="navigation">
        <div className="navigation__btns-box">
            {
                navFilterPizza.map((item, index) => {
                    return <button
                        key={item}
                        onClick={handleClick}
                        className={index === active ? "navigation__btn navigation__btn_active" : "navigation__btn"}
                        data-index={index}>
                        {item}
                    </button>
                })
            }
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
    </nav >
}

export default NavigationPizza