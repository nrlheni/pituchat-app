import { Box, Text, VStack} from "@chakra-ui/react"
import TokpedIcon from '../../../assets/tokopedia-logo.png';
import TokpedLogo from '../../../assets/tokopedia-logo-text.png';
import ShopeeIcon from '../../../assets/shopee-logo.png';
import ShopeeLogo from '../../../assets/shopee-logo-text.png';
import { ShopCard } from "./_components/card";

export const Index = () => {

    const shopData = [
        {
            marketplace: {
                name: "Tokopedia",
                logo: TokpedLogo,
                icon: TokpedIcon,
                color: "#D9F2E3"
            },
            tag: {
                name: "Beauty Lovers",
            }
        },
        {
            marketplace: {
                name: "Shopee",
                logo: ShopeeLogo,
                icon: ShopeeIcon,
                color: "orange.100"
            },
            tag: {
                name: "Makeuppucino",
            }
        },
    ];

    return (
        <Box px={8} py={5}>
            <VStack w="full" h="full" spacing={5} alignItems={"left"}>
                <Text fontSize={"16px"} fontWeight={700}>Shop</Text>
                <ShopCard data={shopData} />
            </VStack>

        </Box>
    )
}