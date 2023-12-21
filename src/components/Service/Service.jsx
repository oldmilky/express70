import s from "./Service.module.scss";
import card1 from "../../assets/images/card1.png";
import card2 from "../../assets/images/card2.png";
import card3 from "../../assets/images/card3.png";
import card4 from "../../assets/images/card4.png";
import card5 from "../../assets/images/card5.png";
import { Element } from "react-scroll";

function Service() {
  return (
    <Element name="service">
      <section className={s.service}>
        <h3 className={s.title}>Наши услуги</h3>
        <div className={s.content}>
          <div className={s.cards}>
            <div className={s.card}>
              <div className={s.container}>
                <img className={s.image} src={card1} alt="card" />
                <p className={s.subtitle}>Перевозка любых грузов</p>
                <p className={s.text}>• Строительные материалы</p>
                <p className={s.text}>• Листовые материалы</p>
                <p className={s.text}>• Металлические изделия и материалы</p>
                <p className={s.text}>• Хрупкие изделия и материалы</p>
                <p className={s.text}>• Негабаритные грузы</p>
                <p className={s.text}>• Металлолом</p>
                <p className={s.text}>• Макулатура</p>
                <p className={s.text}>• Другие грузы</p>
              </div>
              <a href="tel:79131112870" className={s.buy}>Заказать</a>
            </div>

            <div className={s.card}>
              <div className={s.container}>
                <img className={s.image} src={card2} alt="card" />
                <p className={s.subtitle}>Переезды</p>
                <p className={s.text}>• Квартирный переезд</p>
                <p className={s.text}>• Дачный переезд</p>
                <p className={s.text}>• Офисный переезд</p>
                <p className={s.text}>• Магазинный переезд</p>
                <p className={s.text}>• Междугородний переезд</p>
              </div>
              <a href="tel:79131112870" className={s.buy}>Заказать</a>
            </div>

            <div className={s.card}>
              <div className={s.container}>
                <img className={s.image} src={card3} alt="card" />
                <p className={s.subtitle}>Вывоз мусора с утилизацией</p>
                <p className={s.text}>• Строительный мусор</p>
                <p className={s.text}>• Твёрдые бытовые отходы</p>
                <p className={s.text}>• Мебель</p>
                <p className={s.text}>• Ветки и порубочные остатки</p>
              </div>
              <a href="tel:79131112870" className={s.buy}>Заказать</a>
            </div>
          </div>
          <div className={s.cardsSmall}>
            <div className={s.card}>
              <div className={s.container}>
                <img className={s.image} src={card4} alt="card" />
                <p className={s.subtitle}>Перевозка по межгороду</p>
                <p className={s.textCenter}>
                  Осуществляем перевозки по межгороду будь то переезд или
                  перевозка любого другого груза
                </p>
              </div>
              <a href="tel:79131112870" className={s.buy}>Заказать</a>
            </div>

            <div className={s.card}>
              <div className={s.container}>
                <img className={s.image} src={card5} alt="card" />
                <p className={s.subtitle}>Грузчики</p>
                <p className={s.textCenter}>
                  Подберём команду опытных ответственных рабочих под ваши задачи
                </p>
              </div>
              <a href="tel:79131112870" className={s.buy}>Заказать</a>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
}

export default Service;
