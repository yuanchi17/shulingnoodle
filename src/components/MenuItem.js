const MenuItem = ({ item }) => (
  <li className="p-0 flex md:flex-col">
    <img className="w-1/3 md:w-auto" src={item.image} alt="food"></img>
    <div className="flex md:flex-col my-auto py-2 w-2/3 md:w-auto text-center">
      <h5 className="text-lg font-bold px-2 tracking-wider ">{ item.name }
        { item.send ? (<span className="text-xs px-2">(可宅配)</span>) : (<></>)}
      </h5>
      <p className="text-md text-yellow-600 italic font-bold my-auto ml-auto md:mx-auto px-2 tracking-wider ">
        <span className="text-sm pr-1 font-normal">$</span>
        { item.price }
      </p>
    </div>
  </li>
)
export default MenuItem