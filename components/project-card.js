import React from "react";
import {
  Box,
  useColorModeValue, 
  Text,
  Link,
  Stack,
  Button,
  Icon
} from "@chakra-ui/react";
import { IoLogoGithub } from 'react-icons/io5'

const ProjectCard = (props) => {
    const { projectName, stacks, description, link } = props;
    return (
        <Box 
            id="project" 
            borderRadius="lg" 
            p={3} 
            mb={4} 
            textAlign="center" 
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} 
            css={{ backdropFilter: 'blur(10px)' }}
            flexShrink={0}
            boxShadow='lg'
            rounded='md'
        >
            <Link href={link} target="_blank" color={useColorModeValue('black', 'white')} >
                <Button
                    position="absolute"
                    right="20px"
                    backgroundColor="#8c45f4" 
                >
                    <Icon as={IoLogoGithub} />
                </Button>
            </Link>
            <Stack
                align={{ base: "center", md: "stretch" }}
                textAlign={{ base: "center", md: "left" }}
                mt={{ base: 4, md: 0 }}
                ml={{ md: 6 }}
            >
                <Link
                    my={1}
                    textTransform="uppercase"
                    display="block"
                    fontSize="lg"
                    lineHeight="normal"
                    fontWeight="bold"
                    href={`${link}`}
                    color={useColorModeValue('#550dc0', '#c275ff')} 
                >
                    {projectName}
                </Link>
                <Text
                    fontWeight="semibold"
                    textTransform="uppercase"
                    fontSize="md"
                    letterSpacing="normal"
                >
                    {stacks}
                </Text>
                <Text my={2} color="gray.500">
                    {description}
                </Text>
            </Stack>
        </Box>
    )
}

export default ProjectCard