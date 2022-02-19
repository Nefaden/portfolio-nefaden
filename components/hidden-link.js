import { Container, Box, Link } from '@chakra-ui/react'

const HiddenLink = () => {
    return (
        <Container>
            <Box>
                <Link 
                    href="#about"
                    position="absolute"
                    marginTop="-100px"
                    bg="black"
                    transition={{ transform: '325ms ease-in'}}
                    _focus={{marginTop: "0"}}
                >
                    skip navigation
                </Link>
            </Box>
        </Container>
    )
}

export default HiddenLink