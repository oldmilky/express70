import s from "./Services.module.scss";
import arrow from "../../assets/images/arrow.svg";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function Services({
  title,
  image,
  text,
  text2,
  text3,
  text4,
  text5,
  text6,
  text7,
  text8,
}) {
  return (
    <>
      <div className={s.nav}>
        <NavLink to="/" className={s.text}>
          Главная
        </NavLink>
        <img className={s.arrow} src={arrow} alt="arrow" />
        <p className={s.text}>{title}</p>
      </div>
      <div className={s.cardLarge}>
        <p className={s.titleLarge}>{title}</p>
        <div className={s.containerLarge}>
          <img className={s.imageLarge} src={image} alt="card" />
          <div className={s.contentLarge}>
            <p className={s.text}>{text}</p>
            <p className={s.text}>{text2}</p>
            <p className={s.text}>{text3}</p>
            <p className={s.text}>{text4}</p>
            <p className={s.text}>{text5}</p>
            <p className={s.text}>{text6}</p>
            <p className={s.text}>{text7}</p>
            <p className={s.text}>{text8}</p>
          </div>
        </div>
        <a href="tel:79131112870" className={s.buy}>
          Заказать
        </a>
      </div>
    </>
  );
}

Services.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
  text6: PropTypes.string,
  text7: PropTypes.string,
  text8: PropTypes.string,
};

export default Services;
