import { Box, LinkBox, Image, Heading, Text, Flex, LinkOverlay } from '@chakra-ui/react';
import React from 'react'

function MovieTile({ movie }) {
  return (
    <LinkBox  height='648px' width='386px' maxW='sm' padding='5' borderRadius='5' marginY='3' marginX='1' backgroundColor="#FDF2E9"
      _hover={{ backgroundColor: '#F6DDCC' }}>
      <LinkOverlay href={`/movie/${movie.id}`} >
        <Box>
          <Image
            src={movie.image}
            alt={movie.title}
            borderRadius='1'
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
        </Box>
      </LinkOverlay>
    </LinkBox>
  );
}

export default MovieTile