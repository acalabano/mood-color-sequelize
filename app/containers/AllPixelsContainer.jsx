// Nitpick here, and will depend on what your team decides on and linter used,
// but most JS uses 4 space tabs I believe.
// 2 space tabs is popular in like Ruby/Rails from my experience.

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
