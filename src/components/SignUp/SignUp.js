import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  return (
    <div>
      <div className="form-container">
        <div>
          <h2 className="form-title">Sign Up</h2>

          <form>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input required type="email" name="email" id="email" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input required type="password" name="password" id="password" />
            </div>
            <div className="input-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                required
                type="password"
                name="confirm-password"
                id="confirm-password"
              />
            </div>
            <input className="form-submit" type="submit" value="Sign Up" />
          </form>

          <p className="new-account">
            Already have an account?{' '}
            <Link className="form-link" to="/login">
              Please Login.
            </Link>
          </p>
          <div className="alternative">
            <div className="line"></div>
            <div className="or">or</div>
            <div className="line"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
