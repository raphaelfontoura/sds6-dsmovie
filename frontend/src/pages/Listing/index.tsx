import axios from "axios";
import MovieCard from "components/MovieCard"
import Pagination from "components/Pagination"
import { useEffect, useState } from "react";
import { BASE_URL } from "utils/request";

const Listing = () => {

  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}`).then(
      response => {
        console.log(response.data);
      }
    )
    
  }, [pageNumber])

  return (
    <>
      <Pagination />
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-4">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-4">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-4">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-4">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-4">
            <MovieCard />
          </div>
        </div>
      </div>
    </>
  )
}

export default Listing
