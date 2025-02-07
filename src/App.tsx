import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import LoginCard from './components/Login/LoginCard';
import RegisterCard from './components/Login/RegisterCard';
import HomePage from './components/HomePage';
import CreatePage from './components/CreatePage';
import NovelEditor from './components/NovelEditor/NovelEditor';
import CreateVoicePage from './components/CreateVoice/CreateVoicePage';
import Including_character_creation from './components/Including character creation';
import ChatNovel from './components/ChatNovel/ChatNovel';
import NovelGenerator from './components/NovelGenerator/NovelGenerator';
import PricingPage from './components/PricingPage';
import PaymentPage from './components/PaymentPage';
import CharacterDialogue from './components/CharacterDialogue/CharacterDialogue';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginCard />} />
          <Route path="/register" element={<RegisterCard />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/editor" element={<NovelEditor />} />
          <Route path="/create-voice" element={<CreateVoicePage />} />
          <Route path="/ai-novel" element={<Including_character_creation />} />
          <Route path="/chat-novel" element={<ChatNovel />} />
          <Route path="/novel-generator" element={<NovelGenerator />} />
          <Route path="/character-dialogue" element={<CharacterDialogue />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/payment" element={<PaymentPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;