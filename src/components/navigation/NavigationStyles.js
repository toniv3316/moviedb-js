import { makeStyles } from '@material-ui/core'

export const NavigationStyles = makeStyles({
    navigation: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.5em',
        background: 'gray',
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
        fontSize: '1.1em',
        textDecoration: 'none',
        marginRight: '0.5em',
    },
})
