import React from 'react';
import { connect } from 'react-redux';

import AddPixel from '../components/AddPixel';
import { addAPixel } from '../reducers/pixels';

// Any particular reason why in this mapStateToProps you don't use parenthesis around state, or dispatch?
// you do in the other files.
// I think consistency is a good habit to cultivate in terms of code hygiene.
const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  addPixel: (pixelInfo) => {
    dispatch(addAPixel(pixelInfo));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPixel);
