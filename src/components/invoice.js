import {
  NavLink,
  Outlet,
  useSearchParams,
  useLocation,
} from 'react-router-dom';
import { getInvoices } from './data';

export default function Invoices() {
  let invoices = getInvoices();
  let [searchParams, setSearchParams] = useSearchParams();
  let activeClassName = `text-red-400 bg-gray-200`;

  function onInputChange(event) {
    let filter = event.target.value;
    if (filter) {
      setSearchParams({ filter });
    } else {
      setSearchParams({});
    }
  }

  return (
    <main className="text-center">
      <div className="flex flex-col gap-3">
        <input
          type="text"
          className="border w-3/4 mx-auto mt-5"
          placeholder="Search Invoice"
          value={searchParams.get('filter') || ''}
          onChange={onInputChange}
        />
        {invoices
          .filter((invoice) => {
            let filter = searchParams.get('filter');
            if (!filter) return true;
            let name = invoice.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((invoice) => (
            <ResultNavLink
              className={({ isActive }) => (isActive ? activeClassName : '')}
              to={`/invoices/${invoice.number}`}
              key={invoice.number}
            >
              {invoice.name}
            </ResultNavLink>
          ))}
      </div>
      <Outlet></Outlet>
    </main>
  );
}

function ResultNavLink({ to, ...props }) {
  let location = useLocation();
  return <NavLink to={to + location.search} {...props}></NavLink>;
}
