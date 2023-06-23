import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';


function SingleMoive() {
  const { id } = useParams()
  const [movie, setMovie] = useState({});

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

  return (
    <div>{movie.title}</div>
  )
}

export default SingleMoive