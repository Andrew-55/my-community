import React from 'react';
import { Field } from 'redux-form';
import styles from './FormsControls.module.css'


const FormsControl = ({ input, meta: { touched, error }, children }) => {
    const hasError = touched && error;
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                {children}
            </div>
            {hasError && < span > {error}</span>}
        </div >
    )
}



export const Texterea = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormsControl {...props}><textarea {...input} {...restProps} /></FormsControl>
}

export const Input = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormsControl {...props}><input {...input} {...restProps} /></FormsControl>
}

export const creatField = (placeholder, name, validators, component, props = {}, text = "") => (
    <div>
        <Field placeholder={placeholder} name={name} component={component}
            validate={validators} {...props} />{text}
    </div>)
