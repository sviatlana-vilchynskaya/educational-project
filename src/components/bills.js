import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { getInvoice, deleteInvoice } from './data';

export default function Bills() {
  let params = useParams();
  let navigate = useNavigate();
  let location = useLocation();
  let invoice = getInvoice(parseInt(params.invoiceId));
  return (
    <main className="flex flex-col py-5 border my-4">
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}:{invoice.number}
      </p>
      <p>Due Date : {invoice.due}</p>
      <button
        onClick={() => {
          deleteInvoice(invoice.number);
          navigate('/invoices' + location.search);
        }}
      >
        Delete
      </button>
    </main>
  );
}
