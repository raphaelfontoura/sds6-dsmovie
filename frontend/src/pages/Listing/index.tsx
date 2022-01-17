import axios from "axios";
import MovieCard from "components/MovieCard"
import Pagination from "components/Pagination"
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/request";

const Listing = () => {

  const [pageNumber, setPageNumber] = useState(0);
  const [movieResponse, setMoviesResponse] = useState<MoviePage>({
    content: [],
    last: true,
    totalPages: 0,
    totalElements: 0,
    size: 12,
    number: 0,
    first: true,
    numberOfElements: 0,
    empty: true
  });

  useEffect(() => {
    axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=id`).then(
      response => {
        const data = response.data as MoviePage;
        setMoviesResponse(data);
        setPageNumber(data.number);
      }
    );

  }, [pageNumber])

  const handlePageChange = (newPage: number) => {
    setPageNumber(newPage);
  }

  return (
    <>
      <Pagination page={movieResponse} onChange={handlePageChange} />
      <div className="container">
        <div className="row">
          {movieResponse?.content.map(
            movie => (
              <div className="col-sm-6 col-lg-4 col-xl-3 mb-4" key={movie.id}>
                <MovieCard movie={movie} />
              </div>
            )
          )}
        </div>
      </div>
    </>
  )
}

export default Listing
