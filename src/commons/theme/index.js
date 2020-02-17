import { createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
    color : {
        primary : "#D32F2F",
        secondary : "#03A9F4",
        error : "#E64A19"
    },
    typography : {
        fontFamily : "Roboto",
        fontSize : 13
    },
    shape : {
        borderRadius : 5,
        border : '1px solid #E64A19',
        color : "#E64A19"
    }

});

export default theme;