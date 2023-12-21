import Benefits from "../components/Benefits/Benefits";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Services from "../components/Services/Services";
import services from "../assets/images/services3.png";

function Garbage() {
  return (
    <>
      <Header />
      <Services
        title="Вывоз мусора с утилизацией"
        image={services}
        text="• Строительный мусор"
        text2="• Твёрдые бытовые отходы"
        text3="• Мебель"
        text4="• Ветки и порубочные остатки"
      />
      <Benefits />
      <Footer />
    </>
  );
}

export default Garbage;