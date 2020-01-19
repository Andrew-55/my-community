import React from 'react';
import { reduxForm } from 'redux-form';
import { required } from '../../redux/utils/validators/validators';
import { Input, creatField } from '../common/FormsControls/FormsControls';
import { login } from '../../redux/authReducer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import style from '../common/FormsControls/FormsControls.module.css';

const LoginForm = ({ handleSubmit, error }) => {
    debugger;

    return (
        <form onSubmit={handleSubmit}>

            {creatField("Email", "email", [required], Input)}
            {creatField("Password", "password", [required], Input, { type: "password" })}
            {creatField(null, "rememberMe", [], Input, { type: "checkbox" }, "remember me")}
            {/* <div>
                <Field component={Input} name={"rememberMe"} type={"checkbox"} />remember me
                </div> */}
            {error && <div className={style.formSymmaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => {

    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, { login })(Login);
