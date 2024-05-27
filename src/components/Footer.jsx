import { Box, Flex, Link, Stack, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <Box bg="gray.100" py={4}>
      <Flex
        align="center"
        justify="space-between"
        direction={{ base: "column", md: "row" }}
        px={4}
      >
        <Text>© 2023 Financial Times</Text>
        <Stack direction={"row"} spacing={6}>
          <Link as={RouterLink} to="/about">
            About
          </Link>
          <Link as={RouterLink} to="/contact">
            Contact
          </Link>
          <Link as={RouterLink} to="/privacy-policy">
            Privacy Policy
          </Link>
          <Link as={RouterLink} to="/terms-of-service">
            Terms of Service
          </Link>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Footer;