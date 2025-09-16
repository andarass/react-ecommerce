import { useEffect, useState } from "react";
import productsData from "../data/products";
import ProductCard from "../components/ProductCard";
import FilterBar from "../components/FilterBar";
import Cart from "../components/Cart";
import "../App.css";

export default function Home() {
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [cart, setCart] = useState([]);
  const [darkMode, setDarkMode] = useState(false); // ⬅️ state dark mode

  // load cart dari localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) setCart(JSON.parse(savedCart));

    const savedDark = localStorage.getItem("darkMode"); // ⬅️ load dark mode
    if (savedDark) setDarkMode(JSON.parse(savedDark));
  }, []);

  // simpan cart & darkmode ke localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark"); // ⬅️ tambahkan class global
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const filtered = productsData
    .filter((p) => (category ? p.category === category : true))
    .sort((a, b) => {
      if (sort === "asc") return a.price - b.price;
      if (sort === "desc") return b.price - a.price;
      return 0;
    });

  const handleAddToCart = (product) => setCart([...cart, product]);
  const handleRemove = (idx) => setCart(cart.filter((_, i) => i !== idx));

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8 flex gap-6 transition-colors">
      {/* Main Content */}
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          Product Catalog
        </h1>
        <div className="flex items-center justify-between mb-6">
          <FilterBar
            category={category}
            setCategory={setCategory}
            sort={sort}
            setSort={setSort}
          />

          {/* Dark mode toggle button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-200 dark:text-gray-200 shadow-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} onAddToCart={handleAddToCart} />
          ))}
        </div>
      </div>

      {/* Sidebar Cart */}
      <Cart cart={cart} onRemove={handleRemove} />
    </div>
  );
}
