import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MovieTile from '../components/MovieTile';
import { Flex } from '@chakra-ui/react';

function HomePage() {

    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const result = await axios.get('https://ghibliapi.vercel.app/films');
          setData(result.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
        <Flex flexWrap='wrap' justifyContent={'space-evenly'}>
          {data.map(movie => (
            <MovieTile key={movie.id} movie={movie} />
          ))}
        </Flex>
      );
}

export default HomePage