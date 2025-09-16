import { useLocation, useNavigate } from "react-router-dom";
import PaymentMethods from "../components/PaymentMethods";

export default function Checkout() {
  const navigate = useNavigate();
  const location = useLocation();
  const { cart = [], total = 0 } = location.state || {};

  if (cart.length === 0) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Checkout</h1>
        <p>Keranjang kosong. <button onClick={() => navigate("/")} className="text-green-600 underline">Kembali belanja</button></p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Halaman Pembayaran</h1>

      {/* Rincian Belanja */}
      <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Detail Pesanan</h2>
        <ul className="space-y-1 text-gray-700 dark:text-gray-300">
          {cart.map((item, idx) => (
            <li key={idx} className="flex justify-between">
              <span>{item.name}</span>
              <span>Rp {item.price.toLocaleString()}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex justify-between font-bold text-gray-900 dark:text-white">
          <span>Total:</span>
          <span className="text-green-600">Rp {total.toLocaleString()}</span>
        </div>
      </div>

      {/* Pilih metode pembayaran */}
      <PaymentMethods />

      <button
        onClick={() => alert("Pembayaran diproses!")}
        className="mt-6 w-full px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
      >
        Konfirmasi & Bayar
      </button>
    </div>
  );
}
