import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Invoices from './components/invoice';
import Expenses from './components/expenses';
import Bills from './components/bills';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/invoices" element={<Invoices />}>
          <Route path=":invoiceId" element={<Bills />}></Route>
        </Route>
        <Route path="/expenses" element={<Expenses />} />
        <Route
          path="*"
          element={
            <main className="text-center">
              <p className="text-3xl">There's nothing here!</p>
            </main>
          }
        ></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
