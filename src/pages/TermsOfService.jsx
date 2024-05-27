import { Box, Container, Heading, Text } from "@chakra-ui/react";

const TermsOfService = () => (
  <Container maxW="container.md" py={8}>
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4}>
        Terms of Service
      </Heading>
      <Text fontSize="lg">
        These terms of service outline the rules and regulations for the use of
        our website.
      </Text>
    </Box>
  </Container>
);

export default TermsOfService;