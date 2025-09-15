import { useEffect, useState } from "react";
import productsData from "../data/products";
import ProductCard from "../components/ProductCard";
import FilterBar from "../components/FilterBar";
import Cart from "../components/Cart";
import "../App.css"

export default function Home() {
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [cart, setCart] = useState([]);

  // load cart dari localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  // simpan cart ke localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

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
    <div className="min-h-screen bg-gray-50 p-8 flex gap-6">
      {/* Main Content */}
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Product Catalog</h1>
        <FilterBar
          category={category}
          setCategory={setCategory}
          sort={sort}
          setSort={setSort}
        />
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
