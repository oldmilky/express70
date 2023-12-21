import s from "./Burger.module.scss";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

function Burger({ active, setActive }) {
  return (
    <motion.div
      className={active ? s.burgerOpened : s.burger}
      onClick={() => setActive(false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={s.content} onClick={(e) => e.stopPropagation()}>
        <div className={s.container}>
          <p className={s.text}>Перевозка любых грузов</p>
          <p className={s.text}>Переезды</p>
          <p className={s.text}>Вывоз мусора с утилизацией</p>
          <p className={s.text}>Перевозка по межгороду</p>
          <p className={s.text}>Грузчики</p>
          <p className={s.text}>Автопарк и грузчики</p>
        </div>
      </div>
    </motion.div>
  );
}

Burger.propTypes = {
  active: PropTypes.string,
  setActive: PropTypes.func.isRequired,
};

export default Burger;
