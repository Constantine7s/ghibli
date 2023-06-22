import React, { useEffect, useState } from 'react'
import axios from 'axios'

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
        {data.map((item, index) => (
          <p key={index}>{item.title}</p>
        ))}
      </div>
    );
}

export default HomePage