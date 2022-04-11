import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './SignUp.css';
import auth from '../../firebase.init';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordBlur = (e) => {
    setConfirmPassword(e.target.value);
  };

  if (user) {
    navigate('/');
  }

  const handleCreateUser = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Your two passwords did not match.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be of 6 characters');
      return;
    }

    createUserWithEmailAndPassword(email, password);
    setError('');
  };

  return (
    <div>
      <div className="form-container">
        <div>
          <h2 className="form-title">Sign Up</h2>

          <form onSubmit={handleCreateUser}>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                onBlur={handleEmailBlur}
                required
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                onBlur={handlePasswordBlur}
                required
                type="password"
                name="password"
                id="password"
              />
            </div>
            <div className="input-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                required
                onBlur={handleConfirmPasswordBlur}
                type="password"
                name="confirm-password"
                id="confirm-password"
              />
            </div>
            <p style={{ color: 'red' }}>{error}</p>
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
