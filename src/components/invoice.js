import { Outlet } from 'react-router-dom';

export default function Invoices() {
  return (
    <div className="text-center">
      <h1>Invoices</h1>
      <Outlet></Outlet>
    </div>
  );
}
