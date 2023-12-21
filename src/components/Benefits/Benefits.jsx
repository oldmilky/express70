import s from "./Benefits.module.scss";
import benefit from "../../assets/images/benefits.svg";
import benefit2 from "../../assets/images/benefits2.svg";
import benefit3 from "../../assets/images/benefits3.svg";
import { Element } from "react-scroll";

function Benefits() {
  return (
    <Element name="benefits">
      <h1 className={s.benefit}>Наши преимущества</h1>
      <section className={s.benefits}>
        <div className={s.color}>
          <div className={s.content}>
            <div className={s.card}>
              <div className={s.wrapIcon}>
                <img className={s.icon} src={benefit} alt="icon" />
                <p className={s.title}>Подберём машину</p>
              </div>
              <p className={s.text}>
                В нашем парке имеется широкий выбор специально оборудованной
                техники для перевозки почти любых грузов весом от 1,5 до 15
                тонн.
              </p>
            </div>

            <div className={s.card}>
              <div className={s.wrapIcon}>
                <img className={s.icon} src={benefit2} alt="icon" />
                <p className={s.title}>Ответственные грузчики</p>
              </div>
              <p className={s.text}>
                Сотрудничаем только с проверенными ответственными грузчиками,
                вознаграждение которых напрямую зависит от качества их работы,
                за которым мы осуществляем внимательный контроль.
              </p>
            </div>

            <div className={s.card}>
              <div className={s.wrapIcon}>
                <img className={s.icon} src={benefit3} alt="icon" />
                <p className={s.title}>Бережное отношение к грузу</p>
              </div>
              <p className={s.text}>
                Хрупкие грузы упаковываем с помощью специальных материалов таких
                как стрейч плёнка и воздушно пузырьковая плёнка.
              </p>
            </div>
          </div>
          <div className={s.container}>
            <p className={s.subtitle}>
              <span className={s.span}>100.000т</span> Грузов перевезено нами
            </p>
            <p className={s.subtitle}>
              <span className={s.span}>7</span> Лет работаем на рынке
            </p>
          </div>
        </div>
      </section>
    </Element>
  );
}

export default Benefits;
