import React from 'react'
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap'
import propTypes from 'prop-types'


const TextInput = ({
    name,
    type,
    label,
    placeholder,
    value,
    error,
    changeHandler,
    blurHandler,
    focusHandler
}) => {
    return (
        <FormGroup className='my-3'>
            <Label
                for={name}>
                {label}
            </Label>
            <Input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                value={value}
                onChange={changeHandler}
                onBlur={blurHandler}
                onFocus={focusHandler}
                invalid={error ? true : false}
            />
            <FormFeedback>{error}</FormFeedback>
        </FormGroup>
    )
}

TextInput.propTypes = {
    name: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    label: propTypes.string.isRequired,
    placeholder: propTypes.string.isRequired,
    value: propTypes.string,
    error: propTypes.string,
    changeHandler: propTypes.func.isRequired,
    blurHandler: propTypes.func,
    focusHandler: propTypes.func

}

TextInput.defaultProps = {
    type: 'text',
    value: ''
}

export default TextInput