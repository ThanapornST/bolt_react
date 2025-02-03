import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import LoginCard from './components/Login/LoginCard';
import RegisterCard from './components/Login/RegisterCard';
import HomePage from './components/HomePage';
import CreatePage from './components/CreatePage';
import NovelEditor from './components/NovelEditor/NovelEditor';
import CreateVoicePage from './components/CreateVoice/CreateVoicePage';
import Including_character_creation from './components/Including character creation';
import { X } from 'lucide-react';

function AuthLayout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="relative flex w-full max-w-[1000px] h-[600px] bg-white rounded-2xl shadow-xl overflow-hidden">
        <button
          onClick={() => navigate('/')}
          className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-full transition-colors z-10"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>
        <div className="hidden md:block w-1/2 h-full">
          <img
            src="https://i.pinimg.com/736x/e2/af/72/e2af72c11576bc96996d8b7c096afe50.jpg"
            alt="Login illustration"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center p-8">
          {children}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<AuthLayout><LoginCard /></AuthLayout>} />
        <Route path="/register" element={<AuthLayout><RegisterCard /></AuthLayout>} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/editor" element={<NovelEditor />} />
        <Route path="/create-voice" element={<CreateVoicePage />} />
        <Route path="/including-character-creation" element={<Including_character_creation />} />
      </Routes>
    </Router>
  );
}

export default App;