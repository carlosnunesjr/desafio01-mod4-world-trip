import {
  Flex,
  Box,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  SimpleGrid
} from "@chakra-ui/react";

export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  let columns = isWideVersion ? 2 : 1;
  return (
    <Flex
      w={"100%"}
      h="366"
      mx={"auto"}
      align="center"
      justify="center"
      bgImage={"/Background.svg"}
      bgSize={"cover"}
      py={["1.75rem", "3rem"]}
      px={["1rem", "8.75rem"]}
    >
      <SimpleGrid columns={columns}>
        <Stack spacing={[4, 6]}>
          <Text
            color={"white"}
            fontSize={{ base: "20px", md: "28px", lg: "36px" }}
            fontWeight="500"
            fontStyle="normal"
          >
            5 Continentes, infinitas possibilidades.
          </Text>
          <Text
            color="#DADADA"
            fontSize={{ base: "14px", md: "18px", lg: "20px" }}
            fontWeight="400"
            fontStyle="normal"
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Stack>

        {isWideVersion && (
          <Box
            w={[350, 350, 350, 350, 417]}
            h={270}
            position="absolute"
            transform="rotate(3deg)"
            left="62%"
            top={["10rem", "12rem", "11rem", "16rem", "13rem", "13.5rem"]}
          >
            <Image
              objectFit="cover"
              src="/Airplane.svg"
              alt="Imagem de um avião"
            />
          </Box>
        )}
      </SimpleGrid>
    </Flex>
  );
}
