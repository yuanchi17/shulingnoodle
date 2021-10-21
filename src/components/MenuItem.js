const MenuItem = ({ item }) => (
  <li className="p-0 flex lg:flex-col">
    <img className="w-1/3 lg:w-auto" src={item.image} alt="food-iamge"></img>
    <div className="flex lg:flex-col my-auto py-2 w-2/3 lg:w-auto text-center">
      <h5 className="text-lg font-bold px-2 tracking-wider ">{ item.name }
        { item.send ? (<span className="text-xs px-2">(可宅配)</span>) : (<></>)}
      </h5>
      <p className="text-md text-yellow-600 italic font-bold my-auto ml-auto lg:mx-auto px-2 tracking-wider ">
        <span className="text-sm pr-1 font-normal">$</span>
        { item.price }
      </p>
    </div>
  </li>
)
export default MenuItem