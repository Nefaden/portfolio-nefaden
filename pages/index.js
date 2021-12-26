import { Container, Box, Heading, useColorModeValue } from "@chakra-ui/react"

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" p={3} mb ={6} textAlign="center" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} css={{ backdropFilter: 'blur(10px)' }}>
                Hello, I&apos;m Yann Durand, AKA Nefaden, a full-stack developer based in France !
            </Box>

            <Box display={{md: 'flex'}} textAlign="center">
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        code with <p style={{color:"#8c45f4", display:"inline"}}>nefaden</p>
                    </Heading>
                </Box>
            </Box>
        </Container>
    )
}

export default Page