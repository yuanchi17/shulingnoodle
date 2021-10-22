import Carousel from './components/Carousel'
import Floor from './components/Floor'
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
        image: 'https://i.imgur.com/oMecN1m.jpg',
        name: '手工泡菜',
        price: 150,
        send: true,
      },
      {
        image: 'https://i.imgur.com/oMecN1m.jpg',
        name: '手工泡菜',
        price: 150,
        send: true,
      }
    ]
  }
  return (
    <div className="App">
      <Navbar />
      <div className="container pb-5">
        <Carousel />
        <div id="intro">
          <p className="text-2xl text-center text-shadow font-bold my-5">關於二姐香味麵館</p>
          <div className="flex">
            <p className="text-center my-auto">始於 XXXX 年，位於澎湖吉貝島開創「老街香味麵館」，至 XXXX 年遷移至高雄並改名「二姐香味麵館」<br></br>看還有什麼介紹可以打上來。看還有什麼介紹可以打上來。看還有什麼介紹可以打上來。看還有什麼介紹可以打上來。看還有什麼介紹可以打上來。看還有什麼介紹可以打上來。</p>
            <img className="w-1/3 ml-5" src="https://i.imgur.com/FqtSHU4.jpg" alt="intro"></img>
          </div>
        </div>
        <div id="menu-list" className="space-y-3 px-3">
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
      <Floor />
    </div>
  );
}

export default App;
