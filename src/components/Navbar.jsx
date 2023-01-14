import { Flex, Box, Spacer } from "@chakra-ui/react"

function Navbar(){
    return (
        <Flex>
  <Box p='4' bg='red.400'>
    Box 1
  </Box>
  <Spacer />
  <Box p='4' bg='green.400'>
    Box 2
  </Box>
</Flex>
    )
}

export default Navbar