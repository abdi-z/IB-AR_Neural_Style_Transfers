import { useState } from "react";
import './App.css';

function App() {
  
  const [imageURL,setImageURL] = useState('');

  function handleOpenWidget(e){
    e.preventDefault();
    var myWidget = window.cloudinary.createUploadWidget({
        cloudName: 'dfmxbcddb', 
        uploadPreset: 'krdozupg'}, (error, result) => { 
          if (!error && result && result.event === "success") { 
            //console.log(result.info.url)
            // setImages(prev => [...prev, { url: result.info.url, public_id: result.info.public_id}]); 
            setImageURL(result.info.url); 
          }
        }
      )
      myWidget.open();
}

const handleSubmit = () => {
 setImageURL()
}

  return (
    <div className="App">
      Lorem, ipsum dolor.
      <form className="create" onSubmit={handleSubmit}>
            
             <button id='upload-widget' className='cloudinary-button' onClick={handleOpenWidget}>Upload Image</button> 
             <button>Add Image</button>
            
        </form>
        <img src={imageURL} alt="imageURL" />
        
    </div>
  );
}

export default App;
