import React, { useState } from 'react';
import logo from '/public/logo.png';
import { API_BASE_URL } from '../constants';
import OpenEyeIcon from './OpenEyeIcon';
import ClosedEyeIcon from './ClosedEyeIcon';
import LoadingSpinner from './LoadingSpinner';
import LoginFeedbackMessage from './LoginFeedbackMessage';

function LoginForm() {
  const [showPassword, setShowPasssword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event) {
    try {
      event.preventDefault();
      setIsLoading(true);

      const credentials = {
        email,
        password,
      };

      const loginRes = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'Post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (!loginRes.ok) {
        const errorData = await loginRes.json();
        setErrorMessage(errorData.message);
        return;
      }

      const loginData = await loginRes.json();
      console.log('Login API response:', loginData);

      setIsLoggedIn(true);
    } catch (error) {
      alert('Valami hiba történt, próbálja újra!');

      console.error(error);
      setIsLoggedIn(false);
    } finally {
      setEmail('');
      setPassword('');
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center">
      <div>
        <img src={logo} alt="logo" className="w-[60px]" />
      </div>
      <h1 className="font-semibold text-white">Bejelentkezés</h1>
      <form onSubmit={handleSubmit} className="bg-white rounded-md flex flex-col m-5 p-5 w-full">
        <label className="flex flex-col text-blue-900 font-semibold cursor-pointer">
          E-mail cím:
          <input
            value={email}
            onChange={(e) => {
              setErrorMessage('');
              setIsLoggedIn(false);
              setEmail(e.target.value);
            }}
            className="border-gray-300 rounded-sm border-1 p-2 mb-5 text-black font-normal"
            type="email"
            placeholder="dorottya@gmail.com"
            required
          />
        </label>
        <label className="flex flex-col text-blue-900 font-semibold cursor-pointer">
          Jelszó:
          <div className="relative mb-5">
            <input
              value={password}
              onChange={(e) => {
                setErrorMessage('');
                setIsLoggedIn(false);
                setPassword(e.target.value);
              }}
              className="w-full border-gray-300 rounded-sm border-1 p-2 text-black font-normal"
              type={showPassword ? 'text' : 'password'}
              placeholder="1234567789AB_%&"
              required
            />
            <button type="button" onClick={() => setShowPasssword(!showPassword)} className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer">
              {showPassword ? <OpenEyeIcon /> : <ClosedEyeIcon />}
            </button>
          </div>
        </label>
        <label className="cursor-pointer">
          <input className="mr-1 mb-5" type="checkbox" />
          Emlékezzen rám
        </label>
        <button
          disabled={isLoading}
          className={`flex items-center justify-center rounded-md p-2 font-semibold w-full text-white  ${
            isLoading ? 'bg-cyan-800 cursor-not-allowed' : 'bg-cyan-600 cursor-pointer'
          }`}
          type="submit"
        >
          {isLoading && <LoadingSpinner />}
          Bejelentkezés
        </button>
        <div className="flex justify-center">
          <LoginFeedbackMessage errorMessage={errorMessage} isLoggedIn={isLoggedIn} />
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
