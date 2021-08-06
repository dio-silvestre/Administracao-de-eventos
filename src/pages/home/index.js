import { Flex, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Flex
      direction="column"
      align="center"
      bgGradient="linear(red.100 0%, orange.100 25%, yellow.100 50%)"
      height="100vh"
      w="100%"
      textAlign="center"
    >
      <Heading size="3xl" m={6}>
        BeerClub
      </Heading>
      <Text fontSize="xl" as="i">
        Looking for the best beers for your wedding/graduation/celebration
        party? Click on the button below and check out our menu.
      </Text>
      <Link to="/beers">
        <Button colorScheme="twitter" size="lg">
          MENU
        </Button>
      </Link>
    </Flex>
  );
};

export default Home;
