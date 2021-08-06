import { Flex, Box, Image, Button, Heading } from "@chakra-ui/react";
import { useWeddingCart } from "../../Providers/Wedding";
import { DeleteIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Wedding = () => {
  const { weddingCart, setWeddingCart } = useWeddingCart();

  return (
    <Flex
      direction="column"
      align="center"
      bgGradient="linear(red.100 0%, orange.100 25%, yellow.100 50%)"
      height="100vh"
    >
      <Heading size="3xl" m={6}>
        Wedding
      </Heading>
      <Flex w="100%" justifyContent="space-around" wrap="wrap" align="center">
        <Button colorScheme="twitter">
          <Link to="/">Home</Link>
        </Button>
        <Button colorScheme="twitter">
          <Link to="/celebration">Celebration</Link>
        </Button>
        <Button colorScheme="twitter">
          <Link to="/graduation">Graduation</Link>
        </Button>
        <Button colorScheme="twitter">
          <Link to="/wedding">Wedding</Link>
        </Button>
      </Flex>
      <Flex wrap="wrap" justify="center">
        {weddingCart.map((drink) => (
          <Box
            maxW="sm"
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
            />
            <Box>{drink.name}</Box>
            <Box>{drink.first_brewed}</Box>
            <Box isTruncated>{drink.description}</Box>
            <Box>
              {drink.volume.value} {drink.volume.unit}
            </Box>
            <Button
              colorScheme="red"
              size="sm"
              m={1}
              rightIcon={<DeleteIcon />}
              onClick={() =>
                setWeddingCart(
                  weddingCart.filter((beer) => beer.id !== drink.id)
                )
              }
            >
              Remove from Wedding Party
            </Button>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};

export default Wedding;
