import React from 'react';
import { connect } from 'react-redux';

import { getOnePixelData, removeOnePixel, updateOnePixel } from '../reducers/pixels';

import SinglePixel from '../components/SinglePixel';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => ({
  loadSinglePixel: (pixelId) => {
    dispatch(getOnePixelData(pixelId));
  },
  removePixel: (pixelId) => {
    dispatch(removeOnePixel(pixelId));
  },
  updatePixel: (pixelInfo) => {
    dispatch(updateOnePixel(pixelInfo));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SinglePixel);
