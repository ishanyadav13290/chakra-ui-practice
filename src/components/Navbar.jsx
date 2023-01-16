import { Flex, Box, Spacer } from "@chakra-ui/react"

function Navbar(){
    return (
        <Flex p="20px" mb="" bg="black" position="fixed" top="0" w="100%" zIndex={1}>
  <Box p='4' bg='red.400' ml="5%">
  Logo
  </Box>
  <Spacer />
  <Box p='4' bg='green.400' mr="5%" >
    Box 3
  </Box>
  {/* <Spacer /> */}
  <Box p='4' bg='green.400' mr="10%"  >
    Box 2
  </Box>
  {/* <Spacer /> */}
</Flex>
    )
}

export default Navbar