import React from 'react';
import { connect } from 'react-redux';
import { getAllPixels } from '../reducers/pixels';

import AllPixels from '../components/AllPixels';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => ({
  loadPixels: () => {
    dispatch(getAllPixels());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AllPixels);
