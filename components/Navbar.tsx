import { ReactNode, FC, memo, useState } from "react";
import {
  Box,
  Flex,
  Button,
  Image,
  useColorModeValue,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Navbar: FC = memo(() => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("#FFCC00", "#0075BE");

  return (
    <>
      <Box bg={bg} p={10}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Image src={"/International_Pokemon_logo.svg"}></Image>

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
