// Sidebar.js
import React from "react";
import { Box, VStack, HStack, Flex, useColorModeValue, Text, Link as ChakraLink } from "@chakra-ui/react";
import { useLocation, Link as ReactRouterLink } from "react-router-dom";
import { ActiveChatIcon } from "./icon/activeChat";
import { InactiveChatIcon } from "./icon/inactiveChat";
import { ActiveShopIcon } from "./icon/activeShop";
import { InactiveShopIcon } from "./icon/inactiveShop";
import { LogoutIcon } from "./icon/logout";

export const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: "Chat", path: "/chat", icon: { active: <ActiveChatIcon />, inactive: <InactiveChatIcon /> } },
    { name: "Shop", path: "/shop", icon: { active: <ActiveShopIcon />, inactive: <InactiveShopIcon /> } }
  ];

  return (
    <Box
      w={"120px"}
      h={"full"}
      borderRight={"1px"}
      borderTop={"1px"}
      left={"0"}
      p={0.2}
      borderColor={useColorModeValue("gray.200", "gray.700")}
    >
        <VStack w={"full"} h={"full"} justifyContent={"space-between"}>
            <VStack w={"full"} gap={"0"}>
                {menuItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                    <ChakraLink w={"full"} key={item.name} as={ReactRouterLink} to={item.path} _hover={{ textDecoration: "none", backgroundColor: "#E6F5FC" }}>
                        <HStack
                            w={"full"}
                            borderLeftWidth={isActive ? "3px" : "0px"}
                            borderTopRightRadius={"2px"}
                            borderBottomRightRadius={"2px"}
                            borderColor={isActive ? "#0C4AC0" : "transparent"}
                            cursor="pointer"
                        >
                            <Flex
                                direction={"column"}
                                w={"full"}
                                h={"100px"}
                                gap={2}
                                bg={isActive ? "#E6F5FC" : "transparent"}
                                alignItems={"center"}
                                justifyContent={"center"}
                            >
                                {isActive ? item.icon.active : item.icon.inactive}
                                <Text fontSize="14px" color={"#0C4AC0"} fontWeight={600}>
                                    {item.name}
                                </Text>
                            </Flex>
                        </HStack>
                    </ChakraLink>
                );
                })}
            </VStack>
            <ChakraLink w={"full"} as={ReactRouterLink} to="/login" _hover={{ textDecoration: "none", color:"#E6F5FC"}}>
                <Flex
                    direction={"column"}
                    w={"full"}
                    h={"100px"}
                    gap={2}
                    alignItems={"center"}
                    justifyContent={"center"}
                >
                    <LogoutIcon />
                    <Text fontSize="14px" color={"#0C4AC0"} fontWeight={600}>
                        Keluar
                    </Text>
                </Flex>
            </ChakraLink>
        </VStack>
    </Box>
  );
};