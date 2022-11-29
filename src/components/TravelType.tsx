import {
  Box,
  Stack,
  Text,
  Image,
  useBreakpointValue,
  HStack
} from "@chakra-ui/react";

interface TravelTypeProps {
  label: string;
  alt: string;
  src: string;
}

export function TravelType({ label, alt, src }: TravelTypeProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  return (
    <Box alignItems="center">
      {isWideVersion ? (
        <Stack p={2} spacing={4} align="center">
          <Image
            objectFit="cover"
            src={src}
            alt={alt}
            maxH="85px"
            maxW="85px"
          />

          <Text
            align="center"
            fontSize="1.25rem"
            lineHeight="2.25rem"
            fontWeight="600"
            fontStyle="normal"
          >
            {label}
          </Text>
        </Stack>
      ) : (
        <HStack spacing={1} align="center">
          <span
            style={{
              width: "18px",
              height: "18px",
              backgroundColor: "#FFBA08",
              borderRadius: "50%"
            }}
          >
            &nbsp;
          </span>
          <Text
            align="center"
            fontSize="1.125rem"
            lineHeight="2.25rem"
            fontWeight="600"
            fontStyle="normal"
          >
            {label}
          </Text>
        </HStack>
      )}
    </Box>
  );
}
