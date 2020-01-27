import React, { Fragment } from 'react';
import imageSpinner from './spinner.gif';

const Spinner = () => {
  return (
    <Fragment>
      <img
        src={imageSpinner}
        alt='در حال بارگذاری...'
        style={{ width: '200px', margin: 'auto', display: 'block' }}
      />
    </Fragment>
  );
};

export default Spinner;
