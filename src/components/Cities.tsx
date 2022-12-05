import { Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { City } from "./City";

type CityType = {
  city_name: string;
  country: string;
  city_img_url: string;
  country_img_url: string;
};

interface CitiesProps {
  list: CityType[];
}

export function Cities({ list: cities }: CitiesProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  let citiesAlign = isWideVersion ? "left" : "center";

  return (
    <Flex
      direction="column"
      w="100%"
      py={["0.5rem", "1.5rem"]}
      px={["1rem", "8.75rem"]}
    >
      <Text
        mb="1.25rem"
        fontSize={["1.5rem", "2.25rem"]}
        lineHeight={["2.25rem", "3.375rem"]}
        fontWeight="500"
        color="#47585B"
      >
        Cidades +100
      </Text>
      <Flex
        flex="1"
        flexWrap="wrap"
        columnGap="2.875rem"
        rowGap="3rem"
        justifyContent={citiesAlign}
      >
        {cities &&
          cities.map((city, i) => (
            <City
              key={i}
              city_name={city.city_name}
              city_img_url={city.city_img_url}
              country={city.country}
              country_img_url={city.country_img_url}
            />
          ))}
      </Flex>
    </Flex>
  );
}
