import { useParams, Link } from "react-router-dom";
import { AddIcon } from "@chakra-ui/icons";
import { useCelebrationCart } from "../../Providers/Celebration";
import { useGraduationCart } from "../../Providers/Graduation";
import { useWeddingCart } from "../../Providers/Wedding";
import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";

const Beer = ({ drinks }) => {
  const params = useParams();
  const { celebrationCart, setCelebrationCart } = useCelebrationCart();
  const { graduationCart, setGraduationCart } = useGraduationCart();
  const { weddingCart, setWeddingCart } = useWeddingCart();

  const beer = drinks.find((drink) => drink.name === params.name);

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
        <Flex
          maxW="800px"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          align="center"
          bg="gray.100"
          m={2}
          flexDirection="column"
        >
          <Image
            boxSize="200px"
            objectFit="scale-down"
            src={beer.image_url}
            alt={beer.name}
            m={2}
          />
          <Box as="u" fontSize="24px">
            {beer.name}
          </Box>
          <Box as="i">First brewed in {beer.first_brewed}</Box>
          <Box width="100%" padding={2}>
            {beer.description}
          </Box>
          <Box as="i">
            Volume: {beer.volume.value} {beer.volume.unit}
          </Box>
          <Box>
            <Flex wrap="wrap" align="center" justifyContent="center">
              <Button
                colorScheme="green"
                size="sm"
                m={1}
                rightIcon={<AddIcon />}
                onClick={() => setGraduationCart([...graduationCart, beer])}
              >
                Add to Graduation Party
              </Button>
              <Button
                colorScheme="green"
                size="sm"
                m={1}
                rightIcon={<AddIcon />}
                onClick={() => setWeddingCart([...weddingCart, beer])}
              >
                Add to Wedding Party
              </Button>
              <Button
                colorScheme="green"
                size="sm"
                m={1}
                rightIcon={<AddIcon />}
                onClick={() => setCelebrationCart([...celebrationCart, beer])}
              >
                Add to Celebration Party
              </Button>
            </Flex>
            <Link to="/beers">Back to Menu</Link>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Beer;
