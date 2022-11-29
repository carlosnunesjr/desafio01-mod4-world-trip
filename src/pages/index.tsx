import {
  Flex,
  Center,
  Divider,
  Stack,
  Text,
  SimpleGrid
} from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { Slider } from "../components/Slider";
import { TravelType } from "../components/TravelType";

export default function Home() {
  return (
    <Flex
      direction={"column"}
      w={"100vw"}
      h={"100vh"}
      align="center"
      justifyContent="center"
    >
      <Header />
      <Banner />

      <Flex
        w="100%"
        py="2rem"
        px="0.5rem"
        flexWrap="wrap"
        columnGap={["5rem", "10rem"]}
        justifyContent="center"
      >
        <TravelType
          label="vida noturna"
          alt="Imagem de um drink"
          src="/cocktail.svg"
        />

        <TravelType label="praia" alt="Imagem de uma praia" src="/surf.svg" />

        <TravelType
          label="moderno"
          alt="Imagem de um prédio"
          src="/building.svg"
        />

        <TravelType
          label="clássico"
          alt="Imagem de um teatro"
          src="/museum.svg"
        />

        <TravelType
          label="e mais..."
          alt="Imagem do globo terrestre"
          src="/earth.svg"
        />
      </Flex>

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
