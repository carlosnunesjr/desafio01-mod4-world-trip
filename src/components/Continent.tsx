import { Box, Flex, Stack, Text } from "@chakra-ui/react";

interface ContinentProps {
  title: string;
  subtitle: string;
  url_img: string;
}

export function Continent({ title, subtitle, url_img }: ContinentProps) {
  return (
    <Box width="100%" height="100%" bgImage={url_img} bgSize={"cover"}>
      <Flex align="center" h="100%">
        <Stack align="center" width="100%">
          <Text
            color="#F5F8FA"
            fontSize="3rem"
            lineHeight="4.5rem"
            fontWeight="700"
            fontStyle="normal"
          >
            {title}
          </Text>
          <Text
            color="#DADADA"
            fontSize="1.5rem"
            lineHeight="2.25rem"
            fontWeight="700"
            fontStyle="normal"
          >
            {subtitle}
          </Text>
        </Stack>
      </Flex>
    </Box>
  );
}
