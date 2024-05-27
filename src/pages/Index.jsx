import { Box, Container, Flex, Grid, GridItem, Heading, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8}>
        <Box w="full" p={4} bg="gray.100" borderRadius="md">
          <Heading as="h2" size="xl" mb={4}>
            Featured Article
          </Heading>
          <Text fontSize="lg">
            This is the featured article. It has a larger space and more
            prominent display.
          </Text>
        </Box>

        <Grid templateColumns="repeat(3, 1fr)" gap={6} w="full">
          <GridItem w="100%" h="10" bg="gray.200" p={4} borderRadius="md">
            <Heading as="h3" size="md" mb={2}>
              Article 1
            </Heading>
            <Text>Summary of article 1.</Text>
          </GridItem>
          <GridItem w="100%" h="10" bg="gray.200" p={4} borderRadius="md">
            <Heading as="h3" size="md" mb={2}>
              Article 2
            </Heading>
            <Text>Summary of article 2.</Text>
          </GridItem>
          <GridItem w="100%" h="10" bg="gray.200" p={4} borderRadius="md">
            <Heading as="h3" size="md" mb={2}>
              Article 3
            </Heading>
            <Text>Summary of article 3.</Text>
          </GridItem>
          <GridItem w="100%" h="10" bg="gray.200" p={4} borderRadius="md">
            <Heading as="h3" size="md" mb={2}>
              Article 4
            </Heading>
            <Text>Summary of article 4.</Text>
          </GridItem>
          <GridItem w="100%" h="10" bg="gray.200" p={4} borderRadius="md">
            <Heading as="h3" size="md" mb={2}>
              Article 5
            </Heading>
            <Text>Summary of article 5.</Text>
          </GridItem>
          <GridItem w="100%" h="10" bg="gray.200" p={4} borderRadius="md">
            <Heading as="h3" size="md" mb={2}>
              Article 6
            </Heading>
            <Text>Summary of article 6.</Text>
          </GridItem>
        </Grid>

        <Box w="full" p={4} bg="gray.100" borderRadius="md">
          <Heading as="h2" size="xl" mb={4}>
            Trending Topics
          </Heading>
          <Text fontSize="lg">
            This is the sidebar for trending topics or latest news.
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;