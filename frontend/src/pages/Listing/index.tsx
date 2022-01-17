import axios from "axios";
import MovieCard from "components/MovieCard"
import Pagination from "components/Pagination"
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/request";

const Listing = () => {

  const [pageNumber, setPageNumber] = useState(0);
  const [movieResponse, setMoviesResponse] = useState<MoviePage>()

  useEffect(() => {
    axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=id`).then(
      response => {
        const data = response.data as MoviePage;
        setMoviesResponse(data);
        setPageNumber(data.number);
      }
    );

  }, [pageNumber])

  return (
    <>
      <Pagination />
      <div className="container">
        <div className="row">
          {movieResponse?.content.map(
            movie => (
              <div className="col-sm-6 col-lg-4 col-xl-3 mb-4">
                <MovieCard movie={movie} key={movie.id} />
              </div>
            )
          )}
        </div>
      </div>
    </>
  )
}

export default Listing
