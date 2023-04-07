import React, {useState, useEffect} from "react";
import Title from "../components/Title";

function filterData(searchText, allPhotos){
	const data = allPhotos.filter((item) => item?.alt_description?.toLowerCase()?.includes(searchText.toLowerCase()));
return data;
}

const Body = () => {
  const PhotoCard = ({ data }) => {
  let urls = data.urls.small;
  return (
      <img src={urls}/>
  );
};

const [searchText, setSearchText] = useState("");
const [allPhotos, setAllPhotos] = useState([]);
const [filteredPhoto, setFilteredPhoto] = useState([])

const access_key = 'nqoDuDU--EQN_KSL1pTlzHbKDmiRPSaed-ZvN714XyU';
const random_photo_url = `https://api.unsplash.com/photos/random?client_id=${access_key}&count=20`
const search_photo_url = `https://api.unsplash.com/search/photos?client_id=${access_key}&query=${searchText}$per_page=20`;

const searchImages = () => {
  fetch(search_photo_url)
  .then(res =>res.json())
  .then(data => {
    setAllPhotos([...data.results]);
}
);
}

const getImages = () => {
  fetch(random_photo_url)
  .then(res => res.json())
  .then(data => {
    setAllPhotos(data);
		setFilteredPhoto(data);
});
}

const imageSearchHandler = () =>{
  searchImages()
}

useEffect(() =>{
  console.log("Data inside the useEffect for all photos", allPhotos)
	const data = filterData(searchText, allPhotos);
	setFilteredPhoto(data)
},[allPhotos])

useEffect(() => {
getImages();
}, [])

if(!allPhotos) return null;

  return (
    <>
  <div className="header-section">
      <div className="header-content">
        <Title />
        {/* <form> */}
        <input type="text" autoComplete="off" 
              onChange={(e) => {setSearchText(e.target.value);}} 
              value={searchText} 
              name="search" 
            className="search-box" 
          placeholder="search image"/>
					<button className="search-btn" onClick={imageSearchHandler}>Search</button>
        {/* </form> */}
      </div>
    </div>

    <div className="photo-list">
      {filteredPhoto.map((photo) => {
        return <PhotoCard key={photo.id} data={photo} />;
      })}
    </div>
</>
  );
};
export default Body;