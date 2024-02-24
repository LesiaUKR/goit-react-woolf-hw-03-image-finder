import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY_API = '33612698-29a0e4fa17aff9da96c8a261f';
export const PER_PAGE = 12;

export async function fetchImages(searchText, page = 1) {
  const URL = `?q=${searchText}&page=${page}&key=${KEY_API}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`;
  const response = await axios.get(URL);
  return response.data;
}
