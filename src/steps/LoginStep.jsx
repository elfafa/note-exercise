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
            'userLogin'   : '',
            'userPassword': '',
        };
    },

    /**
     * Update state.userLogin with input event
     */
    setUserLogin(event)
    {
        this.setState({ 'userLogin': event.target.value });
    },

    /**
     * Update state.userPassword with input event
     */
    setUserPassword(event)
    {
        this.setState({ 'userPassword': event.target.value });
    },

    /**
     * Launch login process (save user)
     */
    doSubmit()
    {
        // @todo: implementing a real authentication system
        this.props.updateCurrentUser(this.state.userLogin);
    },

    /**
     * Get class for login button
     */
    getButtonClassName()
    {
        var isEnabled = (MIN_CHAR <= this.state.userLogin.length && MIN_CHAR <= this.state.userPassword.length);
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
                            <label className="control-label">Username *</label>
                            <div className="col-sm-12">
                                <input type="text" className="form-control" id="username" name="userName" value={ this.state.userLogin } onChange={ this.setUserLogin } required />
                            </div>
                        </div>
                        <div className="form-group col-md-6">
                            <label className="control-label">Password *</label>
                            <div className="col-sm-12">
                                <input type="password" className="form-control" id="password" name="password" value={ this.state.userPassword } onChange={ this.setUserPassword } required />
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