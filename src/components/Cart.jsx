import { useNavigate } from "react-router-dom";

export default function Cart({ cart, onRemove }) {
  const navigate = useNavigate();
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 w-72 shadow-sm dark:bg-gray-900">
      <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Keranjang</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-300">Belum ada item</p>
      ) : (
        <ul className="space-y-2">
          {cart.map((item, idx) => (
            <li key={idx} className="flex justify-between items-center">
              <span className="text-sm text-gray-700 dark:text-gray-200">{item.name}</span>
              <button
                onClick={() => onRemove(idx)}
                className="text-red-500 text-xs hover:underline"
              >
                Hapus
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4 font-semibold text-gray-900 dark:text-white flex justify-between">
        <span>Total:</span>
        <span className="text-green-600">Rp {total.toLocaleString()}</span>
      </div>
      <button
        disabled={cart.length === 0}
        onClick={() => navigate("/checkout", { state: { cart, total } })}
        className="mt-4 w-full px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:opacity-50"
      >
        Checkout
      </button>
    </div>
  );
}
