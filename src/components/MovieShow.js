import React from "react";

function MovieShow({movies}) {
    const params = useParams();
  console.log(params);

  return (
    <div>
      <h3>{movies[params.movieId].title}s</h3>
    </div>
  );
}

export default MovieShow;