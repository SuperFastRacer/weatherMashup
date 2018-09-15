const API_KEY = process.env.REACT_APP_MUSIC_API_KEY;
const API_HOST = "http://ws.audioscrobbler.com/";
const API_VERSION = "2.0";
const API_METHOD = "track.search";
const API_LIMIT = "20";

const MusicApiUrl = trackName =>
  `${API_HOST}${API_VERSION}/?method=${API_METHOD}&track=${trackName}&limit=${API_LIMIT}&api_key=${API_KEY}&format=json`;

export default function getMusic(trackName) {
  return fetch(MusicApiUrl(trackName)).then(response => response.json());
}
