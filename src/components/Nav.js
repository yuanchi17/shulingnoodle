const Nav = ({ children }) => (
  <nav className="flex mt-4">
    <ul className="flex flex-wrap space-x-1 md:space-x-3 mx-auto">
      { children }
    </ul>
  </nav>
)


export default Nav