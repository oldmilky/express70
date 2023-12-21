import s from "./Fleet.module.scss";
import Slider from "./Slider/Slider";
import fleetCard from "../../assets/images/fleetCard.svg";
import fleetCard2 from "../../assets/images/fleetCard2.svg";
import fleetCard3 from "../../assets/images/fleet7.png";
import { Element } from "react-scroll";

function Fleet() {
  return (
    <Element name="fleet">
      <section className={s.fleet}>
        <p className={s.subtitle}>Автопарк и Грузчики</p>
        <Slider />
        <div className={s.content}>
          <div className={s.card}>
            <img className={s.image} src={fleetCard} alt="card" />
            <p className={s.title}>До 3 тонн</p>
            <p className={s.text}>
              Минимальное время работы:{" "}
              <span className={s.span}>от 2 часов</span>
            </p>
            <p className={s.text}>
              Цена от час: <span className={s.span}>от 1500 рублей</span>
            </p>
            <p className={s.text}>
              Межгород: <span className={s.span}>Цена договорная</span>
            </p>
          </div>

          <div className={s.card}>
            <img className={s.image} src={fleetCard2} alt="card" />
            <p className={s.title}>До 5 тонн</p>
            <p className={s.text}>
              Минимальное время работы:{" "}
              <span className={s.span}>от 2 часов</span>
            </p>
            <p className={s.text}>
              Цена от час: <span className={s.span}>от 2000 рублей</span>
            </p>
            <p className={s.text}>
              Межгород: <span className={s.span}>Цена договорная</span>
            </p>
          </div>
        </div>
        <div className={s.cardLarge}>
          <p className={s.titleLarge}>Грузчики</p>
          <div className={s.containerLarge}>
            <img className={s.imageLarge} src={fleetCard3} alt="card" />
            <div className={s.contentLarge}>
              <p className={s.text}>
                Минимальное время работы:{" "}
                <span className={s.span}>от 1 часа</span>
              </p>
              <p className={s.text}>
                Цена от час: <span className={s.span}>от 500 рублей</span>
              </p>
              <p className={s.text}>
                Межгород: <span className={s.span}>Цена договорная</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
}

export default Fleet;
