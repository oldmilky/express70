import Benefits from "../components/Benefits/Benefits";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Services from "../components/Services/Services";
import services from "../assets/images/services5.png";

function Loaders() {
  return (
    <>
      <Header />
      <Services
        title="Грузчики"
        image={services}
        text="Подберём команду опытных ответственных рабочих под ваши задачи"
      />
      <Benefits />
      <Footer />
    </>
  );
}

export default Loaders;