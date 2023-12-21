import Benefits from "../components/Benefits/Benefits";
import Fleet from "../components/Fleet/Fleet";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Service from "../components/Service/Service";
import Title from "../components/Title/Title";

function HomePage() {
  return (
    <>
      <Header />
      <Title />
      <Service />
      <Fleet />
      <Benefits />
      <Footer />
    </>
  );
}

export default HomePage;
