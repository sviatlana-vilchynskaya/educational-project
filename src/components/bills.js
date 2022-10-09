import { useParams } from 'react-router-dom';
import { getInvoice } from './data';

export default function Bills() {
  let params = useParams();
  let invoice = getInvoice(parseInt(params.invoiceId));
  return (
    <main className="flex flex-col py-5 border my-4">
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}:{invoice.number}
      </p>
      <p>Due Date : {invoice.due}</p>
    </main>
  );
}
