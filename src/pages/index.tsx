import { Flex, Center, Divider, Stack, Text } from "@chakra-ui/react";

import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { Slider } from "../components/Slider";
import { TravelTypeContainer } from "../components/TravelTypeContainer";

export default function Home() {
  return (
    <Flex
      direction={"column"}
      w={"98.8vw"}
      align="center"
      justifyContent="center"
    >
      <Header />
      <Banner />

      <TravelTypeContainer />

      <Center w="90px">
        <Divider orientation="horizontal" border="2px" />
      </Center>

      <Stack my={6}>
        <Text
          fontSize={{ base: "20px", md: "28px", lg: "36px" }}
          lineHeight={{ base: "30px", md: "48px", lg: "54px" }}
          color="#47585B"
        >
          Vamos nessa?
        </Text>
        <Text
          fontSize={{ base: "20px", md: "28px", lg: "36px" }}
          lineHeight={{ base: "30px", md: "48px", lg: "54px" }}
          color="#47585B"
        >
          Então escolha seu continente
        </Text>
      </Stack>
      <Slider />
    </Flex>
  );
}
