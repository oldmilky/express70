import Benefits from "../components/Benefits/Benefits";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Services from "../components/Services/Services";
import services from "../assets/images/services2.png";

function Relocations() {
  return (
    <>
      <Header />
      <Services
        title="Переезды"
        image={services}
        text="• Квартирный переезд"
        text2="• Дачный переезд"
        text3="• Офисный переезд"
        text4="• Магазинный переезд"
        text5="• Междугородний переезд"
      />
      <Benefits />
      <Footer />
    </>
  );
}

export default Relocations;