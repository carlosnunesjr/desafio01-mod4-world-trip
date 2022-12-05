import { Flex } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./slider.module.scss";
import { Continent } from "../Continent";
import Link from "next/link";

export function Slider() {
  return (
    <Flex h={450} mb="6" width="100%" maxW={1240}>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className={styles.mySwiper}
      >
        <SwiperSlide>
          <Link href="/continent/europe">
            <Continent
              title="EUROPA"
              subtitle="O continente mais antigo."
              url_img="/europa.svg"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Continent
            title="AMÉRICA DO NORTE"
            subtitle="O continente para todos tipos de público."
            url_img="/northamerica.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Continent
            title="AMÉRICA DO SUL"
            subtitle="O continente mais hospitaleiro."
            url_img="/southamerica.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/continent/asian">
            <Continent
              title="ÁSIA"
              subtitle="O continente mais inigmático."
              url_img="/asian.jpg"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Continent
            title="ÁFRICA"
            subtitle="O continente mais selvagem."
            url_img="/african.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Continent
            title="OCEANIA"
            subtitle="O continente mais paradisiaco."
            url_img="/oceania.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}
