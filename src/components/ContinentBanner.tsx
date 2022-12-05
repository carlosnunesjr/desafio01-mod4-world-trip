import { Flex, Text, useBreakpointValue } from "@chakra-ui/react";

interface ContinentBannerProps {
  title: string;
  url_img: string;
}

export function ContinentBanner({ title, url_img }: ContinentBannerProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  let alignItems = isWideVersion ? "flex-start" : "center";
  let justifyContent = isWideVersion ? "flex-end" : "center";

  return (
    <Flex
      w={"100%"}
      h={["9.375rem", "31.25rem"]}
      mx={"auto"}
      align="center"
      justify="center"
      bgImage={url_img}
      bgSize={"cover"}
      py={["1.75rem", "3rem"]}
      px={["1rem", "8.75rem"]}
    >
      <Flex
        direction="column"
        alignItems={alignItems}
        justifyContent={justifyContent}
        h="100%"
        w="100%"
      >
        <Text color="#F5F8FA" fontSize="3xl" fontWeight="600" lineHeight="4">
          {title}
        </Text>
      </Flex>
    </Flex>
  );
}
