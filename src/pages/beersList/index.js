import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const BeersList = ({ drinks, page, setPage }) => {
  const previousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const nextPage = () => {
    setPage(page + 1);
  };

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
      <Flex w="100%" justifyContent="space-around" wrap="wrap" align="center">
        <Link to="/">
          <Button colorScheme="twitter" m={2}>
            Home
          </Button>
        </Link>
        <Link to="/celebration">
          <Button colorScheme="twitter" m={2}>
            Celebration
          </Button>
        </Link>
        <Link to="/graduation">
          <Button colorScheme="twitter" m={2}>
            Graduation
          </Button>
        </Link>
        <Link to="/wedding">
          <Button colorScheme="twitter" m={2}>
            Wedding
          </Button>
        </Link>
      </Flex>
      <Flex wrap="wrap" justify="center">
        {drinks.map((drink) => (
          <Box
            maxW="200px"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            key={drink.id}
            align="center"
            bg="gray.100"
            m={2}
          >
            <Image
              boxSize="200px"
              objectFit="scale-down"
              src={drink.image_url}
              alt={drink.name}
              m={2}
            />
            <Box isTruncated padding={1}>
              {drink.name}
            </Box>
            <Box>
              <Link to={`/beer/${drink.name}`}>
                <Button
                  colorScheme="green"
                  size="sm"
                  m={1}
                  rightIcon={<ViewIcon />}
                >
                  More info
                </Button>
              </Link>
            </Box>
          </Box>
        ))}
      </Flex>
      <Flex>
        <Button onClick={previousPage} m={2} colorScheme="red">
          Back
        </Button>
        <Button onClick={nextPage} m={2} colorScheme="green">
          Next
        </Button>
      </Flex>
    </Flex>
  );
};

export default BeersList;
