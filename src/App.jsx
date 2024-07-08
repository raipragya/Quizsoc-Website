// App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Body from '../components/Body';
import Footer from '../components/Footer';
import Quizroom from '../components/Quizroom';

function App() {
  return (
    <Router>
      <div>

        {/* Body and Footer are conditional based on route */}
        <Routes>
          <Route path="/quizroom/*" element={<QuizroomLayout />} />
          <Route path="/" element={<DefaultLayout />} />
        </Routes>

        {/* Footer always rendered */}
        
      </div>
    </Router>
  );
}

// Example component for Quizroom route layout
const QuizroomLayout = () => (
  <div>
    <Quizroom />
  </div>
);

// Example component for default layout
const DefaultLayout = () => (
  <div>
    <NavBar/>
    <Body />
    <Footer/>
    {/* Add other components as needed */}
  </div>
);

export default App;
