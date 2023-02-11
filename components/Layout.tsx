import { ReactElement, FC, memo } from "react";
import { Flex } from "@chakra-ui/react";
import { Navbar } from "./Navbar";

type Props = {
  children: ReactElement | ReactElement[];
};

const Layout: FC<Props> = memo(({ children, ...props }: Props) => {
  return (
    <Flex direction="column" m="0 auto" {...props}>
      {" "}
      <Navbar></Navbar>
      {children}
    </Flex>
  );
});

Layout.displayName = "Layout";
export { Layout };
