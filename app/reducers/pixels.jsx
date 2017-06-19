import axios from 'axios';

let initialState = {
  pixels: [],
  pixelId: '',
  pixelColor: "#rrggbb",
  pixelDay:'',
  pixelContent:''
};

/* --- actions --- */
const GET_PIXELS = 'GET_PIXELS';
const GET_PIXEL_DATA = 'GET_PIXEL_DATA';
const REMOVE_PIXEL = 'REMOVE_PIXEL';
const SET_PIXEL = 'SET_PIXEL';
const UPDATE_PIXEL = 'UPDATE_PIXEL';


/* --- action creators --- */
export const getPixels = (pixels) => ({
  type: GET_PIXELS,
  pixels
});

export const getPixelData = (data) => ({
  type: GET_PIXEL_DATA,
  pixelId: data[0].id,
  pixelColor: data[0].color,
  pixelDay: data[0].day,
  pixelContent: data[0].content
});

export const removePixel = (id) => ({
  type: REMOVE_PIXEL,
  id
});

export const addPixel = (pixelInfo) => ({
  type: SET_PIXEL,
  pixelInfo
});

export const updatePixel = (pixelInfo) => ({
  type: UPDATE_PIXEL,
  pixelInfo
});


/* --- dispatchers --- */
export const getAllPixels =  () =>
{
  return dispatch => {
    axios.get('/api/pixels')
    .then(res => res.data)
    .then(res => dispatch(getPixels(res)))
    .catch(err => console.error(err));
  };
};

export const getOnePixelData = (pixelId) =>
{
  return dispatch => {
    axios.get(`/api/pixel/${pixelId}`)
    .then(res => res.data)
    .then(res => dispatch(getPixelData(res)))
    .catch(err => console.error(err));
  };
};

export const removeOnePixel = (pixelId) =>
{
  return dispatch => {
    dispatch(removePixel(pixelId));
    axios.delete(`/api/pixel/${pixelId}`)
    .catch(err => console.error(`Oops. Unable to remove pixel with id: ${pixelId}`, err));
  };
};

export const addAPixel = (pixelInfo) =>
{
  return dispatch => {
    axios.post('/api/pixels', pixelInfo)
    .then(res => res.data)
    .then(pixel => dispatch(addPixel(pixel)))
    .catch(err => console.error('there was a problem adding a pixel', err));
  };
};

export const updateOnePixel = (pixelInfo) =>
{
  return dispatch => {
    axios.put(`/api/pixel/${pixelInfo.id}`, pixelInfo)
    .then(res => res.data)
    .then(pixel => dispatch(updatePixel(pixel)))
    .catch(err => console.error('there was a problem updating the pixel info', err));
  };
};

/* --- reducer --- */
export default function reducer(state = initialState, action){
  const newState = Object.assign({}, state);

  switch (action.type) {
    case GET_PIXELS:
      newState.pixels = action.pixels;
      break;

    case GET_PIXEL_DATA:
    newState.pixelColor = action.pixelColor;
    newState.pixelDay = action.pixelDay;
    newState.pixelContent = action.pixelContent;
    newState.pixelId = action.pixelId;
    break;

    case REMOVE_PIXEL:
    newState.pixels = newState.pixels.filter(pixel => pixel.id !== action.id);
    break;

    case SET_PIXEL:
    newState.pixels = newState.pixels.concat(action.pixelInfo);
    break;

    case UPDATE_PIXEL:
    newState.pixelColor = action.pixelInfo.color;
    newState.pixelDay = action.pixelInfo.day;
    newState.pixelContent = action.pixelInfo.content;
    break;

    default:
      return state;
  }

  return newState;
}
