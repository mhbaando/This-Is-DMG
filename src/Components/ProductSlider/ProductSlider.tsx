import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import DUMMY_DATA from "./DummyData";

import Card from "./Card";
import "./ProductSlider.scss";
import "swiper/scss";
import "swiper/scss/free-mode";

function ProductSlider(): JSX.Element {
  return (
    <section className="section">
      <div className="mk__products container">
        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[FreeMode]}
          className="mk__productSwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 90,
            },
            484: {
              slidesPerView: 1,
              spaceBetween: 18,
            },
            780: {
              slidesPerView: 2,
              spaceBetween: 18,
            },
          }}
        >
          <SwiperSlide>
            <Card
              label={DUMMY_DATA[0].label}
              title={DUMMY_DATA[0].title}
              mainImg={DUMMY_DATA[0].mainImg}
              secImg={DUMMY_DATA[0].secImg}
              model={DUMMY_DATA[0].model}
              inStock={DUMMY_DATA[0].inStock}
              total={DUMMY_DATA[0].total}
              price={DUMMY_DATA[0].price}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              label={DUMMY_DATA[0].label}
              title={DUMMY_DATA[0].title}
              mainImg={DUMMY_DATA[0].mainImg}
              secImg={DUMMY_DATA[0].secImg}
              model={DUMMY_DATA[0].model}
              inStock={DUMMY_DATA[0].inStock}
              total={DUMMY_DATA[0].total}
              price={DUMMY_DATA[0].price}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default ProductSlider;
