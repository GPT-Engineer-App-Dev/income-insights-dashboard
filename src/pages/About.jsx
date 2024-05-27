import { Box, Container, Heading, Text } from "@chakra-ui/react";

const About = () => (
  <Container maxW="container.md" py={8}>
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4}>
        About Us
      </Heading>
      <Text fontSize="lg">
        Welcome to Financial Times. We provide the latest news and analysis on
        global events, business, finance, and technology.
      </Text>
    </Box>
  </Container>
);

export default About;