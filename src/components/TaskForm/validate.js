const validate = values => {
    const errors = {};
    if (!values.title) {
        errors.title = 'Required !!!'
    } else if (values.title.length < 10) {
        errors.title = 'Must be 10 characters or less'
    }
    if (!values.desc) {
        errors.desc = 'Required !!!'
    } else if (values.desc.length < 5) {
        errors.desc = 'Must be 5 characters or less'
    }

    return errors
};
export default validate;
