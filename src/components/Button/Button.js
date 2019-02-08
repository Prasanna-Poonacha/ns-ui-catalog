import React from 'react';
import PropTypes from 'prop-types';
/** A button component */
function Button({ message, brand }) {
    return (
        <input className={brand} type="button" value={message} />
    )
}

Button.propTypes = {
    /** Message to display */
    message: PropTypes.string
};

Button.defaultProps = {
    message: "Submit"
}

export default Button;