function Movie(props) {

    return (
        <div>
            <h2>Movie Name: {props.name}</h2>
            <p>Year: {props.year}</p>
            <p>Rating: {props.rating}</p>
        </div>
    );
}

export default Movie;