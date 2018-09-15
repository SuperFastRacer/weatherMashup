const API_KEY = process.env.REACT_APP_BACKGROUND_API_KEY;
const API_HOST = "https://api.giphy.com/";
const API_VERSION = "v1";
const API_RATING = "G";

const BackgroundApiUrl = searchString =>
  `${API_HOST}${API_VERSION}/gifs/random?api_key=${API_KEY}&tag=${searchString}&rating=${API_RATING}`;

export default function getBackground(searchString) {
  return fetch(BackgroundApiUrl(searchString)).then(response =>
    response.json()
  );
}
