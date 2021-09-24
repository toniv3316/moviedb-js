import { makeStyles } from '@material-ui/core/styles'

export const useFilmSectionStyles = makeStyles({
    filmsSection: {
        display: 'flex',
        overflowX: 'scroll',
        margin: '10px 0',
        color: 'white',
    },
    filmsSection__film: {
        width: 550,
        textAlign: 'center',
        border: '1px solid rgba(222,222,222,0.4)',
        '&:not(:first-child):not(:last-child)': {
            margin: '0 10px',
        },
    },
    filmsSection__blurred: {
        background: 'rgba(0, 0, 0, 0.3)',
        overflow: 'hidden',
    },
    filmsSection__button: {
        padding: 0,
    },
    filmsSection__poster: {
        overflow: 'hidden',
        objectFit: 'contain',
        width: 550,
        height: 310,
    },
    filmsSection__description: {
        display: 'flex',
        flexDirection: 'column',
        height: 350,
        padding: 10,
        '& > *:not(:last-child)': {
            marginBottom: 15,
        },
    },
    filmsSection__trailer: {
        width: '550px',
        height: '310px',
        background: 'red',
    },
    filmsSection__functional: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        height: '100%',
    },
    filmsSection__btn: {
        color: 'white',
        borderColor: 'white',
    },
})
