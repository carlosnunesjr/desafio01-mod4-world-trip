import { Box, Flex, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";

interface CityProps {
  city_name: string;
  country: string;
  city_img_url: string;
  country_img_url: string;
}

export function City({
  city_name,
  country,
  city_img_url,
  country_img_url
}: CityProps) {
  return (
    <Stack
      width={256}
      h={279}
      border="1px"
      borderColor="#FFBA0880"
      borderRadius="8px"
    >
      <Box w="100%" h={173}>
        <Image src={city_img_url} />
      </Box>
      <Flex width={256} h={106} alignItems="center">
        <SimpleGrid columns={2} width="100%">
          <Stack paddingLeft="1.5rem">
            <Text
              fontSize="1.25rem"
              lineHeight="1.5625rem"
              fontWeight="600"
              color="#47585B"
            >
              {city_name}
            </Text>
            <Text
              fontSize="1rem"
              lineHeight="1.625rem"
              fontWeight="600"
              color="#999999"
            >
              {country}
            </Text>
          </Stack>
          <Flex
            alignItems="center"
            justifyContent="flex-end"
            paddingRight="1rem"
          >
            <Image
              height={30}
              width={30}
              borderRadius="50%"
              src={country_img_url}
            />
          </Flex>
        </SimpleGrid>
      </Flex>
    </Stack>
  );
}
