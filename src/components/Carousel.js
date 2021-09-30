const Carousel = () => {
  return (<div className="container">
    <div id="carouselControls" className="carousel slide mt-1" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselControls" data-slide-to="0" className="active"></li>
        <li data-target="#carouselControls" data-slide-to="1"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="w-100 h-96" src="https://dogcatstar.atomcdn.com/2017/03/30/32602/fantasticcat-01P-2-510x510.jpg" alt="first"></img>
          <div className="carousel-caption">
            <h5 className="title block text-4xl p-2 text-black">標題1</h5>
            <span className="text px-6 text-sm text-black">內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文</span>
          </div>
        </div>
        <div className="carousel-item">
          <img className="w-100 h-96" src="https://dogcatstar.atomcdn.com/2017/03/16/31215/hairball_relief_digestive_aid-01P-510x510.jpg" alt="second"></img>
          <div className="carousel-caption">
            <h5 className="title block text-4xl p-2 text-black">標題2</h5>
            <span className="text px-6 text-sm text-black">內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文</span>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  </div>)
}

export default Carousel
