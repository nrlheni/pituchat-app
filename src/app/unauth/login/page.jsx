import { useState } from 'react';
import { Box, VStack, Stack, Heading, Input, InputGroup, InputLeftElement, Button, Image, Text, InputRightElement, FormControl, FormLabel,} from '@chakra-ui/react';
import Logo from '../../../assets/loginBubble.png';
import { EmailIcon } from '../../../components/icon/email';
import { PasswordIcon } from '../../../components/icon/password';
import { UnseenIcon } from '../../../components/icon/unseen';
import { useNavigate } from 'react-router-dom';

const Index = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = () => {
        setLoading(true);

        setTimeout(() => {
            return navigate('/chat');
        }, 3000)
    }
    return (
        <Box display="flex" minH="100vh" width="100%" bg="white">
            <Box flex="1" display="flex" w={1/2} alignItems="center" justifyContent="center">
                <svg width="100%" viewBox="0 0 732 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_601_7843)">
                    <rect width="732" height="100%" fill="#F9F9FA"/>
                    <rect x="183" y="600" width="183" height="200" fill="#D3DBEB"/>
                    <rect y="600" width="183" height="200" fill="#D1A646"/>
                    <rect y="400" width="366" height="200" fill="#B8C7E5"/>
                    <rect x="366" y="400" width="366" height="400" fill="#3062C0"/>
                    <rect x="436.15" y="477" width="295.85" height="323" fill="#6C92D9"/>
                    <rect x="366" width="366" height="400" fill="#D3DBEB"/>
                    <rect width="366" height="400" fill="#D1A646"/>
                    <path d="M0 0H366V200C366 310.457 276.457 400 166 400H0V0Z" fill="#A1B8E5"/>
                    <path d="M183 690C183 640.294 223.294 600 273 600H366V710C366 759.706 325.706 800 276 800H183V690Z" fill="#6C92D9"/>
                    <path d="M732 300C732 244.772 687.228 200 632 200H466C410.772 200 366 244.772 366 300C366 355.228 410.772 400 466 400H732V300Z" fill="#A1B8E5"/>
                    <rect x="366" width="366" height="200" fill="#3062C0"/>
                </g>
                <defs>
                    <clipPath id="clip0_601_7843">
                    <rect width="732" height="100%" fill="white"/>
                    </clipPath>
                </defs>
                </svg>
            </Box>
            <Box flex="1" display="flex" width="100%" alignItems='center'>
                <VStack width="100%" spacing={4} p="28" alignItems="flex-start" justifyContent='center'>
                    <Box>
                        <Image src={Logo} />
                    </Box>
                    <Stack spacing={1}>
                        <Heading as="h1" size="lg">Login ke akunmu</Heading>
                        <Text alignItems="start" fontSize='sm' color='#4D4D4D'>Masuk akun untuk menggunakan PituChat</Text>
                    </Stack>
                    <Stack>
                        <Stack spacing={4}>
                        <FormControl>
                            <FormLabel color='#4D4D4D'>Email</FormLabel>
                            <InputGroup>
                                <InputLeftElement pointerEvents='none'>
                                    <Box>
                                        <EmailIcon />
                                    </Box>
                                </InputLeftElement>
                                <Input minWidth="400px" placeholder="Email address" type="text" />
                            </InputGroup>
                        </FormControl>
                        <FormControl>
                            <FormLabel color='#4D4D4D'>Password</FormLabel>
                            <InputGroup>
                                <InputLeftElement pointerEvents='none'>
                                    <Box>
                                        <PasswordIcon />
                                    </Box>
                                </InputLeftElement>
                                <Input minWidth="400px" placeholder="Password" type="password" />
                                <InputRightElement>
                                    <Box>
                                        <UnseenIcon />
                                    </Box>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        </Stack>
                        <Stack alignItems='flex-end'>
                            <Text fontSize='xs' color='#808080'>Lupa Password?</Text>
                        </Stack>
                    </Stack>
                    <Button isLoading={loading} onClick={handleLogin} bgColor='#0C4AC0' color='white' minWidth="400px">Masuk</Button>
                </VStack>
            </Box>
        </Box>
    );
};

export { Index };