import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="container mx-auto">
      <nav className="bg-gray-100 flex gap-4">
        <Link to="/invoices">
          <span>Invoices</span>
        </Link>
        <Link to="/expenses">
          <span>Expenses</span>
        </Link>
      </nav>
    </div>
  );
}

export default App;
