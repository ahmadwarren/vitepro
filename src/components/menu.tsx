

export default function Menu() {
  return <>
  <header className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent">
    <nav className=" bg-gray-800 p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        <img src="./terama.png" alt="Logo" className="h-8 mr-2" />
        <span className="text-white font-bold text-lg">Teramax</span>
      </div>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search"
        className="px-4 py-2 rounded-lg w-60 bg-gray-700 text-white focus:outline-none focus:bg-gray-600"
      />

      {/* Menu Items */}
      <ul className="flex gap-3">
        <li className="text-white">Home</li>
        <li className="text-white">About</li>
        <li className="text-white">Services</li>
        <li className="text-white">Contact</li>
      </ul>

      {/* Sign Up/Sign In Button */}
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
        Sign Up / Sign In
      </button>
    </nav>
  </header>
  </>
}
