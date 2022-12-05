import { Flex } from "@chakra-ui/react";
import { TravelType } from "./TravelType";

export function TravelTypeContainer() {
  return (
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
  );
}
