import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Login.css';
import auth from '../../firebase.init';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();

  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    navigate('/');
  }

  const handleUserSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Login</h2>

        <form onSubmit={handleUserSignIn}>
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
          <p style={{ color: 'red' }}>{error?.message}</p>
          <input
            className="form-submit"
            type="submit"
            disabled={loading}
            value={!loading ? 'Login' : 'Logging In'}
          />
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
