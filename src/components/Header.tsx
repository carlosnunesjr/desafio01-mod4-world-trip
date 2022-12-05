import Link from "next/link";
import { Box, Button, Flex, Icon, Image } from "@chakra-ui/react";

import { MdArrowBackIosNew } from "react-icons/md";
import { useRouter } from "next/router";

export function Header() {
  const router = useRouter();

  const isContinentPage = router.asPath.includes("continent");

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
      justify="left"
    >
      {isContinentPage && (
        <Box>
          <Button
            as={Link}
            href="/"
            title="Voltar a página principal"
            bgColor="transparent"
            _hover={{ bgColor: "transparent", color: "#FFBA08" }}
          >
            <Icon as={MdArrowBackIosNew} />
          </Button>
        </Box>
      )}

      <Flex align="center" justify="center" w="100%">
        <Image
          objectFit="cover"
          src="/LogoWorldTrip.svg"
          alt="Logo World Trip"
        />
      </Flex>
    </Flex>
  );
}
