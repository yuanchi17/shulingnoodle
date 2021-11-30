const Navbar = () => {
  return (<nav className="menu-switch w-full flex items-center justify-between flex-wrap bg-white shadow-md py-3 px-6">
    <div className="flex items-center flex-shrink-0 mr-6">
      <span className="font-semibold text-2xl tracking-tight text-yellow-500">二姐香味麵館</span>
    </div>
    <div className="block md:hidden text-yellow-500">
      <label htmlFor="menu-switch" className="flex items-center px-3 py-2 border rounded border-teal-400">
        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </label>
      <input type="checkbox" id="menu-switch"></input>
    </div>
    <div className="w-full block flex-grow md:flex md:items-center md:w-auto">
      <div className="text-sm md:flex md:ml-auto">
        <button type="button" className="block md:inline-block my-2 mr-4 text-yellow-500 hover:text-lg border-b-2 border-opacity-0 border-yellow-400">
          關於我們
        </button>
        <button type="button" className="block md:inline-block my-2 mr-4 text-yellow-500 hover:text-lg border-b-2 border-opacity-0 border-yellow-400">
          菜單介紹
        </button>
        <button type="button" className="block md:inline-block my-2 mr-4 text-yellow-500 hover:text-lg border-b-2 border-opacity-0 border-yellow-400">
          聯絡我們
        </button>
      </div>
    </div>
  </nav>)
}
// 網頁參考 https://www.ibest.com.tw/work/restaurant/
// TODO: 用CSS做開關 https://onlystp417.github.io/article/CSS%20_%E6%89%8B%E5%88%BB%E6%BC%A2%E5%A0%A1%E9%81%B8%E5%96%AE.html
export default Navbar
