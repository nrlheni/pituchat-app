import { Flex, Stack } from "@chakra-ui/react";
import { Header } from "../../components/header";
import { Sidebar } from "../../components/sidebar";

const AuthLayout = ({ children }) => {
    return (
      <Stack h={'100vh'} gap={'0'}>
        <Header />
        <Flex direction={"row"} h={'100%'}>
            <Sidebar />
            <div className="w-full h-full border border-top bg-[#F9F9FA]">{children}</div>
        </Flex>
      </Stack>
    );
  };

  export default AuthLayout;
