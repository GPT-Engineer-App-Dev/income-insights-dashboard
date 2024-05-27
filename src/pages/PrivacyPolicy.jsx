import { Box, Container, Heading, Text } from "@chakra-ui/react";

const PrivacyPolicy = () => (
  <Container maxW="container.md" py={8}>
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4}>
        Privacy Policy
      </Heading>
      <Text fontSize="lg">
        Your privacy is important to us. This privacy policy explains how we
        collect, use, and protect your information.
      </Text>
    </Box>
  </Container>
);

export default PrivacyPolicy;