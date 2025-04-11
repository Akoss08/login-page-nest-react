import './App.css';
import LoginPage from './pages/LoginPage';
import bgImage from '/public/bg-image.svg';

function App() {
  return (
    <div className="bg-gradient-to-r to-30% from-blue-900 to-blue-950 h-screen flex items-center justify-center">
      <img src={bgImage} alt="Background decoration" className="absolute right-0 bottom-0 h-3/4 object-cover" />
      <LoginPage />
    </div>
  );
}

export default App;
