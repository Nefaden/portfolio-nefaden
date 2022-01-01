import React from "react";
import {
  Box,
  useColorModeValue, 
  Text,
  Link,
  Stack
} from "@chakra-ui/react";

const ProjectCard = (props) => {
    const { projectName, stacks, description } = props;
    return (
        <Box 
            id="project" 
            borderRadius="lg" 
            p={3} 
            mb={6} 
            textAlign="center" 
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} 
            css={{ backdropFilter: 'blur(10px)' }}
            flexShrink={0}
            boxShadow='lg'
            rounded='md'
        >
            <Stack
                align={{ base: "center", md: "stretch" }}
                textAlign={{ base: "center", md: "left" }}
                mt={{ base: 4, md: 0 }}
                ml={{ md: 6 }}
            >
                <Text
                    fontWeight="bold"
                    textTransform="uppercase"
                    fontSize="lg"
                    letterSpacing="wide"
                    color="teal.600"
                >
                    {projectName}
                </Text>
                <Link
                    my={1}
                    display="block"
                    fontSize="md"
                    lineHeight="normal"
                    fontWeight="semibold"
                    href="#"
                >
                    {stacks}
                </Link>
                <Text my={2} color="gray.500">
                    {description}
                </Text>
            </Stack>
        </Box>
    )
}

export default ProjectCard