import React from 'react'

function MovieTile({movie}) {
    return (
        <div className="flex flex-col items-center bg-white shadow-md p-4 m-2">
          <img src={movie.image} alt={movie.title} className="w-32 h-32 object-cover" />
          <h2 className="text-2xl font-bold mt-2">{movie.title}</h2>
          <p className="text-sm text-gray-600">Release Date: {movie.release_date}</p>
          <p className="text-sm text-gray-600">Running Time: {movie.running_time} minutes</p>
        </div>
      );
}

export default MovieTile