import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MovieTile from '../components/MovieTile';

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
        <div>
          {data.map(movie => (
            <MovieTile key={movie.id} movie={movie} />
          ))}
        </div>
      );
}

export default HomePage