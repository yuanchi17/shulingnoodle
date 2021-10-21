const NavItem = ({ children }) => (
  <li className=" p-2 lg:px-5 text-gray-500 text-md lg:text-lg border hover:bg-yellow-300 hover:text-white transition duration-300">
    <button type="button" className="">
      { children }
    </button>
  </li>
)


export default NavItem