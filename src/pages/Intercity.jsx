import Benefits from "../components/Benefits/Benefits";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Services from "../components/Services/Services";
import services from "../assets/images/services4.png";

function Intercity() {
  return (
    <>
      <Header />
      <Services
        title="Перевозка по межгороду"
        image={services}
        text="Осуществляем перевозки по межгороду будь то переезд или перевозка любого другого груза"
      />
      <Benefits />
      <Footer />
    </>
  );
}

export default Intercity;
