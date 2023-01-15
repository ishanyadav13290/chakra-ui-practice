import { Flex, Card,Divider, ButtonGroup, Button, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Grid } from '@chakra-ui/react'

function Boxes({data}){
    return <Grid templateColumns='repeat(3, 1fr)' gap={6} p="20px">
        {data.map(el=>{
        return <Card w='sm' key={el.id} id={el.id} m="auto">
        <CardBody>
          <Image maxW="sm"
            src={el.thumbnailUrl}
            alt='Green double couch with wooden legs'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Text>
              {el.title}
            </Text>
            <Text color='blue.600' fontSize='2xl'>
              $450
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue'>
              Buy now
            </Button>
            <Button variant='ghost' colorScheme='blue'>
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    })}
    </Grid>
}

export default Boxes