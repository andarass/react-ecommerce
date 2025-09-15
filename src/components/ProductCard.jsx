export default function ProductCard({ product, onAddToCart }) {
    return (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 flex flex-col justify-between hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
        <p className="text-sm text-gray-500 capitalize">{product.category}</p>
        <p className="text-green-600 font-bold mt-2">Rp {product.price.toLocaleString()}</p>
        <button
          onClick={() => onAddToCart(product)}
          className="mt-4 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          Tambah ke Cart
        </button>
      </div>
    );
  }
  