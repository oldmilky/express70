import s from "./Footer.module.scss";
import logo from "../../assets/images/logo.svg";
import telegram from "../../assets/images/telegram.svg";
import whatsapp from "../../assets/images/whatsapp.svg";

function Footer() {
  return (
    <section className={s.footer}>
      <div className={s.author}>
        <img className={s.logo} src={logo} alt="logo" />
        <p className={s.title}>© Грузоперевозки 2023. Все права защищены</p>
      </div>
      <p className={s.text}>Томск, Северск, Город, Межгород.</p>
      <div className={s.contacts}>
        <a
          className={s.link}
          href="https://api.whatsapp.com/send?phone=79131112870"
        >
          <img className={s.icon} src={whatsapp} alt="whatsapp" />
        </a>
        <a className={s.link} href="https://t.me/nike_express70">
          <img className={s.icon} src={telegram} alt="telegram" />
        </a>
        <div className={s.numbers}>
          <a href="tel:73822979033" className={s.buy}>
            <p className={s.number}>+7(3822) 979-033</p>
          </a>
          <a href="tel:73822979043" className={s.buy}>
            <p className={s.number}>+7(3822) 979-043</p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
