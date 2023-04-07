import { useState, useEffect } from "react";
import Title from "./Title";

const Header = () => {
const [photo, setPhoto] = useState("");

const [result, setResult] = useState([]);

let searchParam = location.search.split('=').pop();

const access_key = 'nqoDuDU--EQN_KSL1pTlzHbKDmiRPSaed-ZvN714XyU';
const search_photo_url = "https://api.unsplash.com/search/photos?page=1&query="+photo+"&client_id="+access_key;

const searchImages = () => {
  fetch(search_photo_url)
  .then(res => res.json())
  .then(data => {
    setResult(data);
    console.log("DATAA", data)
});
}

// useEffect(() => {
// searchImages();
// }, [photo]);

const handleChange = (event) => {
setTimeout(() => {
setPhoto(event.target.value);
}, 4000)
}

  return (
    <div className="header-section">
      <div className="header-content">
        <Title />
        <form>
        <input type="text" autoComplete="off" onChange={handleChange} name="search" className="search-box" 
          placeholder="search image"/>
        <button className="search-btn" type="submit" onClick={searchImages}>Search</button>
        </form>
      </div>
    </div>
  );
};

export default Header;