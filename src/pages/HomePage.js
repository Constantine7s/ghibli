import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MovieTile from '../components/MovieTile';
import { Box, Image, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import TilesSkeleton from '../components/TilesSkeleton';
import { Search2Icon } from '@chakra-ui/icons';

function HomePage() {

  const [data, setData] = useState([]);
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredMovies = data.filter(movie => (movie.title.toLowerCase().includes(search.toLowerCase()) || movie.release_date.includes(search.toString())))

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await axios.get('https://ghibliapi.vercel.app/films');
        setData(result.data);
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box>

      <Image src='https://www.studioghibli.com.au/wp-content/uploads/2017/07/ghibli_logo_gold.png' alt='Studio Ghibli Logo' marginX='auto' marginY='10'/>
      <InputGroup size='sm' width='384px' marginY='3' marginX='auto'>
        <InputRightElement pointerEvents='none'>
          <Search2Icon color='gray.300' />
        </InputRightElement>
        <Input focusBorderColor='orange.100' variant='outline' placeholder='Filter by name or year' onChange={handleSearch} />
      </InputGroup>
      <Box display='flex' flexWrap='wrap' justifyContent={'space-evenly'}>
        {loading ? <TilesSkeleton /> : filteredMovies.map(movie => (
          <MovieTile key={movie.id} movie={movie} />
        ))}
      </Box>
    </Box>
  );
}

export default HomePage