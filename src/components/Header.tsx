import { Flex, Image, useBreakpointValue } from "@chakra-ui/react";

export function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  return (
    <Flex
      as="header"
      w={"100%"}
      maxW={1480}
      h="20"
      mx={"auto"}
      mt={4}
      px={6}
      align="center"
      justify="center"
    >
      <Image objectFit="cover" src="/LogoWorldTrip.svg" alt="Logo World Trip" />
    </Flex>
  );
}
