import { Card, CardBody, Image, Heading, Text, Flex } from '@chakra-ui/react';
import React from 'react'

function MovieTile({ movie }) {
  return (
    <Card maxW='sm' variant='outline' margin='3' backgroundColor="#FDF2E9"
      _hover={{ backgroundColor: '#F6DDCC' }}>
      <CardBody>
        <Image
          src={movie.image}
          alt={movie}
          borderRadius='4g'
          
        />
        <Heading size='md' marginTop='3'>{movie.title}</Heading>
        <Flex mt='6' spacing='3' justifyContent='space-between'>
          <Text>
            {movie.release_date}
          </Text>
          <Text>
            {movie.running_time} minutes
          </Text>
        </Flex>
      </CardBody>
    </Card>
  );
}

export default MovieTile