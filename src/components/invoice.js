import { Link, Outlet } from 'react-router-dom';
import { getInvoices } from './data';

export default function Invoices() {
  let invoices = getInvoices();
  return (
    <main className="text-center">
      <div className="flex flex-col gap-3">
        {invoices.map((invoice) => (
          <Link
            className="bg-gray-200"
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
            target="_blank"
          >
            {invoice.name}
          </Link>
        ))}
      </div>
      <Outlet></Outlet>
    </main>
  );
}
