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
    taskBoard: {
        margin: "30px"
    },
    btnAddTask: {
        textTransform: 'capitalize'
    },
    icon: {
        fontSize: theme.typography.fontSize,
        paddingRight: 5
    },
    titleStatus: {
        textTransform: 'uppercase',
        paddingBottom: 5,
        borderBottom: '1px solid #d35400'
    },
    wpListTask: {
        // padding: "10px",
        margin: "20px 10px",
        minHeight: "150px"
    },
    titleTask: {
        fontSize: "14px"
    },
    iconAction: {},
    wpIconAction: {
        textAlign: 'right',
        width: "100%"
    },
    titleForm: {
        textTransform: 'uppercase',
        fontSize: 13,
        fontWeight: 700
    },
    toastNotify: {
        minHeight : '44px !important'
    }


});

export default styles;