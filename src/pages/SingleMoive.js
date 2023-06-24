import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import {
  Badge, Box, Button, Center, Flex, Heading, Image, Stack, Text, Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';


function SingleMoive() {
  const { id } = useParams()
  const [movie, setMovie] = useState({});
  const [names, setNames] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`https://ghibliapi.vercel.app/films/${id}`
        );
        console.log(result);
        setMovie(result.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [])

  useEffect(() => {
    const fetchPeople = async () => {
      if (movie && movie.people) {
        const names = await Promise.all(movie.people.map(async (url) => {
          const response = await axios.get(url);
          return response.data.name;
        }));
        setNames(names);
      }
    };

    fetchPeople();
  }, [movie]);

  const {
    title,
    original_title,
    original_title_romanised,
    description,
    director,
    producer,
    release_date,
    running_time,
    image,
    movie_banner
  } = movie;



  return (

    <Center paddingY='6' backgroundImage={movie_banner} bgSize='cover' bgPos="center" bgAttachment='fixed' >
      <Stack
        width='80%'
        borderRadius='5'
        marginTop='10'
        marginBottom='10'
        marginX='auto'
        padding='10'
        backgroundColor='whiteAlpha.900'
        direction={{ base: 'column', md: 'row' }}
        boxShadow='2xl'
      >
        <Flex flex='1' bg="blue.200">
          <Image
            objectFit="cover"
            boxSize="100%"
            src={image}
          />
        </Flex>
        <Stack
          flex='1'
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          padding='1'
          paddingTop='2'>
          <Heading fontSize='2xl' fontFamily='body'>
            {title}
          </Heading>
          <Text fontWeight={600} color='gray.500' size="sm" marginBottom='4'>
            {original_title} / {original_title_romanised}
          </Text>
          <Text
            marginBottom='3'
            textAlign='left'
            paddingX='3'>

            {description}
          </Text>


          <Accordion minH='100px' minW='100%' allowMultiple >
            <AccordionItem>
              <AccordionButton>
                <Box flex='1' textAlign='left' >
                  Info
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={2}>
                <Text> <b>Director: </b>{director} </Text>
                <Text><b> Producer:</b> {producer} </Text>
                <Text><b> Length:</b> {running_time}</Text>
                <Text><b> Release date:</b> {release_date} </Text>

              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex='1' textAlign='left' >
                  People
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </AccordionPanel>
            </AccordionItem>


          </Accordion>

          <Button
            as={Link}
            to="/"
            marginTop='5'
            rounded='xl'
            bg='orange.400'
            color='white'
            width='150px'
            _hover={{
              bg: 'orange.500',
            }}
          >
            Go to Home
          </Button>

        </Stack>

      </Stack>

    </Center>





















    // <Box backgroundImage={movie_banner} bgPos="center"
    //   backgroundRepeat="no-repeat" bgSize='cover' bgPos="center" bgAttachment='fixed' display='flex'  >

    //   <Box width='80%' borderRadius={5} marginTop='10' marginBottom='10' marginX='auto' padding='10' backgroundColor='whiteAlpha.900' display='flex'>
    //     <Image src={image} alt={title} width='400px'  float='left' marginRight='3' />
    //     <Box display='flex'>

    //       <Box>{title}</Box>
    //       <Box>{original_title}</Box>
    //       <Box>{original_title_romanised}</Box>
    //       <Box>{description}</Box>
    //       <p><strong>Director:</strong> {director}</p>
    //       <p><strong>Producer:</strong> {producer}</p>
    //       <p><strong>Release Date:</strong> {release_date}</p>
    //       <p><strong>Running Time:</strong> {running_time} minutes</p>
    //       <ul>
    //         {names.map((name, index) => (
    //           <li key={index}>
    //             {name}
    //           </li>
    //         ))}
    //       </ul>
    //     </Box>
    //   </Box>
    // </Box>








  );
}

export default SingleMoive