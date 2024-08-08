import { SimpleGrid, Card, CardHeader, CardBody, CardFooter, Button, Image, Tag, TagLabel } from "@chakra-ui/react"
import { ChecklistIcon } from "../../../../components/icon/checklist";
import { AddIcon } from "../../../../components/icon/add";

export const ShopCard = ({ data }) => {
    return (
        <SimpleGrid spacing={2} templateColumns='repeat(5, 1fr)' gap={6}>
            {data.map((item, index) => (
                <Card key={index} w={"190px"} h={"auto"} boxShadow={"none"} rounded={"lg"} alignItems={"center"} textAlign={"center"} gap={5} p={6}>
                    <CardHeader p={0}>
                        <Image src={item.marketplace.logo} />
                    </CardHeader>
                    <CardBody p={0}>
                        <Tag w="full" h="20px" justifyContent="center" size='xs' bgColor={item.marketplace.color} borderRadius='md' gap={2} px={2} py={1}>
                            <Image src={item.marketplace.icon} />
                            <TagLabel color="black" fontSize="10px" fontWeight={500}>{item.tag.name}</TagLabel>
                        </Tag>
                    </CardBody>
                    <CardFooter p={0}>
                        <Button
                            size="md"
                            rounded="lg"
                            fontSize="sm"
                            fontWeight={400}
                            letterSpacing={0.5}
                            leftIcon={<ChecklistIcon />}
                            color={"white"}
                            bgColor={"blue.500"}
                            _hover={{ opacity: "100%" }}
                            _disabled={{ opacity: 0.4, cursor: "not-allowed" }}
                            isDisabled
                        >
                            Tersambung
                        </Button>
                    </CardFooter>
                </Card>
            ))}
            <Card w="190px" h="auto" boxShadow="none" rounded="lg" p={6}>
                <CardBody p={0} display="flex" flexDirection="column" alignItems="center" textAlign="center" justifyContent="center">
                    <Button size="md" border="1px solid" borderColor="blue.500" color="blue.500" bgColor="transparent" rounded="lg" fontSize="sm" fontWeight={400} letterSpacing={0.5} leftIcon={<AddIcon />}>
                        Tambah Toko
                    </Button>
                </CardBody>
            </Card>
        </SimpleGrid>
    );
};