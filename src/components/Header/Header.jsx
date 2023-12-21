import s from "./Header.module.scss";
import logo from "../../assets/images/logo.svg";
import telegram from "../../assets/images/telegram.svg";
import whatsapp from "../../assets/images/whatsapp.svg";
import { Link } from "react-scroll";
import arrow from "../../assets/images/arrow.svg";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import Burger from "./Burger/Burger";

function Header() {
  const [menu, setMenu] = useState(false);
  const [burger, setBurger] = useState(false);

  return (
    <motion.header className={s.header} initial="hidden" whileInView="visible">
      <div className={s.content}>
        <div className={s.titles}>
          <NavLink
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <img className={s.logo} src={logo} alt="logo" />
            <h2 className={s.title}>Грузоперевозки</h2>
          </NavLink>
          <div className={s.burgerLines} onClick={() => setBurger(true)}>
            <div className={s.burgerLine} />
            <div className={s.burgerLine} />
            <div className={s.burgerLine} />
          </div>
        </div>
        <div className={s.line} />
        <div className={s.container}>
          <p
            className={s.text2}
            onClick={() => setMenu(!menu)}
            onMouseEnter={() => setMenu(true)}
            onMouseLeave={() => setMenu(false)}
          >
            Наши услуги
            <img className={s.arrow} src={arrow} alt="arrow" />
            <AnimatePresence initial={false} onExitComplete={() => null}>
              {menu && (
                <motion.div
                  className={s.menu}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <NavLink className={s.menuText} to="/transportation">
                    Перевозка любых грузов
                  </NavLink>
                  <NavLink className={s.menuText} to="/relocations">
                    Переезды
                  </NavLink>
                  <NavLink className={s.menuText} to="/garbage">
                    Вывоз мусора с утилизацией
                  </NavLink>
                  <NavLink className={s.menuText} to="/intercity">
                    Перевозка по межгороду
                  </NavLink>
                  <NavLink className={s.menuText} to="/loaders">
                    Грузчики
                  </NavLink>
                </motion.div>
              )}
            </AnimatePresence>
          </p>
          <Link
            className={s.text}
            to="fleet"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Автопарк и грузчики
          </Link>
          <Link
            className={s.text}
            to="benefits"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Преимущества
          </Link>
        </div>
      </div>
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
      <AnimatePresence initial={false} onExitComplete={() => null}>
        {burger && <Burger active={burger} setActive={setBurger} />}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;
