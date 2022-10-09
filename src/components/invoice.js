import { NavLink, Outlet } from 'react-router-dom';
import { getInvoices } from './data';

export default function Invoices() {
  let invoices = getInvoices();
  let activeClassName = `text-red-400 bg-gray-200`;
  return (
    <main className="text-center">
      <div className="flex flex-col gap-3">
        {invoices.map((invoice) => (
          <NavLink
            className={({ isActive }) => (isActive ? activeClassName : '')}
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </NavLink>
        ))}
      </div>
      <Outlet></Outlet>
    </main>
  );
}
