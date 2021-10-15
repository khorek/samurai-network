import React from 'react';
import { Field } from 'redux-form';
import styles from './FormsControls.module.css';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

export const CheckFormControl = ({ input, meta, children }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={' ' + (hasError ? styles.error : '')}>
            <div>
                {children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}


export const Textarea = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <CheckFormControl {...props}>
        {/* <textarea {...input} {...restProps} /> */}
        <InputGroup>
            <InputGroup.Text>Say something...</InputGroup.Text>
            <FormControl as="textarea" aria-label="With textarea"  {...input} />
        </InputGroup>

    </CheckFormControl>
}

export const Input = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props}><input {...input} {...restProps} /> </FormControl>
}

export const createField = (placeholder, name, validators, component, props = {}, text = '') => (
    <div>
        <Field placeholder={placeholder} name={name}
            component={component}
            validate={validators}
            {...props}
        /> {text}
    </div>
)