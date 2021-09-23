<Box key={film.title} className={classes.filmsSection__film}>
    <Box className={classes.filmsSection__blurred}>
        <Button
            className={classes.filmsSection__button}
            onClick={() => showTrailer(film.id)}
        >
            {trailerID === film.id ? (
                <Box className={classes.filmsSection__trailer}></Box>
            ) : (
                <img
                    className={classes.filmsSection__poster}
                    src={`${imagePath}${film.backdrop_path}`}
                    alt={film.original_title}
                />
            )}
        </Button>
    </Box>
    <Typography variant='h5'>{film.title}</Typography>
    <Box>
        <Rating
            name='film-rating'
            readOnly
            precision={0.1}
            max={10}
            value={film.vote_average}
            readOnly
        />
    </Box>
    <Box>
        <Typography variant='body1'>{film.overview}</Typography>
    </Box>
    {/* <img src={`${imagePath}${film.backdrop_path}`} alt={film.original_title} /> */}
    {/*  <img src={`${imagePath}${film.poster_path}`} alt={film.original_title} /> */}
</Box>
