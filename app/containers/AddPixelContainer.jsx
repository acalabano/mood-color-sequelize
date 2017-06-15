import React from 'react';
import { connect } from 'react-redux';

import AddPixel from '../components/AddPixel';
import { addAPixel } from '../reducers/pixels';

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  addPixel: (pixelInfo) => {
    dispatch(addAPixel(pixelInfo));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPixel);
