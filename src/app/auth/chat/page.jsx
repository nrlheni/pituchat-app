import { useState } from "react";
import {
    Box,
    HStack,
    VStack,
    Stack,
    useColorModeValue,
    Avatar,
    Tag,
    Text,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    TagLabel,
    Image,
    Input,
    Flex,
    Menu,
    MenuButton,
    MenuList,
    MenuOptionGroup,
    MenuItem,
    MenuItemOption,
    MenuDivider,
    IconButton,
} from "@chakra-ui/react"

import { EmptyChatIllustration } from "../../../components/illustration/emptyChat";

import { SearchIcon } from "../../../components/icon/search";
import { FilterIcon } from "../../../components/icon/filter";
import { InfoIcon } from "../../../components/icon/info";

import TokpedIcon from '../../../assets/tokopedia-logo.png';
import TokpedLogo from '../../../assets/tokopedia-logo-text.png';
import ShopeeIcon from '../../../assets/shopee-logo.png';
import ShopeeLogo from '../../../assets/shopee-logo-text.png';


export const Index = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [chatData, setChatData] = useState([
        {
            id: 1,
            title: "Dan Abramov",
            timestamp: "Today",
            marketplace: {
                name: "Tokopedia",
                logo: TokpedLogo,
                icon: TokpedIcon,
                color: "#D9F2E3"
            },
            tag: {
                name: "Beauty Lovers",
            },
            avatar: "https://bit.ly/dan-abramov",
            messages: [
                { type: "received", text: "Is the product available?", timestamp: "Yesterday" },
            ],
            unrepliedCount: 1,
        },
        {
            id: 2,
            title: "Ryan Florence",
            timestamp: "Yesterday",
            marketplace: {
                name: "Shopee",
                logo: ShopeeLogo,
                icon: ShopeeIcon,
                color: "orange.100"
            },
            tag: {
                name: "Makeuppucino",
            },
            avatar: "https://bit.ly/ryan-florence",
            messages: [
                { type: "received", text: "Hello there", timestamp: "Yesterday" },
                { type: "sent", text: "Hi!", timestamp: "Yesterday" },
                { type: "received", text: "I just placed an order. When will it be shipped?", timestamp: "Just now" },
            ],
            unrepliedCount: 1,
        },
        {
            id: 3,
            title: "Segun Adebayo",
            timestamp: "Today",
            marketplace: {
                name: "Tokopedia",
                logo: TokpedLogo,
                icon: TokpedIcon,
                color: "#D9F2E3"
            },
            tag: {
                name: "Beauty Lovers",
            },
            avatar: "https://bit.ly/sage-adebayo",
            messages: [
                { type: "received", text: "your products is cool!", timestamp: "Yesterday" },
            ],
            unrepliedCount: 1,
        },
        {
            id: 4,
            title: "Prosper Otemuyiwa",
            timestamp: "Yesterday",
            marketplace: {
                name: "Shopee",
                logo: ShopeeLogo,
                icon: ShopeeIcon,
                color: "orange.100"
            },
            tag: {
                name: "Makeuppucino",
            },
            avatar: "https://bit.ly/prosper-baba",
            messages: [
                { type: "received", text: "Hello", timestamp: "Yesterday" },
                { type: "sent", text: "Hi! Anything I can help? ", timestamp: "Yesterday" },
            ],
            unrepliedCount: 0,
        },
    ]);

    const globalChatData = {
        totalUnreplied: chatData.reduce((sum, chat) => sum + chat.unrepliedCount, 0),
        totalReplied: chatData.filter(chat => chat.unrepliedCount === 0).length,
        totalChats: chatData.length,
    };

    const [selectedChatId, setSelectedChatId] = useState(null);
    const [inputValue, setInputValue] = useState("");

    const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

    const selectChat = (id) => {
        setChatData((prevData) =>
            prevData.map((chat) => {
                if (chat.id === id) {
                    const lastMessage = chat.messages[chat.messages.length - 1];
                    return {
                        ...chat,
                        unrepliedCount: lastMessage.type === "sent" ? 0 : chat.unrepliedCount,
                    };
                }
                return chat;
            })
        );
        setSelectedChatId(id);
    };

    const sendMessage = () => {
        if (inputValue.trim() === "") return;

        const timestamp = new Date().toLocaleTimeString();

        setChatData((prevData) =>
            prevData.map((chat) =>
                chat.id === selectedChatId
                    ? {
                          ...chat,
                          messages: [
                              ...chat.messages,
                              { type: "sent", text: inputValue, timestamp },
                          ],
                          unrepliedCount: chat.unrepliedCount > 0 ? 0 : chat.unrepliedCount,
                      }
                    : chat
            )
        );

        setInputValue("");
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            sendMessage();
        }
    };

    const selectedChat = chatData.find((chat) => chat.id === selectedChatId);


    return (
        <HStack w="full" h="full" gap={0}>
            <Box w="360px" h="full" bgColor="white" borderRight="1px" borderColor={useColorModeValue("gray.200", "gray.700")}>
                <HStack w="full" px={4} py={5} alignItems="left" justifyContent="space-between">
                    <Text fontSize="20px" fontWeight={700} colorScheme="black">Chat</Text>
                    <HStack spacing={2}>
                        <SearchIcon className="cursor-pointer"/>
                        <Menu closeOnSelect={false}>
                            <MenuButton
                                as={IconButton}
                                aria-label='Filter'
                                icon={<FilterIcon />}
                                bgColor="transparent"
                                _focus={{ boxShadow:'outline'}}
                                position="relative"
                            />
                            <MenuList minWidth='240px'>
                                <MenuOptionGroup type='checkbox'>
                                    <MenuItemOption value='Tokopedia - Beauty Lovers'>Tokopedia - Beauty Lovers</MenuItemOption>
                                    <MenuDivider />
                                    <MenuItemOption value='Shopee - Makeuppucino'>Shopee - Makeuppucino</MenuItemOption>
                                </MenuOptionGroup>
                                <MenuDivider />
                                <MenuItem>Pilih Semua</MenuItem>
                            </MenuList>
                        </Menu>
                    </HStack>
                </HStack>
                <Stack w="full">
                    <Tabs size="md">
                        <TabList w="full" alignItems="center">
                            <Tab px={0} py={2} w={1/3} fontSize={'12px'} fontWeight={600} isDisabled={globalChatData.totalUnreplied === 0}>
                                <HStack gap={1} justifyContent="flex-end">
                                    <Text>Perlu balas</Text>
                                    {globalChatData.totalUnreplied > 0 && (
                                        <Tag size="sm" display="flex" alignItems="center" justifyContent="center" textAlign="center" bgColor="blue.600" fontSize="8px" fontWeight={400} color="white" borderRadius="full">
                                            {globalChatData.totalUnreplied}
                                        </Tag>
                                    )}
                                </HStack>
                            </Tab>
                            <Tab px={0} w={1/3} fontSize={'12px'} fontWeight={600} isDisabled={globalChatData.totalReplied === 0}>
                                <HStack gap={1} justifyContent="flex-end">
                                        <Text>Terbalas</Text>
                                </HStack>
                            </Tab>
                            <Tab px={0} w={1/3} fontSize={'12px'} fontWeight={600}>
                                <HStack gap={1} justifyContent="flex-end">
                                    <Text>Semua chat</Text>
                                </HStack>
                            </Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel w="full" p={0} overflowY="auto" maxH="67vh">
                                {chatData.filter(chat => chat.unrepliedCount > 0).map((chat) => (
                                    <Box
                                        key={chat.id}
                                        w="full"
                                        borderBottomWidth="1px"
                                        px={4}
                                        py={4}
                                        right={0}
                                        display="flex"
                                        alignItems="flex-start"
                                        onClick={() => {
                                            selectChat(chat.id);
                                        }}
                                        cursor="pointer"
                                        _hover={{ bgColor: "#F9F9FA" }}
                                        _active={{ bgColor: "#F9F9FA" }}
                                    >
                                        <Avatar w="40px" h="40px" name={chat.title} src={chat.avatar} />
                                        <VStack w="full" align="start" ml={3} spacing={2} p={0}>
                                            <HStack w="full" justifyContent="space-between">
                                                <Text fontSize="14px" fontWeight="bold">{chat.title}</Text>
                                                <Text fontSize="10px" color="gray.500">{chat.timestamp}</Text>
                                            </HStack>
                                            <HStack w="full" justifyContent="space-between">
                                                <Text fontSize="12px" color="gray.500" overflow="hidden" whiteSpace="nowrap" textOverflow="ellipsis" maxWidth="150px">
                                                    {chat.messages[chat.messages.length - 1].text}
                                                </Text>
                                                {chat.unrepliedCount > 0 && (
                                                    <Tag size="sm" display="flex" alignItems="center" justifyContent="center" textAlign="center" bgColor="blue.600" fontSize="10px" fontWeight={400} color="white" borderRadius="full">
                                                        {chat.unrepliedCount}
                                                    </Tag>
                                                )}
                                            </HStack>
                                            <Tag w="auto" h="20px" justifyContent="center" size='xs' bgColor={chat.marketplace.color} borderRadius='md' gap={2} px={2} py={1}>
                                                <Image src={chat.marketplace.icon} />
                                                <TagLabel color="black" fontSize="10px" fontWeight={500}>{chat.tag.name}</TagLabel>
                                            </Tag>
                                        </VStack>
                                    </Box>
                                ))}
                            </TabPanel>
                            <TabPanel w="full" p={0} overflowY="auto" maxH="67vh">
                                {chatData.filter(chat => chat.unrepliedCount === 0).map((chat) => (
                                    <Box
                                        key={chat.id}
                                        w="full"
                                        borderBottomWidth="1px"
                                        px={4}
                                        py={4}
                                        right={0}
                                        display="flex"
                                        alignItems="flex-start"
                                        onClick={() => {
                                            selectChat(chat.id);
                                        }}
                                        cursor="pointer"
                                        _hover={{ bgColor: "#F9F9FA" }}
                                        _active={{ bgColor: "#F9F9FA" }}
                                    >
                                        <Avatar w="40px" h="40px" name={chat.title} src={chat.avatar} />
                                        <VStack w="full" align="start" ml={3} spacing={2} p={0}>
                                            <HStack w="full" justifyContent="space-between">
                                                <Text fontSize="14px" fontWeight="bold">{chat.title}</Text>
                                                <Text fontSize="10px" color="gray.500">{chat.timestamp}</Text>
                                            </HStack>
                                            <HStack w="full" justifyContent="space-between">
                                                <Text fontSize="12px" color="gray.500" overflow="hidden" whiteSpace="nowrap" textOverflow="ellipsis" maxWidth="150px">
                                                    {chat.messages[chat.messages.length - 1].text}
                                                </Text>
                                            </HStack>
                                            <Tag w="auto" h="20px" justifyContent="center" size='xs' bgColor={chat.marketplace.color} borderRadius='md' gap={2} px={2} py={1}>
                                                <Image src={chat.marketplace.icon} />
                                                <TagLabel color="black" fontSize="10px" fontWeight={500}>{chat.tag.name}</TagLabel>
                                            </Tag>
                                        </VStack>
                                    </Box>
                                ))}
                            </TabPanel>
                            <TabPanel w="full" p={0} overflowY="auto" maxH="67vh">
                                {chatData.map((chat) => (
                                    <Box
                                        key={chat.id}
                                        w="full"
                                        borderBottomWidth="1px"
                                        px={4}
                                        py={4}
                                        right={0}
                                        display="flex"
                                        alignItems="flex-start"
                                        onClick={() => {
                                            selectChat(chat.id);
                                        }}
                                        cursor="pointer"
                                        _hover={{ bgColor: "#F9F9FA" }}
                                        _active={{ bgColor: "#F9F9FA" }}
                                    >
                                        <Avatar w="40px" h="40px" name={chat.title} src={chat.avatar} />
                                        <VStack w="full" align="start" ml={3} spacing={2} p={0}>
                                            <HStack w="full" justifyContent="space-between">
                                                <Text fontSize="14px" fontWeight="bold">{chat.title}</Text>
                                                <Text fontSize="10px" color="gray.500">{chat.timestamp}</Text>
                                            </HStack>
                                            <HStack w="full" justifyContent="space-between">
                                                <Text fontSize="12px" color="gray.500" overflow="hidden" whiteSpace="nowrap" textOverflow="ellipsis" maxWidth="150px">
                                                    {chat.messages[chat.messages.length - 1].text}
                                                </Text>
                                            </HStack>
                                            <Tag w="auto" h="20px" justifyContent="center" size='xs' bgColor={chat.marketplace.color} borderRadius='md' gap={2} px={2} py={1}>
                                                <Image src={chat.marketplace.icon} />
                                                <TagLabel color="black" fontSize="10px" fontWeight={500}>{chat.tag.name}</TagLabel>
                                            </Tag>
                                        </VStack>
                                    </Box>
                                ))}
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Stack>
            </Box>
            <HStack w="full" h="full" gap={0}>
                <Box w="full" h="full" p={0} display="flex" flexDirection="column">
                    {selectedChat ? (
                        <>
                        <HStack w="full" h="64px" p={5} alignItems="center" justifyContent="space-between">
                            <Text size="md" fontWeight="bold">{selectedChat.title}</Text>
                            <HStack spacing={3} alignItems="center">
                            <SearchIcon className="cursor-pointer"/>
                            <Box className="cursor-pointer" onClick={toggleDrawer} _hover={{ fontWeight: "bold" }}>
                                <InfoIcon />
                            </Box>
                            </HStack>
                        </HStack>
                        <Box display="flex" flexDirection="column" w="full" h="full" p={5} gap={5} bgColor="#CEDBF2">
                            {selectedChat.messages.map((msg, index) => (
                                <HStack
                                    key={index}
                                    alignItems="flex-end"
                                    justifyContent={msg.type === "received" ? "flex-start" : "flex-end"}
                                    gap={2}
                                >
                                    {msg.type === "received" && (
                                        <Box py="18px">
                                            <Avatar w={8} h={8} name={selectedChat.title} src={selectedChat.avatar} borderRadius="full" />
                                        </Box>
                                    )}
                                    <VStack
                                        alignItems={msg.type === "received" ? "flex-start" : "flex-end"}
                                        spacing={1}
                                    >
                                    {msg.type === "received" && (
                                        <Text fontSize="12px" color="gray.600" px={2}>
                                            {selectedChat.title}
                                        </Text>
                                    )}
                                    <Box
                                        display="inline-block"
                                        borderRadius="full"
                                        borderBottomLeftRadius={msg.type === "received" ? "0" : "full"}
                                        borderBottomRightRadius={msg.type === "sent" ? "0" : "full"}
                                        bg={msg.type === "received" ? "white" : "blue.500"}
                                        fontSize="14px"
                                        color={msg.type === "received" ? "gray.900" : "white"}
                                        px={3}
                                        py={2}
                                    >
                                        <Text>{msg.text}</Text>
                                    </Box>
                                    <Text fontSize="12px" color="gray.600" px={2}>
                                        {msg.type === "received" ? msg.timestamp : `Sent · ${msg.timestamp}`}
                                    </Text>
                                    </VStack>
                                </HStack>
                            ))}
                        </Box>
                        <Box w="full" h="64px" display="flex" flexDirection="row" alignItems="center" justifyContent="center" p={2} bgColor="white" gap={1}>
                            <Box>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 16C12 15.4477 12.4477 15 13 15C13.5523 15 14 15.4477 14 16V25C14 27.8477 16.1523 30 19 30C21.8477 30 24 27.8477 24 25V13C24 11.3523 22.6477 10 21 10C19.3523 10 18 11.3523 18 13V25C18 25.6477 18.3523 26 19 26C19.6477 26 20 25.6477 20 25V16C20 15.4477 20.4477 15 21 15C21.5523 15 22 15.4477 22 16V25C22 26.7523 20.7523 28 19 28C17.2477 28 16 26.7523 16 25V13C16 10.2477 18.2477 8 21 8C23.7523 8 26 10.2477 26 13V25C26 28.9523 22.9523 32 19 32C15.0477 32 12 28.9523 12 25V16Z" fill="#2F3941"/>
                                </svg>
                            </Box>
                            <Input variant='outline' borderRadius="full" borderColor="gray.500" placeholder='Type a message' value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={handleKeyDown} />
                        </Box>
                        </>
                    ) : (
                        <Flex w="full" h="full" alignItems="center" justifyContent="center">
                            <EmptyChatIllustration />
                        </Flex>
                    )}
                </Box>
                {isDrawerOpen && (
                    <Box
                        right="0"
                        top="0"
                        bottom="0"
                        w="240px"
                        h="full"
                        bg="white"
                        py={2}
                        zIndex="1000"
                    >
                        <Box display="flex" justifyContent="end" my={4} cursor="pointer" onClick={toggleDrawer} px={2}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.33325 3.33325L16.6666 16.6666" stroke="#4D4D4D" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M3.33325 16.6666L16.6666 3.33325" stroke="#4D4D4D" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </Box>
                        <VStack w="full" px={0} spacing={8}>
                            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={5}>
                                <Avatar w={20} h={20} name={selectedChat.title} src={selectedChat.avatar} borderRadius="full" />
                                <Flex direction="column" spacing={4} alignItems="center" justifyContent="center">
                                    <Text fontSize="16px" fontWeight={600}>{selectedChat.title}</Text>
                                    <Text fontSize="12px" color="gray.500">{selectedChat.marketplace.name}</Text>
                                </Flex>
                                <Tag w="auto" h="20px" justifyContent="center" size='xs' bgColor={selectedChat.marketplace.color} borderRadius='md' gap={2} px={2} py={1}>
                                    <Image src={selectedChat.marketplace.icon} />
                                    <TagLabel color="black" fontSize="10px" fontWeight={500}>{selectedChat.tag.name}</TagLabel>
                                </Tag>
                            </Box>
                            <VStack w="full" display="flex" alignItems="start" justifyContent="start" px={3} spacing={1}>
                                <Text fontSize="14px" fontWeight={600}>About Conversation</Text>
                                <Stack flexDirection="row" justifyContent="space-between">
                                    <Text fontSize="12px" fontWeight={500}>Created</Text>
                                    <Text fontSize="12px" fontWeight={500} color="gray.500">22 January 2024</Text>
                                </Stack>
                                <Stack flexDirection="row" justifyContent="space-between">
                                    <Text fontSize="12px" fontWeight={500}>Created</Text>
                                    <Text fontSize="12px" fontWeight={500} color="gray.500">22 January 2024</Text>
                                </Stack>
                            </VStack>
                        </VStack>
                    </Box>
                )}
            </HStack>
        </HStack>
    )
}