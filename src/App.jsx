import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout/SharedLayout";
//components
import "./App.css";

const Home = lazy(() => import("./pages/home/Home"));
const Cast = lazy(() => import("./components/cast/cast"));
const Reviews = lazy(() => import("./components/reviews/reviews "));

//pages
const Movies = lazy(() => import("./pages/movies/movies"));
const MoviesDetails = lazy(() => import("./pages/movies/moviesDetails"));
const NotFound = lazy(() => import("./pages/notFound/notFound"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/goit-react-hw-05-movies/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:moviesId" element={<MoviesDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
