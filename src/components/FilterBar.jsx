export default function FilterBar({ category, setCategory, sort, setSort }) {
    return (
        <div className="flex flex-wrap items-center gap-4 mb-6 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-3 py-2 rounded-lg border-gray-300 bg-white shadow-sm focus:border-green-500 focus:ring-green-500 text-black"
        >
          <option value="">Semua Kategori</option>
          <option value="fashion">Fashion</option>
          <option value="electronics">Electronics</option>
          <option value="books">Books</option>
        </select>
  
        <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="px-3 py-2 rounded-lg border-gray-300 bg-white shadow-sm focus:border-green-500 focus:ring-green-500 text-black"
        >
          <option value="">Urutkan</option>
          <option value="asc">Harga: Termurah</option>
          <option value="desc">Harga: Termahal</option>
        </select>
      </div>
    );
  }
  