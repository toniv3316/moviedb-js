import { makeStyles } from '@material-ui/core'

const useBannerStyles = makeStyles({
    banner: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '90vh',
        marginTop: 82,
        color: 'white',
    },
    banner__inner: {
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: '100%',
        padding: '2rem 1rem',
    },
    banner__wrapper: {
        display: 'flex',
        alignItems: 'flex-end',
    },
    banner__description: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '& > *': {
            flex: 1,
        },
    },
    banner__button: {
        marginTop: '2rem',
        color: 'white',
        borderColor: 'white',
    },
})

export default useBannerStyles
