import React, { useState, useEffect } from 'react';
import giphyService from './giphyService';

const GiphySelector = ({ difficultyLevel }) => {
   const [gifUrl, setGifUrl] = useState('');

   useEffect(() => {
      const fetchGif = async () => {
         if (difficultyLevel) {
            const gif = await giphyService.getRandomGif(difficultyLevel);
            if (gif) {
               setGifUrl(gif);
            }
         }
      };

      fetchGif();
   }, [difficultyLevel]);


   return (
      <div>
         {gifUrl && <img src={gifUrl} alt="Gif animado" />}
      </div>

   );
};

export default GiphySelector;
