import React from 'react';
var createReactClass = require('create-react-class');

const MIN_CHAR = 4;

/**
 * Manage login step
 */
var LoginStep = createReactClass(
{
    /**
     * Initialize state
     */
    getInitialState()
    {
        return {
            'login'   : '',
            'password': '',
        };
    },

    /**
     * Update state.login with input event
     */
    setLogin(event)
    {
        this.setState({ 'login': event.target.value });
    },

    /**
     * Update state.password with input event
     */
    setPassword(event)
    {
        this.setState({ 'password': event.target.value });
    },

    /**
     * Launch login process (save user)
     * @todo: implement a real authentication system
     */
    doSubmit()
    {
        this.props.updateCurrentUser(this.state.login);
    },

    /**
     * Get class for login button
     */
    getButtonClassName()
    {
        var isEnabled = (MIN_CHAR <= this.state.login.length && MIN_CHAR <= this.state.password.length);
        var btnClass  = 'btn btn-success';
        if (! isEnabled) {
            btnClass += ' disabled';
        }
        return btnClass;
    },

    /**
     * Display login form
     */
    render()
    {
        return (
            <div className="main" id="loginStep">
                <h3>Login</h3>
                <div id="login">
                    <form>
                        <div className="form-group col-md-6">
                            <label className="control-label required">Username</label>
                            <div className="col-sm-12">
                                <input type="text" className="form-control" id="username" name="userName" value={ this.state.login } onChange={ this.setLogin } required />
                            </div>
                        </div>
                        <div className="form-group col-md-6">
                            <label className="control-label required">Password</label>
                            <div className="col-sm-12">
                                <input type="password" className="form-control" id="password" name="password" value={ this.state.password } onChange={ this.setPassword } required />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={ this.getButtonClassName() } onClick={ this.doSubmit }>
                                Login
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
});

module.exports = LoginStep;