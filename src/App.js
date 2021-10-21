import Carousel from './components/Carousel'
import MenuItem from './components/MenuItem'
import MenuList from './components/MenuList'
import Nav from './components/Nav'
import Navbar from './components/Navbar'
import NavItem from './components/NavItem'

function App() {
  const MENU_MAP = {
    noodle: [],
    rice: [],
    other: [],
    special: [
      {
        image: 'https://i.imgur.com/mOU3yi0.jpg',
        name: '肉燥湯麵',
        price: 40,
        send: false,
      },
      {
        image: 'https://i.imgur.com/mOU3yi0.jpg',
        name: '肉燥湯麵',
        price: 40,
        send: false,
      },
      {
        image: 'https://i.imgur.com/mOU3yi0.jpg',
        name: '澎湖海菜煎蛋',
        price: 100,
        send: false,
      },
      {
        image: 'https://i.imgur.com/mOU3yi0.jpg',
        name: '手工泡菜',
        price: 150,
        send: true,
      },
      {
        image: 'https://i.imgur.com/mOU3yi0.jpg',
        name: '手工泡菜',
        price: 150,
        send: true,
      }
    ]
  }
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Carousel />
        <div className="menu-list space-y-3 px-3">
          <Nav>
            <NavItem>所有菜單</NavItem>
            <NavItem>特色</NavItem>
            <NavItem>麵類</NavItem>
            <NavItem>飯類</NavItem>
            <NavItem>小菜</NavItem>
          </Nav>
          <MenuList>
            {
              MENU_MAP.special.map(item => (<MenuItem item={item}></MenuItem>))
            }
          </MenuList>
        </div>
      </div>
    </div>
  );
}

export default App;
