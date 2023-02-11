import { ReactNode, FC, memo, useState } from "react";
import {
  Box,
  Flex,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Input,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Navbar: FC = memo(() => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} m={10}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Input type={"text"}></Input>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
});

Navbar.displayName = "Navbar";
export { Navbar };
