import '../styles/login.css'

import { useState } from 'react';
import { Loader } from 'react-feather';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import useAuth from '../hooks/useAuth';
import LoginRequest from '../models/auth/LoginRequest';
import authService from '../services/AuthService';

export default function Login() {
  const { setAuthenticatedUser } = useAuth();
  const history = useHistory();

  const [error, setError] = useState<string>();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginRequest>();

  const onSubmit = async (loginRequest: LoginRequest) => {
    try {
      const data = await authService.login(loginRequest);
      setAuthenticatedUser(data.user);
      history.push('/');
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="parent clearfix">
      <div className="bg-illustration">
        <div className="burger-btn">
        </div>
      </div>
      <div className="login">
        <div className="container">
          <h1>Login</h1>
          <div className="login-form">
            <form
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                type="text"
                className="input sm:text-lg"
                placeholder="Username"
                required
                disabled={isSubmitting}
                {...register('username')}
              />
              <input
                type="password"
                placeholder="Password"
                required
                disabled={isSubmitting}
                {...register('password')}
              />
              <button
                className="btn mt-3 sm:text-lg"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <Loader />
                ) : (
                  'Login'
                )}
              </button>
              {error ? (
                <div className="text-red-500 p-3 font-semibold border rounded-md bg-red-50">
                  {error}
                </div>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </div>

  );
}
