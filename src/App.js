import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import MovieList from './components/MovieList';
import UserList from './components/UserList';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<MovieList />} />
        <Route path="/users" element={<UserList />} />
      </Routes>
    </Router>
  );
};

export default App;
