import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "./Slider.scss";
import Slide from "./Slide";
import fleet from "../../../assets/images/fleet.svg";
import fleetSize from "../../../assets/images/fleetSize.svg";
import fleet2 from "../../../assets/images/fleet2.png";
import fleetSize2 from "../../../assets/images/fleetSize2.png";
import fleet3 from "../../../assets/images/fleet3.png";
import fleetSize3 from "../../../assets/images/fleetSize3.png";
import fleetSize4 from "../../../assets/images/fleetSize4.png";
import fleet5 from "../../../assets/images/fleet5.png";
import fleetSize5 from "../../../assets/images/fleetSize5.png";
import fleet6 from "../../../assets/images/fleet6.png";

function Slider() {
  return (
    <div className="content">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide
            image={fleet}
            title="Газель стандарт (тент)"
            time="1 час"
            price="800 рублей"
            km="Цена договорная"
            sizes={fleetSize2}
            pas={2}
            t="1,5 т"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slide
            image={fleet2}
            title="Газель открытая"
            time="1 час"
            price="1300 рублей"
            km="Цена договорная"
            sizes={fleetSize}
            pas={2}
            t="1,5 т"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slide
            image={fleet6}
            title="Газель фермер"
            time="1 час"
            price="1000 рублей"
            km="Цена договорная"
            sizes={fleetSize3}
            pas={4}
            t="1,5 т"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slide
            image={fleet3}
            title="Газель удлинённая (тент)"
            time="1 час"
            price="1100 рублей"
            km="Цена договорная"
            sizes={fleetSize4}
            pas={2}
            t="1,5 т"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slide
            image={fleet5}
            title="Газель удлинённая (высокая будка)"
            time="1 час"
            price="1300 рублей"
            km="Цена договорная"
            sizes={fleetSize5}
            pas={2}
            t="1,5 т"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
