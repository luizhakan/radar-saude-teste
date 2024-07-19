import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PersonList from './pages/PersonList';
import PersonForm from './pages/PersonForm';

const App: React.FC = () => {


  return (
    <div className={`h-full flex flex-col items-center justify-center`}>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<PersonList />} />
            <Route path="/create" element={<PersonForm />} />
            <Route path="/edit/:id" element={<PersonForm />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
