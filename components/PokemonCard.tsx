import { FC, memo } from "react";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  CardFooter,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

type PokemonCardProps = {
  className?: string;
  pokemon: Pokemon;
};

const PokemonCard: FC<PokemonCardProps> = memo(({ className, pokemon }) => {
  const router = useRouter();
  const bg = useColorModeValue("#FFCC00", "#0075BE");
  const reverseBg = useColorModeValue("#0075BE", "#FFCC00");

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    console.log(pokemon);
    router.push({
      pathname: `/${pokemon.id}`,
      query: { data: JSON.stringify(pokemon) },
    });
  };

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={`${pokemon.urlPhoto}`}
        alt={`${pokemon.name} photo`}
      />

      <Stack>
        <CardBody>
          <Heading fontSize={26}>{`${pokemon.name}`}</Heading>
        </CardBody>

        <CardFooter>
          <Button variant="solid" backgroundColor={bg} onClick={handleClick}>
            See detail
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
});

PokemonCard.displayName = "PokemonCard";
export { PokemonCard };
