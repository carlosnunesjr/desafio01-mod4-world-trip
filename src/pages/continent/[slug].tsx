import { Box, Flex, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { Cities } from "../../components/Cities";
import { ContinentBanner } from "../../components/ContinentBanner";
import { Header } from "../../components/Header";

type CityType = {
  city_name: string;
  country: string;
  city_img_url: string;
  country_img_url: string;
};

interface ContinentProps {
  continent_key: string;
  continent_name: string;
  continent_url: string;
  continent_description: string;
  nr_countries: number;
  nr_idioms: number;
  nr_cities: number;
  cities: CityType[];
}

export default function Continent({
  continent_key,
  continent_name,
  continent_url,
  continent_description,
  nr_countries,
  nr_idioms,
  nr_cities,
  cities
}: ContinentProps) {
  return (
    <Flex
      direction={"column"}
      w={"98vw"}
      align="center"
      justifyContent="center"
    >
      <Header />
      <ContinentBanner title={continent_name} url_img={continent_url} />

      <SimpleGrid minChildWidth="200px" spacing={4}>
        <Box h="100%" py={["1rem", "3rem"]} px={["1rem", "8.75rem"]}>
          <Text
            color="#47585B"
            fontSize={["0.875rem", "1.5rem"]}
            lineHeight={["1.3125rem", "2.25rem"]}
            fontWeight="400"
            align="justify"
          >
            {continent_description}
          </Text>
        </Box>
        <Box h="100%" py={["1rem", "3rem"]} px={["1rem", "8.75rem"]}>
          <Flex
            h="100%"
            maxW="450px"
            alignItems="center"
            justifyContent="space-between"
          >
            <Stack>
              <Text
                color="#FFBA08"
                fontSize={["1.5rem", "3rem"]}
                fontWeight="600"
                align="center"
              >
                {nr_countries}
              </Text>
              <Text align="center">países</Text>
            </Stack>
            <Stack>
              <Text
                color="#FFBA08"
                fontSize={["1.5rem", "3rem"]}
                fontWeight="600"
                align="center"
              >
                {nr_idioms}
              </Text>
              <Text align="center">línguas</Text>
            </Stack>
            <Stack>
              <Text
                color="#FFBA08"
                fontSize={["1.5rem", "3rem"]}
                fontWeight="600"
                align="center"
              >
                {nr_cities}
              </Text>
              <Text align="center">cidades +100</Text>
            </Stack>
          </Flex>
        </Box>
      </SimpleGrid>

      <Cities list={cities} />
    </Flex>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const continentsData = await fetch("http://localhost:3000/continents");
  const continents: ContinentProps[] = await continentsData.json();

  const paths = continents.map(continent => {
    return {
      params: {
        slug: String(continent.continent_key)
      }
    };
  });

  return {
    paths,
    fallback: "blocking"
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params!;

  const continentsData = await fetch("http://localhost:3000/continents");

  const continents: ContinentProps[] = await continentsData.json();

  const continent = continents.find(
    continent => continent.continent_key === slug
  );

  return {
    props: {
      ...continent
    }
  };
};
