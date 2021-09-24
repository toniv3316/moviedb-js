import { makeStyles } from '@material-ui/core'

export const useNavigationStyles = makeStyles({
    navigation: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        boxSizing: 'border-box',
        padding: '1em 1.5em',
        zIndex: 2,
        background: 'black',
    },
    navigation__primary: {
        display: 'flex',
        alignItems: 'center',
    },
    navigation__subordinate: {
        display: 'flex',
        alignItems: 'center',
    },
    navigation__link: {
        color: 'white',
        fontSize: '1.1em',
        textDecoration: 'none',
        marginRight: '1em',
        transition: '.2s',
        '&:hover': {
            color: 'rgba(222,222,222,0.9)',
        },
    },
    navigation__btn: {
        color: 'white',
        borderColor: 'white',
    },
})
