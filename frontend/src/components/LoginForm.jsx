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
    <div>LoginForm</div>
  )
}

export default LoginForm