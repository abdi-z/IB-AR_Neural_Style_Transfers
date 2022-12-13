import { useState } from "react";
import './App.css';
import ImageUpload from './create_post/ImageUpload';

function App() {
  const [image,setImage] = useState('');
  
  function handleOpenWidget(e){
    e.preventDefault();
    var myWidget = window.cloudinary.createUploadWidget({
        cloudName: 'dfmxbcddb', 
        uploadPreset: 'krdozupg'}, (error, result) => { 
          if (!error && result && result.event === "success") { 
            console.log(result.info.url)
            // setImages(prev => [...prev, { url: result.info.url, public_id: result.info.public_id}]); 
            setImage(result.info.url); 
          }
        }
      )
      myWidget.open();
}

const handleSubmit = async (e) => {
  e.preventDefault()

}
  return (
    <div className="App">
      <ImageUpload/>
      daisdji
      App.js
      <form className="create" onSubmit={handleSubmit}>  
        <button id='upload-widget' className='cloudinary-button' onClick={handleOpenWidget}>Upload Image</button> 
        <button>Add Recipe</button>
      </form>
      <img src={image} alt="image" />
   </div>
  );
}

export default App;
