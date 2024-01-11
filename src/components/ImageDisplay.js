// ImageDisplay.jsx
import React from 'react';

const ImageDisplay = () => {
  const publicImagePath = process.env.PUBLIC_URL + '/assets/images/meme1.jpg';
  const srcImagePath = require('../assets/images/meme3.jpg');

  return (
    <div>
      <h2>Image from /public/assets/images/</h2>
      <img src={publicImagePath} alt="Meme1" />

      <h2>Image from /src/assets/images/</h2>
      <img src={srcImagePath} alt="Meme3" />
    </div>
  );
};

export default ImageDisplay;
