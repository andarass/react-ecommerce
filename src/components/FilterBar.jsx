export default function FilterBar({ category, setCategory, sort, setSort }) {
    return (
      <div className="flex flex-wrap items-center gap-4 bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-3 py-2 rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 shadow-sm focus:border-green-500 focus:ring-green-500 text-black dark:text-white"
        >
          <option value="">Semua Kategori</option>
          <option value="fashion">Fashion</option>
          <option value="electronics">Electronics</option>
          <option value="books">Books</option>
        </select>
  
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="px-3 py-2 rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 shadow-sm focus:border-green-500 focus:ring-green-500 text-black dark:text-white"
        >
          <option value="">Urutkan</option>
          <option value="asc">Harga: Termurah</option>
          <option value="desc">Harga: Termahal</option>
        </select>
      </div>
    );
  }
  