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

  return (
    <div>LoginForm</div>
  )
}

export default LoginForm