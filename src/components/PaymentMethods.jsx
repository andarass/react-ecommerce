import { useState } from "react";

export default function PaymentMethods() {
  const [method, setMethod] = useState("");

  const methods = [
    { id: "gopay", name: "GoPay" },
    { id: "ovo", name: "OVO" },
    { id: "dana", name: "DANA" },
    { id: "bank", name: "Transfer Bank" },
    { id: "cod", name: "COD (Bayar di Tempat)" },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Metode Pembayaran</h2>
      <div className="space-y-2">
        {methods.map((m) => (
          <label
            key={m.id}
            className={`flex items-center gap-2 p-2 border rounded-lg cursor-pointer transition ${
              method === m.id
                ? "border-green-600 bg-green-50 dark:bg-green-900"
                : "border-gray-300"
            }`}
          >
            <input
              type="radio"
              name="payment"
              value={m.id}
              checked={method === m.id}
              onChange={() => setMethod(m.id)}
              className="text-green-600"
            />
            <span className="text-gray-800 dark:text-gray-200">{m.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
