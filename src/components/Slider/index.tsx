import { Flex, Box, Stack, Text } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./slider.module.scss";

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
          <Box
            width="100%"
            height="100%"
            bgImage={"/europa.svg"}
            bgSize={"cover"}
          >
            <Flex align="center" h="100%">
              <Stack align="center" width="100%">
                <Text
                  color="#F5F8FA"
                  fontSize="3rem"
                  lineHeight="4.5rem"
                  fontWeight="700"
                  fontStyle="normal"
                >
                  EUROPA
                </Text>
                <Text
                  color="#DADADA"
                  fontSize="1.5rem"
                  lineHeight="2.25rem"
                  fontWeight="700"
                  fontStyle="normal"
                >
                  O continente mais antigo.
                </Text>
              </Stack>
            </Flex>
          </Box>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </Flex>
  );
}
