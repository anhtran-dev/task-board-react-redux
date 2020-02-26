const styles = theme => ({
    box: {
        display: "flex",
        alignItems: "center",

    },
    shape: {
        width: "25%",
        padding: "30px",
        marginRight: "10px",
        border: theme.shape.border,
        color: theme.shape.color,
        borderRadius: theme.shape.borderRadius
    },
    taskBoard : {
        margin : "30px"
    },
    btnAddTask :{
        textTransform : 'capitalize'
    },
    icon : {
        fontSize: theme.typography.fontSize,
        paddingRight: 5
    },
    titleStatus : {
        textTransform : 'uppercase',
        paddingBottom : 5,
        borderBottom : '1px solid #d35400'
    },
    wpListTask : {
        // padding: "10px",
        margin : "20px 10px",
        minHeight : "150px"
    },
    titleTask : {
        fontSize : "14px"
    },
    iconAction : {

    },
    wpIconAction : {
        textAlign : 'right',
        width : "100%"
    },
    wpFormTask : {
        // background : '#95a5a6'
    },
    headerForm : {
        background : '#00cec9',
        height : "40px"
    },
    titleForm : {
        textTransform : 'uppercase',
        fontSize : 14,
        fontWeight: 700,
        color : "#d35400",

    },
    textField : {
        marginBottom : "30px"
    }





});

export default styles;