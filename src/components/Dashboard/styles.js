const styles = () => ({
        wpDashboard: {
            width : '100vw',
            height : '100vh',
            // backgroundImage : "url('images/background.jpg')",
            // backgroundRepeat : 'no-repeat',
            // backgroundSize: 'cover'

        },
        wrapperContent : {
            width: '90%',
            margin : '0px auto'
        },
        wpHeader: {
            background: '#000 !important'
        },
        link: {
            display: 'block',
            textDecoration: 'none',
            padding: '9px 10px',
            fontWeight: 700,
            color: '#0984e3',
            textTransform: 'uppercase',
            fontSize: '13px',

        },
        wpLink: {
            minWidth: '200px'
        },
        active: {
            color: '#d35400',
            background: '#81ecec'
        },
        thumbLogo: {
            width: '80px',
            height: '80px',
            overflow: 'hidden',
            marginLeft: '30px'
        },
        imgLogo: {
            maxWidth: '100%',
            height: '72px'
        },
        search: {
            position: 'relative',
            marginLeft : '30px'
        },
        searchIcon: {
            height: '100%',
            position: 'absolute',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#000',
            zIndex: 10,
            right: 0,
            background: '#8e8e8e',
            borderRadius: 'none !important',
            fontSize: '13px'
        },
        icon: {
            fontSize: '14px'
        },
        inputSearch: {
            background: '#8e8e8e',
            width: '30vw',
            border: 'none',
            borderRadius: '5px',
            padding: '2px 10px',
            fontSize: '13px'
        },
        menuRight: {
            width: '100%',
            textAlign: 'right',
        }


    })
;
export default styles;