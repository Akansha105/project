import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ArticleView from './components/ArticleView';
import CreateEditArticle from './components/CreateEditArticle';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article/:id" element={<ArticleView />} />
        <Route path="/create" element={<CreateEditArticle />} />
        <Route path="/edit/:id" element={<CreateEditArticle />} />
      </Routes>
    </Router>
  );
};

export default App;
