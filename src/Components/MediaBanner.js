const MediaBanner = ({ isItemSelected, ViewItem }) => {
  return (
    <div className={isItemSelected ? "BreadCrumb" : "Banner"}>
      {isItemSelected 
      ? <div><span><h2>Home\Plates\{ViewItem.title}</h2></span></div>
      
      : <div className="BannerBox">
        <h1>Plates</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      }
    </div>
  );
};

export default MediaBanner;
