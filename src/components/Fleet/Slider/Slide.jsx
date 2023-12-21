import s from "./Slider.module.scss";

// eslint-disable-next-line react/prop-types
function Slide({ image, title, time, price, km, pas, t }) {
  return (
    <div className={s.slide}>
      <p className={s.slideTitle}>До 1,5 тонн</p>
      <div className={s.containerSlide}>
        <img className={s.image} src={image} alt="car" />
        <div className={s.content}>
          <h4 className={s.title}>{title}</h4>
          <p className={s.text}>
            Минимальное время работы: <span className={s.span}>{time}</span>
          </p>
          <p className={s.text}>
            Цена от час: <span className={s.span}>от {price}</span>
          </p>
          <p className={s.text}>
            Межгород: <span className={s.span}>{km}</span>
          </p>
          {/* <h4 className={s.title}>Габариты:</h4> */}
          <div className={s.container}>
            {/* <img className={s.imageSize} src={sizes} alt="sizes" /> */}
            <div className={s.wrap}>
              <p className={s.text}>
                кол-во пассажиров: <span className={s.span}>{pas}</span>
              </p>
              <p className={s.text}>
                грузоподъемность: <span className={s.span}>{t}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slide;
