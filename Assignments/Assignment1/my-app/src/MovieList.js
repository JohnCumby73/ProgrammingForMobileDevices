import Movie from "./Movie"

function MovieList(props) {
    const { movies } = props;
    return (
        <div>
            {movies.map((movie, index) => (
                <Movie
                    key = {index}
                    name = {movie.name}
                    year = {movie.year}
                    rating = {movie.rating}
                />
            ))}
        </div>
    )
}
export default MovieList;