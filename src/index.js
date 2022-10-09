import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Invoices from './components/invoice';
import Expenses from './components/expenses';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/invoices" element={<Invoices />}>
          <Route path="/invoices/123" element={<div>Bills</div>} />
        </Route>
        <Route path="/expenses" element={<Expenses />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
