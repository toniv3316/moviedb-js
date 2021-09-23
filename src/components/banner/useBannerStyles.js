import { makeStyles } from '@material-ui/core'

const useBannerStyles = makeStyles({
    banner: {
        marginTop: 82,
        height: 500,
        padding: '3em 1.5em',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
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
    banner__button: {},
})

export default useBannerStyles
