import s from "./Title.module.scss";
import background from "../../assets/images/titleBackground.png";

function Title() {
  return (
    <section className={s.titles}>
      <div className={s.content}>
        <h1 className={s.title}>Грузоперевозки 24/7</h1>
        <p className={s.subtitle}>Томск, Северск, Город, Межгород.</p>
        <div className={s.wrap}>
          <div className={s.line} />
          <p className={s.text}>Любые переезды, офисные домашние</p>
        </div>
        <div className={s.wrap}>
          <div className={s.line} />
          <p className={s.text}>
            Грузовые авто от 3 до 6м и любого обьема под разные задачи и
            потребности
          </p>
        </div>
        <div className={s.wrap}>
          <div className={s.line} />
          <p className={s.text}>Услуги грузчиков</p>
        </div>
        <div className={s.wrap}>
          <div className={s.line} />
          <p className={s.text}>Индивидуальный подход к каждому клиенту</p>
        </div>
        <div className={s.wrap}>
          <div className={s.line} />
          <p className={s.text}>Все виды грузов от 1кг до 5т</p>
        </div>
        <div className={s.wrap}>
          <div className={s.line} />
          <p className={s.text}>Быстрая подача машины от 10 минут</p>
        </div>
      </div>
      <img className={s.background} src={background} alt="background" />
    </section>
  );
}

export default Title;
