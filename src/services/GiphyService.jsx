const GIPHY_API_KEY = 'yd5onrgbAYC1jGlPwJetb6B6QcQhR9ae';

const giphyService = {
   getRandomGif: async (tag) => {
      try {
         const apiUrl = `https://api.giphy.com/v1/gifs/random?api_key=${GIPHY_API_KEY}&tag=${tag}`;
         const response = await fetch(apiUrl);
         const data = await response.json();

         if (response.ok && data.data && data.data.url) {
            const gifUrl = data.data.url.split('?')[0];
            return gifUrl;
         } else {
            console.error('Error al obtener un gif. Respuesta de Giphy:', data);
            return null;
         }
      } catch (error) {
         console.error('Error al obtener un gif:', error);
         return null;
      }
   },
};

export default giphyService;
