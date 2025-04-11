import React from 'react';

function LoginFeedbackMessage({ errorMessage, isLoggedIn }) {
  if (errorMessage) return <p className="text-red-500 font-semibold">{errorMessage}</p>;
  if (isLoggedIn) return <p className="text-green-600 font-semibold">Sikeres Bejelentkezés!</p>;

  return null;
}

export default LoginFeedbackMessage;
