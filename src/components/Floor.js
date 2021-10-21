const Floor = () => (
  <div id="floor" className="flex flex-col md:flex-row justify-center md:justify-around space-x-3 py-3 bg-yellow-200">
    <div className="my-auto text-center space-y-2">
      <a className="text-3xl font-blod" target="_blank" rel="noreferrer" href="https://www.facebook.com/2ndsisnoodles/?ref=page_internal">二姐香味麵館
        <i className="fa fa-facebook-official ml-2" aria-hidden="true"></i>
      </a>
      <div className="flex flex-col space-y-2">
        <a className=" mx-auto space-x-2" href="tel:0932129246">
          <i className="icon-wh fa fa-phone my-auto" aria-hidden="true"></i>
          <span>0932129246</span>
        </a>
        <a className=" mx-auto space-x-2" target="_blank" rel="noreferrer" href="https://www.google.com/maps/place/%E4%BA%8C%E5%A7%90%E9%A6%99%E5%91%B3%E9%BA%B5%E9%A4%A8/@22.6468386,120.316299,17z/data=!3m1!4b1!4m5!3m4!1s0x346e054a5b8b9b21:0xf547f7e66d60b51d!8m2!3d22.6468386!4d120.3184877">
          <i className="icon-wh fa fa-map-marker my-auto" aria-hidden="true"></i>
          <span>高雄市三民區興昌街 42-1 號 1 樓</span>
        </a>
        <div className="flex mx-auto space-x-2">
          <i className="icon-wh fa fa-calendar-o py-1" aria-hidden="true"></i>
          <ul>
            <li>10:00 ~ 14:00、17:00 ~ 20:00</li>
            <li>每週一公休</li>
          </ul>
        </div>
      </div>
    </div>
    <iframe className="hidden md:block" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.1863792184613!2d120.31629901496083!3d22.646838585144618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e054a5b8b9b21%3A0xf547f7e66d60b51d!2z5LqM5aeQ6aaZ5ZGz6bq16aSo!5e0!3m2!1szh-TW!2stw!4v1634800056444!5m2!1szh-TW!2stw" width="250" height="200"  allowFullScreen="" loading="lazy" title="map"></iframe>
  </div>
)

export default Floor