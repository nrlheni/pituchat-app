import { Box, HStack, Image, Flex, Text } from "@chakra-ui/react"
import Logo from '../assets/loginBubble.png'

export const Header = () => {
    return (
        <Box w={'100%'} h={'72px'} boxShadow={'sm'} border={1} top={'0'} p={5}>
            <HStack alignItems={'center'} justifyContent={'space-between'} px={1}>
                <Flex direction={'row'} alignItems={'center'}>
                    <Image h={'40px'} src={Logo}/>
                    <Text size={'md'} letterSpacing={1} fontWeight={700}>PITUCHAT</Text>
                </Flex>
                <Flex direction={'row'} alignItems={'center'} gap={2}>
                    <Box w={8} h={8} borderRadius={'md'} bg={'blue.200'}></Box>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 7.5L10 12.5L5 7.5" stroke="#4D4D4D" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </Flex>
            </HStack>
        </Box>
    )
}