const Navbar = () => {
  return (<nav className="w-full flex items-center justify-between flex-wrap bg-white shadow-md py-3 px-6">
    <div className="flex items-center flex-shrink-0 mr-6">
      <span className="font-semibold text-2xl tracking-tight text-yellow-500">Title</span>
    </div>
    <div className="block lg:hidden text-yellow-500">
      <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400">
        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div className="text-sm lg:flex lg:ml-auto">
        <a href="#test" className="block lg:inline-block text-teal-200 my-2 mr-4 text-yellow-500 hover:border-opacity-75 border-b-2 border-opacity-0 border-yellow-500">
          Docs
        </a>
        <a href="#test" className="block lg:inline-block text-teal-200 my-2 mr-4 text-yellow-500 hover:border-opacity-75 border-b-2 border-opacity-0 border-yellow-500">
          Examples
        </a>
        <a href="#test" className="block lg:inline-block text-teal-200 my-2 mr-4 text-yellow-500 hover:border-opacity-75 border-b-2 border-opacity-0 border-yellow-500">
          Blog
        </a>
      </div>
    </div>
  </nav>)
}

export default Navbar
