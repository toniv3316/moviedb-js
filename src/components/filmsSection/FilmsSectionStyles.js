import { makeStyles } from "@material-ui/core/styles";

export const FilmSectionStyles = makeStyles({
    filmsSection: {
        display: 'flex',
        overflowX: 'scroll',
    },
    filmsSection__film: {
        background: 'gray',
        marginRight: '5px',
        minWidth: 550,
        textAlign: 'center',
    },
    filmsSection__blurred: {
        background: 'rgba(0, 0, 0, 0.5)',
        overflow: 'hidden',
    },
    filmsSection__button: {
        padding: 0,
    },
    filmsSection__poster: {
        overflow: 'hidden',
        objectFit: 'contain',
        maxWidth: 550,
        minHeight: 310,
    },
    filmsSection__trailer: {
        width: '550px',
        height: '310px',
        background: 'red',
        transitionProperty: 'width, height',
    }
})