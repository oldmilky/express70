import Benefits from "../components/Benefits/Benefits";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Services from "../components/Services/Services";
import services from "../assets/images/services.png";

function Transportation() {
  return (
    <>
      <Header />
      <Services
        title="Перевозка любых грузов"
        image={services}
        text="• Строительные материалы"
        text2="• Листовые материалы"
        text3="• Металлические изделия и материалы"
        text4="• Хрупкие изделия и материалы"
        text5="• Негабаритные грузы"
        text6="• Металлолом"
        text7="• Макулатура"
        text8="• Другие грузы"
      />
      <Benefits />
      <Footer />
    </>
  );
}

export default Transportation;
