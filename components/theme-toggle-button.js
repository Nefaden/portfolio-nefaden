import { AnimatePresence, motion } from 'framer-motion'
import { Container, Box, IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode()

  return (
      // WIP: Toggle Theme design like https://frame55.agency/ navigate button
    //   <Container 
    //     bg="white" 
    //     width="50px" 
    //     height="80px" 
    //     alignItems="center" 
    //     position="top-left" 
    //     borderBottomRightRadius="500px" 
    //     borderBottomLeftRadius="500px" 
    //     display="flex"
    //     zIndex="1"
    // >
    <Container>
        {/* <Box 
            bg="#263238"
            borderRadius="500"
            width="50px"
            height="50px"
        > */}
        <Box>
            <AnimatePresence exitBeforeEnter initial={false}>
            <motion.div
                whileHover={{ scale: 1.2 }}
                style={{ display: 'inline-block' }}
                key={useColorModeValue('light', 'dark')}
                transition={{ duration: 0.2 }}
            >
                <IconButton
                    marginTop="10px"
                    aria-label="Toggle theme"
                    colorScheme={useColorModeValue('purple', 'orange')}
                    icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
                    onClick={toggleColorMode}
                    borderRadius="500"
                ></IconButton>
            </motion.div>
            </AnimatePresence>
        </Box>
      </Container>
  )
}

export default ThemeToggleButton