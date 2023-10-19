import React from "react";
import { Box, Card, CardHeader, CardBody, CardFooter, Stack, StackDivider, Text, Heading } from '@chakra-ui/react'


const Tips = () => {
  

  return (
    <div >
      <h1>Tips</h1>
      <Card mb={5} bg="tomato">
  <CardHeader>
    <Heading size='md'>Category</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      {/* <Box>
        <Heading size='xs' textTransform='uppercase'>
          Title
        </Heading>
        <Text pt='2' fontSize='sm'>
          View a summary of all your clients over the last month.
        </Text>
      </Box> */}
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Content
        </Heading>
        <Text pt='2' fontSize='sm'>
          Check out the overview of your clients.
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Upvote/Downvote
        </Heading>
        <Text pt='2' fontSize='sm'>
          See a detailed analysis of all your business clients.
        </Text>
      </Box>
    </Stack>
  </CardBody>
</Card>

<Card bg="gray">
  <CardHeader>
    <Heading size='md'>Category</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4' >
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Content
        </Heading>
        <Text pt='2' fontSize='sm'>
          Check out the overview of your clients.
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Upvote/Downvote
        </Heading>
        <Text pt='2' fontSize='sm'>
          See a detailed analysis of all your business clients.
        </Text>
      </Box>
    </Stack>
  </CardBody>
</Card>

    </div>
  );
};

export default Tips;
