import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box width="100%" align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} code with nefaden. All Rights Reserved.
    </Box>
  )
}

export default Footer