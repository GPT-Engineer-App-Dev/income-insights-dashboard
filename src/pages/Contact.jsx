import { Box, Container, Heading, Text } from "@chakra-ui/react";

const Contact = () => (
  <Container maxW="container.md" py={8}>
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4}>
        Contact Us
      </Heading>
      <Text fontSize="lg">
        If you have any questions or feedback, please feel free to reach out to
        us at contact@financialtimes.com.
      </Text>
    </Box>
  </Container>
);

export default Contact;