import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MovieTile from '../components/MovieTile';
import { Box, Input } from '@chakra-ui/react';

function HomePage() {

  const [data, setData] = useState([]);
  const [search, setSearch] = useState('')

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  
  const filteredMovies = data.filter(movie => (movie.title.toLowerCase().includes(search.toLowerCase()) || movie.release_date.includes(search.toString()) ))

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
    <Box>
      <Input display='flex' placeholder='Filter by name or year' size='sm' width='384px' marginY='3' marginX='auto' onChange={handleSearch} />
      <Box display='flex' flexWrap='wrap' justifyContent={'space-evenly'}>
        {filteredMovies.map(movie => (
          <MovieTile key={movie.id} movie={movie} />
        ))}
      </Box>
    </Box>
  );
}

export default HomePage