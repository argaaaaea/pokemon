import {
  Box,
  Stack,
  CardBody,
  Image,
  Text,
  Heading,
  Center,
  Flex,
  Card,
  StackDivider,
} from "@chakra-ui/react";
import { FC, memo } from "react";

type DetailTableProps = {
  className?: string;
  detailPokemon: DetailPokemon;
  pokemon: Pokemon;
};

const DetailTable: FC<DetailTableProps> = memo(
  ({ className, detailPokemon, pokemon }) => {
    detailPokemon.abilities.map((ability) => console.log(ability.ability.name));
    return (
      <Flex
        direction={{ base: "column", sm: "column" }}
        overflow="hidden"
        px={10}
        pt={10}
      >
        <Center h="300px">
          <Image
            objectFit="cover"
            boxSize="300px"
            src={`${pokemon.urlPhoto}`}
            alt={`${pokemon.name} photo`}
          />
        </Center>
        <Box textAlign="center">
          <Heading fontSize="6xl">{`Detail of ${pokemon.name}`}</Heading>
        </Box>
        <Center>
          <Flex direction={"row"} justifyContent="space-between" gap={"24px"}>
            <Flex direction={"column"}>
              <Card>
                <CardBody>
                  <Stack divider={<StackDivider></StackDivider>}>
                    <Text fontSize="3xl" fontWeight="bold">
                      Types:{" "}
                      <div>
                        {detailPokemon.types.map((type, index) => (
                          <Text fontSize="xl" fontWeight="normal">{`${
                            index + 1
                          }. ${type.type.name}`}</Text>
                        ))}
                      </div>
                    </Text>
                    <Text
                      fontSize="3xl"
                      fontWeight="bold"
                    >{`Weight: ${detailPokemon.weight} kg`}</Text>
                    <Text
                      fontSize="3xl"
                      fontWeight="bold"
                    >{`Height: ${detailPokemon.height} dm`}</Text>
                    <Text fontSize="3xl" fontWeight="bold">
                      Stats:{" "}
                      <div>
                        {detailPokemon.stats.map((stat, index) => (
                          <Text
                            fontSize="xl"
                            fontWeight="normal"
                          >{`${stat.stat.name}: ${stat.base_stat}`}</Text>
                        ))}
                      </div>
                    </Text>
                    <Text fontSize="3xl" fontWeight="bold">
                      Abilities:{" "}
                      <div>
                        {detailPokemon.abilities.map((abilities, index) => (
                          <Text fontSize="xl" fontWeight="normal">{`${
                            index + 1
                          }. ${abilities.ability.name}`}</Text>
                        ))}
                      </div>
                    </Text>
                  </Stack>
                </CardBody>
              </Card>
            </Flex>
            <Flex direction={"column"}>
              <Card>
                <CardBody>
                  {" "}
                  <Text fontSize="3xl" fontWeight="bold">
                    Moves:{" "}
                    <div>
                      {detailPokemon.moves.map((move, index) => (
                        <Text fontSize="xl" fontWeight="normal">{`${
                          index + 1
                        }. ${move.move.name}`}</Text>
                      ))}
                    </div>
                  </Text>
                </CardBody>
              </Card>
            </Flex>
          </Flex>
        </Center>
      </Flex>
    );
  }
);

DetailTable.displayName = "DetailTable";
export { DetailTable };
