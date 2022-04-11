import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Login</h2>

        <form>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input required type="email" name="email" id="email" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input required type="password" name="password" id="password" />
          </div>
          <input className="form-submit" type="submit" value="Login" />
        </form>

        <p className="new-account">
          New to Ema-John?{' '}
          <Link className="form-link" to="/signup">
            Create an account
          </Link>
        </p>
        <div className="alternative">
          <div className="line"></div>
          <div className="or">or</div>
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
