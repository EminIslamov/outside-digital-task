import "../index.css";
import Button from "./Button";
import Modal from "./modal/Modal";
import { useState } from "react";
import "../index.css";
import { ReactSVG } from "react-svg";
import exitButton from "./modal/svgs/exitButton.svg";

function App() {
  const [modalActive, setModalActive] = useState(false);
  const [salary, setSalary] = useState("");
  const [summ, setSumm] = useState("");

  const handleSetSalary = (e) => {
    setSalary(e.target.value);
    setSumm(salary * 3);
  };

  console.log(summ);

  return (
    <>
      <Button active={modalActive} setActive={setModalActive} />
      <Modal active={modalActive} setActive={setModalActive}>
        <div className="exit-btn" onClick={() => setModalActive(false)}>
          <ReactSVG src={exitButton} />
        </div>
        <h1 className="title">Налоговый вычет</h1>
        <p className="default_popup_description">
          Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер
          налогового вычета составляет не более 13% от своего официального
          годового дохода.
        </p>
        <h4 className="users_salary">Ваша зарплата в месяц</h4>
        <input
          type="text"
          className="form_for_salary"
          placeholder="Введите данные"
          value={salary}
          onChange={handleSetSalary}
        />
        <p className="calculate">Рассчитать</p>
        <div
          className={`${salary ? "tax_deduction_filled_out" : "display_none"}`}
        >
          <div className="available_for_deposit">
            Итого можно внести в качестве досрочых:
          </div>
          <div className="first_year">
            <label className="check option">
              <input type="checkbox" className="check_input" />
              <span className="check_box"></span>
              <span>{Math.floor(salary * 12 * 0.13)} рублей</span>
            </label>
            <div className="line" />
          </div>
          <div>
            <label className="check option">
              <input type="checkbox" className="check_input" />
              <span className="check_box"></span>
              <span>{Math.floor(salary * 12 * 0.13)} рублей</span>
            </label>
            <div className="line" />
          </div>
          <div>
            <label className="check option">
              <input type="checkbox" className="check_input" />
              <span className="check_box"></span>
              <span>{Math.floor(salary * 12 * 0.13)} рублей</span>
            </label>
            <div className="line" />
          </div>
          <div>
            <label className="check option">
              <input type="checkbox" className="check_input" />
              <span className="check_box"></span>
              <span>
                {summ >= 260000
                  ? Math.floor(summ - 3 * (salary * 12 * 0.13))
                  : Math.floor(salary * 12 * 0.13)}{" "}
                рублей
              </span>
            </label>
            <div className="line" />
          </div>
        </div>
        <div className="parent_for_decrease">
          <div className="what_decrease">Что уменьшаем?</div>
          <div className="parent_for_buttons">
            <button className="btn_for_decreasing_payment">Платеж</button>
            <button className="btn_for_decreasing_time">Срок</button>
          </div>
        </div>
        <div className="adding_button">Добавить</div>
      </Modal>
    </>
  );
}

export default App;
